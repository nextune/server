const path = require('path');
const jsConf = require('./jsconfig.json');

module.exports = {
    presets: ['@babel/preset-env'],
    plugins: [
        [
            'module-resolver',
            {
                root: [path.resolve(jsConf.compilerOptions.baseUrl)],
            },
        ],
    ],
};