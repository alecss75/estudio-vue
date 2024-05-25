import { ref, Ref } from "vue"
import IPosts from "@/interfaces/IPosts."

class PostService {
    private posts:Ref<Array<IPosts>>

    constructor() {
        this.posts = ref<Array<IPosts>> ([])
    }

    getPosts ():Ref<Array<IPosts>> {
       return this.posts
    }

    async fetchAll(): Promise<void> {
        try {   
            const url = 'https://jsonplaceholder.typicode.com/posts' 
            const response = await fetch(url)
            const json = await response.json()
            this.posts.value = await json

        } catch(error) {
            console.log(error)
        }
    }
}
export default PostService