// yas >= 18
// mwzuniyet == "lise" yada mezuniyet == "universite"

let yas = 20;
let mezuniyet = "lise";

if(yas >= 18 && (mezuniyet == "lise" || mezuniyet == "üniversite")) { // && operatörü ile iki tane değer yazabliriz.
    console.log("ehliyet alabilirsiniz.");
}
else {
    console.log("ehliyet alamazsınız.");
}

// and (&&)
// true, true => true
// false, true => false
// false, false => false

// or (||) veya anlamı taşır. yazdığın değişkenlere ekstra seçenek eklemek için kullanılır.
// true, true => true
// false, true => true
// false, false => false

