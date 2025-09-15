
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href')
    if(href.length>1){
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({behavior:'smooth',block:'start'})
    }
  })
})

// Cookie banner
const cookie = document.querySelector('.cookie')
if(localStorage.getItem('cookie-ok')!=='1'){
  cookie?.classList.add('show')
}
document.querySelector('#cookie-ok')?.addEventListener('click',()=>{
  localStorage.setItem('cookie-ok','1'); cookie.classList.remove('show')
})

// CTA tracking
document.querySelectorAll('[data-cta="call"]').forEach(btn=>{
  btn.addEventListener('click',()=>console.log('Call CTA clicked'))
})

// Form UX
const form = document.querySelector('#angebot-form')
form?.addEventListener('submit', (e)=>{
  const btn = form.querySelector('button[type="submit"]')
  btn.disabled = true
  btn.textContent = 'Sende Anfrage...'
})
