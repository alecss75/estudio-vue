<template>
    <div>
        <p v-font-size>directiva sin binding</p>
        <p v-custom-size="30">directiva con binding</p>
        <p v-arg-size: md>directiva con argumentos</p>
        <p v-custom-font.lg.blue>directiva con modifiers lg y azul</p>
        <p v-custom-font.red.sm>directiva con modifier red y sm</p>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

</style>