<template>
    <section class="impact-section">
      <div class="impact-content">
        <h2>Impacto</h2>
        <p>
          Com parcerias entre instituições públicas e privadas, o programa amplia o acesso à informação de
          qualidade e valoriza a educação como ferramenta de mudança social.
        </p>
      </div>
    </section>
  </template>
  
  <script setup>
  // Não há lógica dinâmica ou dados reativos para este componente,
  // então o bloco de script pode ficar vazio.
  </script>
  
  <style scoped>
  .impact-section {
    background-color: #0072B0; /* Cor de fundo azul forte */
    padding: 80px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 200px;
  }
  
  .impact-content {
    max-width: 800px;
  }
  
  .impact-content h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #F08A3C; /* Cor do título laranja */
    margin-bottom: 20px;
    font-family: 'Codec Warm Trial', sans-serif;
  }
  
  .impact-content p {
    font-size: 1.2rem;
    font-weight: 400;
    color: #ffffff; /* Cor do texto branco */
    line-height: 1.5;
    font-family: 'Montserrat', sans-serif;
  }
  
  /* Media Query para telas menores */
  @media (max-width: 768px) {
    .impact-content h2 {
      font-size: 2.2rem;
    }
  
    .impact-content p {
      font-size: 1rem;
    }
  }
  </style>