// HTML ELEMENTS:
const toggleProjectsBtn = document.querySelector('.projects-toggle');
const projectsListToggleBtn = document.querySelector('.projects-toggle');
const projectsList = document.querySelector('.nav-links-project-links');



// EVENT LISTENERS:
toggleProjectsBtn.addEventListener('click', toggleProjectsTab);



function toggleProjectsTab() {
  if (projectsList.style.display === 'none') {
    projectsList.setAttribute('style', 'display: block');
    projectsListToggleBtn.classList.remove('js-projects-toggle-animation');
  } else {
    projectsList.setAttribute('style', 'display: none');
    projectsListToggleBtn.classList.add('js-projects-toggle-animation');
  }
};

