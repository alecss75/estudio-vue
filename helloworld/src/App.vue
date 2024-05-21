<template>
  <h1>Listado de post</h1>
  <PostContainer/>
  <h2>Contador hecho en option</h2>
  <CounterOption/>
  <h2>Contadores hecho en composition</h2>
  <CounterComposition/> 
  <CounterComposition/>
  <h2>Ejemplo de directiva SELECTIVA</h2>
  <ExampleSelective/>
  <h2>Ejemplo de directiva FOR</h2>
  <ExampleFor/>
  <h2>Ejemplo de directiva BIND</h2>
  <ClassBind/>
  <h2>Ejemplo de Bindeo/Formulario</h2>
  <ModelForm/>
</template>
  
<script lang="ts" setup>
  import PostContainer from './components/PostContainer.vue'
  import CounterOption from './components/CounterOption.vue'
  import CounterComposition from './components/CounterComposition.vue'
  import ExampleSelective from './components/ExampleSelective.vue'
  import ExampleFor from './components/ExampleFor.vue'
  import ClassBind from './components/ClassBind.vue'
  import ModelForm from './components/ModelForm.vue'
</script>

<style>
h1{
  color:green;
}
</style>
