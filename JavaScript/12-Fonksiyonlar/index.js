function sayiToplami(sayi1, sayi2) {
    toplam = sayi1 + sayi2;
    //console.log(toplam);
}

sayiToplami(10, 20)

//! gelişmiş toplama fonksiyonu
function Toplama(...sayilar) {
    let toplam = 0;
    for (let sayi of sayilar) {
        toplam += sayi;
    }
    console.log(toplam);
}
Toplama(10, 20, 30, 40)


