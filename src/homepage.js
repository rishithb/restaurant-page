function homepage() {
    const content = document.querySelector('#content')

    const sidebar = document.createElement('div')
    sidebar.id = 'sidebar'
    sidebar.innerHTML += "<a href='#'>Home</a> <a href='#'>Menu</a> <a href='#'>Contact</a>"
    content.appendChild(sidebar)
  
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
  
    const hours = document.createElement('div')
    hours.id = 'hours'
    hours.innerHTML = "<p>Sunday: 7am - 6pm</p><p>Monday: 7am - 8pm</p><p>Tuesday: 7am - 8pm</p><p>Wednesday: 7am - 8pm</p><p> Thursday: 7am - 8pm</p><p>Friday: 8am - 7pm</p><p>Saturday: 8am - 7pm</p>"
    home.appendChild(hours)
  
    const location = document.createElement('div')
    location.id = 'location'
    location.innerHTML = "<p id=address'>3632 Espresso Drive, Los Angeles, CA</p>"
    home.appendChild(location)
  }

  export default homepage