<template>
  <Duvidas
    title="Políticas de Privacidade"
    subtitle="Esse site valoriza a privacidade dos seus participantes e está comprometido em proteger os dados pessoais coletados por meio de nosso site. Esta Política de Privacidade explica como tratamos as informações que você nos fornece, de acordo com a Lei Geral de Proteção de Dados (LGPD)."
    :faqItems="faqItems"
  />
</template>

<script setup>
  import Duvidas from '@/components/Duvidas.vue';

  const faqItems = [
    {
      question: '1. Coleta de Dados Pessoais',
      answer: 'Durante a inscrição e participação no concurso, podemos coletar dados pessoais, como nome completo, CPF, endereço de e-mail, gênero, data de nascimento, telefone, endereço (CEP, Rua, número, complemento, bairro, cidade, estado), nome da mãe, nome de usuário e senha, e outros dados relevantes para a organização e comunicação do concurso. Esses dados são fornecidos diretamente por você ao preencher formulários em nosso site. Reforçamos que os participantes menores de idade precisarão da autorização expressa do responsável conforme o regulamento do concurso disponível nesta plataforma.',
    },
    {
      question: '2. Finalidade do Tratamento de Dados',
      answer: 'Os dados pessoais coletados são utilizados exclusivamente para a gestão do concurso, incluindo a comunicação com os participantes, envio de informações importantes, divulgação dos resultados e outras atividades relacionadas. Não utilizamos seus dados para fins comerciais ou compartilhamos com terceiros, exceto quando necessário para o cumprimento de obrigações legais.',
    },
    {
      question: '3. Segurança dos Dados',
      answer: 'Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais contra acessos não autorizados, perda, destruição ou alteração. Utilizamos tecnologias seguras e procedimentos rigorosos para garantir a confidencialidade e integridade das informações coletadas.',
    },
    {
      question: '4. Direitos dos Titulares de Dados',
      answer: 'Você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão de seus dados pessoais a qualquer momento. Para exercer esses direitos, entre em contato conosco por meio dos canais disponibilizados no site. Nos comprometemos a responder às suas solicitações de forma rápida e eficaz.',
    },
    {
      question: '5. Retenção de Dados',
      answer: 'Os dados pessoais serão mantidos apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados ou conforme exigido por lei. Após o término desse período, os dados serão devidamente descartados ou anonimizados.',
    },
    {
      question: '6. Alterações na Política de Privacidade',
      answer: 'Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças na legislação ou em nossas práticas de tratamento de dados. Qualquer alteração será comunicada aos usuários por meio do nosso site.',
    },
    {
      question: '7. Contato',
      answer: 'Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados pessoais, entre em contato conosco através do e-mail.',
    },
  ];
</script>
