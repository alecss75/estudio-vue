<template>
    <input type="text" v-model="message"/>
    <h4>{{ message }}</h4>
    <h4>{{ reverse }}</h4>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'ComputedExample',
        data() {
            return {
                message: ''
            }
        },
        computed: {
            reverse():string {
                return this.message.split('').reverse().join('')
            }
        }
    })


</script>

<style scoped>

</style>