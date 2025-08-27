<template>
    <section class="what-we-do">
      <div class="what-we-do-header">
        <h2>O que fazemos</h2>
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
      icon: '/water-drop-icon.svg', // Substitua pelo caminho real do seu ícone
      title: 'Formação e cultura:',
      description: 'Oficinas, projetos e concursos educativos'
    },
    {
      icon: '/water-drop-icon.svg',
      title: 'Conteúdo multiplataforma:',
      description: 'Materiais distribuídos em diferentes mídias.'
    },
    {
      icon: '/water-drop-icon.svg',
      title: 'Engajamento escolar:',
      description: 'Estudantes, professores, gestores e comunidade unidos pelo aprendizado.'
    }
  ]);
  </script>
  
  <style scoped>
  .what-we-do {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 20px;
    background-color: #ffffff;
    font-family: 'Montserrat', sans-serif;
  }
  
  .what-we-do-header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #0072B0;
    margin-bottom: 50px;
    text-align: center;
    font-family: 'Codec Warm Trial', sans-serif; /* Usando a fonte de inspiração */
  }
  
  .what-we-do-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    max-width: 1200px;
    width: 100%;
  }
  
  .what-we-do-card {
    border: 1px solid #0072B0;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    transition: box-shadow 0.3s ease;
    min-height: 200px; /* Para garantir uma altura mínima e consistente */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .what-we-do-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .icon-wrapper {
    margin-bottom: 20px;
  }
  
  .icon-drop {
    width: 30px; /* Ajuste o tamanho do ícone conforme necessário */
    height: auto;
  }
  
  .card-content h3 {
    font-size: 1.2rem;
    font-weight: 700;
    color: #0072B0;
    margin-bottom: 5px;
  }
  
  .card-content p {
    font-size: 1rem;
    color: #0072B0;
    line-height: 1.5;
  }
  
  /* Media Queries para responsividade */
  @media (max-width: 768px) {
    .what-we-do-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>