<template>
    <TextImageSection
      title="Prêmio Ecoinovar"
      subtitle="O CONCURSO"
      description="O Prêmio EcoInovar é voltado para professores e estudantes da rede pública estadual de ensino, incentivando o desenvolvimento e a implementação de projetos científicos inovadores e sustentáveis.  A premiação abrange escolas e comunidades conectando educação, ciência e sustentabilidade para transformar realidades locais."
      imageSrc="/premio-eco.png"
      imageAlt="Sobre o EcoInovar"
      buttonText="Inscrições abertas →"
      buttonLink="https://docs.google.com/document/d/14jq8N9_nNxhMr9lU3sb2P-5Kqvv7ojX61QX1sYeuQ1A/edit?tab=t.0"
      :reverse="true"
    />
  </template>
    
  <script setup>
    import TextImageSection from '@/components/TextImageSection.vue'
  </script>
    ~/components/TextImageSection copy.vue

  
<style scoped>
::v-deep(.btn-primary){
      display: inline-block;
      background: none;
      color: #F08A3C;
      padding: 0px 0px;
      border-radius: 0px;
      text-decoration: none;
      font-family: 'Codec Warm Trial', sans-serif;
      font-weight: 700;
    }
</style>