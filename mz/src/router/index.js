import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/container/index'
import Film from '@/components/container/film/film'
import detail from '@/components/container/detail/detail'
import login from '@/components/users/login'


Vue.use(Router)

export default new Router({
  routes: [{
  	path:'/',
  	name:'index',
  	component:Index
  },{
  	path:'/index',
  	name:'index',
  	component:Index
  },{
  	path:'/film',
  	name:'film',
  	component:Film
  },{
    path:'/login',
    name:'login',
    component:login
  },{
    path:'/detail/:id',
    name:'detail',
    component:detail,
    props:true,
    meta:{
      login:true
    }
  }]
})
