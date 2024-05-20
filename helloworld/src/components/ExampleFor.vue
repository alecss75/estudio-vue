<template>
    <ul>
        <li v-for="(country,index) in countries" v-bind:key="index">{{ country }}</li>
    </ul>
    <ul v-for="pais in paises" :key="pais.code"> {{ pais.name }}</ul>
</template>

<script lang="ts" setup>
import {Ref, ref} from 'vue'
let countries:Ref<Array<string>> = ref([
'España','Francia','UK','Italia','Portugal'
])
//Este interface solo en TypeScript, en JS no funcionará
interface ICountry {
    code:string,
    name:string
}
let paises:Ref<Array<ICountry>> = ref ([
    {
        code: 'es',
        name: 'Spain'
    },
    {
        code: 'en',
        name: 'UK'
    },
    {
        code: 'fr',
        name: 'Francia'
    },
    {
        code: 'it',
        name: 'Italy'
    },
    {
        code: 'pt',
        name: 'portugal'
    }
])

</script>

<style scoped></style>