import "./style.scss";
import gsap from "gsap";

const noButton = document.querySelector(".container-1 .no");
const yesButton = document.querySelector(".container-1 .yes");
const yesButton3 = document.querySelector(".container-3 .yes");

yesButton.addEventListener("click", () => {
  gsap.to(".container-1", {
    display: "none",
    duration: 0,
  });
  gsap.to(".container-3", {
    display: "none",
    duration: 0,
  });
  gsap.to(".container-2", {
    display: "flex",
    duration: 0,
  });
  gsap.to("body", {
    backgroundColor: "#FF2F6F",
    duration: 0,
  });
});

noButton.addEventListener("click", () => {
  gsap.to(".container-1", {
    display: "none",
    duration: 0,
  });
  gsap.to(".container-3", {
    display: "flex",
    duration: 0,
  });
  gsap.to(".container-2", {
    display: "none",
    duration: 0,
  });
  gsap.to("body", {
    backgroundColor: "#09090b",
    duration: 0,
  });
});

yesButton3.addEventListener("click", () => {
  gsap.to(".container-1", {
    display: "none",
    duration: 0,
  });
  gsap.to(".container-3", {
    display: "none",
    duration: 0,
  });
  gsap.to(".container-2", {
    display: "flex",
    duration: 0,
  });
  gsap.to("body", {
    backgroundColor: "#FF2F6F",
    duration: 0,
  });
});

let click = 1;
noButton.addEventListener("mouseenter", () => {
  if (click === 1) {
    gsap.to(noButton, {
      bottom: "50px",
      left: "220px",
      right: "auto",
    });
  }
  if (click === 2) {
    gsap.to(noButton, {
      bottom: "230px",
      left: "30px",
      onComplete: () => {
        gsap.to(noButton, {
          zIndex: 1,
        });
        gsap.to(yesButton, {
          zIndex: 2,
        });
      },
    });
  }

  if (click === 3) {
    gsap.to(noButton, {
      width: "45px",
      height: "45px",
      bottom: "147px",
      left: "265px",
    });
  }
  if (click === 4) {
    gsap.to(noButton, {
      rotate: "15deg",
      x: "25px",
    });
    return;
  }
  click++;
});

noButton.addEventListener("mouseleave", () => {
  if (click === 4) {
    gsap.to(noButton, {
      rotate: "0deg",
      x: "0px",
    });
    return;
  }
});
