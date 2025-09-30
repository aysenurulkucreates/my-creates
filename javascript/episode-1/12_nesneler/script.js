// let kullanici = [
//  "Sadık",
//  "Turan",
//   40
// ];

// key - value

let kullanici = {
    "ad": "Sadık",
    "soyad": "Turan",
    "yas": 40,
    "adres": {
        "sehir": "kocaeli",
        "ilce": "merkez"
    },
    "hobiler": ["sinema", "spor"]

};

let kullanici2 = {
    "ad": "Çınar",
    "soyad": "Turan",
    "yas": 40,
    "adres": {
        "sehir": "kocaeli",
        "ilce": "merkez"
    },
    "hobiler": ["sinema", "spor"]

};

let kullanicilar = [kullanici, kullanici2];


let sonuc;
sonuc = kullanici;
sonuc = kullanici["ad"];
sonuc = kullanici["soyad"];
sonuc = kullanici["adres"];
sonuc = kullanici["adres"]["sehir"];
sonuc = kullanici.ad;
sonuc = kullanici.adres.ilce;
sonuc = kullanici.hobiler.toString();
sonuc = kullanici.hobiler[0];

sonuc = kullanicilar[0].ad;


console.log(sonuc);