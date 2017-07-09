
(function() {
  var contentImgs = document.getElementsByClassName("content-imgs");
  var currentIndex = 0;
  var imgLimit = 1; // Limit of 3 images, zero indexed
  var imgSelector = contentImgs[0].children;
  var noop = function() {};

  function hideImg(imgNode) {
    imgNode.classList.remove("content-animated-img--display-active");
    imgNode.classList.add("content-animated-img--display-hidden");
  }

  function activateImg(imgNode) {
    imgNode.classList.remove("content-animated-img--display-hidden");
    imgNode.classList.add("content-animated-img--display-active");
  }

  function nextImg() {
    hideImg(imgSelector[currentIndex]);
    setTimeout(noop, 1000);
    currentIndex++;
    activateImg(imgSelector[currentIndex]);
  }

  function nextImgReset() {
    hideImg(imgSelector[currentIndex]);
    setTimeout(noop, 1000);
    currentIndex = 0;
    activateImg(imgSelector[currentIndex]);
  }

  setInterval(function() {
    if (currentIndex >= (imgLimit - 1) && currentIndex !== 0) {
      nextImgReset();
    } else {
      nextImg();
    }
  }, 6000);
})();