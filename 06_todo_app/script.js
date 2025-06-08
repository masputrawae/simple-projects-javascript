const form = document.getElementById('form')
const inputDate = document.getElementById('inputDate')
const inputTask = document.getElementById('inputTask')
const results = document.getElementById('results')

const STORAGE_KEY = 'todo'
let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []

function setUUID() {
  return crypto.randomUUID()
}

function createTask(uuid, date, task) {
  data.push({ id: uuid, date, task })
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

function deleteTask(id) {
  // Hapus dari data
  data = data.filter(item => item.id !== id)
  // Simpan ulang ke localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  // Hapus dari tampilan
  const taskElement = document.getElementById(id)
  if (taskElement) taskElement.remove()
}

function showList(uuid, date, task) {
  const li = document.createElement('li')
  const time = document.createElement('time')
  const span = document.createElement('span')
  const button = document.createElement('button')

  li.id = uuid
  time.textContent = `${date}: `
  span.textContent = task
  button.textContent = 'Delete'
  button.classList = 'btn-link'

  button.addEventListener('click', () => {
    deleteTask(uuid)
  })

  li.append(time, span, button)
  results.prepend(li)
}

function list() {
  data.forEach(item => {
    showList(item.id, item.date, item.task)
  })
}

// Tampilkan task yang tersimpan
list()

// Tambah task baru
form.addEventListener('submit', e => {
  e.preventDefault()

  const newDate = new Date(inputDate.value).toISOString().slice(0, 10)
  const newTask = inputTask.value
  const newUUID = setUUID()

  createTask(newUUID, newDate, newTask)
  showList(newUUID, newDate, newTask)

  form.reset()
})
