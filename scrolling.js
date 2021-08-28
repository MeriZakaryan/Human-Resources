const startProject = () => {

    document.querySelector('.smooth-scroll').style.display = 'none'
    document.querySelector('.scroll').style.backgroundColor = '#2B2B2B'
    document.querySelector('.available').style.transform = `translateY(0)`
    document.querySelector('.header').style.transform = `translateX(0)`
    document.querySelector('.particles').style.transform = `translateX(0)`
    setTimeout(() => {
        document.querySelector('.main').style.transform = `translateX(0)`
    }, 5000)
    setTimeout(() => {
        document.querySelector('.first .text div').style.transform = `translateX(0)`
    }, 11000)
    setTimeout(() => {
        document.querySelector('.second .text div').style.transform = `translateX(0)`
    }, 13500)
    setTimeout(() => {
        document.querySelector('.third .text div').style.transform = `translateX(0)`
    }, 16000)
    setTimeout(() => {
        document.querySelector('.fourth .text div').style.transform = `translateX(0)`
    }, 18500)

}
startProject()


const to2ndPage = () => {
    document.querySelector('.main').style.transform = `translateX(100%)`
    document.querySelector('.scroll').style.transition = '9s'
    document.querySelector('.scroll').style.transform = `translateX(1335px)`
    document.querySelector('.scroll').style.backgroundColor = 'transparent'
    setTimeout(() => {
        secondPage()
    }, 9000)
}


const secondPage = () => {

    document.querySelector('.main').style.display = 'none'
    document.querySelector('.scroll').style.display = 'none'
    document.querySelector('.header img').style.margin = '0'
    document.querySelector('.scroll-img').style.display = 'none'
    document.querySelector('.smooth-scroll').style.display = 'flex'
    document.querySelector('.other-contents').style.display = 'flex'

    createSecondPage()
    create()

    setTimeout(() => {
        document.querySelector('.info-cards').children[0].children[1].children[0].style.transform = `translateX(0)`
        document.querySelector('.info-cards').children[0].children[1].children[2].style.transform = `translateX(0)`
    }, 2000)
    setTimeout(() => {
        document.querySelector('.info-cards').children[0].children[1].children[1].style.transform = `translateX(0)`
    }, 4000)
    setTimeout(() => {
        document.querySelector('.info-cards').children[1].children[1].children[0].style.transform = `translateX(0)`
        document.querySelector('.info-cards').children[1].children[1].children[2].style.transform = `translateX(0)`
    }, 6000)
    setTimeout(() => {
        document.querySelector('.info-cards').children[1].children[1].children[1].style.transform = `translateX(0)`
    }, 8000)
    setTimeout(() => {
        document.querySelector('.info-cards').children[2].children[1].children[0].style.transform = `translateX(0)`
        document.querySelector('.info-cards').children[2].children[1].children[2].style.transform = `translateX(0)`
    }, 10000)
    setTimeout(() => {
        document.querySelector('.info-cards').children[2].children[1].children[1].style.transform = `translateX(0)`
    }, 12000)
    setTimeout(() => { document.querySelector('.agency-info').style.transform = `translateX(0)` }, 2000)

}

const create = () => {
    for (let i = 0; i < 3; i++) {
        document.querySelector('.info-cards').appendChild(infoCards())
    }

    document.querySelector('.info-cards').children[1].style.marginTop = '12%'
    document.querySelector('.info-cards').children[2].style.marginTop = '22%'

    document.querySelector('.info-cards').children[1].children[1].children[1].children[0].textContent = '02'
    document.querySelector('.info-cards').children[1].children[1].children[1].children[1].textContent = 'КОНСАЛТИНГ'

    document.querySelector('.info-cards').children[2].children[1].children[1].children[0].textContent = '03'
    document.querySelector('.info-cards').children[2].children[1].children[1].children[1].textContent = 'КОНСУЛЬТИРОВАНИЕ'
}

const createSecondPage = () => {
    document.querySelector('.second-page').innerHTML = `
        <div class='agency-info'>
            <h1>НЕМНОГО ОБ АГЕНСТВЕ</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</span>
            <span>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
            <div class='btn-block'>
                <button>НАПИСАТЬ НАМ</button>
                <button>PH</button>
            </div>
        </div>
        <div class='info-cards'></div>
    `
    infoCards()
}
const infoCards = () => {
    let card = document.createElement('div')
    card.setAttribute('class', 'first-card')
    let cardContent = `
        <hr class='line'>
        <div class='all'>
                <div class='decors'>
                    <hr class='short'>
                    <hr class='long'>
                </div>
                <div class='main-card'>
                    <span>01</span>
                    <span>ПОИСК И ПОДБОР</span>
                    <div class='info'>All payouts are automated we use fast and fault-tolerant servers, there are no delays in our system.</div>
                </div>
                <div class='decors'>
                    <hr class='long'>
                    <hr class='short'>
                </div>
            </div>
        `
    card.innerHTML = cardContent
    return card
}


const to3rdPage = () => {
    document.querySelector('.second-page').style.transform = `translateY(-160%)`
    setTimeout(() => {
        createThirdPage()
    }, 1000)
    setTimeout(() => {
        document.querySelector('.last-list').style.display = 'flex'
    }, 3500)
}

const createThirdPage = () => {
    document.querySelector('.main').style.display = 'none'
    document.querySelector('.scroll').style.display = 'none'
    document.querySelector('.header img').style.margin = '0'
    document.querySelector('.particles').style.display = 'none'
    document.querySelector('.smooth-scroll').style.display = 'flex'
    document.querySelector('.second-page').style.display = 'none'
    document.querySelector('.part-1').style.backgroundColor = '#64401E'
    document.querySelector('.part-2').style.backgroundColor = '#F49740'
    document.querySelector('.third-page').style.transform = `translateY(0)`

    document.querySelector('.third-page').innerHTML = `
        <div class='department'>
            <div>
                <div class='sections'>
                    <div><hr> <span>SPECIAL PROJECTS BY CSC-HR</span></div>
                    <span> ABOUT COMPANY CLIMATE</span>
                    <span> TECHNOLOGIES AT WORK</span>
                    <span> PAYMENT QUESTIONS</span>
                    <span> SELECTION PROCESS</span>
                </div>
                <div class='min-scroll'>
                    <div class='action'>
                        <p>SCROLL</p>
                    </div>
                </div>
            </div>
            <img src="Group 4782.2.png">
        </div>
        <div class='topic'>
            <span>NEW ITEMS FROM OUR COMPANY</span>
            <div>INNOVATE RECRUITMENT PROJECTS FROM THE FUNNIEST COMPANY</div>
            <div class='long-text'>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</span>
                <span>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</span>
            </div>
            
        </div>
        <div class='slider'>
            <img src='earth.png'>
        </div>
    
    `

}

let downPage = document.querySelector('.part-2')
downPage.addEventListener("click", () => { to3rdPage() })

let upPage = document.querySelector('.part-1')
upPage.addEventListener("click", () => {
    document.querySelector('.last-list').style.display = 'none'
    document.querySelector('.third-page').style.transition = '4s'
    document.querySelector('.third-page').style.transform = `translateY(120%)`
    setTimeout(() => {
        document.querySelector('.second-page').style.display = 'flex'
    }, 2000)

    setTimeout(() => {
        createSecondPage()
        create()
        document.querySelector('.part-1').style.backgroundColor = '#F49740'
        document.querySelector('.part-2').style.backgroundColor = '#64401E'
        document.querySelector('.second-page').style.transition = '4s'
        document.querySelector('.second-page').style.transform = `translateY(0)`

        document.querySelector('.info-cards').children[0].children[1].children[0].style.transform = `translateX(0)`
        document.querySelector('.info-cards').children[0].children[1].children[1].style.transform = `translateX(0)`
        document.querySelector('.info-cards').children[0].children[1].children[2].style.transform = `translateX(0)`

        document.querySelector('.info-cards').children[1].children[1].children[0].style.transform = `translateX(0)`
        document.querySelector('.info-cards').children[1].children[1].children[1].style.transform = `translateX(0)`
        document.querySelector('.info-cards').children[1].children[1].children[2].style.transform = `translateX(0)`

        document.querySelector('.info-cards').children[2].children[1].children[0].style.transform = `translateX(0)`
        document.querySelector('.info-cards').children[2].children[1].children[1].style.transform = `translateX(0)`
        document.querySelector('.info-cards').children[2].children[1].children[2].style.transform = `translateX(0)`

        document.querySelector('.agency-info').style.transform = `translateX(0)`
    }, 2500)

})


document.addEventListener('keydown', (event => {
    if (event.keyCode === 39) {
        to2ndPage()
    }
}))
document.addEventListener('keydown', (event => {
    if (event.keyCode === 40) {
        document.querySelector('.part-2').click()
    }
}))
document.addEventListener('keydown', (event => {
    if (event.keyCode === 38) {
        document.querySelector('.part-1').click()
    }
}))

document.querySelector('.other-contents').addEventListener('scroll', ()=>{
    document.querySelector('.part-2').click()
})
document.querySelector('.third-page').addEventListener('scroll', ()=>{
    document.querySelector('.part-1').click()
})
document.querySelector('.container').addEventListener('scroll', ()=>{
    to2ndPage()
})