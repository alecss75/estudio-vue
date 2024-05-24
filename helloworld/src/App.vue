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
  <h2>Ejemplo de Ciclo de vida (CycleOptions)</h2>
  <CycleOptions/>
  <h2>Ejemplo de comunicación vertical</h2>
  <PostList/>
  <h2>Ejemplo de comunicación vertical hecho en setup</h2>
  <ListSetup/>
  <h2>Ejemplo de dato computado en composition</h2>
  <ComputedComposition/>
  <h2>Ejemplo de dato computado en option</h2>
  <ComputedOption/>
  <h2>Ejemplo de impuestos con datos computados</h2>
  <TaxExample/>
  <h2>Ejemplo de directivas personalizadas</h2>
  <PersonalizedDirective/>
</template>
  
<script lang="ts" setup>
  import PostContainer from './components/PostContainer.vue'
  import CounterOption from './components/CounterOption.vue'
  import CounterComposition from './components/CounterComposition.vue'
  import ExampleSelective from './components/ExampleSelective.vue'
  import ExampleFor from './components/ExampleFor.vue'
  import ClassBind from './components/ClassBind.vue'
  import ModelForm from './components/ModelForm.vue'
  import CycleOptions from './components/CycleOptions.vue'
  import PostList from './components/PostList.vue'
  import ListSetup from './components/ListSetup.vue'
  import ComputedComposition from './components/ComputedComposition.vue'
  import ComputedOption from './components/ComputedOption.vue'
  import TaxExample from './components/TaxExample.vue'
  import PersonalizedDirective from './components/PersonalizedDirective.vue'
  
</script>

<style>
h1{
  color:green;
}
</style>
