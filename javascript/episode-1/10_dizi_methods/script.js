let ogrenciler = ["Çınar", "Yiğit", "Ada"];

let sonuc;

sonuc = ogrenciler.length;
sonuc = ogrenciler.toString(); // elemanları parantez içinde olduğu gibi gösterir.
sonuc = ogrenciler.join(' '); // bunu ekleyince virgüller gider.

// eleman silme
// sonuc = ogrenciler.pop(); Listedeki son elemanı siler dışa atar.
// sonuc = ogrenciler.shift(); Listedeki ilk elemanı siler, dışa atar.

// eleman ekleme
// sonuc = ogrenciler.push("Sena"); Listenin sonuna elemanı ekler.
// sonuc = ogrenciler.unshift("Sena"); Listenin başına elemanı ekler.

// eleman arama
// sonuc = ogrenciler.indexOf('Yiğit'); Elemanın kaçıncı seviyede olduğunu gösterir.
// sonuc = ogrenciler.lastIndexOf('Yiğit'); eğer iki tane aynı isim varsa sondakini gösterir.
// sonuc = ogrenciler.includes(Yiğit); listede var mı yok mu onu gösterir.

// silme ve ekleme
// sonuc = ogrenciler.splice(0,1); 0.ncı noktadan itibaren 1 birim sil demek.
// sonuc = ogrenciler.splice(0,0, 'Ali', 'Canan'); burada da hiçbir eleman silmeden, ekleme yapılır, istenirse silinebilir tabikide.






console.log(sonuc);
console.log(ogrenciler);