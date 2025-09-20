//^ Loader

window.onload = function () {
    setTimeout(() => {
        // Hide the loader when content is ready
        document.getElementById('loader').style.display = 'none';
    }, 2000);
}