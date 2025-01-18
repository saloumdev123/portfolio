function goToPage(pageId) {
  const currentPage = document.querySelector('.page.active');
  const nextPage = document.getElementById(pageId);

  if (currentPage && nextPage) {
    currentPage.classList.remove('active');
    nextPage.classList.add('active');
  }
}

function goToContactPage() {
window.location.href = "contact.html";  // This redirects to the contact page
}

function goToHomePage() {
  window.location.href = "home.html";  // This will redirect to the home page (index.html)
}