let urunler = ["samsung", "apple", "huwai"];
console.log(urunler);

let result;

result = urunler.length;


//result = urunler.toString(); // stringe çevirir

//result = urunler.join(""); // bu da stringe çevirir,bir öncekinden farklı olarak arasındaki işareti değiştirebiliriz

//! diziden eleman silme
//result = urunler.shift(); //-> ilk elemanı siler
//result = urunler.pop(); //-> son elemanı siler

//! diziye eleman ekleme
// result = urunler.push("xiomi"); // dizi sonuna eleman ekler
//result = urunler.unshift("xiomi"); // başa eleman eklemek için 

//! dizi birleştirme
let urunler1 = ["asus", "apple"];
let urunler2 = ["dell", "casper"];
let urunler3 = ["acer", "exper"];

result = urunler1.concat(urunler2, urunler3);

console.log(result);

