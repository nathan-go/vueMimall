module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'https://baidu.com',
                changeOrigin: true,
                pathRewrite: {
                    '/api': '',
                },
            },
        },
    },
};
