/**
 Kategori: Advanced

 Decimal to Binary
 Ketentuan Program :
 User menginput angka desimal
 Output berupa angka biner dari angka desimal tersebut
 Program ini hanya boleh menggunakan fungsi IF, SWITCH, FOR, WHILE

 CONTOH TAMPILAN OUTPUT :

 $ Masukkan angka desimal : 12 //user-generated input
 $ Angka Biner : 1100

 **/

let result = 67;

let bil = [];
for (let i = 0; result > 0; i++) {
    bil.push(result % 2);
    result = parseInt(result / 2);

}
console.log(`Angka Biner : ${bil.reverse().join("")}`)