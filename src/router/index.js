import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import SignIn from "../views/SignIn.vue";
import Employees from "../views/EmployeesList.vue";


const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/sign-in",
        name: "SignIn",
        component: SignIn,
    },
    {
        path: "/employees",
        name: "Employees",
        component: Employees,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
})

export default router;

