<template>
  <div v-if="showBanner" class="cookie-banner">
    <p>
      Nesta página, usamos cookies para garantir que você tenha a melhor experiência.
      <NuxtLink href="/regulamento#Duvidas-Cookies" class="cookie-link">
        Mais informações <img src="/arrow-right.svg" alt="Seta para direita" loading="lazy" />
      </NuxtLink>
    </p>
    <button class="cookie-button" @click="acceptCookies">Ok, entendi!</button>
  </div>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue'
  
  const showBanner = ref(false)
  onMounted(() => {
    const alreadyAccepted = localStorage.getItem('cookiesAccepted')
    if (!alreadyAccepted) {
      showBanner.value = true
    }
  })
  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    showBanner.value = false
  }
</script>
  
<style scoped>
  .cookie-banner {
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: 20px;
    background: white;
    border: 2px solid #EE9137;
    border-radius: 12px;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 9999;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    flex-wrap: wrap;
    gap: 10px;
  }
  .cookie-banner p {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #056DAC;
    flex: 1;
  }
  .cookie-link {
    color: #056DAC;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  .cookie-link img {
    width: 14px;
    height: 14px;
  }
  .cookie-button {
    background: #EE9137;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 8px 16px;
    font-weight: 700;
    cursor: pointer;
    font-family: 'Codec Warm Trial', sans-serif;
    font-size: 14px;
  } 
  .cookie-button:hover {
    background: #d97f2a;
  }
  
  @media (max-width: 600px) {
    .cookie-banner {
      flex-direction: column;
      align-items: flex-start;
    }
    .cookie-button {
      align-self: flex-end;
    }
  }
</style>
  