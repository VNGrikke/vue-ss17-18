<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <div>
        lorem*100
    </div>    <router-link to="/posts">Quay lại danh sách bài viết</router-link>
    
  </div>
  <div v-else>
    <router-link to="/posts">Quay lại danh sách bài viết</router-link>
  </div>
</template>
  
  <script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "vue";

const route = useRoute();
const router = useRouter();

const posts = [
  { id: 1, title: "Bài viết 1", content: "Nội dung bài viết 1" },
  { id: 2, title: "Bài viết 2", content: "Nội dung bài viết 2" },
  { id: 3, title: "Bài viết 3", content: "Nội dung bài viết 3" },
];

let post = null;

onMounted(() => {
  const postId = parseInt(route.params.id);
  post = posts.find((p) => p.id === postId);
  if (!post) {
    router.replace("/posts/not-found");
  }
});
</script>
  
  <style>
h1 {
  font-size: 24px;
}

p {
  margin-top: 20px;
}
</style>
  