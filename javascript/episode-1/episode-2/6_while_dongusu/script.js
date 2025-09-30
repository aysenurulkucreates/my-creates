for (let i = 1; i <=10; i++)
{
    console.log(i);
}


let i = 1;

// continue için
while(i <= 10)
{
     i++; // conitnue kullamımında mutlaka burada olması lazım. Aksi halde sonsuz döngüye girer.
    if(i % 2 == 1)
    {
        continue;
    }
    
    console.log(i);
   
}

// break için. vereceğin değerde ilk gördüğü sayıdan sonra durur.

let x = 1;

while(x <= 10)
{
     x++; 
    if(x % 2 == 1)
    {
        break;
    }
    
    console.log(x);
   
}

console.log("Döngü bitti.");

// do while . başlangıç sayısını mutlaka gösterecek.

let y = 1;

do {
    console.log(y);

    i++
}while(y <= 10)