<template>
<h1 v-if="age > 18">Eres menor de edad</h1>
<h2 v-else>Eres mayor de edad</h2>
</template>

<script lang="ts" setup>
    let age = 18
</script>

<style scoped>

</style>