





/**
 SOAL

 Segitiga Siku-siku
 Segitiga siku-siku adalah segitiga yang salah satu sudutnya 90o
 atau sudut siku. Buatlah sebuah program untuk membentuk sebuah segitiga siku-siku.

 REQUIREMENT:
 Input user berupa panjang alas dan tinggi segitiga (alas dan tingginya sama)dengan ketentuan :
 0 < Alas/Tinggi < 10
 Segitiga dibentuk dengan angka prima yang nilainya mulai dari awal setiap barisnya.
 Output berupa segitiga siku-siku.

 INPUT :
 5

 OUTPUT :
 2
 2 3
 2 3 5
 2 3 5 7
 2 3 5 7 11
 **/

var input = 5;
let i = 1;

while(input >= 1) {

    if (isPrime(i) == true){
        let baris = [];
        for (let j = 1; j <= i; j++) {
            if (isPrime(j) == true){
                baris.push(j);
            }
        }
        console.log(baris.join(" "))
        input--;
    }
    i++;
}

function isPrime(num) {
    var prime = num != 1;
    for(var i=2; i<num; i++) {
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}