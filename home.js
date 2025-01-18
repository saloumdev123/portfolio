function goToPage(pageId) {
    const currentPage = document.querySelector('.page.active');
    const nextPage = document.getElementById(pageId);
  
    if (currentPage && nextPage) {
      currentPage.classList.remove('active');
      nextPage.classList.add('active');
    }
  }
  
  function goToProjectsPage() {
    window.location.href = 'projects.html';  // This redirects you to projects.html
  }

  window.addEventListener("load", () => {
    // Immediately show #home section
    const homeElement = document.getElementById("home");
    homeElement.classList.add("visible");
  
    // Show the words of h1 one by one
    const h1 = document.querySelector("h1");
    const words = h1.textContent.split(" ");
    h1.textContent = ''; // Clear the existing text
  
    words.forEach((word, index) => {
      setTimeout(() => {
        h1.innerHTML += `${word} `; // Add each word to h1
      }, index * 500); // Delay each word by 500ms
    });
  
    // After 1 second, display p
    setTimeout(() => {
      homeElement.classList.add("show-p");
    }, words.length * 500); // Delay to show p after the last word of h1 is displayed
  });
  
  
  
  