exports.config = {
    capabilities: {
        'browserName': 'chrome'
    },
    baseUrl: 'https://172.17.1.230/admin/',
    framework: 'custom',
    frameworkPath: 'C:/Users/.../AppData/Roaming/npm/node_modules/protractor-cucumber-framework',
    cucumberOpts: {
        require: ["example/features/step_definitions/homepage/steps.js"],
        format: "summary"
    },
    specs: ['example/features/*.feature'],
};