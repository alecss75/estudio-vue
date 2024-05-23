<template>
    <div class="post">
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
        <!--       Se bindea la información en "message" y se envía al script    -->
        <input type="text" v-model="message" />
        <button @click="handleClick">Di hola</button>
    </div>
</template>

<script lang="ts" setup>

import { defineProps, defineEmits, Ref, ref } from 'vue';

const props = defineProps({
    title: String,
    content: String
})

const emit = defineEmits(["sayHi"])

const handleClick = () => {
    // Se emite un evento (sayHi) y se pasan los parámetros (message.value) al hacer click
    emit("sayHi", message.value)
}
//Aquí recibe la referencia del input para enviarlo al evento handleClick
let message: Ref<string> = ref("")

</script>

<style scoped>
.post {
    width: 300px;
    height: 200px;
    background-color: antiquewhite;
    border-radius: 10px;
    margin: 10px;
    padding: 0px 1rem 0px 1rem;
}
</style>