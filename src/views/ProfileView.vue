<script setup lang="ts">
  // Importa a função ref do Vue para criar referências reativas
  import { ref } from 'vue'
  
  // Importa o componente BreadcrumbDefault, que provavelmente exibe uma trilha de navegação
  import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
  
  // Importa o componente ProfileCard, que provavelmente exibe informações do perfil do usuário
  import ProfileCard from '@/components/ProfileCard.vue'
  
  // Importa o componente DefaultLayout, que define o layout padrão da página
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  
  // Cria uma referência reativa chamada pageTitle com o valor inicial 'Profile'
  const pageTitle = ref('Profile')
</script>

<template>
  <!-- Usa o componente DefaultLayout como o contêiner principal -->
  <DefaultLayout>
    <!-- Cria uma div centralizada horizontalmente com largura máxima definida -->
    <div class="mx-auto max-w-242.5">
      <!-- Breadcrumb Start: Início da seção de breadcrumb -->
      <!-- Usa o componente BreadcrumbDefault e passa a referência reativa pageTitle como uma prop -->
      <BreadcrumbDefault :pageTitle="pageTitle" />
      <!-- Breadcrumb End: Fim da seção de breadcrumb -->
      
      <!-- Usa o componente ProfileCard para exibir informações do perfil do usuário -->
      <ProfileCard />
    </div>
  </DefaultLayout>
</template>