document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  let current = 0;

  // Show the next section in sequence
  document.getElementById("nextbtn").addEventListener("click", () => {
    sections[current].classList.remove("active");
    current = (current + 1) % sections.length;
    sections[current].classList.add("active");
  });

  // Utility to show a specific section
  function showSectionById(id) {
    sections[current].classList.remove("active");
    const target = document.getElementById(id);
    if (target) {
      target.classList.add("active");
      current = Array.from(sections).indexOf(target);
    }
  }

  // Jump to specific sections by button clicks
  document.getElementById("toHTML").addEventListener("click", () => {
    showSectionById("htmlSection");
  });

  document.getElementById("toCSS").addEventListener("click", () => {
    showSectionById("cssSection");
  });

  document.getElementById("toJS").addEventListener("click", () => {
    showSectionById("jsSection");
  });
});
//Open in new page function for Tryit code editor
function openInNewPage() {
  const htmlContent = document.getElementById("htmlCode").value;

  const newWindow = window.open();
  newWindow.document.open();
  newWindow.document.write(htmlContent);
  newWindow.document.close();
}

