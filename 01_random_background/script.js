// Buat Array Yang Berisi Warna
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
const btn = document.getElementById('change')

// ! bisa pakai "document.body" jika tidak mau pakai id="body" !
// contoh: const body = document.body
const body = document.getElementById('body')

// fungsi untuk mengacak warna
function shuffleColor() {
  // Gunakan Math.random() untuk menghasilkan angka acak (0 - 1)
  // Kalikan dengan panjang array agar mencakup semua indeks
  // Gunakan Math.floor() untuk membulatkan ke bawah ke indeks terdekat
  return colors[Math.floor(Math.random() * colors.length)]
}

// Fungsi untuk mengubah background element
// (element) sebagai parameter 
function changeBg(element){
  element.style.backgroundColor = shuffleColor()
}

// Menetapkan Background untuk pertama kali, agar tidak kosong (opsional)
changeBg(body)

// Ubah latar belakang saat tombol diklik
// Panggil fungsi untuk mengubah Background element saat tombol di klik
btn.addEventListener('click', changeBg(body))
  
// Hal yang telah ku pelajari:
// - Cara membuat array warna
// - Cara memilih elemen DOM dengan getElementById
// - Cara membuat fungsi acak dengan Math.random dan Math.floor
// - Cara mengubah style elemen melalui JavaScript
// - Cara menambahkan event listener pada tombol