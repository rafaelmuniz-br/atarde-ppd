<template>
    <TextImageSection
      title="A TARDE Educação"
      subtitle="PROGRAMA"
      description="Transformando educação, inspirando jovens, formando cidadãos."
      imageSrc="/sobre-mosaic.png"
      imageAlt="Sobre o EcoInovar"
      buttonText=""
      buttonLink=""
      :reverse="false"
      backgroundColor="#0072B0"

    />
  </template>
    
  <script setup>
    import TextImageSection from '@/components/TextImageSection.vue'
  </script>
    ~/components/TextImageSection copy.vue

<style scoped>

/* Aplica cores aos textos internos */
::v-deep(.text-content h2) {
    color: #F08A3C;
    margin: 15px 0 10px;
}

::v-deep(.text-content .subtitle) {
    color: white;
}

::v-deep(.text-content .description) {
    color: white;
}
</style>