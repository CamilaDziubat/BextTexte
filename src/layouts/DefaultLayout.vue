<script setup lang="ts">
import HeaderArea from '@/components/Header/HeaderArea.vue' // Importa o componente HeaderArea
import SidebarArea from '@/components/Sidebar/SidebarArea.vue' // Importa o componente SidebarArea
</script>

<template>
  <!-- ===== Page Wrapper Start ===== -->
  <div class="flex h-screen overflow-hidden">
    <!-- Cria um contêiner flexível que ocupa a altura total da tela e oculta o overflow -->

    <!-- ===== Sidebar Start ===== -->
    <SidebarArea />
    <!-- Inclui o componente SidebarArea para a barra lateral -->

    <!-- ===== Sidebar End ===== -->

    <!-- ===== Content Area Start ===== -->
    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <!-- Cria um contêiner flexível que ocupa o restante do espaço disponível, com overflow vertical rolável e overflow horizontal oculto -->

      <!-- ===== Header Start ===== -->
      <HeaderArea />
      <!-- Inclui o componente HeaderArea para o cabeçalho -->

      <!-- ===== Header End ===== -->

      <!-- ===== Main Content Start ===== -->
      <main>
        <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          <!-- Cria um contêiner centralizado com padding variável dependendo do tamanho da tela -->
          <slot></slot>
          <!-- Inclui um slot para inserir conteúdo dinâmico -->
        </div>
      </main>
      <!-- ===== Main Content End ===== -->
    </div>
    <!-- ===== Content Area End ===== -->
  </div>
  <!-- ===== Page Wrapper End ===== -->
</template>