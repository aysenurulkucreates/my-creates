let siparis1 = {
    "id": 101,
    "musteri_id": 12,
    "tarih": "31.12.2025",
    "ödeme-sekli": "kredi kartı",
    "adres": {
        "sehir": "Kocaeli",
        "ilce": "İzmit",
        "mahalle": "Yahya Kaptan mah."

    },
    "urunler":[
    {
        "urun_id": 5,
        "baslik": "Iphone 16 Pro",
        "url": "http://abc.com/Iphone-16-pro",
        "fiyat": 75000

    },
     {
        "urun_id": 6,
        "baslik": "Iphone 16 Pro Mx",
        "url": "http://abc.com/Iphone-16-pro",
        "fiyat": 85000

    }
]
};


let siparis2 = {
    "id": 102,
    "musteri_id": 12,
    "tarih": "30.11.2025",
    "ödeme-sekli": "kredi kartı",
    "adres": {
        "sehir": "Kocaeli",
        "ilce": "İzmit",
        "mahalle": "Yahya Kaptan mah."

    },
  
    "urunler": [
        {
        "id": 6,
        "baslik": "Iphone 16 Pro Mx",
        "url": "http://abc.com/Iphone-16-pro",
        "fiyat": 85000

}
    ]
};

let siparis1_toplam = (siparis1.urunler[0].fiyat + siparis1.urunler[1].fiyat) * 1.2;
let siparis2_toplam = (siparis1.urunler[0].fiyat) * 1.2;


console.log(siparis1_toplam);
console.log(siparis2_toplam);

let siparis_toplam = siparis1_toplam + siparis2_toplam;

console.log(siparis_toplam);