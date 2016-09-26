exports.config = {
    capabilities: {
        'browserName': 'chrome'
    },
    baseUrl: 'https://172.17.1.230/admin/',
    framework: 'custom',
    frameworkPath: 'C:/Users/dlammers/AppData/Roaming/npm/node_modules/protractor-cucumber-framework',
    cucumberOpts: {
        format: "pretty",
        tags: "~@ignore"
    }
};