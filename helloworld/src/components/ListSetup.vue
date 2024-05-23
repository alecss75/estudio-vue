<template>
    <div class="container">
        <!--                                             |-> v-bind de titulo y también de content  |-> Esto es un evento personalizado, recibe la información del hijo    -->
        <DetailSetup v-for="elm in info" :key="elm.title" :title="elm.title" :content="elm.content" @sayHi="showAlert" />
    </div>          
</template>

<script lang="ts" setup>
import DetailSetup from './DetailSetup.vue'

interface Post {
    title: string,
    content: string
}

let info: Array<Post> = [
    {
        title: "Post 1",
        content: "Texto de ejemplo 1"
    },
    {
        title: "Post 2",
        content: "Texto de ejemplo 2"
    },
    {
        title: "Post 3",
        content: "Texto de ejemplo 3"
    },
    {
        title: "Post 4",
        content: "Texto de ejemplo 4"
    },
    {
        title: "Post 5",
        content: "Texto de ejemplo 5"
    }
]
function showAlert(message: string) {
    // Al recibir la información del hijo, y hacer uso de la 
    alert(message)
}
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;

}
</style>