<template>
  <section class="what-we-do">
    <div class="what-we-do-header">
      <h2>A INICIATIVA BUSCA:</h2>
    </div>

    <div class="what-we-do-grid">
      <div class="what-we-do-card" v-for="(item, index) in whatWeDoItems" :key="index">
        <div class="icon-wrapper">
          <img :src="item.icon" :alt="item.title" class="icon-drop" />
        </div>
        <div class="card-content">
          <h3 v-html="item.title"></h3>
          <p v-html="item.description"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const whatWeDoItems = ref([
  {
    icon: '/water-drop-icon.svg',
    title: '',
    description: 'Estimular soluções criativas para desafios ambientais e sociais.'
  },
  {
    icon: '/water-drop-icon.svg',
    title: '',
    description: 'Fomentar a inovação e o pensamento crítico no ambiente escolar e na comunidade.'
  },
  {
    icon: '/water-drop-icon.svg',
    title: '',
    description: 'Promover o engajamento comunitário e valorizar a cultura local.'
  },
  {
    icon: '/water-drop-icon.svg',
    title: '',
    description: 'Reconhecer e dar visibilidade a projetos com potencial de impacto positivo na sociedade e no meio ambiente.'
  }
]);
</script>

<style scoped>
/* Estilos mantidos do código anterior */
.what-we-do {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  background-color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}

.what-we-do-header h2 {
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  font-weight: 400;
  color: #006634;
  margin-bottom: 40px;
  font-family: 'Boldonse';
}

/* Alteração para o layout padrão (desktop) */
.what-we-do-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  width: 100%;
}

.what-we-do-card {
  border: 1px solid #006634;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  transition: box-shadow 0.3s ease;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.what-we-do-card:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.icon-wrapper {
  margin-bottom: 20px;
}

.icon-drop {
  width: 40px;
  height: auto;
}

.card-content h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #006634;
  margin-bottom: 5px;
}

.card-content p {
  font-size: 0.95rem;
  color: #006634;
  line-height: 1.5;
}

/*
  Ajustes de responsividade para telas pequenas
*/
@media (max-width: 768px) {
  .what-we-do {
    padding: 60px 0; /* Ajusta o padding para a rolagem */
    max-width: 100vw;
    overflow-x: hidden; /* Garante que a rolagem horizontal não saia do container */
  }

  .what-we-do-header {
    padding: 0 20px; /* Adiciona padding para o título */
  }

  /* Aplica Flexbox para a rolagem horizontal */
  .what-we-do-grid {
    display: flex; /* Mudança para flexbox */
    flex-wrap: nowrap; /* Impede a quebra de linha */
    gap: 20px;
    padding: 0 20px; /* Adiciona padding para os cards */
    overflow-x: auto; /* Habilita a rolagem horizontal */
    width: 100%;
    -webkit-overflow-scrolling: touch; /* Melhora a rolagem em iOS */
    justify-content: flex-start; /* Alinha os cards à esquerda */
  }

  /* Ajustes dos cards em telas menores */
  .what-we-do-card {
    min-width: 250px; /* Define uma largura mínima fixa para cada card */
    max-width: 250px; /* Mantém a largura fixa */
    flex-shrink: 0; /* Impede que os cards encolham */
  }

  .what-we-do-header h2 {
    margin-bottom: 30px;
  }
}

@media (max-width: 500px) {
  .what-we-do {
    padding: 40px 0;
  }
  .what-we-do-header {
    padding: 0 10px;
  }
  .what-we-do-grid {
    padding: 0 10px;
    gap: 15px;
  }
  .what-we-do-card {
    min-width: 200px; /* Reduz a largura mínima em telas muito pequenas */
    max-width: 200px;
  }
}
</style>