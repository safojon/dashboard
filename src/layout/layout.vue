<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/navigation/index.vue"
</script>

<template>
    <div class="main">
        <div>
            <Navbar />
        </div>
        <div>
            <RouterView />
        </div>
    </div>
</template>

<style scoped>
.main{
    display: flex;
}
</style>