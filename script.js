// JavaScript to toggle between Posted by you and Create New Post sections
document.querySelector('.toggle-create-post').addEventListener('click', function() {
    document.querySelector('.posted-by').classList.remove('show');
    document.querySelector('.create-post').classList.add('show');
});

document.querySelector('.toggle-posted-by').addEventListener('click', function() {
    document.querySelector('.posted-by').classList.add('show');
    document.querySelector('.create-post').classList.remove('show');
});
