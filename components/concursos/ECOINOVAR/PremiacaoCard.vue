<template>
  <div :class="['premiacao-card', { 'premiacao-card--reversed': reverse }]">
    <div class="content-wrapper">
      <div class="text-content">
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-description" v-html="description"></p>
      </div>
      <div class="image-wrapper">
        <img :src="imageSrc" :alt="imageAlt" class="card-image" />
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps<{
    title: string; 
    description: string; 
    imageSrc: string; 
    imageAlt: string;
    reverse?: boolean; 
  }>();
</script>
  
<style scoped>
  .premiacao-card {
    background-color: #6BB256;
    color: #f9f9f9;
    border-radius: 30px;
    max-width: 900px;
    min-height: 200px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-wrapper {
    display: flex;
    align-items: center;
    width: 100%;   
    padding: 0;
  }
  
  .premiacao-card--reversed .content-wrapper {
    flex-direction: row-reverse;
  }
  
  .text-content {
    flex: 1;
    padding: 0px 0;
    
    padding-right: 20px;
    padding-left: 50px
  }
  
  .premiacao-card--reversed .text-content {
    padding-left: 0px;
    padding-right: 50px;
    text-align: right;
  }

  .premiacao-card .text-content{
    text-align: left;
    padding-left: 50px;
  }
  
  .card-title {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 1.8rem;
    line-height: 1.2;
    letter-spacing: 0%;
    color: #f9f9f9;
    margin-bottom: 10px;
  }
  
  .card-description {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2rem;
    line-height: 1.5;
    letter-spacing: 0%;
    color: #f9f9f9;
  }
  
  .card-description strong {
    font-weight: 700;
  }
  
  .image-wrapper {
    width: 350px;
    height: 200px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center; 
  }
  
  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }

  @media (max-width: 600px) {
    .premiacao-card {
      min-height: auto;
      max-width: 95%;
      margin: 15px auto;
      
    }



    .content-wrapper {
      flex-direction: column-reverse;
      padding: 0px; 
      gap: 0px;
    }

    .premiacao-card--reversed .content-wrapper {
      flex-direction: column-reverse;
    }

    .premiacao-card--reversed .text-content {
      text-align: center;
      padding: 0;
    }

    .premiacao-card .text-content {
      text-align: center;
      padding: 0;
    }

    .premiacao-card--reversed .text-content {
      padding-left: 0;
      padding-right: 0;
      text-align: center;
    }

    .card-title {
      font-size: 1.2rem;
    }

    .card-description {
      font-size: 0.8rem;
      padding-left: 50px;
      padding-right: 50px;
    }

    .image-wrapper {
      width: 100%;
      height: auto;
      min-width: unset;
      margin-bottom: 10px;
    }
  }
</style>


  