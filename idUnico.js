const pessoas = [
    { nome: "Fabiana Araújo", idade: 33},
    { nome: "Gabriel Gomes", idade: 25},
    { nome: "Fernando Henrique", idade: 17},
    { nome: "Ana Luiza", idade: 2},
    { nome: "Geralda do Nascimento", idade: 93},
    { nome: "Miguel Souza", idade: 70},
    { nome: "Antonio Miguel", idade: 69},
];

Object.entries(pessoas).forEach(([key, value]) => {
    console.log("id: " + key, value)
})
   
