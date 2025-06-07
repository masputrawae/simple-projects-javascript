// Ambil elemen DOM berdasarkan ID
const val1 = document.getElementById('val1')
const val2 = document.getElementById('val2')
const selectOp = document.getElementById('operation')
const result = document.getElementById('result')
const show = document.getElementById('show')

// Fungsi untuk menghitung hasil berdasarkan operator yang dipilih
function calc(num1, num2) {
  const opValue = selectOp.value

  switch (opValue) {
    case '+':
      result.textContent = num1 + num2
      break
    case '-':
      result.textContent = num1 - num2
      break
    case '*':
      result.textContent = num1 * num2
      break
    case '**':
      result.textContent = num1 ** num2
      break
    case '/':
      num2 === 0
        ? alert('Tidak Bisa Dibagi Dengan 0')
        : (result.textContent = num1 / num2)
      break
    case '%':
      num2 === 0
        ? alert('Tidak Bisa Dibagi Dengan 0')
        : (result.textContent = num1 % num2)
      break
  }
}

// Tambahkan event ketika tombol 'show' diklik
show.addEventListener('click', () => {
  // Validasi input tidak kosong
  if (val1.value === '' || val2.value === '') {
    alert('Input tidak boleh kosong')
    return
  }

  // Ambil Value dari input, dan ubah ke tipe data number (secara default soalnya string)
  const firstNum = Number(val1.value)
  const secondNum = Number(val2.value)

  // Panggil fungsi calc() ketika tombol diklik
  calc(firstNum, secondNum)
})

// Hal yang telah kupelajari dari latihan ini:
// - Cara mengambil nilai dari input HTML dengan JavaScript
// - Cara mengubah string menjadi number dengan Number()
// - Menggunakan switch untuk memilih operasi
// - Menambahkan event listener ke tombol
// - Menangani error seperti pembagian dengan 0
