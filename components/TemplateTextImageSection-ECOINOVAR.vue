<template>
  <section class="text-image-section" :class="{ reverse }">
    <div class="text-content">
      <h2 v-html="title"></h2>
      <p class="subtitle" v-if="subtitle" v-html="subtitle"></p>
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
  justify-content: space-between; /* Alinha o conteúdo nas extremidades */
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
  padding: 50px;
  padding-left: 150px;
  /* A margem será controlada pelo padding da seção */
}
.text-content h2 {
  color: #006634;
  font-size: 3rem;
  margin-bottom: 10px;
  font-family: 'Boldonse';
  font-weight: 400;
}
.text-content .subtitle {
  font-size: 1.2rem;
  font-family: 'Montserrat', sans-serif;
  color: #006634;
  margin-bottom: 10px;
}
.text-content .description {
  font-size: 0.975rem;
  font-family: 'Montserrat', sans-serif;
  color: #006634;
  margin-bottom: 20px;
  line-height: 1.5;
}
.btn-primary {
  display: inline-block;
  background: #DBDC39;
  color: #006634;
  padding: 10px 20px;
  border-radius: 20px;
  text-decoration: none;
  font-family: 'Codec Warm Trial', sans-serif;
  font-weight: 700;
}
.image-content {
  max-width: 50vw;
  /* A margem será controlada pelo padding da seção */
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
    padding: 0;
    order: 2;
  }
  .text-content h2{
    font-size: 2rem;
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