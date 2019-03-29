const lazyload = (name) => (resolve) => require([`@/page/${name}`], resolve)
const routes = [{
    path:'/',
    redirect:'/index',
    component: lazyload('index'),
    children: [{
        path: 'home',
        name: 'home',
        component: lazyload('home'),
        meta: { title:'首页'}
    }, {
        path: 'findDoc',
        name: 'findDoc',
        component: lazyload('findDoc'),
        meta: {title:'找医生'}
    }, {
        path: 'findDept',
        name: 'findDept',
        component: lazyload('findDept'),
        meta: {title:'找科室'}
    }, {
        path: 'helpnavlist',
        name: 'helpnavlist',
        component: lazyload('helpnavlist'),
        meta: {title:'帮助中心'}
    }, {
        path: 'personCenter',
        name: 'personCenter',
        component: lazyload('personCenter'),
        meta: {title:'个人中心'},
        children:[{
            path:'menRecord',
            name:'menRecord',
            component:lazyload('menRecord'),
            meta:{title:'预约列表'}
        },{
            path:'patientList',
            name:'patient',
            component:lazyload('patient'),
            meta:{title:'就诊人列表'} 
        },{
            path:'changePwd',
            name:'changePwd',
            component:lazyload('changePwd'),
            meta:{title:'修改密码'}
        }]
    },{
        path: 'fillInfor',
        name: 'fillInfor',
        component: lazyload('fillInfor'),
        meta: {title:'填写信息'}
    },{
        path: 'pay',
        name: 'pay',
        component: lazyload('pay'),
        meta: {title:'支付'} 
    }]
}]

export {
     routes
}