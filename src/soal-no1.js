






/**
 * SOAL NO 1
 *
 * Simple Math
 * Seorang anak dimintai tolong oleh ibunya untuk membeli mie instan di minimarket.
 * Anak tersebut dibekali oleh ibunya uang sebanyak Rp 50.000,00.
 * Di minimarket, mie instan dijual dengan harga Rp 2.500,00.
 * Berapakah mie instan yang didapatkan oleh anak tersebut
 * jika minimarket tersebut sedang mengadakan promosi “setiap pembelian 4 mie instan,
 * akan mendapatkan bonus 1 mie instan”?
 */

//Deklarasai
let bekal_uang = 12500;
//let bekal_uang = 50000;
let harga_mie = 2500;
let promo = 4;
let bonus = 1;

//Perhitungan
let beli_mie = parseInt(bekal_uang/harga_mie);
let sisa_uang = bekal_uang%harga_mie;
let bonus_mie = parseInt(beli_mie/promo)*bonus;
let jumlah_didapat = beli_mie + bonus_mie;

//Output

console.log(`Seorang anak membeli mie instan di minimarket`);
console.log(`Membawa uang sejumlah Rp.${bekal_uang}.00 harga mie di minimarket tersebut adalah Rp.${harga_mie}.00`);
console.log(`Minimarket tersebut memiliki promo beli ${promo} bonus ${bonus}`);
console.log(`Anak tersebut mendapatkan ${beli_mie} Mie Instan dan Mendapatkan bonus ${bonus_mie} Mie Instan`);
console.log(`Jadi yang di bawa anak tersebut pulang yaitu ${jumlah_didapat} buah Mie Instan`);
console.log(`Dan uang kembalian anak tersebut adalah Rp. ${sisa_uang}.00`)
