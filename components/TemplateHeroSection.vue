<template>
  <section class="hero-section">
    <div class="hero-text">
      <h1 v-html="title"></h1>
      <p v-html="description"></p>
      <a v-if="buttonText" :href="buttonLink" target="_blank" class="btn-primary">{{ buttonText }}</a>
    </div>

    <div class="hero-image">
      <img class="mosaic" :src="imageSrc" :alt="imageAlt" loading="lazy"/>
    </div>
  </section>
</template>
  
<script setup>
  defineProps({
    title: String,
    description: String,
    buttonText: String,
    buttonLink: String,
    imageSrc: String,
    imageAlt: String
  })
</script>
  
<style scoped>
  .hero-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 100px 20px 30px;
    background: white;
    width: 100%;
    max-width: none;
    box-sizing: border-box;
  }
  .hero-text {
    max-width: 30vw;
    padding-left: 20px;
    margin-left: auto;
  }
  .hero-text h1 {
    color: hsl(203, 94%, 35%);
    font-size: 3rem;
    margin-bottom: 10px;
    font-family: 'Codec Warm Trial', sans-serif;
    font-weight: 700;
  }
  .hero-text p {
    font-size: 1.2rem;
    margin-bottom: 20px;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.5;
    color: #0C4874;
  }
  .btn-primary {
    display: inline-block;
    background: #EE9137;
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    text-decoration: none;
    font-family: 'Codec Warm Trial', sans-serif;
    font-weight: 700;
  }
  .hero-image {
    max-width: 50vw;
    margin-left: auto; 
    padding-right: 0;
  }
  .hero-image .mosaic {
    width: 100%;
    height: auto;
    display: block;
  }
  @media (max-width: 1110px) {
    .hero-section {
      flex-direction: column;
      padding: 70px 20px 20px;
      text-align: center;
    }
    .hero-text {
      text-align: center;
      max-width: 100%;
      margin: auto;
      padding-left: 0;
    }
    .hero-image {
      width: 100%;
      max-width: 100%;
      margin-left: 0;
      margin-top: 30px;
    }
    .hero-image .mosaic {
      width: 100%;
    }
  }
</style>
  