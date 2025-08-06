(function() {
    // Function to initialize the button and its logic
    function initBackToTopButton() {
        // Create the button element
        const backToTopButton = document.createElement('button');
        backToTopButton.id = 'backToTopBtn';
        backToTopButton.textContent = '↑'; // You can change this text, e.g., 'Top'
        backToTopButton.title = 'Go to top';

        // Style the button
        Object.assign(backToTopButton.style, {
            display: 'none', // Hidden by default
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: '1000', // Ensure it's above other content
            border: 'none',
            outline: 'none',
            backgroundColor: '#007bff', // Example primary color
            color: 'white',
            cursor: 'pointer',
            padding: '10px 15px',
            borderRadius: '5px',
            fontSize: '18px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        });

        // Append the button to the body
        document.body.appendChild(backToTopButton);

        let scrollThreshold;

        function calculateScrollThreshold() {
            // Attempt to identify main sections of your page.
            // By default, this looks for <section> elements.
            // If your page uses different tags or classes for sections (e.g., <div class="content-section">),
            // you should change the selector below.
            const sections = document.querySelectorAll('section');

            if (sections.length >= 2) {
                // Calculate the point after the second section ends
                const secondSection = sections[1];
                scrollThreshold = secondSection.offsetTop + secondSection.offsetHeight;
            } else if (sections.length === 1) {
                // If only one section is found, appear after it
                const firstSection = sections[0];
                scrollThreshold = firstSection.offsetTop + firstSection.offsetHeight;
            } else {
                // Fallback if no <section> elements (or less than 2) are found.
                // The button will appear after scrolling approximately 1.5 viewport heights.
                // You can change this to a fixed pixel value, e.g., scrollThreshold = 800;
                const fallbackValue = window.innerHeight * 1.0;
                console.warn(
                    `BackToTop: Could not find 2 <section> elements to determine scroll position. ` +
                    `Using a fallback scroll threshold of ${Math.round(fallbackValue)}px. ` +
                    `Please adjust the selector 'section' in the script (line 32) if your page uses different elements for sections.`
                );
                scrollThreshold = fallbackValue;
            }
        }

        // Initial calculation of the scroll threshold
        calculateScrollThreshold();

        // Recalculate threshold on window resize, as section heights might change
        window.addEventListener('resize', calculateScrollThreshold);

        // Show or hide the button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > scrollThreshold) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        // Scroll to top when the button is clicked
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // For smooth scrolling animation
            });
        });
    }

    // Wait for the DOM to be fully loaded before initializing the button
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBackToTopButton);
    } else {
        // DOMContentLoaded has already fired
        initBackToTopButton();
    }

})();


document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenuContainer = document.querySelector('.nav-right'); // Target the container

    if (navToggle && navMenuContainer) {
        navToggle.addEventListener('click', () => {
            navMenuContainer.classList.toggle('nav-menu-visible');
            const isExpanded = navMenuContainer.classList.contains('nav-menu-visible');
            navToggle.setAttribute('aria-expanded', isExpanded);
            navToggle.classList.toggle('open'); // For hamburger icon animation
        });

        // Optional: Close menu when a link is clicked
        document.querySelectorAll('.nav-right ul a').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenuContainer.classList.contains('nav-menu-visible')) {
                    navMenuContainer.classList.remove('nav-menu-visible');
                    navToggle.classList.remove('open');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
});


// Image Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeModal = document.getElementsByClassName("close-modal")[0];

    document.querySelectorAll('.work-popup-img').forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    if (closeModal) {
        closeModal.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Close modal when clicking outside the image
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    
});
