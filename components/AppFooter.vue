<template>
  <div class="page-wrapper">
    <footer class="footer">
      <section class="logos">
  <div class="logos-container">
    <div class="footer-logos-group realizacao">
      <p>Realização</p>
      <div class="logos-list">
        <img src="/public/educacao1.svg" alt="A TARDE Educação" />
        <img src="/public/atarde1.svg" alt="Grupo A TARDE" />
      </div>
    </div>

    <div class="footer-logos-group apoio">
      <p>Apoio</p>
      <div class="logos-list">
        <img src="/public/CBPM.svg" alt="logo-CBPM" />
        <img src="/public/CODEBA.png" alt="logo-CODEBA" />
      </div>
    </div>
  </div>
</section>


      <div class="footer-bottom">
        <div class="footer-links">
          <NuxtLink href="/regulamento">Política de Privacidade</NuxtLink>
          <NuxtLink href="/regulamento">Política de Cookies</NuxtLink>
        </div>
        <p>Rua Professor Milton Cayres de Brito, 204 – Caminho das Árvores, Salvador - BA, 41820-570 &nbsp; &nbsp; &nbsp; CNPJ nº 15.111.297/0001-30</p>
        <p>Copyright © 1996 - 2025 Grupo A TARDE. Todos os direitos reservados.  &nbsp; &nbsp; &nbsp; EMPRESA EDITORA A TARDE S.A.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Layout principal */
.page-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer {
  background: white;
  color: #4A4A4A;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

/* Topo do rodapé */
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto 20px;
  padding: 0 20px;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 60%;
}

.footer-title {
  font-weight: 700;
  color: #056DAC;
  margin: 0;
}

.footer-subtitle {
  margin: 0;
  color: #056DAC;
}

.footer-cta {
  color: #7ED321;
  text-decoration: none;
  font-weight: 700;
  font-family: 'Codec Warm Trial', sans-serif;
}

.footer-cta span {
  margin-left: 4px;
}

.footer-right img {
  height: 60px;
}

/* Seção de logos */
.logos {
  max-width: 1200px;
  margin: 20px auto 50px;
  padding: 0 20px;
  box-sizing: border-box;
}

.logos-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
}

.footer-logos-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 300px;
  min-width: 250px;
}

.footer-logos-group p {
  font-weight: 300;
  margin-bottom: 20px;
  color: #056DAC;
  font-family: 'Montserrat', sans-serif;
}

.logos-list {
  display: flex;
  flex-wrap: wrap;
  gap: 45px;
  align-items: center;
}

.logos-list img {
  height: 45px;
  max-width: 150px;
  width: auto;
  object-fit: contain;
}

/* Parte inferior */
.footer-bottom {
  text-align: center;
  font-size: 12px;
  color: #4A4A4A;
  line-height: 1.4;
  padding: 0 20px;
  box-sizing: border-box;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 5px;
  flex-wrap: wrap;
}

.footer-links a {
  color: #4A4A4A;
  text-decoration: none;
}

.footer-links a:hover {
  color: #056DAC;
}

/* Responsivo */
@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-left {
    max-width: 100%;
    align-items: center;
  }

  .footer-right {
    margin-top: 10px;
  }

  .logos-container {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .footer-logos-group {
    align-items: center;
    text-align: center;
    flex: 1 1 10px;
  }

  .logos-list {
    justify-content: center;
  }

  .footer-links {
    flex-direction: column;
    gap: 5px;
  }
}

</style>

