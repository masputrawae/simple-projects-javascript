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

// ambil id button dan body
const btn = document.getElementById('shuffleButton')
const body = document.getElementById('body')

// fungsi untuk mengacak warna
function random() {
    return colors[Math.floor(Math.random() * colors.length)]
}

// button klik, akan mengubah warna body dengan warna yang dipilih
// secara acak oleh fungsi random()
btn.addEventListener('click', () => {
    body.style.backgroundColor = random()
})
