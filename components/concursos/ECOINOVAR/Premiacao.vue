<template>
  <section class="premiacao-section">
    <h2 class="section-title">PREMIAÇÃO</h2>

    <PremiacaoCard
      class="first"
      title="1º lugar"
      description="<strong>Aluno(a):</strong> Notebook<br><strong>Professor(a):</strong> Hospedagem em hotel"
      image-src="/premiacao1.svg"
      image-alt="1º lugar"
      :reverse="true"
    />

    <PremiacaoCard
      title="2º lugar"
      description="<strong>Aluno(a):</strong> Tablet<br><strong>Professor(a):</strong> Notebook"
      image-src="/premiacao2.svg"
      image-alt="2º lugar"
      
    />

    <PremiacaoCard
      title="3º lugar"
      description="<strong>Aluno(a):</strong> Smartphone<br><strong>Professor(a):</strong> Tablet"
      image-src="/premiacao3.svg"
      image-alt="3º lugar"
      :reverse="true"
    />
  </section>
</template>

<script setup>
  import PremiacaoCard from './PremiacaoCard.vue'
</script>

<style scoped>
  .first{
    background-color: #DBDC39;

  }
 
  .first::v-deep(.card-title) {
    color: #006634
  }

  .first::v-deep(.card-description) {
    color: #006634
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
</style>
