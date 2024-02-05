const hamBtn = document.querySelector(".ham");
const closeBtn = document.querySelector(".links span");

const nav = document.querySelector(".links");
const links = document.querySelectorAll("header nav .links ul li");

const slideImg = document.querySelector("section .container .slide img");
const slidehead = document.querySelector("section .container .text h1");
const slidepara = document.querySelector("section .container .text p");
const shopBtn = document.querySelector("section .container .text button");

const leftArrow = document.getElementById("left");

const rightArrow = document.getElementById("right");

const loaderParent = document.getElementById("loader");

let touchstart = 0,
  touchend = 0;

hamBtn.addEventListener("click", () => {
  nav.style.display = "flex";
  setTimeout(() => {
    nav.style.opacity = 1;
    nav.style.transform = "translateX(0)";

    links.forEach((e) => {
      e.style.opacity = 1;
    });
  }, 100);
});
closeBtn.addEventListener("click", () => {
  nav.style.opacity = 0;
  nav.style.transform = "translateX(-100%)";
  links.forEach((e) => {
    e.style.opacity = 0;
  });
  setTimeout(() => {
    nav.style.display = "none";
  }, 500);
});

// Make Mobiles slide with touchs

function checkROL() {
  if (touchend < touchstart) {
    slideImg.style.opacity = 0;
    slideImg.style.transform = "translateX(-100%)";

    shopBtn.style.opacity = 0;
    shopBtn.style.transform = "translateX(-100%)";

    slidehead.style.opacity = 0;
    slidehead.style.transform = "translateX(-100%)";
    slidepara.style.opacity = 0;
    slidepara.style.transform = "translateX(-100%)";
    setTimeout(() => {
      if (slideImg.alt == "hero-1") {
        slideImg.src = "./assets/images/mobile-image-hero-2.jpg";
        slideImg.alt = "hero-2";

        slidehead.textContent = "We are available all across the globel";

        slidepara.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business.
              Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
              store locator. Any questions? Don't hesitate to contact us today.`;
      } else if (slideImg.alt == "hero-2") {
        slideImg.src = "./assets/images/mobile-image-hero-3.jpg";
        slideImg.alt = "hero-3";

        slidehead.textContent = "Manufactured with the best materials";

        slidepara.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
                to ensure that every product is made as perfect and as consistent as possible. With three decades of
                experience in this industry, we understand what customers want for their home and office.`;
      } else if (slideImg.alt == "hero-3") {
        slideImg.src = "./assets/images/mobile-image-hero-1.jpg";
        slideImg.alt = "hero-1";

        slidehead.textContent = "Discover innovative ways to decorate";

        slidepara.textContent = `We provide unmatched quality, comfort, and style for property owners across the country.
          Our experts combine form and function in bringing your vision to life. Create a room in your
          own style with our collection and make your property a reflection of you and what you love.`;
      }
      slideImg.style.opacity = 1;
      slideImg.style.transform = "translateX(0%)";

      slidehead.style.opacity = 1;
      slidehead.style.transform = "translateX(0%)";
      slidepara.style.opacity = 1;
      slidepara.style.transform = "translateX(0%)";

      shopBtn.style.opacity = 1;
      shopBtn.style.transform = "translateX(0%)";
    }, 500);
  } else if (touchend > touchstart) {
    slideImg.style.opacity = 0;
    slideImg.style.transform = "translateX(100%)";

    shopBtn.style.opacity = 0;
    shopBtn.style.transform = "translateX(100%)";

    slidehead.style.opacity = 0;
    slidehead.style.transform = "translateX(100%)";
    slidepara.style.opacity = 0;
    slidepara.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (slideImg.alt == "hero-1") {
        slideImg.src = "./assets/images/mobile-image-hero-3.jpg";
        slideImg.alt = "hero-3";

        slidehead.textContent = "Manufactured with the best materials";

        slidepara.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
          to ensure that every product is made as perfect and as consistent as possible. With three decades of
          experience in this industry, we understand what customers want for their home and office.`;
        //
      } else if (slideImg.alt == "hero-2") {
        slideImg.src = "./assets/images/mobile-image-hero-1.jpg";
        slideImg.alt = "hero-1";

        slidehead.textContent = "Discover innovative ways to decorate";

        slidepara.textContent = `We provide unmatched quality, comfort, and style for property owners across the country.
        Our experts combine form and function in bringing your vision to life. Create a room in your
        own style with our collection and make your property a reflection of you and what you love.`;
        //
      } else if (slideImg.alt == "hero-3") {
        slideImg.src = "./assets/images/mobile-image-hero-2.jpg";
        slideImg.alt = "hero-2";

        slidehead.textContent = "We are available all across the globel";

        slidepara.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business.
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
        store locator. Any questions? Don't hesitate to contact us today.`;
        //
      }
      slideImg.style.opacity = 1;
      slideImg.style.transform = "translateX(0%)";

      slidehead.style.opacity = 1;
      slidehead.style.transform = "translateX(0%)";
      slidepara.style.opacity = 1;
      slidepara.style.transform = "translateX(0%)";
      shopBtn.style.opacity = 1;
      shopBtn.style.transform = "translateX(0%)";
    }, 500);
  }
}

slideImg.addEventListener("touchstart", (e) => {
  touchstart = e.changedTouches[0].screenX;
});

slideImg.addEventListener("touchend", (e) => {
  touchend = e.changedTouches[0].screenX;
  checkROL();
});
window.addEventListener("load", responsive());

function responsive() {
  if (window.innerWidth >= 1016) {
    // Configure with change size or loading page
    if (slideImg.alt == "hero-1") {
      slideImg.src = "./assets/images/desktop-image-hero-1.jpg";
    } else if (slideImg.src == "hero-2") {
      slideImg.src = "./assets/images/desktop-image-hero-1.jpg";
    } else if (slideImg.src == "hero-3") {
      slideImg.src = "./assets/images/desktop-image-hero-1.jpg";
    }
    // arrow listener
    rightArrow.addEventListener("click", () => {
      slideImg.style.opacity = 0;
      slideImg.style.transform = "translateX(100%)";

      shopBtn.style.opacity = 0;
      shopBtn.style.transform = "translateX(100%)";

      slidehead.style.opacity = 0;
      slidehead.style.transform = "translateX(100%)";
      slidepara.style.opacity = 0;
      slidepara.style.transform = "translateX(100%)";

      setTimeout(() => {
        if (slideImg.alt == "hero-1") {
          slideImg.src = "./assets/images/desktop-image-hero-3.jpg";
          slideImg.alt = "hero-3";

          slidehead.textContent = "Manufactured with the best materials";

          slidepara.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
              to ensure that every product is made as perfect and as consistent as possible. With three decades of 
              experience in this industry, we understand what customers want for their home and office.`;
          //
        } else if (slideImg.alt == "hero-2") {
          slideImg.src = "./assets/images/desktop-image-hero-1.jpg";
          slideImg.alt = "hero-1";

          slidehead.textContent = "Discover innovative ways to decorate";

          slidepara.textContent = `We provide unmatched quality, comfort, and style for property owners across the country. 
            Our experts combine form and function in bringing your vision to life. Create a room in your 
            own style with our collection and make your property a reflection of you and what you love.`;
          //
        } else if (slideImg.alt == "hero-3") {
          slideImg.src = "./assets/images/desktop-image-hero-2.jpg";
          slideImg.alt = "hero-2";

          slidehead.textContent = "We are available all across the globel";

          slidepara.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
            Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
            store locator. Any questions? Don't hesitate to contact us today.`;
          //
        }
        slideImg.style.opacity = 1;
        slideImg.style.transform = "translateX(0%)";

        shopBtn.style.opacity = 1;
        shopBtn.style.transform = "translateX(0%)";

        slidehead.style.opacity = 1;
        slidehead.style.transform = "translateX(0%)";
        slidepara.style.opacity = 1;
        slidepara.style.transform = "translateX(0%)";
      }, 500);
    });

    leftArrow.addEventListener("click", () => {
      slideImg.style.opacity = 0;
      slideImg.style.transform = "translateX(-100%)";

      shopBtn.style.opacity = 0;
      shopBtn.style.transform = "translateX(-100%)";

      slidehead.style.opacity = 0;
      slidehead.style.transform = "translateX(-100%)";
      slidepara.style.opacity = 0;
      slidepara.style.transform = "translateX(-100%)";
      setTimeout(() => {
        if (slideImg.alt == "hero-1") {
          slideImg.src = "./assets/images/desktop-image-hero-2.jpg";
          slideImg.alt = "hero-2";

          slidehead.textContent = "We are available all across the globel";

          slidepara.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
            Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
            store locator. Any questions? Don't hesitate to contact us today.`;
          //
        } else if (slideImg.alt == "hero-2") {
          slideImg.src = "./assets/images/desktop-image-hero-3.jpg";
          slideImg.alt = "hero-3";

          slidehead.textContent = "Manufactured with the best materials";

          slidepara.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
              to ensure that every product is made as perfect and as consistent as possible. With three decades of 
              experience in this industry, we understand what customers want for their home and office.`;
          //
        } else if (slideImg.alt == "hero-3") {
          slideImg.src = "./assets/images/desktop-image-hero-1.jpg";
          slideImg.alt = "hero-1";

          slidehead.textContent = "Discover innovative ways to decorate";

          slidepara.textContent = `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`;
        }
        slideImg.style.opacity = 1;
        slideImg.style.transform = "translateX(0%)";

        shopBtn.style.opacity = 1;
        shopBtn.style.transform = "translateX(0%)";

        slidehead.style.opacity = 1;
        slidehead.style.transform = "translateX(0%)";
        slidepara.style.opacity = 1;
        slidepara.style.transform = "translateX(0%)";
      }, 500);
    });
    // keybourd events
    document.addEventListener("keydown", (e) => {
      //   for right arrow to make evented
      if (e.key == "ArrowLeft") {
        slideImg.style.opacity = 0;
        slideImg.style.transform = "translateX(-100%)";

        shopBtn.style.opacity = 0;
        shopBtn.style.transform = "translateX(-100%)";

        slidehead.style.opacity = 0;
        slidehead.style.transform = "translateX(-100%)";
        slidepara.style.opacity = 0;
        slidepara.style.transform = "translateX(-100%)";
        setTimeout(() => {
          if (slideImg.alt == "hero-1") {
            slideImg.src = "./assets/images/desktop-image-hero-2.jpg";
            slideImg.alt = "hero-2";

            slidehead.textContent = "We are available all across the globel";

            slidepara.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
              Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
              store locator. Any questions? Don't hesitate to contact us today.`;
            //
          } else if (slideImg.alt == "hero-2") {
            slideImg.src = "./assets/images/desktop-image-hero-3.jpg";
            slideImg.alt = "hero-3";

            slidehead.textContent = "Manufactured with the best materials";

            slidepara.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                experience in this industry, we understand what customers want for their home and office.`;
            //
          } else if (slideImg.alt == "hero-3") {
            slideImg.src = "./assets/images/desktop-image-hero-1.jpg";
            slideImg.alt = "hero-1";

            slidehead.textContent = "Discover innovative ways to decorate";

            slidepara.textContent = `We provide unmatched quality, comfort, and style for property owners across the country. 
          Our experts combine form and function in bringing your vision to life. Create a room in your 
          own style with our collection and make your property a reflection of you and what you love.`;
          }
          slideImg.style.opacity = 1;
          slideImg.style.transform = "translateX(0%)";

          shopBtn.style.opacity = 1;
          shopBtn.style.transform = "translateX(0%)";

          slidehead.style.opacity = 1;
          slidehead.style.transform = "translateX(0%)";
          slidepara.style.opacity = 1;
          slidepara.style.transform = "translateX(0%)";
        }, 500);
      }

      //   for left arrow to make evented
      else if (e.key == "ArrowRight") {
        slideImg.style.opacity = 0;
        slideImg.style.transform = "translateX(100%)";

        shopBtn.style.opacity = 0;
        shopBtn.style.transform = "translateX(100%)";

        slidehead.style.opacity = 0;
        slidehead.style.transform = "translateX(100%)";
        slidepara.style.opacity = 0;
        slidepara.style.transform = "translateX(100%)";

        setTimeout(() => {
          if (slideImg.alt == "hero-1") {
            slideImg.src = "./assets/images/desktop-image-hero-3.jpg";
            slideImg.alt = "hero-3";

            slidehead.textContent = "Manufactured with the best materials";

            slidepara.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                experience in this industry, we understand what customers want for their home and office.`;
            //
          } else if (slideImg.alt == "hero-2") {
            slideImg.src = "./assets/images/desktop-image-hero-1.jpg";
            slideImg.alt = "hero-1";

            slidehead.textContent = "Discover innovative ways to decorate";

            slidepara.textContent = `We provide unmatched quality, comfort, and style for property owners across the country. 
              Our experts combine form and function in bringing your vision to life. Create a room in your 
              own style with our collection and make your property a reflection of you and what you love.`;
            //
          } else if (slideImg.alt == "hero-3") {
            slideImg.src = "./assets/images/desktop-image-hero-2.jpg";
            slideImg.alt = "hero-2";

            slidehead.textContent = "We are available all across the globel";

            slidepara.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
              Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
              store locator. Any questions? Don't hesitate to contact us today.`;
            //
          }
          slideImg.style.opacity = 1;
          slideImg.style.transform = "translateX(0%)";

          shopBtn.style.opacity = 1;
          shopBtn.style.transform = "translateX(0%)";

          slidehead.style.opacity = 1;
          slidehead.style.transform = "translateX(0%)";
          slidepara.style.opacity = 1;
          slidepara.style.transform = "translateX(0%)";
        }, 500);
      }
    });
  } else {
    // Configure with change size or loading page
    if (slideImg.alt == "hero-1") {
      slideImg.src = "./assets/images/mobile-image-hero-1.jpg";
    } else if (slideImg.src == "hero-2") {
      slideImg.src = "./assets/images/mobile-image-hero-1.jpg";
    } else if (slideImg.src == "hero-3") {
      slideImg.src = "./assets/images/mobile-image-hero-1.jpg";
    }
    leftArrow.addEventListener("click", () => {
      slideImg.style.opacity = 0;
      slideImg.style.transform = "translateX(100%)";

      shopBtn.style.transform = "translateX(100%)";
      shopBtn.style.opacity = 0;

      slidehead.style.opacity = 0;
      slidehead.style.transform = "translateX(100%)";
      slidepara.style.opacity = 0;
      slidepara.style.transform = "translateX(100%)";

      setTimeout(() => {
        if (slideImg.alt == "hero-1") {
          slideImg.src = "./assets/images/mobile-image-hero-3.jpg";
          slideImg.alt = "hero-3";

          slidehead.textContent = "Manufactured with the best materials";

          slidepara.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
            to ensure that every product is made as perfect and as consistent as possible. With three decades of 
            experience in this industry, we understand what customers want for their home and office.`;
          //
        } else if (slideImg.alt == "hero-2") {
          slideImg.src = "./assets/images/mobile-image-hero-1.jpg";
          slideImg.alt = "hero-1";

          slidehead.textContent = "Discover innovative ways to decorate";

          slidepara.textContent = `We provide unmatched quality, comfort, and style for property owners across the country. 
          Our experts combine form and function in bringing your vision to life. Create a room in your 
          own style with our collection and make your property a reflection of you and what you love.`;
          //
        } else if (slideImg.alt == "hero-3") {
          slideImg.src = "./assets/images/mobile-image-hero-2.jpg";
          slideImg.alt = "hero-2";

          slidehead.textContent = "We are available all across the globel";

          slidepara.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
          Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
          store locator. Any questions? Don't hesitate to contact us today.`;
          //
        }
        slideImg.style.opacity = 1;
        slideImg.style.transform = "translateX(0%)";

        shopBtn.style.opacity = 1;
        shopBtn.style.transform = "translateX(0%)";

        slidehead.style.opacity = 1;
        slidehead.style.transform = "translateX(0%)";

        slidepara.style.opacity = 1;
        slidepara.style.transform = "translateX(0%)";
      }, 500);
    });

    rightArrow.addEventListener("click", () => {
      slideImg.style.opacity = 0;
      slideImg.style.transform = "translateX(-100%)";

      shopBtn.style.transform = "translateX(-100%)";
      shopBtn.style.opacity = 0;

      slidehead.style.opacity = 0;
      slidehead.style.transform = "translateX(-100%)";
      slidepara.style.opacity = 0;
      slidepara.style.transform = "translateX(-100%)";
      setTimeout(() => {
        if (slideImg.alt == "hero-1") {
          slideImg.src = "./assets/images/mobile-image-hero-2.jpg";
          slideImg.alt = "hero-2";

          slidehead.textContent = "We are available all across the globel";

          slidepara.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
            Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
            store locator. Any questions? Don't hesitate to contact us today.`;
          //
        } else if (slideImg.alt == "hero-2") {
          slideImg.src = "./assets/images/mobile-image-hero-3.jpg";
          slideImg.alt = "hero-3";

          slidehead.textContent = "Manufactured with the best materials";

          slidepara.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
              to ensure that every product is made as perfect and as consistent as possible. With three decades of 
              experience in this industry, we understand what customers want for their home and office.`;
          //
        } else if (slideImg.alt == "hero-3") {
          slideImg.src = "./assets/images/mobile-image-hero-1.jpg";
          slideImg.alt = "hero-1";

          slidehead.textContent = "Discover innovative ways to decorate";

          slidepara.textContent = `We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`;
        }
        slideImg.style.opacity = 1;
        slideImg.style.transform = "translateX(0%)";

        slidehead.style.opacity = 1;
        slidehead.style.transform = "translateX(0%)";

        shopBtn.style.transform = "translateX(0%)";
        shopBtn.style.opacity = 1;

        slidepara.style.opacity = 1;
        slidepara.style.transform = "translateX(0%)";
      }, 500);
    });
    document.addEventListener("keydown", (e) => {
      //   for right arrow to make evented
      if (e.key == "ArrowRight") {
        slideImg.style.opacity = 0;
        slideImg.style.transform = "translateX(-100%)";

        shopBtn.style.transform = "translateX(-100%)";
        shopBtn.style.opacity = 0;

        slidehead.style.opacity = 0;
        slidehead.style.transform = "translateX(-100%)";
        slidepara.style.opacity = 0;
        slidepara.style.transform = "translateX(-100%)";
        setTimeout(() => {
          if (slideImg.alt == "hero-1") {
            slideImg.src = "./assets/images/mobile-image-hero-2.jpg";
            slideImg.alt = "hero-2";

            slidehead.textContent = "We are available all across the globel";

            slidepara.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
              Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
              store locator. Any questions? Don't hesitate to contact us today.`;
          } else if (slideImg.alt == "hero-2") {
            slideImg.src = "./assets/images/mobile-image-hero-3.jpg";
            slideImg.alt = "hero-3";

            slidehead.textContent = "Manufactured with the best materials";

            slidepara.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                experience in this industry, we understand what customers want for their home and office.`;
          } else if (slideImg.alt == "hero-3") {
            slideImg.src = "./assets/images/mobile-image-hero-1.jpg";
            slideImg.alt = "hero-1";

            slidehead.textContent = "Discover innovative ways to decorate";

            slidepara.textContent = `We provide unmatched quality, comfort, and style for property owners across the country. 
          Our experts combine form and function in bringing your vision to life. Create a room in your 
          own style with our collection and make your property a reflection of you and what you love.`;
          }
          slideImg.style.opacity = 1;
          slideImg.style.transform = "translateX(0%)";

          shopBtn.style.opacity = 1;
          shopBtn.style.transform = "translateX(0%)";

          slidehead.style.opacity = 1;
          slidehead.style.transform = "translateX(0%)";
          slidepara.style.opacity = 1;
          slidepara.style.transform = "translateX(0%)";
        }, 500);
      }

      //   for left arrow to make evented
      else if (e.key == "ArrowLeft") {
        slideImg.style.opacity = 0;
        slideImg.style.transform = "translateX(100%)";

        shopBtn.style.transform = "translateX(100%)";
        shopBtn.style.opacity = 0;

        slidehead.style.opacity = 0;
        slidehead.style.transform = "translateX(100%)";
        slidepara.style.opacity = 0;
        slidepara.style.transform = "translateX(100%)";
        setTimeout(() => {
          if (slideImg.alt == "hero-1") {
            slideImg.src = "./assets/images/mobile-image-hero-3.jpg";
            slideImg.alt = "hero-3";

            slidehead.textContent = "Manufactured with the best materials";

            slidepara.textContent = `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
              to ensure that every product is made as perfect and as consistent as possible. With three decades of 
              experience in this industry, we understand what customers want for their home and office.`;
            //
          } else if (slideImg.alt == "hero-2") {
            slideImg.src = "./assets/images/mobile-image-hero-1.jpg";
            slideImg.alt = "hero-1";

            slidehead.textContent = "Discover innovative ways to decorate";

            slidepara.textContent = `We provide unmatched quality, comfort, and style for property owners across the country. 
            Our experts combine form and function in bringing your vision to life. Create a room in your 
            own style with our collection and make your property a reflection of you and what you love.`;
            //
          } else if (slideImg.alt == "hero-3") {
            slideImg.src = "./assets/images/mobile-image-hero-2.jpg";
            slideImg.alt = "hero-2";

            slidehead.textContent = "We are available all across the globel";

            slidepara.textContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
            Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
            store locator. Any questions? Don't hesitate to contact us today.`;
            //
          }
          slideImg.style.opacity = 1;
          slideImg.style.transform = "translateX(0%)";

          shopBtn.style.opacity = 1;
          shopBtn.style.transform = "translateX(0%)";
          slidehead.style.opacity = 1;
          slidehead.style.transform = "translateX(0%)";
          slidepara.style.opacity = 1;
          slidepara.style.transform = "translateX(0%)";
        }, 500);
      }
      //   for "Escape" to make nav event
      else if (e.key == "Escape") {
        nav.style.opacity = 0;
        nav.style.transform = "translateX(-100%)";
        links.forEach((e) => {
          e.style.opacity = 0;
        });
        setTimeout(() => {
          nav.style.display = "none";
        }, 500);
      }
    });
  }

  setTimeout(() => {
    document.querySelectorAll("section,header").forEach((e) => {
      e.style.opacity = 1;
      loaderParent.style.opacity = 0;
      setTimeout(() => {
        e.classList.remove("loader");
        loaderParent.style.display = "none";
        document.body.classList.remove("loader");
      }, 700);
    });
  }, 10000);
}
