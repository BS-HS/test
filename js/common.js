// 헤더 부분 서브메뉴 통합검색 아이콘에 클릭하면 ?? ----------------------------------
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  // 이벤트가 발생하면 포커스드 라는 클래스이름을 추가한다.
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색"); // 힌트를 "통합검색" 으로 채운다
});

searchInputEl.addEventListener("blur", function () {
  // 이벤트에서 블러로 처리되면 포커스드 라는 클래스 이름을 리무브한다. 힌트 역시 빈문자로 처리한다.
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// 올해가 몇년도인가 -----------------------------------------------------------------
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
