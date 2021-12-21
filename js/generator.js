// const apiUrl = 'https://api.chucknorris.io/jokes/random'
var jokes = ['When Chuck Norris cuts an onion, the onion cries.', 'On April 17, 1953, Mickey Mantle hit a home run that traveled about 565 feet. Chuck Norris matched that feat the next day. Chuck was 13 years old at the time.', 'After Mr. T predicted pain in Rocky III, the studio had to hire a Mr. T look-alike to walk around the set as a safety precaution, because Chuck Norris would be the first to say be careful what you wish for.', 'Chuck Norris can roundhouse kick your skeleton out of your body and wear your skin as a costume just before he goes on his daily five oclock killing spree.', 'Once a mosquito bit Chuck Norris and died instantly of acute cyanide poisoning.', 'Chuck Norris can go to closed stores', 'Girrafes were created when Chuck Norris uppercutted a horse.', 'Mother Nature doesn´t mess with Chuck Norris.', 'Chuck Norris can run Windows 7 on a Commodore 64.', 'Chuck Norris loves you. The proof: You´re still alive, aren´t you?']

const generateBtn = document.getElementById('generate-btn')
const textContainer = document.getElementById('text-container')
var previousIndex

generateBtn.addEventListener('click', e => {
    displayJoke()
})

function getRandomNumber() {
    var x = Math.floor(Math.random() * jokes.length)
    return x
}

function displayJoke() {
    var index = getRandomNumber()

    while (index == previousIndex) {
        index = getRandomNumber()
    }

    textContainer.innerText = jokes[index]
    previousIndex = index
}