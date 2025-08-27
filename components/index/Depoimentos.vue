 <template>
    <section class="testimonials">
      <div class="testimonials-header">
        <h2>Depoimentos</h2>
      </div>
  
      <div class="testimonials-grid">
        <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-img-wrapper">
            <img
              class="testimonial-img"
              :src="testimonial.img"
              :alt="`Foto de ${testimonial.name}`"
            />
          </div>
          <div class="testimonial-content">
            <h3 class="person-name">{{ testimonial.name }}</h3>
            <p class="description">{{ testimonial.description }}</p>
            <span class="person-title">{{ testimonial.title }}</span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const testimonials = ref([
    {
      img: '/depoimento-Anderson.png', // Substitua por sua imagem de pessoa real
      name: 'Anderson Moreira',
      description: 'Os projetos escolares sustentáveis são de suma importância, não apenas por servir de estímulo à preservação do meio ambiente e redução de impactos, mas principalmente pela conscientização individual e coletiva. A escola é um lugar de formação de líderes e futuramente serão estes jovens que estarão à frente de grandes empresas e ocupando importantes cargos políticos.',
      title: 'Professor de biologia'
    }
  ]);
  </script>
  
  <style scoped>
  .testimonials {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 20px;
    background-color: #ffffff;
    font-family: 'Montserrat', sans-serif;
  }
  
  .testimonials-header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #0c4874;
    margin-bottom: 100px;
    text-align: center;
    font-family: 'Codec Warm Trial', sans-serif;
  }
  
  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    max-width: 800px;
    width: 100%;
  }
  
  .testimonial-card {
    background: #f7f7f7;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding-top: 60px; /* Aumentado para garantir espaço para o círculo */
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .testimonial-img-wrapper {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #0c4874; /* Cor de fundo para o caso de a imagem não carregar */
    border: 5px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra no círculo */
  }
  
  .testimonial-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  
  .testimonial-content {
    padding: 20px;
    padding-top: 30px; /* Ajusta o espaçamento após a imagem */
  }
  
  .person-name {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #0c4874;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  
  .description {
    font-size: 1rem;
    color: #333333;
    line-height: 1.5;
    margin-bottom: 15px;
  }
  
  .person-title {
    font-size: 0.9rem;
    color: #0c4874;
    font-weight: 600;
    display: block;
    margin-top: 10px;
    opacity: 0.8;
  }
  
  @media (max-width: 768px) {
    .testimonials-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>