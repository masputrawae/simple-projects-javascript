// Ambil elemen DOM berdasarkan ID
// tombol tambah, kurang, dan angka
const count = document.getElementById('count')
const addCount = document.getElementById('addCount')
const lowerCount = document.getElementById('lowerCount')

// Inisialisasi angka awal sebagai 0
let currentCount = 0
count.textContent = currentCount

// Fungsi untuk memperbarui angka dan warna teks
function numCount(){
    currentCount < 0 ? count.style.color = 'red' : count.style.color = 'green'
    count.textContent = currentCount
}

// Menambah 1 jika di klik
addCount.addEventListener('click', ()=>{
    currentCount += 1
    numCount()
})

// Mengurangi 1 jika di klik
lowerCount.addEventListener('click', ()=>{
    currentCount -= 1
    numCount()
})

// Sampai disini selesai
// Hal yang telah kupelajari dari latihan ini:
// - Cara mengambil elemen HTML dengan getElementById
// - Cara mengubah isi teks dengan textContent
// - Cara menambahkan event listener pada tombol
// - Cara membuat fungsi untuk mengelola logika
// - Penggunaan operator ternary untuk kondisi singkat
// - Mengubah gaya elemen (color) berdasarkan kondisi
// - Pentingnya pemisahan logika dan tampilan
