<template>
  <Duvidas
    id="Duvidas-Cookies"
    title="Aviso de Cookies"
    subtitle="Saiba como usamos cookies para melhorar sua experiência no site."
    :faqItems="faqItems"
  />
</template>

    
<script setup>
  import Duvidas from '@/components/Duvidas.vue'; 

  const faqItems = [
    {
      question: '1. O Que São Cookies?',
      answer: 'Cookies são pequenos arquivos de texto armazenados em seu dispositivo (computador, smartphone, tablet) quando você visita um site. Eles servem para reconhecer o usuário, armazenar suas preferências, e, em alguns casos, para coletar informações sobre sua navegação para oferecer uma experiência personalizada.',
    },
    {
      question: '2. Tipos de Cookies Utilizados',
      answer: 'Nosso site utiliza os seguintes tipos de cookies:<br><br><strong>Cookies Necessários:</strong> São essenciais para o funcionamento do site e permitem que você navegue e utilize as funcionalidades oferecidas. Estes cookies não requerem seu consentimento.<br><br><strong>Cookies de Desempenho:</strong> Coletam informações sobre como os usuários interagem com o site, como as páginas mais visitadas. Esses cookies são utilizados para melhorar a performance do site.<br><br><strong>Cookies Funcionais:</strong> Permitem que o site se lembre de escolhas que você fez (como seu idioma ou região) e forneça recursos mais pessoais.<br><br><strong>Cookies de Publicidade:</strong> Utilizados para fornecer anúncios mais relevantes para você e seus interesses.',
    },
    {
      question: '3. Consentimento para o Uso de Cookies',
      answer: 'Ao acessar nosso site pela primeira vez, você será apresentado a um banner de consentimento, no qual poderá escolher quais tipos de cookies deseja permitir. Ao clicar em "Aceitar Todos os Cookies", você consente com o uso de todos os cookies descritos acima. Caso prefira, você pode configurar suas preferências e aceitar apenas os cookies necessários ou específicos. Você pode, a qualquer momento, alterar ou retirar o seu consentimento utilizando as configurações de cookies disponíveis no site.',
    },
    {
      question: '4. Gestão de Cookies',
      answer: 'Você pode gerenciar as preferências de cookies diretamente em seu navegador, bloqueando ou excluindo cookies de sites específicos ou de todos os sites. No entanto, o bloqueio de cookies pode impactar a funcionalidade do site e a experiência do usuário.',
    },
    {
      question: '5. Proteção de Dados Pessoais',
      answer: 'Qualquer dado pessoal coletado por meio de cookies será tratado de acordo com a nossa Política de Privacidade e as disposições da LGPD. As informações obtidas por meio de cookies serão utilizadas apenas para as finalidades específicas descritas acima e não serão compartilhadas com terceiros, exceto quando necessário para o cumprimento de obrigações legais ou para a prestação de serviços.',
    },
    {
      question: '6. Alterações no Aviso de Cookies',
      answer: 'Este Aviso de Cookies pode ser atualizado para refletir mudanças na legislação ou nas práticas de tratamento de dados. Recomendamos que você revise este aviso periodicamente para estar informado sobre como estamos utilizando cookies e protegendo seus dados pessoais.',
    },
    {
      question: '7. Contato',
    answer: 'Se você tiver dúvidas sobre o uso de cookies ou sobre o tratamento de seus dados pessoais, entre em contato conosco através do e-mail.',
    },
  ];
</script>