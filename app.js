function alertButton() {
    
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    
    
    alert("Random Number: " + randomNumber);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

