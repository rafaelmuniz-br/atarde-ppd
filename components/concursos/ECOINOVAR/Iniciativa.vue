<template>
  <section class="what-we-do">
    <div class="what-we-do-header">
      <h2>A INICIATIVA BUSCA:</h2>
    </div>

    <div class="what-we-do-grid">
      <div
        class="what-we-do-card"
        v-for="(item, index) in whatWeDoItems"
        :key="index"
      >
        <div class="icon-wrapper">
          <img :src="item.icon" :alt="item.title" class="icon-drop" />
        </div>
        <div class="card-content">
          <h3 v-html="item.title"></h3>
          <p v-html="item.description"></p>
        </div>
      </div>
    </div>

    <!-- ✅ Download Button -->
    <a href="https://docs.google.com/document/d/14jq8N9_nNxhMr9lU3sb2P-5Kqvv7ojX61QX1sYeuQ1A/edit?tab=t.0" target="_blank" class="download-button">
      Inscreva-se
    </a>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const whatWeDoItems = ref([
  {
    icon: '/solution-icon.svg',
    title: '',
    description: 'Estimular soluções criativas para desafios ambientais e sociais.',
  },
  {
    icon: '/chat-icon.svg',
    title: '',
    description: 'Fomentar a inovação e o pensamento crítico no ambiente escolar e na comunidade.',
  },
  {
    icon: '/community-icon.svg',
    title: '',
    description: 'Promover o engajamento comunitário e valorizar a cultura local.',
  },
  {
    icon: '/tree-icon.svg',
    title: '',
    description:
      'Reconhecer e dar visibilidade a projetos com potencial de impacto positivo na sociedade e no meio ambiente.',
  },
])
</script>

<style scoped>
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

/* ✅ Download Button Style */
.download-button {
  display: inline-block;
  margin-top: 50px;
  background-color: #dbdc39;
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
  background-color: #d4e157;
}

/* Responsiveness */
@media (max-width: 768px) {
  .what-we-do {
    padding: 60px 0;
    max-width: 100vw;
    overflow-x: hidden;
  }

  .what-we-do-header {
    padding: 0 20px;
  }

  .what-we-do-grid {
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
    padding: 0 20px;
    overflow-x: auto;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    justify-content: flex-start;
  }

  .what-we-do-card {
    min-width: 250px;
    max-width: 250px;
    flex-shrink: 0;
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
    min-width: 200px;
    max-width: 200px;
  }
}
</style>
