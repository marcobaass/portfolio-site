document.addEventListener('DOMContentLoaded', () => {
  const phoneLogo = document.getElementById('phone');
  const phoneNumber = document.querySelector('.phonenumber');


  phoneLogo.addEventListener('click', () => {
    phoneNumber.classList.toggle('visible');
  });

  const impressumLink = document.getElementById('ImpDaten');
  const impressum = document.querySelector('.content')
  const closing = document.querySelector('.impressum-close')

  impressumLink.addEventListener('click', () => {
    impressum.classList.toggle('visible');
    document.body.classList.toggle('blur');
    closing.classList.toggle('visible');
  });

  closing.addEventListener('click', () => {
    impressum.classList.toggle('visible');
    document.body.classList.toggle('blur');
    closing.classList.toggle('visible');
  });
});
