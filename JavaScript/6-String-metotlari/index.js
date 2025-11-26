let ad = "Sıla nur Çandır";
let result;

// result = ad.toLowerCase()
// result = ad.length
// result = ad.trim() // değişkenin başında boşluk varsa onu siler
// result = ad.slice(0, 6) // 0 dan 6 ya kadar olan elemanları almak için
// result = ad.split(" ") // boşluklar arasındaki ifadeleri  kadar olan ifadeleri ayırıp dizi içine atar
// result = ad.replace(" ", "") //-> boşlukları boşluk olmayacak şekilde değiştirdik. yani bu metod stringte değişiklik yapmayı sağlıyor 

// result = ad.split(" ").length //-> kaç kelimeden oluştuğunu buluruz 


result = ad.indexOf("nur") // index içinde kelime arama. varsa index numarasını döndürüyor yoksa -1 döndürüyor
console.log(result);