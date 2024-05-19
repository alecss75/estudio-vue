<template>
<div class="post-card">
    <h3>Título</h3>
   <p>Lorem ipsum dolor sit amet consectatur blablabbla</p>
   <PostButton/>
</div>  
</template>

<script lang="ts" setup>
    import PostButton from './PostButton.vue'
</script>

<style scoped>
.post-card {
    border-radius:15px;
    padding:10px;
    margin:5px;
    border: 1px solid #ccc;
}
</style>