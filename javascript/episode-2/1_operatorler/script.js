// operatörler

let sonuc;
let a = 10, b = 2, c = 10;

// 1-Aritmetik Operatörler

sonuc = (a + b);
sonuc = (a - b);
sonuc = (a * b);
sonuc = (a / b);
sonuc = (a % b);

//sonuc = a++;    // sonuc = a + 1;
//sonuc = ++a;    // sonuc = a + 1;
//sonuc = a--;    // sonuc = a - 1;
//sonuc = --a;    // sonuc = a - 1;

// 2-Atama Operatörler
sonuc = a;
sonuc += (a + b);  // sonuc = sonuc + (a + b);
sonuc += a;        // sonuc = sonuc + a;
sonuc -= a;        // sonuc = sonuc - a;
sonuc *= a;        // sonuc = sonuc * a;
sonuc /= a;        // sonuc = sonuc / a;
sonuc %= a;        // sonuc = sonuc % a;

// 3-Karşılaştırma Operatörleri
sonuc = (a == b); // a ve b eşit mi onu karrşılaştırır.
sonuc = (a == c);
sonuc = (a != b); // a ve b eşit değil, değil mi sorusunun karşılığını verir.
sonuc = (a != c);
sonuc = (2 == "2"); // burada string veya number olması önemli değil, aynıysa eşit gösterir.
sonuc = (2 === "2"); // 3 tane = olursa, bu defa string ve number ayırt eder.
sonuc = (a > b); // a nın b den büyük olup olmadığını sorgular.
sonuc = (a >= b);
sonuc = (a < b);






console.log(sonuc);
