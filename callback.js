// Callback Sederhana
function fungsiUtama(pesan, test) {
  pesan(test);
}

function fungsiKedua(value) {
  console.log(value);
}
fungsiUtama(fungsiKedua, "Hallo");

const tambah = (x, y) => x + y;
const kurang = (a, b) => a - b;
const kali = (c, d) => c * d;
const bagi = (e, f) => e / f;

function calculate(a, b, cb) {
  return cb(a, b);
}

console.log(calculate(10, 20, tambah));
// console.log(calculate(10, 20, tambah(15, 10)));
console.log(calculate(10, 20, kurang));
console.log(calculate(10, 20, bagi));
console.log(calculate(10, 20, kali));

console.log(
  calculate(10, 5, function (x, y) {
    return x * x - y;
  }),
);
console.log(calculate(2, 5, (x, y) => x * x - y));
// ===============================

function tampilkanStatus(name, testtt) {
  console.log(`${name} siap bertarung!`);
  console.log(`${testtt} gajadi bertarung!`);
}
function attackMonster(n) {
  console.log(`${n} menyerang monster`);
}
function berhasil(nq) {
  console.log(`${nq} Boleh masuk dungeon`);
}
function gagal(nw) {
  console.log(`${nw} Belum boleh mending farming dulu`);
}
function prosesKarakter(level, bisa, blmBisa) {
  console.log(`Memproses karakter: ${level}`);
  if (level >= 10) {
    bisa(level);
  } else {
    blmBisa(level);
  }
}
function beriBonus(a) {
  console.log(`${a} mendapatkan XP 100`);
}
// prosesKarakter("Arka", "aasdasd", tampilkanStatus, tampilkanStatus);
// prosesKarakter("Lyna", attackMonster);
prosesKarakter(15, berhasil, gagal);
// prosesKarakter("Adi", beriBonus);

const test = () => {
  console.log("Karakter berhasil dibuat!");
};

console.log("Program dimulai");
setTimeout(beriBonus, 2000);
console.log("Program dilanjutkan");
