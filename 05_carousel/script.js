const carouselItems = [
  { alt: 'Mollit sunt', image: 'https://picsum.photos/600/400?1' },
  { alt: 'Aliquip veniam', image: 'https://picsum.photos/600/400?2' },
  { alt: 'Irure aliqua', image: 'https://picsum.photos/600/400?3' },
  { alt: 'Est ea tempor', image: 'https://picsum.photos/600/400?4' },
  { alt: 'Cillum', image: 'https://picsum.photos/600/400?5' },
  { alt: 'Ad consequat', image: 'https://picsum.photos/600/400?6' },
  { alt: 'Enim deserunt', image: 'https://picsum.photos/600/400?7' },
  { alt: 'Id enim', image: 'https://picsum.photos/600/400?8' },
  { alt: 'Proident sint', image: 'https://picsum.photos/600/400?9' },
  { alt: 'Id dolor', image: 'https://picsum.photos/600/400?10' },
]

const carouselNext = document.getElementById('carouselNext')
const carouselPrev = document.getElementById('carouselPrev')
const carouselDisplay = document.getElementById('carouselDisplay')

let count = 0

function createEl(alt, image, id) {
  const img = document.createElement('img')
  img.setAttribute('data-count', id)
  img.alt = alt
  img.src = image

  carouselDisplay.append(img)
}

function getItem() {
  carouselNext.addEventListener('click', () => {
    count += 1
    const getItem = carouselItems[count]

    createEl(getItem.alt, getItem.image, count)

    let removeCount = count - 1

    if (count >= 1) {
      const removeEL = document.querySelector(`[data-count="${removeCount}"]`)
      removeEL.remove()
    } else if (count === carouselItems.length - 1) {
      count = 0
    }
    console.log(count)
  })
}

function autoChange() {}

getItem()
