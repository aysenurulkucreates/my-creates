// scopes => let, const: sabit tanımlama

// global scope
var isim = "Ahmet";
const tc : "1234757675"; // burada kullanılan const sabit değer yazmak için kullanılır. Okişinin tc si veya kendine ait olup değiştirilemeyecek değerlerini sabit tutar ve yanlışlıkla başka bir değer atılmasının önüne geçer.


function yazdir() {  // function scope
    var isim = "Can";
    var yas = 18;
    console.log(isim);
    console.log(yas);
}

if(true) { // if bloğunun içine yazılan her şey globale yazılmış gibi saylır. O yüzden içine de yazsan dışına da yazsan dışarıdan console.log onu tanımlar. Global olduğu için.
    let isim = "Canan"; // let ile block scope oluşturmuş olurum.
    console.log(isim);
}

//yazdir();
console.log(isim);
 // console.log(yas); // eğer ki özel olrak fuunction scope yazdıysan, o ancak kendi içinde yazdırılır. genel olrak console.log la birlikte o değer gelmez. Mutlaka dışarıya da yazman laazım. Kapsam dışında da olması şart.


 // Notes
 // var ile yaparsak bloğu, global olarak kabul eder onu ama let ile başladığımızda if kendi içerisinde block scope oluşyurmuş ve özelleşmiş olur. Dışarıdan console.log müdahale edemez ve hata verir.
 // Yukarıda da belirttiğim gibi fonsksiyonlar kendi scope alanlarını oluşturur.
// Var yerine let kullanırsak oluşabilecek hataların önüne geçmiş oluruz.


