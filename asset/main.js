const menuBtn = document.querySelector('.mobile-menu')
let menuOpen = false;
const menuCloseBtn = document.querySelector('.m-close')
const m_menu = document.querySelector('#m_menu')

const watch_videoBtn = document.querySelector('.hero-btn')
const watch_video = document.querySelector('.watch-video')
const close_video = document.querySelector('.close-video')


menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open')
        menuOpen = true
        m_menu.style.top = 0;
        m_menu.style.backgroundColor = '#000000';
        m_menu.style.zIndex=999999;
    }

})

menuCloseBtn.addEventListener('click', () => {
    menuBtn.classList.remove('open')
    m_menu.style.top = -120 + "%"
    menuOpen = false;
    m_menu.style.backgroundColor = '#ffffff';
    m_menu.style.zIndex=0;
})

watch_videoBtn.addEventListener('click', () => {
    watch_video.style.display='block'
    watch_video.style.zIndex=99999
})

close_video.addEventListener('click', () => {
    watch_video.style.display= 'none'
    watch_video.style.zIndex=0
})

