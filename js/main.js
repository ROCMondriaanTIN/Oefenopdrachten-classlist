function toggleError() {
    let box = document.querySelector('.box');
    box.classList.toggle('error');
  }

  function removeError() {
    console.log("ding")
    let box = document.querySelector('.box');
    box.classList.remove('error');
  }

  let animationInterval;

  function toggleAnimation() {
    console.log("dong")
    let animateBox = document.querySelector('.animate-box');
    animateBox.classList.toggle('blinker');
    animateBox.classList.toggle('font-arial');

    if (animateBox.classList.contains('blinker')) {
      animationInterval = setInterval(function() {
        animateBox.classList.toggle('blinker');
      }, 3000);
    } else {
      clearInterval(animationInterval);
    }
  }