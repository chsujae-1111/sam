const back = document.querySelector(`.back`)
const btn_1 = document.querySelector(`.song-button`)
const btn_2 = document.querySelector(`.song-button-1`)
const btn_3 = document.querySelector(`.song-button-2`)
const btn_4 = document.querySelector(`.song-button-3`)
const btn_5 = document.querySelector(`.song-button-4`)
const btn_6 = document.querySelector(`.song-button-5`)
const btn_7 = document.querySelector(`.song-button-6`)
const btn_8 = document.querySelector(`.song-button-7`)
const btn_9 = document.querySelector(`.song-button-8`)
const btn_10 = document.querySelector(`.song-button-9`)
back.addEventListener(`click` , () => {
    window.open('../1_slide.html')
})

btn_1.addEventListener(`click` , ()=> {
    let my_audio = new Audio('./audio/1.mp3')
    my_audio.play()
})
btn_3.addEventListener(`click` , ()=> {
    let my_audio = new Audio('./audio/3.mp3')
    my_audio.play()
})

btn_4.addEventListener(`click` , ()=> {
    let my_audio = new Audio('./audio/4.mp3')
    my_audio.play()
})
btn_5.addEventListener(`click` , ()=> {
    let my_audio = new Audio('./audio/5.mp3')
    my_audio.play()
})
btn_6.addEventListener(`click` , ()=> {
    let my_audio = new Audio('./audio/6.mp3')
    my_audio.play()
})
btn_7.addEventListener(`click` , ()=> {
    let my_audio = new Audio('./audio/7.mp3')
    my_audio.play()
})
btn_8.addEventListener(`click` , ()=> {
    let my_audio = new Audio('./audio/8.mp3')
    my_audio.play()
})
btn_9.addEventListener(`click` , ()=> {
    let my_audio = new Audio('./audio/9.mp3')
    my_audio.play()
})
btn_10.addEventListener(`click` , ()=> {
    let my_audio = new Audio('./audio/10.mp3')
    my_audio.play()
})

