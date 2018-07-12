module.exports = {
    sidebar: [{
            icon: 'el-icon-setting',
            index: 'module',
            title: '表格模板'
        }
    ],
    routes: [{
            path: '/',
            redirect: '/module'
        },
        {
            path: '/',
            component: resolve => require(['../../../components/common/Home.vue'], resolve),
            meta: { title: '表格模板' },
            children: [{
                    path: '/module',
                    component: resolve => require(['./views/BaseTable.vue'], resolve),
                    meta: { title: '表格模板' }
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['./views/Login.vue'], resolve)
        },
        {
            path: '/404',
            component: resolve => require(['./views/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['./views/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ],
    proxy: {
        '/api': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            pathRewrite: {
                '/api': ''
            }
        },
        '/ms': {
            target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
            changeOrigin: true
        },
        '/Admin': {
            target: 'https://beta-smallrihuayuan.keywa.com',
            changeOrigin: true
        }
    },
    domain: 'https://beta-smallrihuayuan.keywa.com'
}