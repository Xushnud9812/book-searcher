<script setup>
import { ref, watch } from 'vue'
import axios from '@/plugins/axios'
import { useDebouncedRef } from '@/composables/useDebounce'
import { useRouter, useRoute } from 'vue-router'
import loader from '@/components/loader.vue'
import CardBook from '../components/CardBook.vue'


const router = useRouter()
const route = useRoute();

const loading = ref(false)
const books = ref([])
const totalBooks = ref()

const search = useDebouncedRef('', 1000)

if (route.query.q) {
  search.value = route.query.q
}

const fetchData = async () => {
  const text = route.query.q;
  if (!text) {
    books.value = []
    return
  };
  try {
    loading.value = true
    const res = await axios.get(`/volumes?q=${text}`);
    books.value = res.data.items ? res.data.items : []
    totalBooks.value = res.data.totalItems
  } catch (error) {
    console.error('Error :', error);
  }
  finally {
    loading.value = false
  }
};

fetchData()

watch(search, () => {
  router.push({ query: { q: search.value } })
})


</script>

<template>
  <div>
    <div class="bg-white shadow-md py-5 fixed top-0 w-full">
      <div class="container">
        <input type="text" v-model="search" placeholder="Search..."
          class="px-4 py-3 w-full rounded border border-[#E0E7FF] bg-gray-100 focus:border-primary focus:outline-none">
      </div>
    </div>
    <div class="pt-28 container">
      <div v-show="loading" class="flex justify-center my-20">
        <loader />
      </div>
      <div v-show="books.length === 0 && !loading" class="py-8 text-center">
        <h1>No results</h1>
      </div>
      <h2 v-show="!loading && totalBooks">Total Books : {{ totalBooks }}</h2>
      <div v-show="!loading" class="my-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <card-book v-for="book, index in books" :book="book.volumeInfo" :book-id="book.id" :key="index" />

      </div>

    </div>
  </div>
</template>



<style lang="scss" scoped></style>