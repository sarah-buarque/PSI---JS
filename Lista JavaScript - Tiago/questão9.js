/*
09 - Faça um algoritmo que receba a idade do usuário e informe se ele é criança (0-12),
adolescente (13-17), adulto (18-59) ou idoso (60+).
*/

function classificarIdade(idade) {
  if (idade >= 0 && idade <= 12) {
    return "Criança";
  } else if (idade >= 13 && idade <= 17) {
    return "Adolescente";
  } else if (idade >= 18 && idade <= 59) {
    return "Adulto";
  } else if (idade >= 60) {
    return "Idoso";
  } else {
    return "Idade inválida";
  }
}

const idadeUsuario = 45;
console.log(classificarIdade(idadeUsuario)); 
