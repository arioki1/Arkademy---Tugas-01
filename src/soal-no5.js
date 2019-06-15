/**
 Palindrome
 Buatlah program yang dapat menemukan berapa banyak sebuah kata/frasa dari sebuah string baik itu dari kiri atau kanan.

 REQUIREMENT:
 Input dari user sebanyak 2 kali berupa string dan kata/frasa yang ingin dicari.
 Input kata/frasa pencarian tidak bisa lebih panjang dibandingkan string.
 Output berupa banyaknya kata/frasa pencarian yang ditemukan dari string yang telah diberikan.

 INPUT:
 $ banananana
 $ nana

 OUTPUT:
 $ ditemukan 6 kali

 **/

const string = "banananana";
const val = "nana";

//const string = "anana";
//const val = "na";

const cari = (array1, search) => {
    let lengt_key = search.length;
    let count = 0;

    array1.forEach(function (data, key) {
        let check = [];
        for (let i = key; i < (key + lengt_key); i++) {
            check.push(array1[i]);
        }

        count = (check.join("") == search ? count + 1 : count);
    });
    return count;
};
const palindrome = (text, search) => {
    /**
     * Note Problem
     *
     * const array1 = text.split("");
     * const array2 = array1.reverse();
     * console.log(array2)
     * console.log(array1)
     *
     * kalau deklarasi seperti ini error dan sampai sekarang belum tau fix nya di mana
     */
    const array1 = text.split("");
    console.log(cari(array1, search) + cari(array1.reverse(), search));
};
palindrome(string, val);

