// Strings Methods

var kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi";
var sonuc;

sonuc = kursAdi.toLocaleLowerCase();
sonuc = kursAdi.toLocaleUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[0];
sonuc = kursAdi.slice(0,6);
sonuc = kursAdi.slice(10);
sonuc = kursAdi.slice(-10);
sonuc = kursAdi.slice(-10, -5);

sonuc = kursAdi.substring(0,6);
sonuc = kursAdi.substring(10);

sonuc =kursAdi.replace("Eğitimi", "Kursu");

sonuc = kursAdi.trim();
sonuc = kursAdi.trimEnd();
sonuc = kursAdi.trimStart();

sonuc = kursAdi.indexOf("Web");
sonuc = kursAdi.split(" ");
sonuc = kursAdi.split(" ")[1];

console.log(sonuc);

