export class executionSPModel {
    projectname = "";
    mainGitAnalysis = true;
    mainCiceroAnalysis = true;
    mainSonarAnalysis = true;
    productivityjob = true;
    sonarETL = true;
    analytics = true;
    prepareMainStatus = true;
    combineCeicroModelsOfall = true;
    last_run_mga_date = Date;
    last_run_mca_date = Date;
    last_run_msa_date = Date;
    last_run_pj_date = Date;
    last_run_setl_date = Date;
    last_run_analytics_date = Date;
    last_run_pms_date = Date;
    last_run_ccmoa_date = Date;


    constructor(param) {
        param = param ? param : {};

        this.projectname = param.projectname;
        this.mainGitAnalysis = param.mainGitAnalysis;
        this.mainCiceroAnalysis = param.mainCiceroAnalysis;
        this.mainSonarAnalysis = param.mainSonarAnalysis;
        this.productivityjob = param.productivityjob;
        this.sonarETL = param.sonarETL;
        this.analytics = param.analytics;
        this.prepareMainStatus = param.prepareMainStatus;
        this.combineCeicroModelsOfall = param.combineCeicroModelsOfall;
        this.last_run_mga_date = param.last_run_mga_date;
        this.last_run_mca_date = param.last_run_mca_date;
        this.last_run_msa_date = param.last_run_msa_date;
        this.last_run_pj_date = param.last_run_pj_date;
        this.last_run_setl_date = param.last_run_setl_date;
        this.last_run_analytics_date = param.last_run_analytics_date;
        this.last_run_pms_date = param.last_run_pms_date;
        this.last_run_ccmoa_date = param.last_run_ccmoa_date;
    }

}
