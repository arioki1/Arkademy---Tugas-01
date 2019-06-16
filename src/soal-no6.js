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

let biner = (result) => {
    const angka = result;
    let bil = [];
    for (let i = 0; result > 0; i++) {
        bil.push(result % 2);
        result = parseInt(result / 2);
    }

    bil.reverse();

    switch (bil.length % 4) {
        case 3 :
            bil.splice(0, 0, 0);
            break;
        case 2 :
            bil.splice(0, 0, 0);
            bil.splice(0, 0, 0);
            break;
        case 1 :
            bil.splice(0, 0, 0);
            bil.splice(0, 0, 0);
            bil.splice(0, 0, 0);
            break;
    }

    for (let k = 0; k < bil.length; k++) {
        if (k % 5 == 0) {
            bil.splice(k, 0, " ");
        }
    }

    console.log(`Angka Biner dari ${angka} adalah: ${bil.join("")}`);
};

biner(150)





