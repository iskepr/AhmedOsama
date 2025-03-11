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
  Object.values(sections).forEach((sec) => (sec.style.display = "none"));

  Object.values(buttons).forEach(
    (btn) => (btn.style.color = "var(--txt-color)")
  );

  if (secID != "Portfolio") {
    sections[secID].style.display = "block";
  } else {
    sections[secID].style.display = "flex";
  }
  buttons[secID].style.color = "#C837AB";
}

let time = document.querySelector(".timeline .time");
for (let i = 0; i < 40; i++) { // يجب أن يكون i < 100 وليس i > 100
  time.innerHTML += ` <span class="timnts" style="font-size: 10px;">| | | |</span> |${i}:00 `;
}


// loder
// window.onload = function () {
//   const loder = document.querySelector(".loder");
//   const divs = loder.querySelectorAll("div");
//   let index = 0;

//   setInterval(() => {
//     loder.style.opacity = 0;
//     setInterval(() => {
//       loder.style.display = "none";
//     }, 400);
//   }, 1600);

//   function showNextDiv() {
//     divs.forEach((div) => (div.style.opacity = 0));
//     divs[index].style.opacity = 1;
//     index = (index + 1) % divs.length;
//     setTimeout(showNextDiv, 500);
//   }
//   // تشغيل الدالة لأول مرة
//   showNextDiv();
// };

// ------------------------------------------ Portfolio
// https://drive.google.com/drive/folders/1oxyaRWdR8y8T7L9_sNsqUzT7H5gVqC2e?fbclid=IwY2xjawI73mhleHRuA2FlbQIxMAABHelXanY16140CaRPLUPLMrAzRQb78mD6HQigkSYcV7LJqZfMVsVTqIeX3A_aem_BfTnoK-fmunUM5l-DUUYcQ
const videoIds = [
  { id: "1u4kUKGCw-B3VTXpt0BkEOpJorFpFpmS7", title: "براكتس اكادمي" },
  { id: "1wMXIbogxTBR7COua8j9Yv1BPLe-K3kHp", title: "بروكور" },
  { id: "1mRt3VeNky9aoEtQJeRb3mPsEi5_o5Z5b", title: "برومو حفلة الي شباب" },
  { id: "1vKsx_0zX5icml079WbWcrdngNf1XSasF", title: "برومو كلية القانون" },
  { id: "17PE_E1-gUpIbTTPe-GMej61axeiBkW-u", title: "تقرير محمد عبد القادر" },
];

const gallery = document.getElementById("Portfolio");
const player = document.getElementById("videoPlayer");
const osamaimg = document.querySelector(".video #osamaimg");

videoIds.forEach((video) => {
  const { id, title } = video; // استخراج القيم بشكل صحيح

  const videoItem = document.createElement("div");
  videoItem.classList.add("card");
  videoItem.innerHTML = `
    <img src="https://drive.google.com/thumbnail?id=${id}" alt="احمد اسمامة ahmed osam ${title}">
    <h3>${title}</h3>
  `;

  videoItem.addEventListener("click", () => {
    document.querySelector(".video .puse").style.display = "none";
    osamaimg.style.display = "none";
    player.src = `https://drive.google.com/file/d/${id}/preview`;
    player.style.display = "block";
  });

  gallery.appendChild(videoItem);
});
