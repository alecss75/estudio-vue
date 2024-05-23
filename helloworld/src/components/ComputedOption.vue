<template>
    <input type="text" v-model="message" />
    <h4>{{ message }}</h4>
    <h4>{{ reverse }}</h4>
</template>

<script lang="ts" setup	>
import { ref, computed, Ref } from 'vue';
let message: Ref<string> = ref('');
const reverse = computed(() => message.value.split('').reverse().join(''))

</script>

<style scoped></style>