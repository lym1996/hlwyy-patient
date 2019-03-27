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
    },]
}]

export {
     routes
}