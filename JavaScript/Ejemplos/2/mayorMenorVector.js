var vector = [22, 25, 60, 98, 11, 78, 4, 33, 85, 10];
var mayor = vector[0];
var posicionMayor = 0;
var menor = vector[0];
var posicionMenor = 0;

for (let i=0; i < 10; i++) {
    
    if (mayor < vector[i]) {
        mayor = vector[i];
        posicionMayor = i;
    }
    
    if (menor > vector[i]) {
        menor = vector[i];
        posicionMenor = i;
    }       
}
console.log("El mayor es " + mayor + " y se encuentra en la posicion " + posicionMayor);
console.log("El menor es " + menor + " y se encuentra en la posicion " + posicionMenor); 