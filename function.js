// function tambah(a, b) {
//   console.log(a + b);
//   //   return a + b;
// }
// // console.log(tambah(5, 3));
// tambah(5, 6);

// Tanpa Function
// const hasil1 = (1 + 5) * 5;
// const hasil2 = (5 + 5) * 5;
// console.log(hasil1);
// console.log(hasil2);

// Refactor Function
// function hitung(a, b, perkalian = 2) {
//   const jumlah = a + b;
//   const hasil = jumlah * perkalian;
//   return hasil;
// }
// console.log(hitung(1, 3)); //20
// console.log(hitung(1, 5, 5)); //30

// return Berhenti
// console.log(cekNilai("abc"));

// function cekNilai(nilai) {
//   if (typeof nilai !== "number" || !Number.isFinite(nilai)) {
//     return "Input harus angka";
//     // console.log("Test");
//   }
//   return nilai * 10;
//   console.log("Tidak");
// }
// console.log(cekNilai(2));

// Function Anonymous
// const hitung = function (a, b) {
//   return a + b;
// };
// console.log(hitung(5, 1));

// ((a, b) => {
//   return a + b;
// })();

// Arrow Function
// const kali = (a, b) => 5 * 5;

// Refactor Function
// function cekLulus(nama, nilai) {
//   if (nilai >= 75) {
//     return `Selamat ${nama}, Anda Lulus dengan Nilai ${nilai}`;
//   } else {
//     return "Gagal";
//   }
// }
// console.log(cekLulus("Budi", 80));

// const cekLulus = function (nama, nilai) {
//   if (nilai >= 75) {
//     return `Selamat ${nama}, Anda Lulus dengan Nilai ${nilai}`;
//   } else {
//     return "Gagal";
//   }
// };
// console.log(cekLulus("Rino", 70));

// const cekLulus = (nama, nilai) =>
//   nilai >= 75 ? `Selamat ${nama}, Anda Lulus dengan Nilai ${nilai}` : "Gagal";
// console.log(cekLulus("Rino", 70));
// console.log(cekLulus());

// function buatProfile(nama, umur = 18) {
//   return {
//     namaLengkap: nama,
//     usia: umur,
//     kategory: umur >= 18 ? "Dewasa" : "Anak-anak",
//   };
// }
// console.log(buatProfile("Budi", 20));

// Refactor Anonymous dan Arrow

// Method
// const user = {
//   firstName: "Budi",
//   lastName: "Sasonto",
//   biasa() {
//     return this.firstName;
//   },
//   fullName: function (value) {
//     return `Halo, nama saya ${value}`;
//   },
// };
// console.log(typeof user.fullName);
// console.log(user.fullName("123"));
// user.lastName = "Doe";
// console.log(user.biasa());

// let merk = "";
// class Mobil {
//   constructor(merk) {
//     this.merk = merk;
//   }
//   klakson(bunyi) {
//     console.log(`${bunyi} Ini mobil ${this.merk}`);
//   }
// }
// const mobilA = new Mobil("Yamaha");
// const mobilB = new Mobil("Honda");

// mobilA.klakson("Teet");
// mobilB.klakson("tuut");

//
