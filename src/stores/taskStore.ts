import { defineStore } from 'pinia'
import axios from 'axios'

interface Task {
  id: number
  title: string
  description: string
  priority: string
  dueDate: string
  category: string
}

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [] as Task[],
  }),
  actions: {
    async fetchTasks() {
      try {
        const response = await axios.get('http://localhost:3000/tasks')
        this.tasks = response.data
      } catch (error) {
        console.error('Erro ao buscar tarefas:', error)
      }
    },
    async addTask(task: Task) {
      try {
        const response = await axios.post('http://localhost:3000/tasks', task)
        this.tasks.push(response.data)
      } catch (error) {
        console.error('Erro ao adicionar tarefa:', error)
      }
    },
    async updateTask(updatedTask: Task) {
      try {
        await axios.put(`http://localhost:3000/tasks/${updatedTask.id}`, updatedTask)
        const index = this.tasks.findIndex(task => task.id === updatedTask.id)
        if (index !== -1) {
          this.tasks[index] = updatedTask
        }
      } catch (error) {
        console.error('Erro ao atualizar tarefa:', error)
      }
    },
    async deleteTask(id: number) {
      try {
        await axios.delete(`http://localhost:3000/tasks/${id}`)
        this.tasks = this.tasks.filter(task => task.id !== id)
      } catch (error) {
        console.error('Erro ao deletar tarefa:', error)
      }
    },
  },
})