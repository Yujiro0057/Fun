// Mobile Menu Toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-item');

hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Interactive "Copy to Clipboard" Button
const copyBtn = document.getElementById('copyEmailBtn');
const businessEmail = "royalelectronics2007@gmail.com";

copyBtn.addEventListener('click', () => {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(businessEmail).then(() => {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = "✓ Copied!";
            copyBtn.style.backgroundColor = "#28a745"; 
            copyBtn.style.borderColor = "#28a745";
            
            setTimeout(() => {
                copyBtn.innerText = originalText;
                copyBtn.style.backgroundColor = ""; 
                copyBtn.style.borderColor = "";
            }, 2500);
        }).catch(err => {
            console.error('Failed to copy: ', err);
            alert("Failed to copy email. Please copy it manually.");
        });
    } else {
        alert("Your browser does not support automatic copying. Email is: " + businessEmail);
    }
});
