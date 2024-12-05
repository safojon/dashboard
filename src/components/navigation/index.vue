<script setup>
import { useRoute } from "vue-router";
import Logo from '@/../public/navbar/logo.png'
import { navLinks } from "@/constants/index";

const route = useRoute();
</script>

<template>
    <main>
        <div class="navbar">
            <div class="img">
                <img :src="Logo" class="img">
            </div>
            <div class="buttons">
                <div v-for="(navLink, index) in navLinks" :key="index">
                    <RouterLink :to="navLink.path" exact-active-class="active" class="nav-link">
                        <button>
                            <svg style="stroke: white"
                                v-if="navLink.icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                v-html="route.path === navLink.path ? navLink.icon.active : navLink.icon.deactive"
                            ></svg>
                            {{ navLink.name }}
                        </button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:wght@400;600&display=swap");

.navbar{
    padding-top: 36px;
    padding-left: 28px;
    padding-right: 28px;
    height: 1198px;
    display: flex;
    flex-direction: column;
    gap: 64px;
    background-color: rgba(255, 255, 255, 1);
}

.nav-link{
    text-decoration: none;
}

button{
    width: 250px;
    height: 46px;
    text-align: start;
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    border: none;
    color: rgba(145, 151, 179, 1);   
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    padding-left: 11px;
    gap: 14px;
}

.active{
    button{
        background-color: rgba(89, 50, 234, 1);
        color: white;
    }
}

.buttons{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

main{
    width: 306px;
    height: 1198px;
}
</style>