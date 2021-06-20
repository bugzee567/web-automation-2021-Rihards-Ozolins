const baseConfig = require('./wdio.base.conf')
const merge = require('deepmerge')

const chromeOptions = {
    args: [
        '--use-fake-ui-for-media-stream',
        '--use-fake-device-for-media-stream'
    ]
}



exports.config = merge(baseConfig.config, {
    maxInstances: 3,
    capabilities: {
        user1: {
            capabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': chromeOptions
            }
        },
        user2: {
            capabilities: {
                browserName: 'firefox',
                'goog:chromeOptions': chromeOptions
            }
        }
    }
})
