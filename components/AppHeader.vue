<template>
  <header :class="['header', { 'header--scrolled': isScrolled }]">
    <div class="container">
      <div class="logo">
        <NuxtLink to="/">
          <img src="/public/logo-ppd.svg" alt="Logo Portal de Premiações Diversas" loading="lazy"/>
        </NuxtLink>
      </div>

      <nav :class="['nav', { 'nav--open': isMenuOpen }]">
        <ul>
          <li><NuxtLink to="/" @click="closeMenus">Início</NuxtLink></li>
          <li><NuxtLink to="/sobre" @click="closeMenus">Sobre o programa</NuxtLink></li>

          <li class="dropdown-container" @click.stop="toggleDropdown">
            <a href="#" class="dropdown-toggle" :class="{ 'dropdown-active': isDropdownOpen }">
              Concursos
              <span class="dropdown-arrow">▼</span>
            </a>
            <ul class="dropdown-menu" :class="{ 'dropdown-open': isDropdownOpen }">
              <li><NuxtLink to="/concursos/ecoinovar" @click.stop="closeMenus">ECOINOVAR</NuxtLink></li>
            </ul>
          </li>
          
          <li><NuxtLink to="/regulamento" @click="closeMenus">Regulamento</NuxtLink></li>
          <li><NuxtLink to="/contato" @click="closeMenus">Contato</NuxtLink></li>
        </ul>
      </nav>

      <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen" aria-label="Abrir menu">
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
        <span :class="{ open: isMenuOpen }"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isDropdownOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeMenus = () => {
  isMenuOpen.value = false;
  isDropdownOpen.value = false;
}

const closeDropdownOnClickOutside = (event) => {
  if (!event.target.closest('.dropdown-container')) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('click', closeDropdownOnClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('click', closeDropdownOnClickOutside)
})

watch(isMenuOpen, (newValue) => {
  if (!newValue) {
    isDropdownOpen.value = false;
  }
});
</script>

<style scoped>
/* Estilos existentes... */

.nav ul li a,
.cta {
  font-family: 'Codec Warm Trial', sans-serif;
  font-weight: 700;
  font-style: normal; 
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0%;
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  box-shadow: none;
  transition: box-shadow 0.3s ease;
  z-index: 1000;
}

.header--scrolled {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
}

.logo img {
  height: 50px;
  margin-right: 50px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 30px;
}

.nav ul li a {
  color: #0072B0;
  text-decoration: none;
  transition: color 0.2s;
}

.nav ul li a:hover {
  color: #EE9137;
}

.nav ul li a.router-link-active {
  color: #EE9137;
}

.cta {
  background: #EE9137;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  text-decoration: none;
  transition: background 0.2s;
}

.cta:hover {
  background: #d97f2a;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-toggle span {
  width: 24px;
  height: 2px;
  background: #F08A3C;
  transition: transform 0.3s, opacity 0.3s;
}

.menu-toggle span.open:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.menu-toggle span.open:nth-child(2) {
  opacity: 0;
}

.menu-toggle span.open:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

/* Novos estilos para o dropdown */
.dropdown-container {
  position: relative;
}

/* Estilizando 'Concursos' como um botão */
.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  
  /* Adicionando estilos de botão */
  background-color: white; /* Cor de fundo */
  border: 1px solid #056DAC; /* Borda da cor do menu */
  border-radius: 20px; /* Arredondamento */
  padding: 8px 16px; /* Espaçamento interno */
  color: #056DAC; /* Cor do texto */
  text-decoration: none;
  transition: all 0.2s ease;
}

.dropdown-toggle:hover {
  background-color: #0072B0;
  color: white;
}

.dropdown-toggle:hover .dropdown-arrow {
  color: white;
}

.dropdown-arrow {
  font-size: 10px;
  transition: transform 0.3s ease;
  color: #0072B0;
}

.dropdown-toggle.dropdown-active .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: none !important;
  flex-direction: column;
  background-color: white;
  z-index: 900;
}

.dropdown-menu.dropdown-open {
  display: flex !important;
}

.dropdown-menu li {
  margin: 0;
}

.dropdown-menu a {
  display: block;
  padding: 8px 15px;
  color: #0072B0;
  text-decoration: none;
  white-space: nowrap;
}


@media (min-width: 800px) {
  .dropdown-menu {
    position: absolute;
    top: calc(100% + 10px); /* Ajustado para criar um espaço de 10px */
    left: 50%;
    transform: translateX(-50%);
    min-width: 160px;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    align-items: center;
  }
  
  .nav ul {
    gap: 15px; /* Reduzindo o gap para que o botão não cause espaçamento excessivo */
  }

  .nav ul li {
    display: flex;
    align-items: center;
  }
  
  .nav ul li.dropdown-container > a.dropdown-toggle {
    display: inline-flex;
    align-items: center;
  }
}

@media (max-width: 800px) {
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: none;
    z-index: 999;
  }

  .dropdown-menu a {
    padding-top: 15px;
  }

  .nav--open {
    display: flex;
  }

  .nav ul {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 0;
    margin: 0;
  }
  
  .nav ul li {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menu-toggle {
    display: flex;
    position: relative;
    z-index: 1000;
  }
  
  .dropdown-menu {
    width: 100%;
    padding: 0;
    border-left: none;
  }
  
  .dropdown-menu li {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>