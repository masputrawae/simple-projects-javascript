// Buat array berisi warna
const colors = [
    '#f43f5e',
    '#ec4899',
    '#d946ef',
    '#a855f7',
    '#8b5cf6',
    '#6366f1',
    '#3b82f6',
    '#22c55e',
    '#84cc16',
    '#eab308',
    '#ef4444',
]

// Ambil elemen tombol dan elemen body dari HTML
const btn = document.getElementById('shuffleButton')

// ! bisa pakai "document.body" jika tidak mau pakai id="body" !
const body = document.getElementById('body')

// fungsi untuk mengacak warna
function random() {

    // Gunakan Math.random() untuk menghasilkan angka acak (0 - 1)
    // Kalikan dengan panjang array agar mencakup semua indeks
    // Gunakan Math.floor() untuk membulatkan ke bawah ke indeks terdekat
    return colors[Math.floor(Math.random() * colors.length)]
}

// Ubah latar belakang saat tombol diklik
btn.addEventListener('click', () => {

    // Kemudian ubah background dengan .style.backgroundColor
    // Fungsi random() akan dijalankan dan mengembalikan hasil
    // untuk mengisi background
    body.style.backgroundColor = random()
})

// Sampai disini selesai
// Hal yang telah kupelajari dari latihan ini:
// - Cara membuat array di JavaScript
// - Cara mengambil elemen HTML dengan getElementById
// - Cara membuat fungsi sendiri
// - Cara menggunakan objek bawaan Math (terutama Math.random() dan Math.floor())
// - Cara menambahkan event listener (klik tombol)
// - Cara mengubah style elemen HTML dengan JavaScript
