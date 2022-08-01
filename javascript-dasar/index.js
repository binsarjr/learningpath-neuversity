// console.log("HELLO WORLD") // string
// console.log('1' + '1') // string
// console.log(1 + 1) // number
// console.log(null) // null / tipe data kosong
// console.log(undefined) // boolean
// console.log(true, false) // boolean



// Variabel
let nama = "Binsar"
let umur = 18
let alamat = null
let sudahNikah = false

// Menampilkan variabel
console.log(nama)
console.log(umur)
console.log(alamat)
console.log(sudahNikah)

// Mengedit Variabel
nama = "Binsar Dwi"
umur = 19
console.log(nama, umur)

// Mengedit variabel dengan tipe data berbeda
nama = 19
umur = "Umurku 18"
console.log(nama, umur)

const UMUR = 18
console.log(UMUR)

// UMUR = 15
// console.log(UMUR)

// Syarat penamaan variabel
// 1. Tidak boleh di awali dengan angka.Tapi, Boleh Mengandung angka
// 2. Tidak boleh ada spasi. sebagai alternatif kita bisa pakai underscore(_)
// 3. casesensitive artinya besar kecil nama variabel itu sangat berpengaruh/sensitif

// let 90umur = 80
// let umu90r = 80
// let nama lengkap = "Binsar dwj"
let nama_lengkap = "binsar di" // snake_case
let namaLengkap = "binsar dwi" // camelCase

// console.log(namalengkap)

// Aritmatika
// Penjumlahan(+)
// Pengurangan(-)
// Perkalian(*)
// Pembagian(/)
// Sisa Bagi / Modulus(%)

console.log('========Aritmatika========')
console.log(1 + 1) // 2
console.log(1 - 1) // 0
console.log(2 * 2) // 4
console.log(4 / 2) // 2
console.log(4 % 2) // 0
console.log(5 % 2) // 1


let penjumlahan = 1 + 1
let kasus = 1 + 2 * 4
console.log("penjumlahan", penjumlahan)
console.log("kasus", kasus) // 9

kasus = (1 + 2) * 4
console.log("kasus", kasus) // 12



// Latihan
// Buatlah program sederhana apapun itu yang berhubungan dengan variabel dan tipe data
// Minimal ada kombinasi variabel contoh: let hasil = panjang * lebar
// contoh: Program rumus, program introducing

let hasil = '12'

// Function
function LuasPersegiPanjang(panjang, lebar) {
    let hasil = panjang * lebar

    // console.log(hasil)
    return hasil
}


// Operator perbandingan
// Sama dengan ==, ===
// tidak sama dengan !=, !==
// lebih besar dari >
// lebih besar dari atau sama dengan >=
// lebih kecil dari <
// lebih kecil dari atau sama dengan <=


// Boolean: true(1), false(0)
// *Perbedaan == dan === adalah
// == tidak mengecek tipe datanya sedangkan === tipe datanya juga di cek
// 8 == 8 -> true
// 8 == '8' -> true
// 8 === '8' -> false
// 8 > 8 -> false
// 8 >= 8 -> true
// 8 <= 8 -> true
// 8 < 8 -> false

// Pengkondisian If/Else
if (false) {
    console.log("Ini ada di dalam if")
} else {
    console.log("ini di dalam else")
}


if (false) {
    console.log("IF/ELSE pertama")
} else if (true) {
    console.log("IF/ELSE kedua")
} else {
    console.log("IF/ELSE Default")
}

let umurKu = 17
let umurKtp = 17
if (umurKu > 100) throw new Error('Sip panjang umur')
// Kondisi yang sama dengan kode yang berbeda
if (umurKu < umurKtp) {
    console.log("Anda belum berhak mendapatkan KTP")
} else {
    console.log("Anda dipastikan bisa membuat KTP")
}

// Kondisi yang sama dengan kode yang berbeda
if (umurKu >= umurKtp) {
    console.log("Anda dipastikan bisa membuat KTP")
} else {
    console.log("Anda belum berhak mendapatkan KTP")
}


let nilai = 80
let grade
if (nilai >= 90) {
    grade = "A"
} else if (nilai >= 80) {
    grade = "B"
} else if (nilai >= 70) {
    grade = "C"
} else {
    grade = "D"
}

console.log("Nilai kamu adalah", grade)


if (nilai >= 90) grade = "A"
else if (nilai >= 80) grade = "B"
else if (nilai >= 70) grade = "C"
else grade = "D"

console.log("Nilai kamu adalah", grade)

// Object dan Array
let person = {
    key: 'value',
    key2: 99,
    key3: null,
    key4: true,
}

console.log(person.key)

let orang = {
    nama: "Binsar",
    umur: 18,
    alamat: "Jl sunan kudus",
    pekerjaan: "Mentor Neuversity"
}
console.log(
    "Halo, nama saya", orang.nama,
    "Umur saya", orang.umur,
    "Saya Beralamat di", orang.alamat,
    "Pekerjaan saya adalah", orang.pekerjaan
)


let orang2 = {
    nama: "Binsar",
    umur: 18,
    alamat: "Jl sunan kudus",
    pekerjaan: {
        nama: "Mentor Neuversity",
        alamat: "jln kembang"
    }
}
console.log(
    "Halo, nama saya", orang2.nama,
    "Umur saya", orang2.umur,
    "Saya Beralamat di", orang2.alamat,
    "Pekerjaan saya adalah", orang2.pekerjaan.nama,
    "kantor saya di", orang2.pekerjaan.alamat,
)

let namaOrangKampus = ["asep", 'parto', 'haidal', 'binsar']
console.log(namaOrangKampus)
console.log(namaOrangKampus.length)

namaOrangKampus.forEach((nama) => {
    console.log("Hei, nama saya adalah", nama)
})

let anakNeuversity = [
    {
        nama: "Agil",
        umur: 17,
    },
    {
        nama: "haidal",
        umur: 18
    },
    {
        nama: "binsar",
        umur: 16
    }
]

anakNeuversity.forEach((anak) => {
    console.log("Hei, nama saya adalah", anak.nama, "umur saya", anak.umur, "tahun")
})

namaOrangKampus = ["asep", 'parto', 'haidal', 'binsar']
for (let i = 0; i < namaOrangKampus.length; i++) {
    console.log(namaOrangKampus[i])
}

// Materi Dasar yang penting banget
// 1. Variabel
// 2. TIpe Data (Aritmatika juga berlaku)
// 3. Kondisi/Percabangan
// 4. Function
// 5. Objek
// 6. Array
// 7. Looping/Perulangan