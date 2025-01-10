<template>
    <div class="p-4 bg-customBackground min-h-screen text-white">
      <h1 class="text-3xl font-bold mb-6">Dashboard de Tarefas</h1>
      
      <!-- Filtros -->
      <div class="mb-6">
        <label class="block mb-2">Filtrar por Categoria:</label>
        <select v-model="selectedCategory" class="p-2 border rounded w-full md:w-1/3 bg-gray-700 text-white">
          <option value="">Todas</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudo">Estudo</option>
        </select>
      </div>
      
      <div class="mb-6">
        <label class="block mb-2">Filtrar por Prioridade:</label>
        <select v-model="selectedPriority" class="p-2 border rounded w-full md:w-1/3 bg-gray-700 text-white">
          <option value="">Todas</option>
          <option value="Baixa">Baixa</option>
          <option value="Média">Média</option>
          <option value="Alta">Alta</option>
        </select>
      </div>
  
      <!-- Botão para adicionar tarefa -->
      <button @click="showTaskModal(null)" class="mb-6 p-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700">Adicionar Tarefa</button>
  
      <!-- Lista de Tarefas -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="task in filteredTasks" :key="task.id" class="p-4 border rounded shadow-lg bg-gray-700">
          <h2 class="text-xl font-bold">{{ task.title }}</h2>
          <p>{{ task.description }}</p>
          <p>Prioridade: <span :class="priorityClass(task.priority)">{{ task.priority }}</span></p>
          <p>Data de Conclusão: {{ task.dueDate }}</p>
          <button @click="showTaskModal(task)" class="mt-4 p-2 bg-yellow-500 text-white rounded shadow hover:bg-yellow-600">Editar</button>
          <button @click="deleteTask(task.id)" class="mt-2 p-2 bg-red-500 text-white rounded shadow hover:bg-red-600">Excluir</button>
        </div>
      </div>
  
      <!-- Modal de Tarefa -->
      <div v-if="isTaskModalVisible" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
        <div class="bg-gray-900 p-6 rounded shadow-lg w-96 text-white">
          <h2 class="text-xl font-bold mb-4">{{ currentTask ? 'Editar Tarefa' : 'Adicionar Tarefa' }}</h2>
          <form @submit.prevent="saveTask">
            <div class="mb-4">
              <label class="block mb-2">Título:</label>
              <input v-model="taskForm.title" type="text" class="p-2 border rounded w-full bg-gray-800 text-white" required />
            </div>
            <div class="mb-4">
              <label class="block mb-2">Descrição:</label>
              <textarea v-model="taskForm.description" class="p-2 border rounded w-full bg-gray-800 text-white"></textarea>
            </div>
            <div class="mb-4">
              <label class="block mb-2">Prioridade:</label>
              <select v-model="taskForm.priority" class="p-2 border rounded w-full bg-gray-800 text-white">
                <option value="Baixa">Baixa</option>
                <option value="Média">Média</option>
                <option value="Alta">Alta</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="block mb-2">Data de Conclusão:</label>
              <input v-model="taskForm.dueDate" type="date" class="p-2 border rounded w-full bg-gray-800 text-white" />
            </div>
            <div class="flex justify-end">
              <button type="button" @click="closeTaskModal" class="p-2 bg-gray-500 text-white rounded mr-2 hover:bg-gray-600">Cancelar</button>
              <button type="submit" class="p-2 bg-blue-600 text-white rounded hover:bg-blue-700">{{ currentTask ? 'Salvar' : 'Adicionar' }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { useTaskStore } from '@/stores/taskStore'
  
  interface Task {
    id: number
    title: string
    description: string
    priority: string
    dueDate: string
    category: string
  }
  
  const taskStore = useTaskStore()
  
  const selectedCategory = ref('')
  const selectedPriority = ref('')
  const isTaskModalVisible = ref(false)
  const currentTask = ref<Task | null>(null)
  const taskForm = ref({ title: '', description: '', priority: 'Baixa', dueDate: '', category: '' })
  
  const filteredTasks = computed(() => {
    return taskStore.tasks.filter(task => {
      return (
        (selectedCategory.value === '' || task.category === selectedCategory.value) &&
        (selectedPriority.value === '' || task.priority === selectedPriority.value)
      )
    })
  })
  
  function showTaskModal(task: Task | null) {
    currentTask.value = task
    if (task) {
      taskForm.value = { ...task }
    } else {
      taskForm.value = { title: '', description: '', priority: 'Baixa', dueDate: '', category: '' }
    }
    isTaskModalVisible.value = true
  }
  
  function closeTaskModal() {
    isTaskModalVisible.value = false
  }
  
  async function saveTask() {
    if (currentTask.value) {
      await taskStore.updateTask({ ...taskForm.value, id: currentTask.value.id })
    } else {
      const newTask = { ...taskForm.value, id: taskStore.tasks.length + 1 }
      await taskStore.addTask(newTask)
    }
    closeTaskModal()
  }
  
  async function deleteTask(id: number) {
    await taskStore.deleteTask(id)
  }
  
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
  
  // Buscar tarefas ao montar o componente
  onMounted(() => {
    taskStore.fetchTasks()
  })
  </script>
  
  <style scoped>
  /* Adicione estilos personalizados aqui, se necessário */
  </style>