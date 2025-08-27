// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/css/fonts.css'],

  // *** INÍCIO DA MODIFICAÇÃO AQUI ***
  app: {
    head: {
      // Aqui adicionar as otimizações de head (meta tags, preconnect, preload, etc.)
      // Por exemplo:
      title: 'Portal Premiações ATARDE',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/flavicon-CCJJ25.svg' }
      ]
      // meta: [
      //   { name: 'description', content: 'Explore o concurso Jovem Jornalista e prepare-se para o futuro da comunicação.' },
      //   { property: 'og:url', content: 'https://rafaelmuniz-br.github.io/atarde-cjj/' },
      //   // ... outras meta tags
      // ],
      // link: [
      //   { rel: 'preload', as: 'image', href: '/imgsOK/mosaico-faleconosco.svg' },
      //   // ... outros links
      // ]
    }
  },
  // *** FIM DA MODIFICAÇÃO AQUI ***

  // Geração estática (SSG)
  nitro: {
    preset: 'static',
    compressPublicAssets: true, // Adicionei isso para otimização
    prerender: {
      routes: ['/'], // Garante que a página inicial seja incluída
    }
  },

  // Ativa auto-import de componentes
  components: true,

  // Se você estiver usando módulos, ajuste o hostname do sitemap se for o caso:
  modules: [
    // '@nuxt/image', // Descomente se estiver usando este módulo
    // '@nuxtjs/sitemap', // Descomente se estiver usando este módulo
    // '@nuxtjs/robots', // Descomente se estiver usando este módulo
  ],
  // Se '@nuxtjs/sitemap' estiver ativo, defina o hostname completo:
  // sitemap: {
  //   hostname: 'https://rafaelmuniz-br.github.io/atarde-cjj/', // Atualize com o URL completo do seu site
  // },
  // image: {
  //   // ... suas configurações de @nuxt/image
  // }
})
