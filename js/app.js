console.log('JS ok');
let nome = prompt ('scrivi il tuo nome');
let cognome = prompt ('scrivi il tuo cognome');
let  colorePreferito = prompt ('scrivi il tuo colore preferito');
document.getElementById('pwd').innerText = nome + cognome + colorePreferito + Math.floor(Math.random() * 50);