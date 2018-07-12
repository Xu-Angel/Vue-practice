module.exports = {
    sidebar: [{
            icon: 'el-icon-setting',
            index: 'dashboard',
            title: '系统首页'
        },
        {
            icon: 'el-icon-tickets',
            index: 'table',
            title: '基础表格'
        },
        {
            icon: 'el-icon-message',
            index: 'tabs',
            title: 'tab选项卡'
        },
        {
            icon: 'el-icon-date',
            index: '3',
            title: '表单相关',
            subs: [{
                    index: 'form',
                    title: '基本表单'
                },
                {
                    index: 'editor',
                    title: '富文本编辑器'
                },
                {
                    index: 'markdown',
                    title: 'markdown编辑器'
                },
                {
                    index: 'upload',
                    title: '文件上传'
                }
            ]
        },
        {
            icon: 'el-icon-star-on',
            index: 'charts',
            title: 'schart图表'
        },
        {
            icon: 'el-icon-rank',
            index: 'drag',
            title: '拖拽列表'
        },
        {
            icon: 'el-icon-warning',
            index: 'permission',
            title: '权限测试'
        },
        {
            icon: 'el-icon-error',
            index: '404',
            title: '404页面'
        }
    ],
    routes: [{
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../../../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children: [{
                    path: '/dashboard',
                    component: resolve => require(['./views/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/table',
                    component: resolve => require(['./views/BaseTable.vue'], resolve),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tabs',
                    component: resolve => require(['./views/Tabs.vue'], resolve),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: resolve => require(['./views/BaseForm.vue'], resolve),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: resolve => require(['./views/VueEditor.vue'], resolve),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: resolve => require(['./views/Markdown.vue'], resolve),
                    meta: { title: 'markdown编辑器' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: resolve => require(['./views/Upload.vue'], resolve),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['./views/BaseCharts.vue'], resolve),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: resolve => require(['./views/DragList.vue'], resolve),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['./views/Permission.vue'], resolve),
                    meta: { title: '权限测试', permission: true }
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
        }
    }
}