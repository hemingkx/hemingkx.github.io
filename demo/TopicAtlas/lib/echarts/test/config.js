require.config({
    paths: {
        'geoJson': 'lib/echarts/geoData/geoJson',
        'theme': 'lib/echarts/theme',
        'data': 'lib/echarts/test/data',
        'map': 'lib/echarts/map',
        'extension': 'lib/echarts/extension'
    },
    packages: [
        {
            main: 'echarts',
            location: 'lib/echarts/src',
            name: 'echarts'
        },
        {
            main: 'zrender',
            location: 'lib/zrender/src',
            name: 'zrender'
        }
    ]
    // urlArgs: '_v_=' + +new Date()
});