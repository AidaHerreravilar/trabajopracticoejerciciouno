let numeroingresado: number = Number(prompt("ingrasar numero"));
let suma: number;
suma = 0;

while (numeroingresado >= 1 && numeroingresado <= 10) {
  suma += numeroingresado;
  numeroingresado = Number(prompt("ingrasar numero"));
}
console.log(suma);
