<template>
  <Duvidas
    title="Termo de Uso do Site"
    subtitle="Este Termo de Uso rege a utilização do nosso site e a participação no projeto. Ao acessar e utilizar este site, você concorda com os termos e condições descritos abaixo. É importante que você leia atentamente este documento, pois ele descreve os seus direitos e obrigações em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD). "
    :faqItems="faqItems"
  />
</template>

<script setup>
  import Duvidas from '@/components/Duvidas.vue';

  const faqItems = [
    {
      question: '1. Aceitação dos Termos',
      answer: 'Ao se inscrever e participar do projeto, você concorda em cumprir e respeitar as disposições deste Termo de Uso. Caso não concorde com alguma parte deste Termo, solicitamos que não utilize o site ou participe do projeto. ',
    },
    {
      question: '2. Coleta e Tratamento de Dados Pessoais',
      answer: 'Para a inscrição e participação no projeto, será necessário o fornecimento de certos dados pessoais, como nome, e-mail, telefone, e outros dados necessários para a gestão do projeto. Todos os dados coletados serão tratados em conformidade com a LGPD, sendo utilizados exclusivamente para as seguintes finalidades: Gestão do projeto: Processamento das inscrições, organização das atividades, comunicação com os participantes e divulgação dos resul-tados; Cumprimento de Obrigações Legais: Tratamento de dados conforme exigido pela le-gislação aplicável e/ou Análise e Melhoria dos Serviços: Monitoramento do uso do site para aprimorar a experiência do usuário e garantir a segurança dos dados.',
    },
    {
      question: '3. Direitos dos Titulares de Dados',
      answer: 'Em conformidade com a LGPD, você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão de seus dados pessoais a qualquer momento. Para exercer esses direitos, entre em contato conosco através dos canais indicados no site.',
    },
    {
      question: '4. Segurança e Proteção dos Dados',
      answer: 'Implementamos medidas de segurança adequadas para proteger seus dados pessoais contra acessos não autorizados, perda, destruição ou alteração. Utilizamos tecnologias seguras para garantir a confidencialidade e integridade das informações fornecidas.',
    },
    {
      question: '5. Uso de Conteúdo e Propriedade Intelectual',
      answer: 'Todo o conteúdo disponível no site do projeto, imagens, gráficos, logotipos, vídeos, e outros materiais, é de propriedade exclusiva do projeto ou de seus licenciadores. Você está autorizado a usar este conteúdo apenas para fins pessoais e educacionais relacionados a este objeto. Qualquer reprodução, distribuição, modificação ou uso indevido do conteúdo sem autorização expressa é proibido. ',
    },
    {
      question: '6. Conduta dos Participantes',
      answer: 'Ao utilizar o site e participar do concurso, você se compromete a não:<br>- Violar qualquer legislação aplicável ou os direitos de terceiros;<br>- Utilizar o site para fins ilegais ou não autorizados;<br>- Enviar informações falsas ou enganosas;<br>- Comprometer a segurança ou integridade do site;<br>- Praticar qualquer ato que possa prejudicar a organização do concurso ou outros participantes.',
    },
    {
      question: '7. Limitação de Responsabilidade',
      answer: 'A promotora do projeto não se responsabiliza por quaisquer danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou da incapacidade de uso do site, incluindo, mas não se limitando a, erros, omissões, interrupções, defeitos, atrasos na operação ou transmissão, falhas na linha de comunicação, ou qualquer outro dano',
    },
    {
      question: '8. Alterações nos Termos de Uso',
      answer: 'O projeto reserva-se o direito de modificar este Termo de Uso a qualquer momento. Qualquer alteração será comunicada aos usuários por meio do site, sendo que o uso continuado do site após tais mudanças constitui sua aceitação dos novos termos. ',
    },
    {
      question: '9. Lei Aplicável e Foro',
      answer: 'Este Termo de Uso é regido pelas leis da República Federativa do Brasil. Qualquer disputa decorrente deste Termo será submetida ao foro da comarca de Salvador, com exclusão de qualquer outro, por mais privilegiado que seja.',
    },
    {
      question: '10. Contato',
      answer: 'Se você tiver dúvidas ou questões sobre este Termo de Uso ou sobre o tratamento dos seus dados pessoais, entre em contato conosco através do e-mail.',
    },
  ];
</script>
