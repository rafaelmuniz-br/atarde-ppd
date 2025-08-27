<template>
    <section class="impact-section">
      <div class="impact-content">
        <h2>Política de Privacidade</h2>
        <p>
          Saiba o que é necessário para dar voz ao planeta
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
    color: #0C4874; /* Cor do título laranja */
    margin-bottom: 20px;
    font-family: 'Codec Warm Trial', sans-serif;
  }
  
  .impact-content p {
    font-size: 1.2rem;
    font-weight: 400;
    color: #0C4874; /* Cor do texto branco */
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