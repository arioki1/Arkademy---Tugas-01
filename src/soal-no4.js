/**
 *
 *Data Sorting
 REQUIREMENT :
 Input berupa array statis yang sudah disediakan secara HARDCODE
 Array dibuat sepanjang 10 data
 Output menampilkan 4 hal :
 Data terkecil
 Data terbesar
 Data yang disortir dari data terkecil ke terbesar
 Data yang disortir dari data terbesar ke terkecil

 INPUT :

 Array Bilangan = [6,22,34,15,2,13,26,57,42,32]

 OUTPUT :

 $ Data Terkecil : 2
 $ Data Terbesar : 57
 $ Ascending Sort : 2,6,13,15,22,26,32,34,42,57
 $ Descending Sort : 57,42,34,32,26,22,15,13,6,2

 */

 let bilangan = [6,22,34,15,2,13,26,57,42,32];

 const data_terkecil = () =>{
     let [bil] = bilangan;
     bilangan.forEach(function (bilangan, index) {
         bil = (bilangan < bil) ? bilangan:bil;
     });
     console.log(bil)
}

data_terkecil();