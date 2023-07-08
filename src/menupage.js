import homepage from './homepage'
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

function menupage() {
    const content = document.querySelector('#content')
    content.innerHTML = ''
    navpage()

    const menu = document.createElement('div')
    content.appendChild(menu)

    const coffee =  document.createElement('div')
    const coffeeTitle =  document.createElement('h3')
    const coffeeList = document.createElement('div')
    coffeeTitle.innerText = "Coffee"
    menu.appendChild(coffee)
    coffee.appendChild(coffeeTitle)
    coffee.appendChild(coffeeList)
    const coffeeItems = [
        {
            name: "Classic Coffee",
            description: ""
        },
        {
            name: "Espresso",
            description: ""
        },
        {
            name: "Cappuccino",
            description: ""
        },
        {
            name: "Latte",
            description: ""
        },
        {
            name: "Mocha",
            description: ""
        },
        {
            name: "White Chocolate Mocha",
            description: ""
        },
        {
            name: "Caramel Macchiato",
            description: ""
        },
        {
            name: "Classic Cold Brew",
            description: ""
        }
    ]
    for (let x = 0; x < coffeeItems.length; x++) {
        coffeeList.innerHTML += `<div class="menuItem">
                                    <p class="itemTitle">${coffeeItems[x].name}</p>
                                    <p class="itemDescription">${coffeeItems[x].description}</p>
                                 </div>`
    }

    const tea =  document.createElement('div')
    const teaTitle =  document.createElement('h3')
    const teaList = document.createElement('div')
    teaTitle.innerText = "Tea"
    menu.appendChild(tea)
    tea.appendChild(teaTitle)
    tea.appendChild(teaList)
    const teaItems =  [
        {
            name: "Chai",
            description: ""
        },
        {
            name: "Black Tea",
            description: ""
        },
        {
            name: "Milk Tea",
            description: ""
        },
        {
            name: "Matcha Latte",
            description: ""
        },
        {
            name: "Thai Milk Tea",
            description: ""
        }
    ]
    for (let x = 0; x < teaItems.length; x++) {
        teaList.innerHTML += `<div class="menuItem">
                                    <p class="itemTitle">${teaItems[x].name}</p>
                                    <p class="itemDescription">${teaItems[x].description}</p>
                                 </div>`
    }
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