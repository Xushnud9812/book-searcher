<script setup>
defineProps({
  book: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div>
    <div class="bg-white border rounded ">
      <a :href="book.previewLink" class="bg-primary/10 block p-2">
        <img class="mx-auto h-[200px] object-cover shadow-md" :src="book.imageLinks?.thumbnail" alt="">
      </a>
      <div class="p-5 flex flex-col gap-2">
        <h1 class="text-xl line-clamp-1 font-semibold">{{ book.title }}</h1>
        <div class="flex justify-between">
          <span class="mr-1 font-semibold">Authors:</span>
          <div class="text-right line-clamp-1">
            <span class="text-gray-400 mr-1" v-for="author in book.authors">
              {{ author }}
            </span>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <span class="font-semibold">Pages: {{ book.pageCount }}</span>
          <router-link class="bg-primary text-sm py-1 px-2 rounded text-white" to="/">Read More</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>