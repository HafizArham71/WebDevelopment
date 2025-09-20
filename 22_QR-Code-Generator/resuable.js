//^ Loader
let preLoader = document.getElementById('loader')
const loadPage = e => preLoader.style.display = 'none';
        // Hide the loader when content is ready


onload = setTimeout(loadPage , 2000)