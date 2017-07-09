
(function() {
  var imgContainers = Array.from(document.getElementsByClassName("content-imgs"));

  imgContainers.forEach(function(container) {
    imgFadeinFadeOut(container);
  })

  function imgFadeinFadeOut(container) {
    var currentIndex = 0;
    var imgLimit = 3;
    var imgs = container.children;
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
      hideImg(imgs[currentIndex]);
      setTimeout(noop, 1000);
      currentIndex++;
      activateImg(imgs[currentIndex]);
    }

    function nextImgReset() {
      hideImg(imgs[currentIndex]);
      setTimeout(noop, 1000);
      currentIndex = 0;
      activateImg(imgs[currentIndex]);
    }

    setInterval(function() {
      if (currentIndex >= (imgLimit - 1) && currentIndex !== 0) {
        nextImgReset();
      } else {
        nextImg();
      }
    }, 6000);
  };

})();