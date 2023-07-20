import homepage from './homepage'
import menupage from './menupage'

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

function contactpage() {
    const content = document.querySelector('#content')
    content.innerHTML = ''
    navpage()

    const contact = document.createElement('div')
    contact.id = 'contact'
    content.appendChild(contact)

    const phoneAndEmail = document.createElement('div')
    phoneAndEmail.id = 'PE'
    phoneAndEmail.innerHTML = `<h2 class="contactHeader">Contact Info</h2>
                               <p>(626)555-0191</p>
                               <p>coffeespot@fakemail.com</p>`
    contact.appendChild(phoneAndEmail)

    
    const hours = document.createElement('div')
    hours.id = 'hours'
    hours.innerHTML = `<h2 class="contactHeader">Hours</h2>
                       <p>Sunday: 7am - 6pm</p>
                       <p>Monday: 7am - 8pm</p>
                       <p>Tuesday: 7am - 8pm</p>
                       <p>Wednesday: 7am - 8pm</p>
                       <p>Thursday: 7am - 8pm</p>
                       <p>Friday: 8am - 7pm</p>
                       <p>Saturday: 8am - 7pm</p>`
    contact.appendChild(hours)
  
    const location = document.createElement('div')
    location.id = 'location'
    location.innerHTML = `<h2 class="contactHeader">Address</h2>
                          <p id=address'>3632 Espresso Drive, Los Angeles, CA</p>`
    contact.appendChild(location)

    const contactForm = document.createElement('div')
    contactForm.innerHTML = '<h2>Contact Us!</h2>'
    contactForm.id = 'contact-form'
    const form = document.createElement('form')
    form.id = 'FORM'
    contactForm.appendChild(form)
    form.innerHTML = 
    `
        <div id="nameField">
            <label for="name">Name:</label>
            <input type="text" id="name" name="full_name" placeholder="John Smith" required>
        </div>
        <div id="emailField">
            <label for="email">Email:</label>
            <input type="email" id="user_email" name="email" placeholder="example123@email.com" required>
        </div>
        <div id="messageField">
            <label for="message">Message:</label>
            <input type="text" id="message" name="message" placeholder="Message here..." required>
        </div>
        <div id="submitButton">
            <button onclick="let btn = document.getElementById('FORM');FORM.reset();return false;">Send</button>
        </div>
    `

    contact.appendChild(contactForm)

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

export default contactpage