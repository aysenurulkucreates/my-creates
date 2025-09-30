//Fonksiyonlar

function selamlasma(mesaj) {
    console.log(mesaj);
}

selamlasma("merhaba");
selamlasma("selam");

function yasHesapla(dogumYili){
    let simdi = new Date().getFullYear();
    return simdi - dogumYili;
}

console.log(yasHesapla(1998));
console.log(yasHesapla(1987));

function emekliligeKacYilKaldi(dogumYili, isim){
    let yas = yasHesapla(dogumYili);

    let kalan_sene = 65 - yas;
    
    if(kalan_sene > 0) {
        console.log(`${isim} emekli olmanana ${kalan_sene} yıl kaldı.`);
    }
    else {
        console.log("Zaten emekli oldunuz.");
    }
}

emekliligeKacYilKaldi(2000, "Ali");
emekliligeKacYilKaldi(1950, "Ayşe");