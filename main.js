// small utilities: mobile menu, gallery, cart qty
document.addEventListener('DOMContentLoaded', ()=>{
  // mobile nav toggle
  const navToggle = document.querySelector('#navToggle');
  const mobileNav = document.querySelector('#mobileNav');
  if(navToggle && mobileNav){
    navToggle.addEventListener('click',()=> mobileNav.classList.toggle('open'));
  }

  // gallery thumbnails
  document.querySelectorAll('.thumbs img').forEach(img=>{
    img.addEventListener('click', e=>{
      const big = document.querySelector('.main-image');
      if(big) big.src = e.target.src;
      document.querySelectorAll('.thumbs img').forEach(t=>t.classList.remove('active'));
      e.target.classList.add('active');
    });
  });

  // cart qty handlers
  document.querySelectorAll('.qty').forEach(node=>{
    const dec = node.querySelector('.dec');
    const inc = node.querySelector('.inc');
    const input = node.querySelector('input[type="number"]');
    if(dec) dec.addEventListener('click', ()=> { input.value = Math.max(1, Number(input.value)-1); input.dispatchEvent(new Event('change')); });
    if(inc) inc.addEventListener('click', ()=> { input.value = Math.min(999, Number(input.value)+1); input.dispatchEvent(new Event('change')); });
  });

  // simple form validation example
  document.querySelectorAll('form[data-validate]').forEach(form=>{
    form.addEventListener('submit', e=>{
      const required = form.querySelectorAll('[required]');
      let ok = true;
      required.forEach(inp=>{
        if(!inp.value.trim()){
          inp.style.outline = '2px solid rgba(220,38,38,0.18)';
          ok = false;
        } else {
          inp.style.outline = 'none';
        }
      });
      if(!ok){ e.preventDefault(); alert('Please fill required fields'); }
    });
  });
});
