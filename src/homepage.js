import menupage from './menupage'
import contactpage from './contactpage'

function navpage() {
  const content = document.querySelector('#content')

  const sidebar = document.createElement('div')
  sidebar.id = 'sidebar'

  const homeBtn = document.createElement('button')
  const menuBtn = document.createElement('button')
  const contactBtn = document.createElement('button')
  homeBtn.innerText = 'HOME'
  menuBtn.innerText = 'MENU'
  contactBtn.innerText = 'CONTACT'

  sidebar.appendChild(homeBtn)
  sidebar.appendChild(menuBtn)
  sidebar.appendChild(contactBtn)

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

function homepage() {
    const content = document.querySelector('#content')
    content.innerHTML = '';
    navpage()

    const home = document.createElement('div')
    home.id = 'home'
    content.appendChild(home)
  
    const nameHeader = document.createElement('h1')
    nameHeader.innerText = 'The Coffee Spot'
    home.appendChild(nameHeader)
  
    const about = document.createElement('div')
    about.id = 'about'
    about.innerHTML = "<p>At the Coffee Spot, we value our customer's time, experience, and their coffee. We strive to serve you the best coffee, espresso and tea you've every and will have. Come on down to the Coffee Spot and we promise you'll never be getting your coffee from anywhere else!</p>"
    home.appendChild(about)
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