<template>
    <h4>Ejemplo 1 (Clase)</h4>
  <!-- |-> Aquí el v-bind se está abreviando con solo los dos puntos ":" -->
    <p :class="{ 'danger': hasError }">El mensaje se ha enviado satisfactoriamente</p>
    <h4>Ejemplo 2 (Estilos)</h4>
    <p v-bind:style="{backgroundColor: '#ccc', color : c}">Este mensaje se envió correctamente</p>
        <!-- |-> Aquí el v-on se está abreviando con solo el arroba "@" --> 
    <button @click="handleClick">Cambiar color</button>
</template>

<script lang="ts" setup>
let hasError = true

import {ref} from 'vue'
let c = ref('#fff')
const handleClick = () => {c.value = "#ff0000"}

</script>

<style>
.danger {
    color: red
}
</style>