function myFunction() {
  const x = document.getElementsByClassName('menu-link');

  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
