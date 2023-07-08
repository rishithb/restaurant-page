import homepage from './homepage'
import menupage from './menupage'

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

function contactpage() {
    const content = document.querySelector('#content')
    content.innerHTML = ''
    navpage()

    const contact = document.createElement('div')
    content.appendChild(contact)

    const phoneAndEmail = document.createElement('div')
    phoneAndEmail.id = 'P&E'
    phoneAndEmail.innerHTML = `<p>(626)555-0191</p>
                               <p>coffeespot@fakemail.com</p>`
    contact.appendChild(phoneAndEmail)

    const hours = document.createElement('div')
    hours.id = 'hours'
    hours.innerHTML = `<p>Sunday: 7am - 6pm</p>
                       <p>Monday: 7am - 8pm</p
                       <p>Tuesday: 7am - 8pm</p>
                       <p>Wednesday: 7am - 8pm</p>
                       <p>Thursday: 7am - 8pm</p>
                       <p>Friday: 8am - 7pm</p>
                       <p>Saturday: 8am - 7pm</p>`
    contact.appendChild(hours)
  
    const location = document.createElement('div')
    location.id = 'location'
    location.innerHTML = "<p id=address'>3632 Espresso Drive, Los Angeles, CA</p>"
    contact.appendChild(location)


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

export default contactpage