<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col col-md-8">

            <h2>Latest Posts</h2>
            <hr>
            <label for="create-post">Double-click on item to delete</label>
            <div class="input-group mb-2">
                <input type="text" id="create-post" v-model="text" class="form-control">
                <div class="input-group-append">
                  <button class="btn btn-success" v-on:click="createPost">Add</button>
                </div>
            </div>


            <p v-if="error">{{ error }}</p>
            <div placeholder="Add a new post"
                 v-for="(post, index) in posts"
                 v-bind:item="post"
                 v-bind:index="index"
                 v-bind:key="post._id"
            >
                <div class="bg-success text-white p-1 mb-1" v-on:dblclick="deletePost(post._id)">
                    {{ `${new Date(post.date).toDateString()} at ${new Date(post.date).toLocaleTimeString()}` }}
                    <p>{{ post.title }}</p>

                </div>


            </div>

        </div>
    </div>
</div>
</template>

<script>
  import axios from 'axios';
    // import PostService from "../postService.js";
  const url = 'http://localhost:3000/api/posts/';

export default {
  name: 'postsComponent',
    data(){
        return {
            posts: [],
            error: '',
            text: ''
        }
    },
    methods: {
      async createPost(){
          await axios.post(url,{title: this.text})
          .then(() => {
              this.text = '';
              this.getAllPosts();
          })

      },
       async getAllPosts(){
          await axios.get(url).then(response => {
                this.posts = response.data;
            })
        },

        async deletePost(id){
            await axios.delete(url + id)
             .then(() => {
                 this.getAllPosts();
             });
        }


    },

  mounted() {
   this.getAllPosts();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
