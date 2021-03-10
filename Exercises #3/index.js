// Mumek, Marcel Sydney Randy
// Rabu, 03 Maret 2021
// Exercises #3 - Mobile Programming

// 1.Class
class Orang {
    constructor(nama,umur) {
        this.nama = nama;
        this.umur = umur;
    }

    bekerja() {
        console.log(`${this.nama} sedang bekerja seperti biasa`);
    }
    tidur() {
        console.log(`${this.nama} sedang tidur`);
    }
    makan() {
        console.log(`${this.nama} sedang makan`);
    }
}

// 2.Inheritance
const user1 = new Orang ("Marcel", "20");
user1.bekerja();

class pelajar extends Orang {
    constructor (nama,umur,namaSekolah) {
        super(nama,umur);
        this.namaSekolah = namaSekolah;
    }
    belajar(){
        console.log(`${this.nama} sedang belajar di ${this.namaSekolah}`);
    }
}

const user = new Pelajar ("John","17","Unklab");

console.log(user);