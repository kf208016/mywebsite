// 進場動畫：元素滑入視窗時淡入
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i * 60, 300)}ms`;
  observer.observe(el);
});

// 頁尾自動帶入今年年份
document.getElementById("year").textContent = new Date().getFullYear();
