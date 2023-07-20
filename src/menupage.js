import homepage from './homepage'
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

function menupage() {
    const content = document.querySelector('#content')
    content.innerHTML = ''
    navpage()

    const menu = document.createElement('div')
    menu.id = 'menu'
    content.appendChild(menu)

    const coffee =  document.createElement('div')
    coffee.id = 'coffee'
    const coffeeTitle =  document.createElement('h3')
    const coffeeList = document.createElement('div')
    coffeeList.id = 'coffee-list'
    coffeeTitle.innerHTML = "Coffee <span class='hc'> - * indicates hot or iced options</span>"
    menu.appendChild(coffee)
    coffee.appendChild(coffeeTitle)
    coffee.appendChild(coffeeList)
    const coffeeItems = [
        {
            name: "Classic Coffee",
            description: "Enjoy our simple yet inviting classic black coffee. Every sip contains subtle hints of cocoa and toasted nuts, with a balanced sweetness.*"
        },
        {
            name: "Espresso",
            description: "Get lost in the intense, full-bodied flavor of our signature espresso. Savor the bold and aromatic richness with every sip."
        },
        {
            name: "Cappuccino",
            description: "Taste the harmony of rich espresso, smooth steamed milk, and a layer of delicate foam. *"
        },
        {
            name: "Latte",
            description: "Creamy steamed milk paired with our premium brewed espresso. Enjoy it as a comforting warmth or a refreshing pick-me-up.*"
        },
        {
            name: "Classic Cold Brew",
            description: "Escape the Southern California heat with a classic cold brew. Savor its natural smooth and sweet flavor, with hints of chocolate and caramel."
        },
        {
            name: "Mocha",
            description: "The perfect fusion of rich chocolate and hot coffee. Upgrade your morning with a bold yet sweet cup of mocha."
        },
        {
            name: "White Chocolate Mocha",
            description: "Our spin on classic mocha, with velvety smooth white chocolate paired with out premium espresso. Elevate your morning with this silky sweet treat."
        },
        {
            name: "Caramel Macchiato",
            description: "Perfectly layered espresso, smooth steamed milk, and our luscious caramel sauce is the recipe for irresistible indulgence. Experience it's sweet, bold warmth, or it's cool refreshing flavors.*"
        }
    ]
    for (let x = 0; x < coffeeItems.length; x++) {
        coffeeList.innerHTML += `<div class="menuItem">
                                    <p class="itemTitle">${coffeeItems[x].name}</p>
                                    <p class="itemDescription">${coffeeItems[x].description}</p>
                                 </div>`
    }

    const tea =  document.createElement('div')
    tea.id = 'tea'
    const teaTitle =  document.createElement('h3')
    const teaList = document.createElement('div')
    teaList.id = 'tea-list'
    teaTitle.innerHTML = "Tea  <span class='hc'> - * indicates hot or iced options</span>"
    menu.appendChild(tea)
    tea.appendChild(teaTitle)
    tea.appendChild(teaList)
    const teaItems =  [
        {
            name: "Chai",
            description: "Warm yourself up with a cup of chai - black tea infused with a fragrant blend of aromatic spices, combined with velvety steamed milk."
        },
        {
            name: "Black Tea",
            description: "Our simple yet elegant black tea serves robust flavors in every sip. If black coffee isn't your cup of tea, maybe black tea is.*"
        },
        {
            name: "Milk Tea",
            description: "Black tea elevated with the smoothness of steamed milk - every sip contains the perfect balance of richness and sweetness.*"
        },
        {
            name: "Matcha Latte",
            description: "Crafted with the finest grade of matcha, our matcha latte offers the perfect balance of rich umami, subtle sweetness, and velvety steamed milk.*"
        },
        {
            name: "Thai Milk Tea",
            description: "Premium black tea infused with aromatic spices. Hot or iced, our Thai Milk Tea will lift your mood with each sip.*"
        }
    ]
    for (let x = 0; x < teaItems.length; x++) {
        teaList.innerHTML += `<div class="menuItem">
                                    <p class="itemTitle">${teaItems[x].name}</p>
                                    <p class="itemDescription">${teaItems[x].description}</p>
                                 </div>`
    }

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

export default menupage