const data = [
    {
        title: 'SMM',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis quaerat itaque minus consectetur omnis eligendi, quos excepturi necessitatibus aspernatur quia laudantium molestias vel, voluptatum similique. Accusantium molestias illo inventore delectus alias, quae odio vero non, suscipit voluptatibus fuga iure dignissimos quaerat, ipsum modi maiores vitae et. Molestiae voluptatum mollitia eveniet tenetur atque suscipit nostrum magnam illo vitae ea consectetur sint quisquam, consequuntur voluptate eius asperiores. Dolorem rem autem excepturi recusandae fugiat, delectus dolores, laboriosam nemo, earum a debitis illo.'
    },
    {
        title: 'Brandbook',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis quaerat itaque minus consectetur omnis eligendi, quos excepturi necessitatibus aspernatur quia laudantium molestias vel, voluptatum similique. Accusantium molestias illo inventore delectus alias, quae odio vero non, suscipit voluptatibus fuga iure dignissimos quaerat, ipsum modi maiores vitae et. Molestiae voluptatum mollitia eveniet tenetur atque suscipit nostrum magnam illo vitae ea consectetur sint quisquam, consequuntur voluptate eius asperiores. Dolorem rem autem excepturi recusandae fugiat, delectus dolores, laboriosam nemo, earum a debitis illo.'
    },
    {
        title: 'Logotip yaratish',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis quaerat itaque minus consectetur omnis eligendi, quos excepturi necessitatibus aspernatur quia laudantium molestias vel, voluptatum similique. Accusantium molestias illo inventore delectus alias, quae odio vero non, suscipit voluptatibus fuga iure dignissimos quaerat, ipsum modi maiores vitae et. Molestiae voluptatum mollitia eveniet tenetur atque suscipit nostrum magnam illo vitae ea consectetur sint quisquam, consequuntur voluptate eius asperiores. Dolorem rem autem excepturi recusandae fugiat, delectus dolores, laboriosam nemo, earum a debitis illo.'
    },
    {
        title: 'Web-site yaratish',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis quaerat itaque minus consectetur omnis eligendi, quos excepturi necessitatibus aspernatur quia laudantium molestias vel, voluptatum similique. Accusantium molestias illo inventore delectus alias, quae odio vero non, suscipit voluptatibus fuga iure dignissimos quaerat, ipsum modi maiores vitae et. Molestiae voluptatum mollitia eveniet tenetur atque suscipit nostrum magnam illo vitae ea consectetur sint quisquam, consequuntur voluptate eius asperiores. Dolorem rem autem excepturi recusandae fugiat, delectus dolores, laboriosam nemo, earum a debitis illo.'
    },
    {
        title: 'Foto & video',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis quaerat itaque minus consectetur omnis eligendi, quos excepturi necessitatibus aspernatur quia laudantium molestias vel, voluptatum similique. Accusantium molestias illo inventore delectus alias, quae odio vero non, suscipit voluptatibus fuga iure dignissimos quaerat, ipsum modi maiores vitae et. Molestiae voluptatum mollitia eveniet tenetur atque suscipit nostrum magnam illo vitae ea consectetur sint quisquam, consequuntur voluptate eius asperiores. Dolorem rem autem excepturi recusandae fugiat, delectus dolores, laboriosam nemo, earum a debitis illo.'
    },
    {
        title: 'Reklamniy rolik',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt facilis quaerat itaque minus consectetur omnis eligendi, quos excepturi necessitatibus aspernatur quia laudantium molestias vel, voluptatum similique. Accusantium molestias illo inventore delectus alias, quae odio vero non, suscipit voluptatibus fuga iure dignissimos quaerat, ipsum modi maiores vitae et. Molestiae voluptatum mollitia eveniet tenetur atque suscipit nostrum magnam illo vitae ea consectetur sint quisquam, consequuntur voluptate eius asperiores. Dolorem rem autem excepturi recusandae fugiat, delectus dolores, laboriosam nemo, earum a debitis illo.'
    },
]

const servicesItems = document.querySelectorAll('.services .item')
const courseModal = document.querySelector('.services-modal')
const courseModalCloseBtn = document.querySelector('.services-modal .close')

const title = courseModal.querySelector('.title')
const text = courseModal.querySelector('.text')

servicesItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        courseModal.classList.add('active')
        body.classList.add('hidden')
        title.textContent = data[index].title
        text.textContent = data[index].text
    })
})

courseModalCloseBtn.addEventListener('click', ()  => {
    courseModal.classList.remove('active')
    body.classList.remove('hidden')
})