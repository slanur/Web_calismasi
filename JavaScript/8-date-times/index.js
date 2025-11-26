let tarih = new Date();

let result;

result = tarih.getDate(); // ayda kaçıncı gündeyiz onu verir 
result = tarih.getDay(); // haftanın kaçıncı gününde olduğumuzu verir(pazar=0)
result = tarih.getFullYear(); // yılı verir
result = tarih.getHours(); // saat
result = tarih.getTime(); // milisaniye cinsinden saat 

// tarihi güncelleme - set methods
tarih.setFullYear(2025);
tarih.setMonth(2);
tarih.setDate(15);
result = tarih;


console.log(result); 