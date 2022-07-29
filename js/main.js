// 우측 뱃지가 스크롤이 내려가면 점점 사라지는 ----------------------------------------
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
window.addEventListener(
  // 스크롤 위치를 표현해주는 명령어
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // gsap.to(요소, 지속시간, 옵션)
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      }); // 점점 안보이게

      // toTop 버튼 보이게
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      }); // 점점 보이게

      // toTop 버튼 숨기기
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);
// _.throttle(함수, 시간) 시간 부하를 걸어서 함수가 엄청 실행되는것을 방지한다

// toTop 버튼을 누르면 스크롤의 위치를 0 으로 옮긴다 0.7초 동안 --------------------
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

// 메인사진의 메뉴 커피잔들이 순차적으로 자연스럽게 나오게 ----------------------------
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.8,
    opacity: 1,
  });
}); // 애니메이션 순차적 반복 지시

// 공지사항 부분 스와이퍼 / new Swiper(선택자, 옵션) ---------------------------------
new Swiper(".notice-line .swiper", {
  direction: "vertical", // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
});

// 프로모션 부분 스와이퍼 (공지사항 우측에 프로모션 부분임) ---------------------------
new Swiper(".promotion .swiper", {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

// 프로모션 부분이 버튼을 누르면 보였다가 다시 누르면 안보인다 --------------------------
const promotionEl = document.querySelector(".promotion"); // 내용이 들어있는  클래스 div를 변수 지정
const promotionToggleBtn = document.querySelector(".toggle-promotion"); // 버튼이 들어있는 태그의 클래스 div를 변수 지정
let isHidePromotion = false; //처음에는 열려있다

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add("hide"); // 클래스 이름 뒤에 또다른 클래스 이름을 add 한다
  } else {
    // 보임 처리
    promotionEl.classList.remove("hide"); // 클래스 이름 뒤에 또다른 클래스 이름을 remove 한다
  }
});

// 어워드 부분 스와이퍼 (푸터바로 위부분임) -------------------------------------------
new Swiper(".awards .swiper", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

// 스크롤 내리면 샥샥 나타는 오브젝트들 ------------------------------------------------
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소들을 지정한다
    triggerHook: 0.8, // 어느 위치에 작동 시킬것인가? 제일위는 0 제일 밑은 1
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
