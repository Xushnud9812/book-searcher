<script setup >
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import loader from '@/components/loader.vue'

const router = useRouter()

const formData = ref({
  username: "",
  token: "",
});

const loading = ref(false)
const error = ref(false);
const max_length = 16;
const timeout = 3;

const handleInput = () => {
  if (!/^[a-zA-Z]*$/.test(formData.value.username)) {
    error.value = true
  } else if (formData.value.username.length !== max_length) {
    error.value = true
  } else {
    error.value = false
  }
}

const login = () => {
  loading.value = true;
  setTimeout(() => {
    router.push('/')
    loading.value = false;
  }, timeout * 1000);
}
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <div class="w-[500px]">
      <div class="bg-white rounded-lg p-8">
        <h1 class="mb-10 font-bold text-2xl text-[#28293D]">Login</h1>
        <form @submit.prevent="login" class="flex flex-col gap-6">
          <div>
            <h2 class="text-xs font-medium  mb-2">Username </h2>
            <input @input="handleInput"
              class="px-4 py-3 w-full rounded border border-[#E0E7FF] bg-[#E0E7FF33] focus:border-primary focus:outline-none"
              placeholder="Username" required v-model="formData.username" type="text" />
          </div>
          <h2 v-if="error" class="text-red-500">The textfield text must be 16 characters long, should not any special
            characters, nor numbers or cyrillic
            symbols</h2>
          <div>
            <h2 class="text-xs font-medium  mb-2">Token </h2>
            <input
              class="px-4 py-3 w-full rounded border border-[#E0E7FF] bg-[#E0E7FF33] focus:border-primary focus:outline-none"
              placeholder="Token" type="text" required v-model="formData.token" />
          </div>
          <div>
            <button type="submit" :disabled="error" :class="error ? 'bg-primary/50' : 'bg-primary'"
              class=" flex justify-center items-center px-4 py-3 text-white rounded w-full">
              <loader v-show="loading" />
              {{ loading ? '' : 'Login' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>