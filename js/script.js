fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(data => data)

const api_url = 'https://api.chucknorris.io/jokes/random'
const generate_btn = document.getElementById('generate-btn')
const text_container = document.getElementById('text-container')

generate_btn.addEventListener('click', e => {
    text_container.innerText = 'hello'
})