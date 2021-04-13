/* eslint-disable @typescript-eslint/no-var-requires */

const { ESLint } = require('eslint');
const path = require('path');
const stylelint = require('stylelint');
const fs = require('fs').promises;

async function lintCSS () {
   const results = await stylelint.lint({fix : true, configBasedir : path.resolve(__dirname, '..', '..'), files : path.resolve(__dirname, '..', '..', '**/*.{css,scss,sass}'), formatter : 'json'})
     return  JSON.parse(results.output)
}
async function lintTS () {
    const esLint = new ESLint({
        fix : true,
        ignorePath : path.resolve(__dirname, '..', '..', '.gitignore'),
        overrideConfigFile : path.resolve(__dirname, '..', '..', '.eslintrc.js'),
    });
    const results = await esLint.lintFiles(path.resolve(__dirname, '..', '..', '.'))

    await ESLint.outputFixes(results);

    const formatter = await esLint.loadFormatter('json')
    const resultText = formatter.format(results)
    return JSON.parse(resultText)
}


(async function main(){
    const results = {
        css : await lintCSS(),
        ts : await lintTS(),
    }
    const deprecatedRules  = []
    const wantedRules = []
    const sources = {}

    for (const codeSmells of results.ts) {
        if (!sources[codeSmells.filePath]) {
            sources[codeSmells.filePath] = 1;
        } else {
            sources[codeSmells.filePath] += 1;

        }
        if (codeSmells.usedDeprecatedRules.length > 0) {
            for (const rule of codeSmells.usedDeprecatedRules) {

                if (!deprecatedRules.includes(rule.ruleId)) {
                    deprecatedRules.push(rule.ruleId)
                    for (const newRule of rule.replacedBy) {
                        
                        if (!wantedRules.includes(newRule)) {
                            
                            wantedRules.push(newRule)
                }
                    }
                }
            }
        }
    }


    console.log(results.css.length, results.ts.length,)
    console.log(deprecatedRules, wantedRules)
    console.log(JSON.stringify(sources, null, 4))
    fs.writeFile(path.resolve(__dirname, '..', '..', 'dist', 'reports', 'lint', 'merged-report.json'), JSON.stringify(results, null, 4));
})().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


