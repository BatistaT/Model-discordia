// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.interactions['@1.0.1'].responses.modals.create({
  token: `${context.params.event.token}`,
  custom_id: `acesso-modal`,
  title: `Solicite seu acesso`,
components: [
      {
        type: 1, // Component row
        components: [{
          type: 4, // Text input component, only valid in modals
          custom_id: 'Q1',
          label: `Digite seu nome e matrícula`,
          style: 1, // 1 for line, 2 for paragraph
          min_length: 1,
          max_length: 500,
          placeholder: 'Digite seu nome e matrícula',
          required: true
        }],
      },
      {
        type: 1, // You must use a new row for each text input
        components: [{
          type: 4, // Text input component, only valid in modals
          custom_id: 'Q2',
          label: `Você trabalha em que equipe e em que setor?`,
          style: 2,
          min_length: 1,
          max_length: 4000,
          placeholder: 'Você trabalha em que equipe e em que setor?',
          required: true
        }]
      },
      {
        type: 1, // You must use a new row for each text input
        components: [{
          type: 4, // Text input component, only valid in modals
          custom_id: 'Q3',
          label: `Quem é seu supervisor ou gerênte direto?`,
          style: 2,
          min_length: 1,
          max_length: 4000,
          placeholder: 'Quem é seu supervisor ou gerênte direto?',
          required: true
        }]
      },
      {
        type: 1, // You must use a new row for each text input
        components: [{
          type: 4, // Text input component, only valid in modals
          custom_id: 'Q4',
          label: `Em que ramal conseguimos falar com você?`,
          style: 2,
          min_length: 1,
          max_length: 4000,
          placeholder: 'Em que ramal conseguimos falar com você?',
          required: true
        }]
      }
    ],
  });