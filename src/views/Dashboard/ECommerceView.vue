<script setup lang="ts">
  // Importa o componente DataStatsOne
  import DataStatsOne from '@/components/DataStats/DataStatsOne.vue'

  // Importa o layout padrão DefaultLayout
  import DefaultLayout from '@/layouts/DefaultLayout.vue'

  // Importa a store de tarefas
  import { useTaskStore } from '@/stores/taskStore'

  // Inicializa a store de tarefas
  const taskStore = useTaskStore()

  // Função para definir a classe de prioridade
  function priorityClass(priority: string) {
    switch (priority) {
      case 'Alta':
        return 'text-red-500'
      case 'Média':
        return 'text-yellow-500'
      case 'Baixa':
        return 'text-green-500'
      default:
        return ''
    }
  }
</script>

<template>
  <!-- Usa o layout padrão DefaultLayout -->
  <DefaultLayout>
    <!-- Cria uma grade com uma coluna em telas pequenas, duas colunas em telas médias, e quatro colunas em telas grandes -->
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <!-- Adiciona o componente DataStatsOne dentro da grade -->
      <DataStatsOne />
    </div>

    <!-- Cria uma grade com doze colunas e espaçamento entre os itens -->
    <div class="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      <!-- ====== Início do Gráfico Um ====== -->
      <!-- Adiciona o componente ChartOne dentro da grade -->
      <ChartOne />
      <!-- ====== Fim do Gráfico Um ====== -->

      <!-- ====== Início do Gráfico Dois ====== -->
      <!-- Adiciona o componente ChartTwo dentro da grade -->
      <ChartTwo />
      <!-- ====== Fim do Gráfico Dois ====== -->

      <!-- ====== Início do Gráfico Três ====== -->
      <!-- Adiciona o componente ChartThree dentro da grade -->
      <ChartThree />
      <!-- ====== Fim do Gráfico Três ====== -->
    </div>

    <!-- Lista de Tarefas -->
    <div class="mt-8">
      <h2 class="text-2xl font-bold mb-4">Tarefas</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="task in taskStore.tasks" :key="task.id" class="p-4 border rounded shadow-lg bg-white">
          <h2 class="text-xl font-bold text-gray-800">{{ task.title }}</h2>
          <p class="text-gray-600">{{ task.description }}</p>
          <p class="text-gray-600">Prioridade: <span :class="priorityClass(task.priority)">{{ task.priority }}</span></p>
          <p class="text-gray-600">Data de Conclusão: {{ task.dueDate }}</p>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped>
/* Adicione estilos personalizados aqui, se necessário */
</style>