let sections = {
  Portfolio: document.querySelector(".content #Portfolio"),
  Contact: document.querySelector(".content #Contact"),
  AboutMe: document.querySelector(".content #AboutMe"),
};

let buttons = {
  Portfolio: document.querySelector(".menu-button[data-section='Portfolio']"),
  Contact: document.querySelector(".menu-button[data-section='Contact']"),
  AboutMe: document.querySelector(".menu-button[data-section='AboutMe']"),
};

function showMedia(secID) {
  // إخفاء جميع الأقسام
  Object.values(sections).forEach((sec) => (sec.style.display = "none"));

  // إعادة تعيين لون الأزرار
  Object.values(buttons).forEach(
    (btn) => (btn.style.color = "var(--txt-color)")
  );

  // إظهار القسم المطلوب وتلوين زرّه فقط
  if(secID != "Portfolio"){
      sections[secID].style.display = "block";
  }else{
    sections[secID].style.display = "flex";
  }
  buttons[secID].style.color = "#C837AB";
}
