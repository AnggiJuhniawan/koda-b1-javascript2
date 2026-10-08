// const hasilUjianJohn = [75, 80, 79, 90];
// const hasilUjianEd = [86, 77, 88, 99];

// const gabunganHasilUjian = [...hasilUjianEd, ...hasilUjianJohn];

// console.log(gabunganHasilUjian[5]);

// let score1 = [10, 11, 12];
// const score2 = [20, 21, 22];

// score1 = [...score1, ...score2];
// const combine = [...score1, ...score2];
// console.log(score1);

// String
// const teks1 = new Set([1, 2, 2, 3, 4, 3, 4, 5, 6]);
// // const teks2 = "Hallo";
// const huruf = [...teks1];
// console.log(huruf);

// penambahan array/spread-operator
// const array1 = ["A", "B", ["C", "D"]];
// const array2 = ["A", "B"];

// const newArray = [...array1, ["X", "Y"], ...array2];

// console.log(newArray[2]);

// Spread-Operator Object
// const bio = {
//   name: "John Cena",
//   age: 30,
// };
// const extrInfo = {
//   skills: ["Python", "Java", "Dotnet"],
//   education: [
//     {
//       name: "UNINDRA",
//       year: 2012,
//     },
//   ],
// };

// const profile = {
//   ...bio,
//   ...extrInfo,
// };

// console.log(profile.education[0].name);

const hobbies = { name: "Roni", age: 30 };

const hobbiesObj1 = Object.keys(hobbies);
const hobbiesObj2 = Object.values(hobbies);

const hby = [...hobbiesObj1, ...hobbiesObj2];
console.log(hobbiesObj1);
console.log(hobbiesObj2);
console.log(hby);
