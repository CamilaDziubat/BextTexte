// Importa a função useStorage do @vueuse/core
import { useStorage } from '@vueuse/core'
// Importa a função defineStore da Pinia
import { defineStore } from 'pinia'
// Importa a função ref do Vue
import { ref } from 'vue'

// Define a store useSidebarStore usando a Pinia
export const useSidebarStore = defineStore('sidebar', () => {
  // Cria uma referência reativa para o estado de abertura do sidebar
  const isSidebarOpen = ref(false)
  // Cria uma referência reativa para o item selecionado, armazenada no localStorage
  const selected = useStorage('selected', ref('eCommerce'))
  // Cria uma referência reativa para a página atual, armazenada no localStorage
  const page = useStorage('page', ref('Dashboard'))

  // Define a função toggleSidebar para alternar o estado de abertura do sidebar
  function toggleSidebar() {
    // Inverte o valor de isSidebarOpen
    isSidebarOpen.value = !isSidebarOpen.value
  }

  // Retorna as referências isSidebarOpen, toggleSidebar, selected e page para uso na aplicação
  return { isSidebarOpen, toggleSidebar, selected, page }
})