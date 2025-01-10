// Importa a função ref do Vue
import { ref } from 'vue'
// Importa a função defineStore da Pinia
import { defineStore } from 'pinia'
// Importa a função useStorage do @vueuse/core
import { useStorage } from '@vueuse/core'

// Define a store useDarkModeStore usando a Pinia
export const useDarkModeStore = defineStore('darkMode', () => {
  // Cria uma referência reativa para o modo escuro, armazenada no localStorage
  const darkMode = useStorage('darkMode', ref(false))

  // Alterna a classe 'dark' no elemento raiz do documento com base no valor de darkMode
  document.documentElement.classList.toggle('dark', darkMode.value)

  // Define a função toggleDarkMode para alternar o valor de darkMode
  function toggleDarkMode() {
    // Inverte o valor de darkMode
    darkMode.value = !darkMode.value
    // Alterna a classe 'dark' no elemento raiz do documento com base no novo valor de darkMode
    document.documentElement.classList.toggle('dark', darkMode.value)
  }

  // Retorna a referência darkMode e a função toggleDarkMode para uso na aplicação
  return { darkMode, toggleDarkMode }
})