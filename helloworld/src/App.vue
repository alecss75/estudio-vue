<template>
  <h1>Listado de post</h1>
  <PostContainer/>
  <h2>Contador hecho en option</h2>
  <CounterOption/>
  <h2>Contadores hecho en composition</h2>
  <CounterComposition/> 
  <CounterComposition/>
</template>
  
<script lang="ts" setup>
  import PostContainer from './components/PostContainer.vue'
  import CounterOption from './components/CounterOption.vue'
  import CounterComposition from './components/CounterComposition.vue'
</script>

<style>
h1{
  color:green;
}
</style>
