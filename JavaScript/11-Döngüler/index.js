// normal kullandığımız for özellikleri burada da geçerli

//biraz daha farklı olan for kullanımları

let sayilar = [10, 20, 5, 50, 200];
for (let index in sayilar) {
    console.log(index); //index numarasını bastırır
}

for (let index of sayilar) {
    console.log(index); //direkt sayıları bastırır
}

//! object ile döngü
let user = {
    "ad": "Sıla",
    "soyad": "Çandır",
    "şehir": "Ordu",
    "yaş": 18,
    "products": [

        "laptop", " car", "phone"
    ]
}
for (let key in user) {
    console.log(key); //keyleri döndürür
    console.log(user[key]); // keylerin karşısındaki değerleri almak için
}

// çoklu obje
let users = [{
    "ad": "Sıla",
    "soyad": "Çandır",
    "şehir": "Ordu",
    "yaş": 18,
    "products": [

        "laptop", " car", "phone"
    ]
},
{
    "ad": "Esma",
    "soyad": "Çandır",
    "şehir": "Ordu",
    "yaş": 18,
    "products": [

        "laptop", " car", "phone"
    ]
},
{
    "ad": "Hakan",
    "soyad": "Çandır",
    "şehir": "Ordu",
    "yaş": 18,
    "products": [

        "laptop", " car", "phone"
    ]
}
]
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
} 