export enum ELintSeverityLevel {
    MINOR,
    MAJOR,
    CRITICAL,
    FATAL
}
export enum ELintFileType{
    CSS,
    JAVASCRIPT,
    JAVASCRIPT_REACT,
    SASS,
    SCSS,
    TYPESCRIPT,
    TYPESCRIPT_REACT,
}

export interface ILintSmell {
    column : number;
    endColumn? : number;
    endLine? : number;
    line : number;
    message? : string;
    nodeType : string;
    ruleLink : ILintRule;
}

export interface ILintRule {
    id : string;
    message : string;
    severity : ELintSeverityLevel;
}

export interface IFileAnalyzed {
    coverage : {
        brancheCoverage : number ,
        //data : any,
        functionCoverage : number ,
        lineCoverage  : number 
    },
    critical : ILintRule[],
    fatal : ILintRule[],
    filePath : string;
    fileType: ELintFileType;
    languageFamilly : 'STYLE' | 'SCRIPT' | 'MARKUP';
    major : [ILintRule],
    minor : ILintRule[]
}

export interface IDeprecatedRule {
    deprecatedId : string;
    newRuleIds : string[]
}

export enum ELintNote {
    A,B,C,D,E,F
}


export interface ILintReport {
    author : string;
    date : Date;
    deprecatedRules : IDeprecatedRule[],
    files : IFileAnalyzed[],
    name : string;
    processedData : {
        
        critical : number;
        fatal : number;
        major : number;
        minor : number;
        note : ELintNote;
    }
    
}