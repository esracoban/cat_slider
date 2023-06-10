(function () {
    const pictures = ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6"];
    const buttons = document.querySelectorAll(".btn");
    const imgDiv = document.querySelector(".img-container");
    let counter = 0;
    buttons.forEach(function (button) {
      button.addEventListener("click", function (e) {
        if (button.classList.contains("btn-left")) {
          counter--;
          if (counter < 0) {
            counter = pictures.length - 1;
          }
          imgDiv.style.background = `url(./images/${pictures[counter]}.jpg)`;
          imgDiv.style.backgroundSize = 'cover';//fotoyu alana sığdırmak için
        }
        if (button.classList.contains("btn-right")) {
          counter++;
          if (counter > pictures.length - 1) {
            counter = 0;
          }
          imgDiv.style.background = `url(./images/${pictures[counter]}.jpg)`;
          
        }
      });
    });
  })();