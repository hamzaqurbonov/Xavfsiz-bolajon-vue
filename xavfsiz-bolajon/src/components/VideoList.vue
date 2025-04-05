<template>
    <div>
      <h2 class="text-xl font-bold mb-4">Video123lar</h2>
      <div v-for="video in videos" :key="video">
        <iframe
          class="my-4"
          width="100%"
          height="400"
          :src="`https://www.youtube.com/embed/${video}`"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { db } from '@/firebase'
  import { collection, getDocs } from 'firebase/firestore'
  
  const videos = ref([])
  
  onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "videos"))
    videos.value = querySnapshot.docs.map(doc => doc.data().youtubeId)
  })
  </script>
  