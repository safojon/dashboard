import { createRouter, createWebHistory } from "vue-router";

import Layout from "@/layout/layout.vue";
import Home from "@/views/home/index.vue";
import Product from "@/views/product/index.vue";
import Customers from "@/views/customers/index.vue";
import Income from "@/views/income/index.vue";

const routes = [
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "",
                name: "Home",
                component: Home,
            },
            {
                path: "product",
                name: "Product",
                component: Product,
            },
            {
                path: "customers",
                name: "Customers",
                component: Customers,
            },
            {
                path: "income",
                name: "Income",
                component: Income,
            }
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router






