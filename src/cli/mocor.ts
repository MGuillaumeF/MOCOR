#!/usr/bin/env node

import path from "path";
import fs from "fs";
import { analyze } from "./analyzer";

if (require.main === module) {
  console.debug(" ------ HELLO MOCOR CMD ------");
  if (process.argv.includes("-h") || process.argv.includes("--help")) {
    console.info(
      fs.readFileSync(path.resolve(__dirname, "README.md")).toString()
    );
    process.exit(0);
  } else {
    const [nodePath, mocorPath, order, ...cliArgs] = process.argv;
    console.debug("node cmd path :", nodePath);
    console.debug("mocor cmd path :", mocorPath);
    console.debug("order :", order);
    console.debug("[args] :", ...cliArgs);

    if (order === "analyze") {
      if (cliArgs.length > 1) {
        try {
          analyze(cliArgs[0], cliArgs[1]);
        } catch (error: any) {
          console.error("[ERROR] Analyze failed : ", Error(error));
          process.exitCode = 1;
        }
      }
    } else {
      console.info(
        fs.readFileSync(path.resolve(__dirname, "README.md")).toString()
      );
      process.exitCode = 1;
    }
  }
} else {
  console.debug(" ------ HELLO MOCOR DEPENDENCE ------ ");
}

const utils = { analyze };

export default utils;
