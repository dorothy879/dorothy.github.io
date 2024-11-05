function myMenuFunction() {
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu") {
        menuBth.className += " responsive";
    } else {
        menuBth.className = "nav-menu";
    }
}





const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

    toggleSwitch.addEventListener("click", ()=> {
        body.classList.toggle("dark");
    });



    var typingEffect = new Typed(".typedText", {
        strings: ["Designer", "Coder", "Developer"],

        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000,

    })



    const sr = ScrollReveal({
        origin: "top",
        distance: "80px",
        duration: 2000,
        reset: true,
    });

    sr.reveal(".featured-name", { delay: 100});
    sr.reveal(".text-info", { delay: 200});
    sr.reveal(".text-btn", { delay: 200});
    sr.reveal(".social_icons", { delay: 200});
    sr.reveal(".featured-image", { delay: 320});
    sr.reveal(".project-box", { interval: 200});
    sr.reveal(".top-header", {});


    const srLeft = ScrollReveal({
        origin: "left",
        distance: "80px",
        duration: 2000,
        reset: true,
    })

    srLeft.reveal(".about-info", { delay: 100});
    srLeft.reveal(".contact-info", { delay: 100});

    const srRight = ScrollReveal({
        origin: "right",
        distance: "80px",
        duration: 2000,
        reset: true,
    })

    srRight.reveal(".skill", { delay: 100});
    srRight.reveal(".skill-box", { delay: 100});




    const sections = document.querySelectorAll(".section[id]");

    function scrollActive() {
        const scrollY = window.scrollY;

        sections.forEach((current) => {

            const sectionHeight = current.offsetHeight,

                sectionTop = current.offsetTop - 50,
                sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document
                    .querySelector(".nav-menu a[href*=" + sectionId + "]")
                    .classList.add("active-link");
            } else {
                document
                    .querySelector(".nav-menu a[href*=" + sectionId + "]")
                    .classList.remove("active-link");
            }
        });
    }
function validateForm() {
    // Get form elements
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation checks
    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Display pop-up if validation passes
    showPopup();
}

function showPopup() {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");

    popup.classList.add("show");
    overlay.classList.add("show");

    // Close the pop-up after 3 seconds
    setTimeout(() => {
        popup.classList.remove("show");
        overlay.classList.remove("show");
    }, 3000);
}


    window.addEventListener("scroll", scrollActive);





    
    

