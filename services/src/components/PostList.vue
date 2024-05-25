<template>
    <h1>Listado de Posts</h1>
    <ul class="post-list">
        <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
</template>

<script lang="ts">
import PostService from '@/services/PostService';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
    name: 'PostList',
    setup() {
        const service = new PostService()
        const posts = service.getPosts()

        onMounted(async () => {
            await service.fetchAll()
        })
        return { posts }
    }
})

/* en optionAPI
import PostService from '@/services/PostService';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PostList',
    data() {
        const service = new PostService()
        const posts = service.getPosts()
     
        return { posts, service }
    },
     async mounted(
        await.this.service.fetchAll()
        )
})
*/

/* con SETUP
import PostService from '@/services/PostService';
import { defineComponent, onMounted } from 'vue';

const service = new PostService()
const posts = service.getPosts()

onMounted(async () => {
            await service.fetchAll()
        })

*/
</script>

<style scoped>
    .post-list {
        width: 95vw;
        height: 75px;
        padding: 20px;
        list-style-type: none;
    }
    .post-list li {
        padding:10px;
        width: 100%;
        border: 1px solid #ccc;
    }
</style>