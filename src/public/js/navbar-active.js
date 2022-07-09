window.addEventListener("DOMContentLoaded", (e) => {

  const navbar = document.getElementById('mainMenu');
  const links = navbar.getElementsByTagName('a');
  const location = window.location.href.split('/')

  for(let i = 0; i < links.length; i++) {
    if(location[3] === links[i].href.split('/')[3]) {
      if(i >= 2 && i<= 10) links[2].classList.add("active");
      else links[2].classList.remove("active");
      links[i].classList.add('active');
      links[i].setAttribute("aria-current", 'page')
    } else if(location[3].length === 0) {
      links[0].classList.add('active');
      links[0].setAttribute("aria-current", 'page')
    } else {
      links[i].classList.remove('active');
      links[i].removeAttribute("aria-current", 'page')
    };
  }
});