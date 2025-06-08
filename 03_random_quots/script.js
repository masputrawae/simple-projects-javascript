// Buat Array & Object untuk menampung Quote
const quotes = [
  {
    quote: 'In Lorem proident voluptate laboris proident quis quis.',
    author: '- Anonymous',
  },
  {
    quote: 'Tempor voluptate voluptate laboris nulla.',
    author: '- John Miller',
  },
  {
    quote:
      'Voluptate irure ullamco dolor magna officia sunt magna dolore irure tempor.',
    author: '- Sarah Jones',
  },
  {
    quote:
      'Veniam ad sit velit nulla minim ad dolor esse do officia reprehenderit sit.',
    author: '- Michael Brown',
  },
  {
    quote: 'Exercitation ea irure sunt laboris ea do duis deserunt.',
    author: '- Emily Garcia,',
  },
  {
    quote: 'Aliquip aliqua laboris et minim anim laborum dolor culpa.',
    author: '- David Rodriguez',
  },
]

// Ambil elemen DOM berdasarkan ID
const shuffleBtn = document.getElementById('shuffleBtn')
const quote = document.getElementById('quote')
const author = document.getElementById('author')

// Fungsi Untuk Shuffle atau mengacak array
function shuffle() {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

function setQuote() {
  // Masukkan Hasil Shuffle ke variabel baru
  const random = shuffle()
  quote.textContent = random.quote
  author.textContent = random.author
}

// Jalankan Pertama kali agar tidak kosong di awal
setQuote()

// Panggil fungsi setQuote() ketika klik
shuffleBtn.addEventListener('click', setQuote)

// Hal yang telah kupelajari dari latihan ini:
// - Cara menyimpan data dalam bentuk array of objects
// - Cara mengambil elemen dari array secara acak dengan Math.random()
// - Cara memanipulasi isi teks elemen HTML dengan textContent
// - Cara menambahkan event listener ke tombol
// - Cara menjalankan fungsi saat halaman dimuat
