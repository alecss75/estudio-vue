<template>
<h4 v-if="age > 18">Eres menor de edad</h4>
<h4 v-else>Eres mayor de edad</h4>
</template>

<script lang="ts" setup>
    let age = 18
</script>

<style scoped>

</style>