<script setup>
import { ref } from 'vue'
import axios from '@/plugins/axios'
import { useRouter, useRoute } from 'vue-router'
import loader from '@/components/loader.vue'

const router = useRouter()
const route = useRoute();

const loading = ref(false)
const book = ref([])


const getByIdBook = async (id) => {
  try {
    loading.value = true
    const response = await axios.get(`/volumes/${id}`);
    book.value = response.data ? response.data.volumeInfo : []

  } catch (error) {
    console.error('Error :', error);
  }
  finally {
    loading.value = false
  }
};

getByIdBook(route.params.id)

</script>

<template>
  <div>
    <div class="pt-10 container">
      <div class="mb-10">
        <button class="flex items-center gap-1 2xl:text-2xl" @click="router.go(-1)">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23a1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2" />
            </svg></span>
          Back</button>
      </div>
      <div v-show="loading" class="flex justify-center my-20">
        <loader />
      </div>
      <div v-show="!loading" class="flex flex-col md:flex-row gap-10">
        <div class="shrink-0">
          <img class="mx-auto md:mx-0 2xl:w-96" :src="book.imageLinks?.thumbnail" alt="">
        </div>
        <div>
          <h1 class="2xl:text-4xl text-primary font-semibold">{{ book.title }}</h1>
          <h1 class="2xl:text-xl text-gray-400 mt-2">{{ book.subtitle }}</h1>
          <div class="2xl:text-xl flex my-2">
            <span class="mr-1 font-semibold text-primary">Authors:</span>
            <div class="text-right line-clamp-1">
              <span class="text- mr-1" v-for="author in book.authors">
                {{ author }}
              </span>
            </div>
          </div>
          <p class=" text-gray-500 2xl:text-xl" v-html="book.description"></p>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped></style>