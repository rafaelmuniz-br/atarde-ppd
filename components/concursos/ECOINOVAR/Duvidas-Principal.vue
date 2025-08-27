<template>
  <Duvidas
    title="TIRE SUAS DÚVIDAS"
    subtitle=""
    :faqItems="faqItems"
  />
</template>

<script setup>
  import Duvidas from '@/components/TemplateDuvidas-ECOINOVAR.vue';

  const faqItems = [
      { 
        question: 'Quem pode participar do concurso?',
        answer: 'Estudantes do Ensino Fundamental (anos iniciais e finais), Ensino Médio e EJA, regularmente matriculados em escolas municipais parceiras do Programa A TARDE Educação ou em escolas da rede estadual da Bahia.',
      },
      {
        question: 'Quando começam e terminam as inscrições?',
        answer: 'As inscrições estarão abertas de <strong>7 de agosto a 10 de outubro de 2025.</strong>',
      },
      {
        question: 'Preciso me inscrever sozinho(a)?',
        answer: 'Sim. A participação é individual, mas com o acompanhamento de um(a) professor(a), que orienta a produção.',
      },
      {
        question: 'Quais são os formatos de produção aceitos?',
        answer: 'Os formatos variam conforme a categoria: tirinhas, videorreportagem, artigo de opinião e crônica.',
      },
      {
        question: 'Como faço para enviar minha produção?',
        answer: 'O envio será feito por meio da plataforma indicada no site, no ato da inscrição. Instruções detalhadas estarão disponíveis no regulamento.',
      },
      {
        question: 'Haverá premiação?',
        answer: 'Sim! Alunos(as) e professores(as) autores das produções vencedoras receberão prêmios como notebook, tablet, smartphone, hospedagem e placas de reconhecimento. A premiação acontecerá em um evento especial realizado em Salvador.',
      },
      {
        question: 'Posso participar em grupo?',
        answer: 'Não. A participação é individual e cada estudante deve enviar sua própria produção.',
      },
      {
        question: 'Onde encontro o regulamento completo?',
        answer: 'O regulamento está disponível para download na própria página do concurso ou através desse link: <a href="/regulamento-CCJJ-2025.pdf" target="_blank" rel="noopener noreferrer"><strong>Regulamento completo.</strong></a>',
      },
    ];
</script>
