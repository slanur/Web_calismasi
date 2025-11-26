
let yas = 25;
let result;

result = 25;
result = Number("25");
result = parseInt("25");
result = parseFloat("25.7");

let myNumber = 10.23289398374;
result = myNumber.toPrecision(5) //-> toplamda 5 basamak döndürür
result = myNumber.toFixed(5); //-> virgülden sonraki 5 basamakla birlikte döndürür

// sayıyı en yakın basamağa yuvarlar
result = Math.round(1.4);
result = Math.round(1.6);

result = Math.ceil(1.4); // hep bir üst basamağa yuvarlar 1.4->2
result = Math.floor(1.4); // bir önceki basamağa yuvarlar 1.4->1
result = Math.pow(5, 3); // üs almak için
console.log(result); 