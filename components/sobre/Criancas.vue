<template>
  <div class="imagem-wrapper">
    <img src="/criancas.png" alt="Crianças" class="imagem-limitada" />
  </div>
</template>

<style scoped>
.imagem-wrapper {
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center;     /* (opcional) Centraliza verticalmente se tiver altura */
  width: 100%;
}

.imagem-limitada {
  max-width: 1440px;
  max-height: 460px;
  width: 100%;
  height: auto;
  display: block;
}
</style>
