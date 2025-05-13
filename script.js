function changeLang(lang) {
  const enElements = document.querySelectorAll('.en');
  const neElements = document.querySelectorAll('.ne');

  enElements.forEach(el => el.style.display = lang === 'en' ? 'block' : 'none');
  neElements.forEach(el => el.style.display = lang === 'ne' ? 'block' : 'none');
}
