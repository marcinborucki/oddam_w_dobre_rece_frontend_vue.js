import Vue from "vue"
import Router from "vue-router"
import Form from '@/components/Form'
import FormEnd from '@/components/FormEnd'
import LandingPage from '@/components/LandingPage'
Vue.use(Router)
export default new Router({
routes: [{
        path:"/form",
        name: 'Form',
        component: Form
},
{
        path:"/",
        name:'LandingPage',
        component: LandingPage
},
{
        path:"/form-confirmation",
        name:'FormEnd',
        component: FormEnd
}
]
})
