let meyveler = ["kiraz", "karpuz", "kavun", "erik"];

sonuc = meyveler.length;
console.log(sonuc);

sonuc = meyveler[0];
console.log(sonuc);

sonuc = meyveler[3]; // sonuc = meyveler[meyveler.lenght - 1];
console.log(sonuc);

sonuc = meyveler.includes("kavun");
console.log(sonuc);

sonuc = meyveler.push("çilek"); // sonuc = meyveler.[meyveler.lenght] = "Çilek";
console.log(sonuc);

//sonuc = meyveler.pop();
//sonuc = meyveler.pop();
meyveler.splice(meyveler.lenght - 2, 2);
console.log(meyveler);


console.log(sonuc);


let ogrenci1 = ["Yiğit", "Bilgi", 2010, [60, 90, 80]];
let ogrenci2 = ["Ada", "Bilgi", 2012, [70, 80, 80]];
let ogrenci3 = ["Çınar", "Turan", 2017, [60, 50, 80]];

let ogrenciler = [ogrenci1, ogrenci2, ogrenci3];
// yaşlar
console.log(2025 - ogrenci1[2]);
console.log(2025 - ogrenci2[2]);
console.log(2025 - ogrenci3[2]);

// not bilgileri
let yigit_not = (ogrenci1[3][0] + ogrenci1[3][1] + ogrenci1[3][2]) / 3;
let ada_not = (ogrenci2[3][0] + ogrenci2[3][1] + ogrenci2[3][2]) / 3;
let cinar_not = (ogrenci3[3][0] + ogrenci3[3][1] + ogrenci3[3][2]) / 3;
console.log(yigit_not);
console.log(ada_not);
console.log(cinar_not);
