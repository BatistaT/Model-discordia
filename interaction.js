// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let answers = context.params.event.data.components.map((componentRow) => {
  let textField = componentRow.components[0]
  return [textField.value]
})

await lib.googlesheets.query['@0.3.0'].insert({
  range: `Sheet1!A:F`,
  fieldsets: [
    {
      'username': `${context.params.event.member.user.username}`,
      'user_id': `${context.params.event.member.user.id}`,
      'Digite seu nome e matrícula': `${answers[0]}`,
      'Você trabalha em que equipe e em que setor?': `${answers[1]}`,
      'Quem é seu supervisor ou gerênte direto?': `${answers[2]}`,
      'Em que ramal conseguimos falar com você?': `${answers[3]}`
    }
  ]
});