let url = 'https://www.sadikturan.com';
let kursAdi = 'Komple Web Geliştirme Kursu';

sonuc = url.length;
console.log(sonuc);

sonuc = kursAdi.split(' ').length;
console.log(sonuc);

sonuc = url.startsWith("https");
console.log(sonuc);

sonuc = kursAdi.includes("Eğitimi");
console.log(sonuc);


kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(' ', '-');
kursAdi = kursAdi.replace('ş', 's');
sonuc = `${url}/${kursAdi}`;

console.log(sonuc);

