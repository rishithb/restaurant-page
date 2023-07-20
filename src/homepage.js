import menupage from './menupage'
import contactpage from './contactpage'

function navpage() {
  const content = document.querySelector('#content')

  const sidebar = document.createElement('div')
  sidebar.id = 'sidebar'

  const btns = document.createElement('div')
  btns.id = 'btns'
  const homeBtn = document.createElement('button')
  const menuBtn = document.createElement('button')
  const contactBtn = document.createElement('button')
  homeBtn.innerText = 'home'
  menuBtn.innerText = 'menu'
  contactBtn.innerText = 'contact'
  btns.appendChild(homeBtn)
  btns.appendChild(menuBtn)
  btns.appendChild(contactBtn)

  const logo = document.createElement('div')
  logo.id = 'logo'
  logo.innerHTML = '<img src="./imgs/coffee-logo.svg">'

  sidebar.appendChild(btns)
  sidebar.appendChild(logo)

  homeBtn.addEventListener("click", function() {
    page('home')
  })
  menuBtn.addEventListener("click", function() {
    page('menu')
  })
  contactBtn.addEventListener("click", function() {
    page('contact')
  })

  content.appendChild(sidebar)
}

function foot() {
  const content = document.querySelector('#content')

  const footer = document.createElement('div')
  footer.id = 'footer'
  const copyright = document.createElement('div')
  copyright.id = 'copyright'

  copyright.innerHTML = `<a href='https://github.com/rishithb'>
                            <img id='git link svg' src='./imgs/github-mark-white.svg'>
                            <p>&copy; rishithb</p>
                         </a>` 
  footer.appendChild(copyright)
  content.appendChild(footer)
}

function homepage() {
    const content = document.querySelector('#content')
    content.innerHTML = '';
    navpage()

    const home = document.createElement('div')
    home.id = 'home'
    content.appendChild(home)

    const phrase = document.createElement('div')
    phrase.id = 'phrase'
    const phraseText = document.createElement('div')
    phraseText.id = 'phraseText'
    const enjoy = document.createElement('p')
    enjoy.innerText = "Don't wait for great coffee. Enjoy it here."
    phraseText.appendChild(enjoy)
    phrase.appendChild(phraseText)
    home.appendChild(phrase)
    
    const about = document.createElement('div')
    about.id = 'about'
    about.innerHTML = "<p>At the Coffee Spot, we value our customer's time, experience, and their coffee. We strive to serve you the best coffee, espresso and tea you've every and will have. Come on down to the Coffee Spot and we promise you'll never be getting your coffee from anywhere else!</p>"
    phrase.appendChild(about)

    const backgroundCredit = document.createElement('div')
    backgroundCredit.id = 'photoCredit'
    backgroundCredit.innerHTML = 'Photo by <a href="https://unsplash.com/@karishea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kari Shea</a> on <a href="https://unsplash.com/photos/pJn9WhMqFIs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    content.appendChild(backgroundCredit)

    foot()
  }

  function page(x) {
    const y = {
        home: homepage, 
        menu: menupage, 
        contact: contactpage,
    }
    const content = document.querySelector('#content')
    content.innerHTML = ''
    y[x]()
}


  export default homepage