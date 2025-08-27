<template>
  <section class="faq-container">
    <div class="faq-header">
      <h2 class="faq-title">{{ title }}</h2>
      <p class="faq-subtitle">{{ subtitle }}</p>
    </div>

    <div class="faq-list">
      <div
        v-for="(item, index) in faqItems"
        :key="index"
        :class="['faq-item', { 'faq-item--open': openIndex === index }]"
      >
        <button class="faq-question" @click="toggleFaq(index)">
          <span v-html="item.question"></span>
          <span class="faq-arrow"></span>
        </button>
        <div class="faq-answer-wrapper" :style="{ maxHeight: openIndex === index ? '500px' : '0' }">
          <p class="faq-answer" v-html="item.answer"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref, defineProps } from 'vue';

  const props = defineProps<{
    title: string; 
    subtitle: string; 
    faqItems: Array<{ 
      question: string; 
      answer: string; 
    }>;
  }>();
  
  const openIndex = ref<number | null>(null);
  
  const toggleFaq = (index: number) => {
    openIndex.value = openIndex.value === index ? null : index;
  };
</script>

<style scoped>
  .faq-container {
    padding: 40px 20px;
    max-width: 900px;
    margin: 0 auto;
    color: #056DAC; 
  }
  .faq-header {
    text-align: left;
    margin-bottom: 40px;
  }
  .faq-title {
    font-family: 'Codec Warm Trial', sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 2rem;
    line-height: 1.2;
    letter-spacing: 0%;
    color: #0072B0; 
    margin-bottom: 10px;
  }
  .faq-subtitle {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0%;
    color: #056DAC;
  }
  .faq-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .faq-item {
    background-color: #D2E7F6;
    border-radius: 20px;
    overflow: hidden;
    transition: background-color 0.3s ease;
  }
  .faq-item--open {
    background-color: white;
  }
  .faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px 20px;
    background: none;
    border: none;
    text-align: left;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400; 
    font-size: 1rem;
    color: #056DAC;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  .faq-item--open .faq-question {
    color: #056DAC;
    background-color: #D2E7F6;
  }
  .faq-question:hover {
    color: #EE9137;
  }
  .faq-arrow {
    width: 12px;
    height: 12px;
    border-right: 2px solid #056DAC;
    border-bottom: 2px solid #056DAC;
    transform: rotate(-45deg);
    transition: transform 0.3s ease, border-color 0.3s ease;
  }
  .faq-item--open .faq-arrow {
    transform: rotate(45deg); 
    border-color: #056DAC; 
  }
  .faq-answer-wrapper {
    max-height: 0; 
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }
  .faq-answer {
    padding: 0 20px 15px 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #056DAC;
  }  
  .faq-answer a {
    color: #7ED321;
    text-decoration: underline;
    font-weight: 600;
  }
  .faq-answer strong {
    font-weight: 700; 
  }
  .faq-answer ul {
    list-style-type: disc;
    margin-left: 20px;
    padding-left: 0;
  }
  .faq-answer ul li {
    margin-bottom: 5px;
  }
  @media (max-width: 768px) {
    .faq-title {
      font-size: 1.8rem;
    }
    .faq-question {
      font-size: 0.95rem;
    }
    .faq-answer {
      font-size: 0.9rem;
    }
  }
</style>
