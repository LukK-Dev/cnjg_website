const apiUrl = 'https://api.chucknorris.io/jokes/random'
const generateBtn = document.getElementById('generate-btn')
const textContainer = document.getElementById('text-container')

generateBtn.addEventListener('click', e => {
    textContainer.innerText = 'hello'
})

function getJoke() {
    let joke = fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            textContainer.innerHTML = '<p>'
        })
}