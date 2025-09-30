// uygulama Döngüler

let sayilar = [3,5,7,8,12,23,45,66];

// 1- Sayılar dizisindeki her bir sayının karesini yazdırınız.
for(let i = 0; i < sayilar.length; i++) 
    {
    console.log(sayilar[i] * sayilar[i]);
}
// 2- Sayılar listesindeki hangi sayılar 5 in katıdır?
for(let i = 0; i < sayilar.length; i++)
{
   if(sayilar[i] % 5 == 0)
   {
    console.log(sayilar[i]);
   }
}

let i = 0;
while(i < sayilar.length)
{
    if(sayilar[i] % 5 == 0)
   {
    console.log(sayilar[i]);
   }

   i++;
}
// 3- 50-100 arasındaki sayıları azalan şekilde yazdırınız.
for(let x = 100; x >= 50; x--)
{
    console.log(x);
}
let urunler = ["iphone 16", "samsung s25", "iphone 17", "samsung s26"];

// 4- Ürünler listesindeki tüm ürünleri büyük harfe çeviriniz.
for(let y = 0; y < urunler.length; y++)
{
    console.log(urunler[y].toLocaleUpperCase());
}
// 5- Ürünler listesinde içinde samsung kelimesi geçen kaç kelime vardır?
for(let z = 0; z < urunler.length; z++)
{
    if(urunler[z].includes("samsung"))
    {
        console.log(urunler[z]);
    }
}

let ogrenciler = [
    {"ad": "Yiğit", "soyad": "Bilgi", "notlar": [60,70,80]},
    {"ad": "Ada", "soyad": "Bilgi", "notlar": [80,50,75]},
    {"ad": "Çınar", "soyad": "Turan", "notlar": [70,70,80]},
]
// 6- Öğrenciler listesindeki her öğrencinin not ortalaması ve başarı durumunu yazdırınız.

let toplam_sinif = 0;

for(let u = 0; u < ogrenciler.length; u++)
{   let not_toplam = 0;
    let adet = 0;
    let ortalama = 0;
    let basari = "";

    for(let q = 0; q < ogrenciler[u].notlar.length; q++)
    {
        not_toplam += ogrenciler[u]. notlar[q];
        adet++;
    }

   ortalama = not_toplam / adet;

    // 7- Tüm öğrencilerin not ortalaması nedir?

    toplam_sinif += ortalama;


   if(ortalama >= 50)
   {
    basari = "Başarılı";
   } else {
    basari = "Başarısız."
   }

   console.log(`${basari}: ${ogrenciler[u].ad} ${ogrenciler[u].soyad} isimli öğrencinin not ortalaması ${ortalama}.`);
}

console.log("sınıf ortalaması: " + (toplam_sinif / ogrenciler.length));


