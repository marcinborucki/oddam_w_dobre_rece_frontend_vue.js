import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../components/LandingPage";
import Form from "../components/Form";
Vue.use(VueRouter);
export default new VueRouter({
routes: [{
        path:"/form",
        component: Form
},
{
        path:"/",
        component: LandingPage
}
]
})
