/*
05 - Utilize if/ else if e else para receber um horário do dia e informar “bom dia”, “boa tarde”,
“boa noite” ou “boa madrugada”.
*/

let x = 11
let y = 'pm'

if (x > 4 && y === 'am'){
    console.log('Bom dia!');
}
else if (x < 6 && y === 'pm'){
    console.log('Boa tarde!');
}
else if (x > 6 && y === 'pm'){
    console.log('Boa noite!');
}
else{
    console.log('Boa madrugada!');
}