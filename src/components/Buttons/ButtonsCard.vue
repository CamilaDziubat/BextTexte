<script setup lang="ts">
const props = defineProps(['cardTitle'])

</script>

<template>
  <div
    class="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
  >
    <!-- Cria um contêiner com margens, bordas arredondadas, borda, fundo branco e sombra -->
    <!-- Aplica classes adicionais para o modo escuro -->

    <div class="border-b border-stroke px-7 py-4 dark:border-strokedark">
      <!-- Cria um contêiner com borda inferior, padding horizontal e vertical -->
      <!-- Aplica classes adicionais para o modo escuro -->

      <h3 class="font-medium text-black dark:text-white">{{ props.cardTitle }}</h3>
      <!-- Exibe o título do cartão passado através da propriedade 'cardTitle' -->
      <!-- Aplica classes para estilização do texto, incluindo fonte média e cor -->
      <!-- Aplica classes adicionais para o modo escuro -->
    </div>

    <div class="p-4 md:p-6 xl:p-9">
      <!-- Cria um contêiner com padding variável dependendo do tamanho da tela -->
      <slot></slot>
      <!-- Define um slot para inserir conteúdo dinâmico dentro do cartão -->
    </div>
  </div>
</template>