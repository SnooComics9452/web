// Get the user's preferred language
let userLanguage = navigator.language.toLowerCase();

// Check if the user's language is Chinese
if (userLanguage.indexOf("zh") === 0) {
  // User's language is Chinese, redirect to the Chinese version of the page
  window.location.href = "https://snoocomics9452.github.io/web/index.html";
}
