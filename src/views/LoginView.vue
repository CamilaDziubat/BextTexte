<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <!-- Cria um contêiner flexível para a imagem e a caixa de login -->
      <div class="flex items-center space-x-8">
        <!-- Adiciona a nova imagem ao lado da caixa de login -->
        <div class="hidden md:block">
          <img src="@/assets/images/logo/MockupCelularHomeFinalSimuladorMultibancos-md.webp" alt="Mockup" class="h-auto w-auto" />
        </div>
        <!-- Cria a caixa de login -->
        <div class="bg-white p-8 rounded shadow-lg w-full max-w-md">
          <div class="flex justify-center mb-6">
            <!-- Exibe a logo, ajustando seu tamanho -->
            <img src="@/assets/images/logo/logo.svg" alt="Logo" class="h-35 w-35" />
          </div>
          <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
          <form @submit.prevent="handleLogin">
            <div class="mb-4">
              <label class="block mb-2 text-sm font-bold text-gray-700" for="email">Email</label>
              <input v-model="email" type="email" id="email" class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div class="mb-6">
              <label class="block mb-2 text-sm font-bold text-gray-700" for="password">Password</label>
              <input v-model="password" type="password" id="password" class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">Login</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const password = ref('')
  const router = useRouter()
  
  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    // Por exemplo, fazer uma requisição para uma API de login
  
    // Se a autenticação for bem-sucedida, redirecione para a página principal
    router.push('/Geral')
  }
  </script>
  
  <style scoped>
  /* Adicione estilos personalizados aqui, se necessário */
  </style>