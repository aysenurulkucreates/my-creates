// Uygulama: Fonksiyonlar

// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.
function kelimeYazdir(kelime, adet)
{
    for(let i = 0; i < adet; i++) {
        console.log(kelime);
    }
}

kelimeYazdir("merhaba", 3);
// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.
function alanCevreHesapla(kisa,uzun) {
    let alan = kisa * uzun;
    let cevre = (kisa + uzun) * 2;

    return `alan: ${alan}, çevre: ${cevre}`;
}

console.log(alanCevreHesapla(3, 5));
// 3-  Yazı tura uygulamasını fonksiyon kullanarak yapınız.
function yaziTuraAt() {
    let random = Math.random(); // 0-1

    if(random < 0.5) {
        console.log("yazı");
    } else {
        console.log("tura");
    }
}

yaziTuraAt();
// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.
function tamBolenleriBul(sayi) {
    let sayilar = [];
    for(let x = 2; x < sayi; x++) {
        if(sayi % x ==0) {
            sayilar.push(x);
        }
    }

    return sayilar;
}

console.log(tamBolenleriBul(20)); // 2,3,4,5.....19 a kadar dener ve yazar.

// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.
function toplam() {
    //console.log(arguments);
    //return sayi1 + sayi2;
    let sonuc = 0;
    for(let z = 0; z < arguments.length; z++) {
        sonuc += arguments[z];
    }
    return sonuc;
}
 let sonuc;
 sonuc = toplam(10,20);
 sonuc = toplam(10,20,30);
 sonuc = toplam(10,20,30,40);


 console.log(sonuc);