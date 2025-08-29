<template>
  <TextImageSection
    title="Premiações"
    subtitle=""
    description="Esta plataforma reúne iniciativas que destacam o talento, a criatividade e o engajamento das escolas baianas em temas essenciais como:<br>
    <br>
      <li>Sustentabilidade</li>
      <li>Cidadania</li>
      <li>Comunicação</li>
      <li>Inovação</li>"
    imageSrc="/premiada.png"
    imageAlt="Sobre o programa"
    buttonText=""
    buttonLink=""
    :reverse="true"
  />
</template>
  
<script setup>
  import TextImageSection from '@/components/TextImageSection.vue'
</script>~/components/TextImageSection copy.vue


<style scoped>
@media (max-width: 1110px) {
  /* Alinha o texto do componente filho à esquerda */
  :deep(.text-content) {
    text-align: left;
  }
  
  /* Garante que a lista ul também seja alinhada à esquerda no mobile */
  :deep(.text-content ul) {
    text-align: left;
    margin: 0;
    padding-left: 20px;
    list-style-position: inside; /* Mantém os marcadores de lista dentro do contêiner */
  }

  /* Remove o estilo 'text-align: center' dos li, se houver */
  :deep(.text-content li) {
    text-align: left;
  }
}
</style>