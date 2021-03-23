let mouse = document.querySelector('.mouse')

let nav = document.querySelectorAll('.nav-links')

let mail = document.querySelectorAll('.mail')

let footer = document.querySelectorAll('.footer')

window.addEventListener('mousemove',cursor)

function cursor(e){
          mouse.style.top = e.pageY + 'px'
          mouse.style.left = e.pageX + 'px'
}

nav.forEach(navs =>{
          navs.addEventListener('mouseover',()=>{
                    mouse.classList.add('cursor-one')
          })

          navs.addEventListener('mouseleave',()=>{
                    mouse.classList.remove('cursor-one')
          })

})

mail.forEach(link=>{
          
          link.addEventListener('mouseover',()=>{
                    mouse.classList.add('cursor-two')
          })

          link.addEventListener('mouseleave',()=>{
                    mouse.classList.remove('cursor-two')
          })
})

footer.forEach(click=>{
          click.addEventListener("mouseover",()=>{
                    mouse.classList.add('cursor-three')
          })

          click.addEventListener('mouseleave',()=>{
                    mouse.classList.remove('cursor-three')
          })
})