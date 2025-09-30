// 1- Bir sayının 50 ile 100 arasında olup olmadığını kontrol ediniz.
let sayi = 17;
if(sayi >=50 && sayi <= 100)
    {
    console.log("Evet");
}
else {
    console.log("Hayır.");
}
// 2-Bir sayının pozitif çift sayı olup olmadığını kontrol ediniz.
let sayi2 = 66;
if(sayi2 % 2 == 0 && sayi2 > 0)
{
    console.log("sayı pozitif bir çift sayıdır.")
}
else 
{
    console.log("sayı pozitif bir çift sayı değildir.")
}
// 3- x,y,z sayılarının büyüklük karşılaştırmasını yapınız.
let x = 10, y = 57, z = 2;
if (x > z && x > y)
{
    console.log("x en büyüktür.");
}
else if (y > x && y > z)
{
    console.log("y en büyüktür.");
}
else if (z > x && z > y)
{
    console.log("z en büyüktür.");
}
else {
    console.log("Hatalı bilgi.");
}
// 4- 2 vize (40%) ve 1 final (60%) notuna göre ortalama hesaplayınız.
   
   
   

let vize1 = 50;
let vize2 = 60
let final = 70;
let ortalama = ((vize1 + vize2) / 2) * 0.4 + final * 0.6;
console.log(ortalama);

// a- Eğer ortalama 50 ve üzerindeyse geçti değilse kaldı yazsın.
if(ortalama >50){
    console.log("Geçti.");
}
else {
    console.log("Kaldı.");
}

// b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
if(ortalama >50 && final >=50){
    console.log("Geçti.");
}
else {
    console.log("Kaldı.");
}

// c- Finalden 70 alındığında ortalama 50' nin altındaysa bile geçmiş sayılsın.
if(ortalama <50 || final >=70){
    console.log("Geçti.");
}
else {
    console.log("Kaldı.");
}