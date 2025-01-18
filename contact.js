function goToPage(pageId) {
    const currentPage = document.querySelector('.page.active');
    const nextPage = document.getElementById(pageId);
  
    if (currentPage && nextPage) {
      currentPage.classList.remove('active');
      nextPage.classList.add('active');
    }
  }

  function goToProjectsPage() {
    console.log("Redirecting to projects.html");  // Debug log
    window.location.href = "projects.html";  // Redirect to projects page
  }
  