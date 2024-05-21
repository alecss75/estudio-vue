<template>
    <form >
        <input type="text" v-model="inputText"/>
        <h4>{{ inputText }}</h4>
        <input type="checkbox" v-model="agree"/> Acepto términos y condiciones
        <select v-model="option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
    </form>
    
</template>

<script lang="ts">
    import {defineComponent, ref} from 'vue'
    export default defineComponent({
        data() {
            return{
                inputText: '',
                agree: true,
                option: 'option1'
            }
        }
    })
    
</script>

<style scoped>

</style>