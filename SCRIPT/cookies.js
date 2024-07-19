const button = document.getElementById('cookies-btn');

const setCookie = (cName, cValue, expDays) => {
  let date = new Date();
  date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

const getCookie = (cName) => {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split("; ");
  let value;
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) value = val.substring(name.length);
  });

  return value;
}

if (button) {
  button.addEventListener('click', () => {
    document.getElementById('cookies').style.display = "none";
    setCookie("cookie", true, 30);
  });
}

const cookieMessage = () => {
  if (!getCookie("cookie")) {
    document.getElementById('cookies').style.display = "block";
  }
}

window.addEventListener('load', cookieMessage);

// ---------- Cookie Richtlinien Fenster ----------

document.addEventListener('DOMContentLoaded', () => {
  const cookieLink = document.getElementById('more');
  const cookiePolicy = document.querySelector('.content')
  const closing = document.querySelector('.cookies-close')

  cookieLink.addEventListener('click', () => {
    cookiePolicy.classList.toggle('visible');
    document.body.classList.toggle('blur');
    closing.classList.toggle('visible');
  });

  closing.addEventListener('click', () => {
    cookiePolicy.classList.toggle('visible');
    document.body.classList.toggle('blur');
    closing.classList.toggle('visible');
  });

  document.addEventListener('click', (event) => {
    if (cookiePolicy.classList.contains('visible') && !cookiePolicy.contains(event.target) && !cookieLink.contains(event.target)) {
      cookiePolicy.classList.toggle('visible');
    document.body.classList.toggle('blur');
    closing.classList.toggle('visible');
    }
  })
});
