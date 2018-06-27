import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import headerView from "@/components/view/headerView";
import contentView from "@/components/view/contentView";
import footerView from "@/components/view/footerView";
import indexTicket from "@/components/mainview/indexTicket";
import indexCard from "@/components/mainview/indexCard";
import indexNunu from "@/components/mainview/indexNunu";
import indexTiger from "@/components/mainview/indexTiger";
import indexAdd from "@/components/mainview/indexAdd"
import indexChange from "@/components/mainview/indexChange"

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/indexTicket',
      name: 'indexTicket',
      component: indexTicket
    },
    {
      path: '/indexCard',
      name: 'indexCard',
      component: indexCard
    }, {
      path: '/indexNunu',
      name: 'indexNunu',
      component: indexNunu
    }, {
      path: '/indexTiger',
      name: 'indexTiger',
      component: indexTiger
    }, {
      path: '/home',
      name: 'home',
      // component:home
    },
    {
      path: '/indexAdd',
      name: 'indexAdd',
      component:indexAdd
    },{
      path: '/indexChange',
      name: 'indexChange',
      component:indexChange
    },{
      path: '/support',
      name: 'support',
      // component:support
    },
  ]
})
