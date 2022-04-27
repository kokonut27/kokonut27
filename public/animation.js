document.addEventListener('scroll', function (e) {
  var top  = window.pageYOffset + window.innerHeight,
    isVisible = top > document.querySelector('.content > .projects').offsetTop;
       
  if (isVisible) {
    document.getElementByClassName('projects').classList.add('animate');
  }
  else {
    document.getElementByClassName('projects').classList.remove('animate');
  }
});