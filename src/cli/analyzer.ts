import { promises as fs } from "fs";
import path from "path";
import stylelint from "stylelint";
import { ESLint } from "eslint";
import { getTree } from "./filesystem-utils/tree";

async function lintCSS(): Promise<stylelint.LintResult[]> {
  const styleLintResults = await stylelint.lint({
    fix: true,
    configBasedir: process.cwd(),
    files: path.resolve(process.cwd(), "**/*.{css,scss,sass}"),
    formatter: "json"
  });
  if (styleLintResults.errored) {
    console.error("ERROR", "stylelint raised an error");
  }
  return styleLintResults.results;
}
async function lintTS(): Promise<ESLint.LintResult[]> {
  const esLint = new ESLint({
    fix: true,
    ignorePath: path.resolve(process.cwd(), ".gitignore"),
    overrideConfigFile: path.resolve(process.cwd(), ".eslintrc.js")
  });
  const results = await esLint.lintFiles(path.resolve(process.cwd()));

  await ESLint.outputFixes(results);

  // const formatter = await esLint.loadFormatter('json')
  // const resultText = formatter.format(results)
  // return JSON.parse(resultText)
  return results;
}

export async function analyze(sources: string, output: string): Promise<void> {
  const absSources = path.resolve(process.cwd(), sources);
  const absDest = path.resolve(process.cwd(), output);
  console.debug("input path", absSources);
  console.debug("output path", absDest);
  const arbo = await getTree(absSources);
  fs.writeFile(absDest, JSON.stringify(arbo, null, 4));

  const results = {
    css: await lintCSS(),
    ts: await lintTS()
  };
  const cssDepreactions: string[] = [];
  results.css.forEach((codeSmell: stylelint.LintResult) => {
    codeSmell.deprecations.forEach((deprecation) => {
      if (cssDepreactions.indexOf(deprecation) === -1) {
        cssDepreactions.push(deprecation);
      }
    });
    // console.warn('sources', codeSmell.source);

    codeSmell.warnings.forEach((warning: stylelint.Warning) => {
      //warning.text
    });
  });
  const deprecatedRules: string[] = [];
  const wantedRules: string[] = [];
  const sourcesQunatity = new Map<string, number>();

  for (const codeSmells of results.ts) {
    const src = sourcesQunatity.get(codeSmells.filePath);
    if (src === undefined) {
      sourcesQunatity.set(codeSmells.filePath, 1);
    } else {
      sourcesQunatity.set(codeSmells.filePath, src + 1);
    }
    if (codeSmells.usedDeprecatedRules.length > 0) {
      for (const rule of codeSmells.usedDeprecatedRules) {
        if (!deprecatedRules.includes(rule.ruleId)) {
          deprecatedRules.push(rule.ruleId);
          for (const newRule of rule.replacedBy) {
            if (!wantedRules.includes(newRule)) {
              wantedRules.push(newRule);
            }
          }
        }
      }
    }
  }

  console.log(results.css.length, results.ts.length);
  console.log(deprecatedRules, wantedRules);
  console.log(JSON.stringify(sources, null, 4));
  fs.writeFile(
    path.resolve(
      process.cwd(),
      "dist",
      "reports",
      "lint",
      "merged-report.json"
    ),
    JSON.stringify(results, null, 4)
  );
}
