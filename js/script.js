function toggleNav() {
    var navLinks = document.querySelector('nav ul');
    var expanded = navLinks.classList.toggle('show');
    document.querySelector('.icon').setAttribute('aria-expanded', expanded);
}

document.querySelector('img').addEventListener('click', function(event) {
    event.preventDefault();
    this.style.transform = 'scale(0.001)'; // shrinks the image drastically
    setTimeout(() => {
        window.location = this.parentElement.href; // Navigates after the transformation has been shown
    }, 500); // Delay matches with the transition time
    });


    // On-campus Activities Button
   document.getElementById("campusAffiliationLogos").style.display = "none";
   
    document.getElementById("campusAffiliationButton").addEventListener('click', function () {
            if (document.getElementById("campusAffiliationLogos").style.display == "none") {
                document.getElementById("campusAffiliationLogos").style.display = "block";
            }
            else {
                document.getElementById("campusAffiliationLogos").style.display = "none";
            }
        });

 

function toggleFooterNav() {
    var footerNavLinks = document.querySelector('footer .footer-links'); // Adjust the selector as necessary
    var footerIcon = document.querySelector('footer .icon'); // Select the footer's hamburger icon button
    var isExpanded = footerIcon.getAttribute('aria-expanded') === 'true';
    
    // Toggle the 'show' class on footerNavLinks
    footerNavLinks.classList.toggle('show');
    
    // Update the 'aria-expanded' attribute
    footerIcon.setAttribute('aria-expanded', !isExpanded);
}

document.querySelector('footer .icon').addEventListener('click', toggleFooterNav);


// Headshot styling 
document.getElementById("headshot").style.width = "50%";
document.getElementById("headshot").style.borderRadius = "8%";
document.getElementById("headshot").style.margin = "20px";


// Mouseover, Mouseout for darkening images when hovered over - let text show up 

    document.getElementById("img1").addEventListener ('mouseover', function() {
        document.getElementById("img1").textContent == document.querySelector('.image-text');
        console.log("this");
        document.getElementById("img1").textContent.style.display = 'block';
    })

    document.getElementById("img1").addEventListener ('mouseout', function() {
        document.querySelector('.image-text').style.display = 'none';
    })
    

    document.getElementById("learnMoreButton").addEventListener("mouseover", function() {
        document.getElementById("moreAboutYujin").style.color = "white";
    });

    document.getElementById("learnMoreButton").addEventListener("mouseout", function() {
        document.getElementById("moreAboutYujin").style.color = "black";
    });

    document.getElementById("resumeDownloadButton").addEventListener("mouseover", function() {
        document.getElementById("resumeButton").style.color = "white";
    });

    document.getElementById("resumeDownloadButton").addEventListener("mouseout", function() {
        document.getElementById("resumeButton").style.color = "black";
    });
// Quiz


document.getElementById("aboutFooter").addEventListener("")


function checkScrollAndConfirm() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {

        const goToQuiz = confirm("You've reached the bottom of the page. Would you like to go to the quiz now?");
        if (goToQuiz) {
            window.location.href = 'quiz.html'; // Redirect to the quiz page
        }
    }
}

// Add scroll event listener
window.addEventListener('scroll', checkScrollAndConfirm);