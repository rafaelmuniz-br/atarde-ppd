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
        answer: 'Professores e estudantes da rede pública estadual de ensino, abrangendo as dimensões escolar e comunitária nos municípios de Jequié, Irecê, Maracás, Santaluz, Salvador, Candeias, Ilhéus e Candeias.',
      },
      {
        question: 'Como faço para me inscrever?',
        answer: 'A inscrição deve ser feita por meio do formulário disponível no botão “Inscreva-se” deste site. É necessário que o(a) professor(a) responsável pela equipe leia o regulamento e preencha todas as informações corretamente.',
      },
      {
        question: 'Preciso baixar o regulamento?',
        answer: 'Sim. O regulamento está disponível para download no botão “baixe o regulamento” e deve ser lido com atenção antes do envio do projeto.',
      },
      {
        question: 'Até quando posso me inscrever?',
        answer: 'As inscrições estarão abertas até 18/09, conforme calendário oficial disponível no regulamento.',
      },
      {
        question: 'Como será feita a seleção dos projetos?',
        answer: 'Os projetos serão avaliados por uma comissão formada por especialistas nas áreas de educação, sustentabilidade e comunicação. Os critérios de avaliação estão detalhados no regulamento.',
      },
      {
        question: 'Quantos alunos podem participar por equipe?',
        answer: 'Cada equipe poderá ser composta por até três estudantes, acompanhados por um(a) professor(a) responsável.',
      },
      {
        question: 'É preciso enviar o projeto físico ou digital?',
        answer: 'Todos os materiais deverão ser enviados digitalmente, por meio do formulário de inscrição. Não é necessário o envio físico.',
      },
      {
        question: 'Como saberei se fui selecionado(a)?',
        answer: 'Os resultados serão divulgados neste site e nas redes sociais do programa, conforme cronograma de premiação.',
      },
    ];
</script>
