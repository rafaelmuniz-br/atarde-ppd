<template>
  <section class="premiacao-section">
    <h2 class="section-title">PREMIAÇÃO</h2>

    <PremiacaoCard
      class="first"
      title="1º lugar"
      description="<strong>R$5.000,00*</strong>"
      image-src="/first.png"
      image-alt="1º lugar"
      :reverse="true"
    />

    <PremiacaoCard
      title="2º lugar"
      description="<strong>R$3.500,00*</strong>"
      image-src="/second.png"
      image-alt="2º lugar"
    />

    <PremiacaoCard
      title="3º lugar"
      description="<strong>R$2.000,00*</strong>"
      image-src="/third.png"
      image-alt="3º lugar"
      :reverse="true"
    />

    <!-- New paragraph -->
    <p class="premiacao-footnote">
      *Convertidos em insumos para o projeto. Imagens meramente ilustrativas.
    </p>
  </section>
</template>

<script setup>
import PremiacaoCard from './PremiacaoCard.vue'
</script>

<style scoped>
.first {
  background-color: #DBDC39;
}

.first::v-deep(.card-title) {
  color: #006634;
}

.first::v-deep(.card-description) {
  color: #006634;
}

.premiacao-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 0px;
}

.section-title {
  font-size: 2.5rem;
  color: #006634;
  text-align: center;
  margin-bottom: 40px;
  font-family: 'Boldonse';
  font-weight: 400;
}

/* ✅ New paragraph styling */
.premiacao-footnote {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: #006634;
  margin-top: 30px;
  font-size: 0.95rem;
}
</style>
