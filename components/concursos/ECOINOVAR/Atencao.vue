<template>
    <div class="attention-container">
      <div class="attention-box">
        <h2 class="attention-title">ATENÇÃO!</h2>
        <p class="attention-text">
          Para validar sua inscrição, é obrigatório anexar o Termo de Adesão assinado. Baixe o modelo oficial, preencha, assine e depois faça o upload na sua inscrição.
        </p>
        <a href="/ANEXO3.docx" class="download-button">
          Baixe o Termo de Adesão
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      downloadTermo() {
        // Lógica para download do arquivo. Você pode usar um link direto,
        // uma chamada de API, etc.
        console.log('Iniciando o download do Termo de Adesão...');
        // Exemplo: window.open('/path-to-your-file/termo_adesao.pdf', '_blank');
      }
    }
  }
  </script>
  
  <style scoped>
  .attention-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  
  .attention-box {
    background-color: #006634; /* Um verde escuro, semelhante à imagem */
    color: #fff;
    padding: 30px 50px;
    border-radius: 20px;
    max-width: 800px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .attention-title {
    color: #cddc39; /* Amarelo limão */
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 20px;
    font-family: 'Boldonse';
  }
  
  .attention-text {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 30px;
    color: #cfd8dc;
    font-family: 'Montserrat', sans-serif;
  }
  
  .download-button {
    display: inline-block;
    background-color: #DBDC39; /* Amarelo limão */
    color: #006634;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 30px;
    text-decoration: none;
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .download-button:hover {
    background-color: #d4e157; /* Um pouco mais claro no hover */
  }
  </style>