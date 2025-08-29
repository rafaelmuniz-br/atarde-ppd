<template>
  <section class="text-image-section" :class="{ reverse }">
    <div class="text-content">
      <p class="subtitle" v-if="subtitle" v-html="subtitle"></p>
      <h2 v-html="title"></h2>
      
      <p v-if="description" class="description" v-html="description"></p>
      <a v-if="buttonText && buttonLink" :href="buttonLink" target="_blank" class="btn-primary">{{ buttonText }}</a>
    </div>
    <div class="image-content">
      <img :src="imageSrc" :alt="imageAlt" loading="lazy" />
    </div>
  </section>
</template>
 
<script setup>
  defineProps({
    title: String,
    subtitle: String,
    description: String,
    buttonText: String,
    buttonLink: String,
    imageSrc: String,
    imageAlt: String,
    reverse: Boolean,
  })
</script>

<style scoped>
  .text-image-section {
    display: flex;
    justify-content: flex-end;     
    align-items: center;
    gap: 80px;                    
    
    background: white;
    width: 100%;
    box-sizing: border-box;
    flex-direction: row;
  }
  .text-image-section.reverse {
    flex-direction: row-reverse;
  }
  .text-content {
    max-width: 30vw;
    text-align: left;
  }
  .text-content h2 {
    color: #0072B0;
    font-size: 3rem;
    margin-bottom: 10px;
    font-family: 'Codec Warm Trial', sans-serif;
    font-weight: 700;
  }
  .text-content .subtitle {
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    color: #747277;
    margin-bottom: 10px;
  }
  .text-content .description {
    font-size: 0.975rem;
    font-family: 'Montserrat', sans-serif;
    color: #0072B0;
    margin-bottom: 20px;
    line-height: 1.5;
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
  .image-content {
    max-width: 50vw;
    padding-right: 0;
  }
  .image-content img {
    width: 100%;
    height: auto;
    display: block;
  }
  @media (max-width: 1110px) {
    .text-image-section {
      justify-content: center;
      flex-direction: column;
      padding: 0px 20px 20px;
      text-align: center;
      gap: 30px; 
    }
    .text-image-section.reverse {
    flex-direction: column;     
    }
    .text-content {
      text-align: center;
      max-width: 100%;
      margin: auto;
      padding-left: 0;
      order: 2;
    }
    .image-content {
      width: 100%;
      max-width: 100%;
      margin-left: 0;
      margin-top: 30px;
      order: 1;
    }
    .image-content img {
      width: 100%;
    }
  }
</style>