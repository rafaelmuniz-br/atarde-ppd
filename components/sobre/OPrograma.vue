<template>
    <section class="impact-section">
      <div class="impact-content">
        <h2>Sobre o programa</h2>
        <p>
          Há quase três décadas, o A TARDE Educação fortalece a leitura, a escrita e a cidadania nas escolas da rede pública.
          <br><br>O programa integra jornalismo, educação e compromisso social em ações que inspiram transformação.
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
    background-color: white; /* Cor de fundo azul forte */
    padding: 80px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 200px;
  }
  
  .impact-content {
    max-width: 1200px;
  }
  
  .impact-content h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #0072B0; /* Cor do título laranja */
    margin-bottom: 50px;
    font-family: 'Codec Warm Trial', sans-serif;
  }
  
  .impact-content p {
    font-size: 1.2rem;
    font-weight: 400;
    color: #0072B0; /* Cor do texto branco */
    line-height: 1.5;
    font-family: 'Montserrat', sans-serif;
    max-width: 1200px;
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
