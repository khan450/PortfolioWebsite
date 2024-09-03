// Back to Top button functionality
const backToTopButton = document.getElementById('backToTop');
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};
backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Project filter functionality
const projectFilter = document.getElementById('projectFilter');
projectFilter.addEventListener('change', function() {
    const selectedCategory = this.value;
    const projects = document.querySelectorAll('.project');
    projects.forEach(function(project) {
        if (selectedCategory === 'all' || project.getAttribute('data-category') === selectedCategory) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
});
