<template>
  <div class="main-container">
    <h1 class="title">CATEGORIAS<br></h1>
    <div class="buttons-row">
      <button :class="{ active: activeTab === 'eco-navegando' }" @click="setActiveTab('eco-navegando')">
        "Eco-navegando": para um<br>futuro sustentável
      </button>
      <button :class="{ active: activeTab === 'eco-terra' }" @click="setActiveTab('eco-terra')">
        "Eco-Terra": soluções para<br>a sustentabilidade
      </button>
    </div>

    <div class="content-wrapper">
      <div class="content">
        <div v-if="activeTab === 'eco-navegando'">
          <p class="intro-paragraph">
            Esta categoria abrange projetos voltados para a preservação e o uso sustentável dos ecossistemas marinhos, costeiros e de água doce (rios, lagos, mangues, etc.). Os projetos podem explorar temas como:<br><br>
          </p>
          <ul>
            <li>
              <img src="/water-drop-icon.svg" alt="Ícone de gota de água" class="icon" />
              <p><strong>Qualidade da água:</strong> Monitoramento, tratamento e redução da poluição hídrica.</p>
            </li>
            <li>
              <img src="/fish-icon.svg" alt="Ícone de gota de água" class="icon" />
              <p><strong>Biodiversidade aquática:</strong> Conservação de espécies, recuperação de habitats e combate a espécies invasoras.</p>
            </li>
            <li>
              <img src="/wave-icon.svg" alt="Ícone de gota de água" class="icon" />
              <p><strong>Recursos hídricos:</strong> Uso eficiente da água, reuso e gestão sustentável.</p>
            </li>
            <li>
              <img src="/energy-icon.svg" alt="Ícone de gota de água" class="icon" />
              <p><strong>Tecnologias sustentáveis:</strong> Desenvolvimento de soluções inovadoras para transporte aquático, pesca sustentável, energias renováveis geradas na água, entre outros.</p>
            </li>
            <li>
              <img src="/book-icon.svg" alt="Ícone de gota de água" class="icon" />
              <p><strong>Conscientização e educação ambiental:</strong> Campanhas e ações que promovem a responsabilidade socioambiental em relação aos ambientes aquáticos.</p>
            </li>
          </ul>
        </div>

        <div v-else-if="activeTab === 'eco-terra'">
          <p class="intro-paragraph">
            Esta categoria engloba projetos focados na proteção e na gestão sustentável dos ecossistemas terrestres, incluindo florestas, solos, áreas urbanas e rurais. Os projetos podem abordar temas como:<br><br>
          </p>
          <ul>
            <li>
              <img src="/recicle-icon.svg" alt="Ícone de gota de água" class="icon" />
              <p><strong>Gestão de resíduos:</strong> Redução, reutilização, reciclagem e tratamento de resíduos sólidos.</p>
            </li>
            <li>
              <img src="/energy-icon.svg" alt="Ícone de gota de água" class="icon" />
              <p><strong>Energias renováveis:</strong> Desenvolvimento e aplicação de fontes de energia limpa (solar, eólica, biomassa, etc.).</p>
            </li>
            <li>
              <img src="/agriculture-icon.svg" alt="Ícone de gota de água" class="icon" />
              <p><strong>Agricultura sustentável:</strong> Práticas agrícolas de baixo impacto, segurança alimentar e valorização de produtos locais.</p>
            </li>
            <li>
              <img src="/soil-icon.svg" alt="Ícone de gota de água" class="icon" />
              <p><strong>Conservação do solo:</strong> Prevenção da erosão, recuperação de áreas degradadas e manejo sustentável.</p>
            </li>
            <li>
              <img src="/beach-icon.svg" alt="Ícone de gota de água" class="icon" />
              <p><strong>Biodiversidade terrestre:</strong> Proteção de flora e fauna, reflorestamento e corredores ecológicos.</p>
            </li>
            <li>
              <img src="/buildings-icon.svg" alt="Ícone de gota de água" class="icon" />
              <p><strong>Construção e urbanismo sustentável:</strong> Soluções para edificações e cidades mais ecológicas.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref('eco-navegando');

const setActiveTab = (tab) => {
  activeTab.value = tab;
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
}

.title {
  color: #006634;
  font-family: 'Boldonse';
  font-weight: 400;
  font-size: 32px;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 20px;
}

.buttons-row {
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
}

.buttons-row button {
  flex: 1;
  padding: 20px 10px;
  border: 1px solid #d8e2d2;
  background-color: EEEEEE;
  color: #006634;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
  font-size: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.4;
  background-color: EEEEEE;
}

.buttons-row button.active {
  background-color: #DBDC39;
  color: #006634;
  border-color: #006634;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.content-wrapper {
  width: 100%;
  max-width: 1000px;
  padding: 30px;
  background-color: EEEEEE;
  border-radius: 12px;
  border: 1px solid #006634;
}

.content {
  color: #006634;
  font-family: 'Montserrat', sans-serif;
}

.intro-paragraph {
  margin-bottom: 20px;
}

.content p {
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

.content ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.content li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px; /* Alterado de 12px para 20px */
}

.icon {
  width: 20px;
  height: 20px;
  margin-right: 12px;
  flex-shrink: 0;
  margin-top: 2px;
}

.list-item-title {
  font-weight: 600;
  color: #006634;
}

/* Versão Mobile */
@media (max-width: 768px) {
  .main-container {
    padding: 20px 10px;
  }
  
  .content-wrapper {
    padding: 20px;
    
  }

  .title {
    font-size: 28px;
    margin-bottom: 15px;
  }

  .buttons-row {
    flex-direction: column;
    gap: 5px;
  }

  .buttons-row button {
    font-size: 14px;
    padding: 15px 10px;
  }

  .content p,
  .content li {
    font-size: 14px;
    line-height: 1.5;
  }
}
</style>