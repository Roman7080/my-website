const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', ()=> {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

const hikeBtn = document.querySelector('.hike-btn');

hikeBtn.addEventListener('click', () => {
    // Redirect to the target HTML file
    window.location.href = 'trailOfTenFalls.html'; 
});