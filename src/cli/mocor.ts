#!/usr/bin/env node

import { analyze } from "./analyzer";

if (require.main === module ) {
    console.log('HELLO MOCOR CMD');
    analyze().catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });
} else {
    console.log('HELLO MOCOR DEPENDENCE')
}

const utils = {analyze}

export default utils;