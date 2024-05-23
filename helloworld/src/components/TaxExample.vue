<template>
    <label for="subtotal">Subtotal: </label>
    <input type="number" v-model="subtotal"/>
    <h3>Total de impuestos a pagar: {{ totalVat }} ({{iva}}%)</h3>
</template>

<script lang="ts" setup>
    import {ref,Ref,computed} from 'vue'

    const iva = 21
    let subtotal:Ref<number> = ref(0)
    const totalVat = computed(() => (iva*subtotal.value)/100)
    
</script>

<style scoped>

</style>