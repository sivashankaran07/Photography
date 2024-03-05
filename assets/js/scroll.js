// window.addEventListener('scroll', function() {
//     // Check if the user has scrolled to the bottom of the page
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//         // If scrolled to the bottom, load the second page
//         window.location.href = 'try.html';
//     }
// });
// // Function to load the second page
// function loadSecondPage() {
//     // Redirect to the second page
//     window.location.href = 'try.html';
// }

// // Intersection Observer configuration
// const options = {
//     root: null, // Use the viewport as the root
//     rootMargin: '0px', // No margin
//     threshold: 1.0 // Fully visible
// };

// // Create a new Intersection Observer
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         // If the trigger element is fully visible
//         if (entry.isIntersecting) {
//             // Load the second page
//             loadSecondPage();
//         }
//     });
// }, options);

// // Find the trigger element
// const triggerElement = document.getElementById('load-trigger');

// // Observe the trigger element
// observer.observe(triggerElement);
