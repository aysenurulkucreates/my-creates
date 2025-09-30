let simdi = new Date();


// get methods
sonuc = simdi;
sonuc = simdi.getDate();  // gün
sonuc = simdi.getDay();   // 0-6 = 0; pazar: 6:cumartesi ye denk gelir arada kalan sayılar da diğer günlere denk gelir.
sonuc = simdi.getFullYear(); // yıl


// set methods
simdi.setFullYear(2026); // değiştirmek istediğin tarihi yazarsın.
simdi.setMonth(7); // değiştirmek istediğin tarihi yazarsın.
simdi.setDate(20); // değiştirmek istediğin tarihi yazarsın.


// herhangi bir bilgiye göre manuel olarak oluşturabileceğimiz değer.
let dogumTarihi = new Date(1990, 5, 15);

sonuc = dogumTarihi;
sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

let milisecond = simdi - dogumTarihi;
 
// bunlar iki sene arasında geçen değerleri verir. simdi ve doğum tarihi arasında geçen süreleri verir.
let saniye = milisecond / 1000; // saniye değerini verir.
let dakika = saniye / 60; // salise değerini verir.
let saat = dakika / 60; // saat değerini verir.
let gun = saat / 24; // gün değerini verir.

sonuc = gun;

console.log(sonuc);