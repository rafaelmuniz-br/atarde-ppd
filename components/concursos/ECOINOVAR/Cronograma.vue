<template>
  <section class="cronograma">
    <h2>ETAPAS DA PREMIAÇÃO</h2>
    <p class="subtitle">Fique ligado(a) nas datas</p>
    <div class="timeline">
      <div class="event" v-for="(item, index) in eventos" :key="index">
        <span class="date">{{ item.data }}</span>
        <span class="description">{{ item.titulo }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
  const eventos = [
    { titulo: 'Abertura das inscrições', data: '25/08' },
    { titulo: 'Encerramento das inscrições', data: '18/09' },
    { titulo: 'Divulgação dos finalistas', data: '26/09' },
    { titulo: 'Premiação', data: '05/12' },
  ]
</script>

<style scoped>
  .cronograma {
    font-family: 'Codec Warm Trial', sans-serif;
    padding: 40px 20px;
    text-align: center;
  }

  .cronograma h2 {
    font-family: 'Boldonse';
    color: #006634;
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 10px;
  }

  .subtitle {
    color: #006634;
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 40px;
    font-family: 'Montserrat', sans-serif;
  }

  .timeline {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .event {
    display: flex;
    align-items: center;
    background: #F2F2F2;
    border-radius: 20px;
    padding: 5px;
    max-width: 800px; 
    width: 100%;
    box-sizing: border-box;
    white-space: nowrap;
    overflow-x: auto;
    border: 0.5px solid #C3C3C3;
  }

  .date {
    background: #DBDC39;
    color: #006634;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    padding: 8px 40px;
    border-radius: 20px;
    margin-right: 16px;
    white-space: nowrap;
  }

  .description {
    color: #006634;
    font-size: 1.2rem;
    font-weight: 400;
    text-align: left;
    font-family: 'Montserrat', sans-serif;
    white-space: nowrap;
  }

  @media (max-width: 505px) {
    .date,
    .description {
      font-size: 0.8rem;
      padding: 6px 18px; 
    }

    .cronograma h2 {
      font-size: 1.8rem;
    }

    .subtitle {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 400px) {
    .date,
    .description {
      font-size: 0.68rem;
      padding: 6px 16px;
    }

    .cronograma h2 {
      font-size: 1.5rem;
    }

    .subtitle {
      font-size: 0.8rem;
    }
  } 
</style>