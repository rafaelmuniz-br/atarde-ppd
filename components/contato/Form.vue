<template>
  <section class="fale-conosco-wrapper">
    <div class="fale-conosco-container">

      <div class="form-section">
        <div class="fale-conosco-header">
          <h2 class="fale-conosco-title">Fale Conosco</h2>
        </div>

        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="fullName" class="sr-only">Nome completo*</label>
            <input
              type="text"
              id="fullName"
              v-model="formData.fullName"
              placeholder="Nome completo*"
              required
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="email" class="sr-only">Email*</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              placeholder="Email*"
              required
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="phone" class="sr-only">Telefone*</label>
            <input
              type="tel"
              id="phone"
              v-model="formData.phone"
              placeholder="Telefone*"
              required
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="municipality" class="sr-only">Município e Instituição*</label>
            <input
              type="text"
              id="municipality"
              v-model="formData.municipality"
              placeholder="Município e Instituição*"
              required
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="message" class="sr-only">Mensagem:*</label>
            <textarea
              id="message"
              v-model="formData.message"
              placeholder="Mensagem:*"
              required
              rows="5"
              class="form-textarea"
            ></textarea>
          </div>

          <div class="form-actions">
            <p class="required-note">*Campo obrigatório</p>
            <button type="submit" class="btn-submit">Enviar email</button>
          </div>
          
        </form>
      </div>

      <div class="image-section">
        <img src="/public/contato-mosaic.png" alt="Ilustração Fale Conosco" width="500" height="400" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const formData = ref({
  fullName: '',
  email: '',
  phone: '',
  municipality: '',
  message: '',
})

const handleSubmit = () => {
  const templateParams = {
    fullName: formData.value.fullName,
    email: formData.value.email,
    phone: formData.value.phone,
    municipality: formData.value.municipality,
    message: formData.value.message,
  }

  emailjs
    .send(
      'service_izksawl',      // seu service ID
      'template_4q553yd',     // seu template ID
      templateParams,
      'yOVXzc8dVipXyXT4S'     // sua public key (User/Public Key do EmailJS)
    )
    .then(() => {
      alert('Mensagem enviada com sucesso!')
    })
    .catch((error) => {
      console.error('Erro ao enviar mensagem:', error)
      alert('Erro ao enviar mensagem. Tente novamente.')
    })
}
</script>

<style scoped>
  .fale-conosco-wrapper {
    padding-top: 40px;
    padding-inline: 20px;
    margin-top: 60px;
  }
  
  .fale-conosco-container {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    gap: 80px;
    align-items: flex-start;
    justify-content: space-between; /* Mantido original para image-section */
    flex-wrap: wrap; 
  }
  
  .form-section {
    flex: 1;
    /* Alterado: Definido max-width em pixels para controlar a largura máxima em telas grandes */
    max-width: 600px; /* Um valor de exemplo, ajuste conforme desejar */
    width: 100%; /* Garante que ocupe 100% do espaço disponível até o max-width */
    min-width: 300px; /* Min-width para evitar que o formulário fique muito pequeno */
    padding: 30px 25px;
    border-radius: 8px;
    /* Essencial: Inclui padding e border no cálculo da largura total */
    box-sizing: border-box; 
  }
  
  .fale-conosco-header {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .fale-conosco-title {
    font-family: 'Codec Warm Trial', sans-serif;
    font-weight: 700;
    font-size: 2rem;
    color: #0072B0;
    text-align: left;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .form-group {
    width: 100%;
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
  
  .form-input,
  .form-textarea {
    width: 100%; /* Garante que preencham 100% do .form-group */
    padding: 12px 15px;
    border: 1px solid #0072B0;
    border-radius: 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: #0072B0;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    /* Essencial: Inclui padding e border no cálculo da largura total */
    box-sizing: border-box; 
  }
  
  .form-input::placeholder,
  .form-textarea::placeholder {
    color: #0072B0;
    opacity: 0.7;
  }
  
  .form-input:focus,
  .form-textarea:focus {
    border-color: #EE9137;
    box-shadow: 0 0 0 2px rgba(238, 145, 55, 0.3);
  }
  
  .form-textarea {
    resize: vertical;
    min-height: 100px;
  }
  
  .form-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    gap: 15px;
    flex-wrap: wrap; 
  }

  .required-note {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.85rem;
    color: #0072B0;
    text-align: left;
    margin: 0;
    flex-shrink: 0;
  }
  
  .btn-submit {
    background: #EE9137;
    color: white;
    padding: 10px 40px;
    border-radius: 20px;
    font-family: 'Codec Warm Trial', sans-serif;
    font-weight: 700;
    font-size: 14px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    /* Alterado: Garante que o botão tenha sua largura natural (auto) */
    width: auto; 
    text-align: center;
  }
  
  .btn-submit:hover {
    background: #d97f2a;
  }
  
  /* --- Estilos Originais da Imagem (Nenhuma alteração aqui) --- */
  .image-section {
    flex: 1; 
    max-width: 50vw; 
    min-width: 500px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .image-section img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }
  
  /* --- MEDIA QUERIES --- */
  @media (max-width: 1110px) {
    .fale-conosco-container {
      flex-direction: column;
      align-items: center;
      gap: 30px;
      justify-content: center; /* Centraliza quando em coluna */
    }
  
    .form-section {
      text-align: center;
      max-width: 100%; /* Permite que o formulário ocupe toda a largura */
      min-width: unset; /* Remove min-width para permitir encolhimento */
      margin: auto; 
      order: 2; 
    }

    /* Removido: width: auto no form-input não é necessário aqui */
    /* .form-input{
      width: auto;
    } */

    .fale-conosco-title {
        text-align: center;
    }
  
    .image-section {
      width: 100%; /* Permite que a imagem ocupe 100% da largura em coluna */
      max-width: 100%; /* Garante que a imagem não seja muito grande */
      min-width: unset; /* Remove min-width para permitir encolhimento */
      margin-left: 0;
      margin-top: 30px;
      order: 1;
    }
  
    .image-section img {
      width: 100%;
    }

    .form-actions {
        flex-direction: column; 
        align-items: center; 
        gap: 10px;
    }

    /* Removido: Não aplica width: 100% ao botão nesta media query */
    /* .btn-submit {
        width: 100%; 
        text-align: center;
    } */
  }

  @media (max-width: 480px) {
    .fale-conosco-wrapper {
      padding: 20px 10px; /* Ajuste de padding para telas muito pequenas */
    }

    .form-section {
      padding: 20px 15px; 
      min-width: unset; /* Garante que o form-section possa encolher o máximo possível */
    }

    /* Removido: width: auto no form-input não é necessário aqui */
    /* .form-input{
      width: auto;
    } */

    .fale-conosco-title {
      font-size: 1.75rem; 
    }

    .form-input,
    .form-textarea {
      padding: 10px 12px; /* Ajuste o padding dos inputs para telas menores */
      font-size: 0.95rem;
      box-sizing: border-box; /* Garante que o padding não cause overflow */
    }

    .btn-submit {
      padding: 8px 15px; /* Ajuste o padding do botão para telas menores */
      font-size: 13px;
      /* Se precisar que o botão ocupe 100% em telas *muito* pequenas, adicione width: 100%; aqui */
      /* width: 100%; */
    }
  }
</style>