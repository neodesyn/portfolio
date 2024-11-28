/**************************************Scripts for Animations***************************************/
/**************************************
navigation menu
***************************************/

document.addEventListener('DOMContentLoaded', () => {
    // GSAP timeline for navbar animation
    const timeline = gsap.timeline();

    gsap.from(".navbar-brand", {
  scale: 0.1,           // Start smaller
  opacity: 1,           // Start invisible
  duration: 1.5,        // Duration for the zoom-in effect
  ease: "power2",   // Easing function for smooth zoom
  scrollTrigger: {
    trigger: ".navbar-brand",  // Target the h2 elements
    start: "top 30%",    // Trigger when 80% of the element is in the viewport
    end: "top 50%",      // End when the element is 30% into the viewport
    toggleActions: "play none none none", // Play animation when in the viewport
  }
  
});

    // Animate Navbar Menu Items (Slide in from top)
    gsap.utils.toArray(".nav .nav-item").forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: -600,          // Slide from the top(initially it should be hidden)
        opacity: 1,      // Fade in
        duration: 1.5,
        delay: index * 0.4, // Staggered delay for each item
        ease: "power2",
      });
    });

});
/**************************************
Menu background
***************************************/
document.addEventListener('DOMContentLoaded', () => {
  // Ensure GSAP and ScrollTrigger are available
  gsap.registerPlugin(ScrollTrigger);

  // Select all elements with the class 'right-nav'
  const menubg = document.querySelectorAll('.right-nav');

  // Iterate through each selected element
  menubg.forEach((rightmenubg) => {
    gsap.fromTo(
      rightmenubg,
      { 
        x: 120, 
        opacity: 0, 
        visibility: "hidden" // Initial state
      }, 
      {
        x: 0, // Move to original position
        opacity: 1,
        visibility: "visible",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightmenubg,
          start: 'top 80%', // Start animation when 80% of the element is in the viewport
          end: 'top 10%', // End animation at 10%
          toggleActions: 'play none none none' // Play on scroll down, no reset
        },
      }
    );
  });
});


/**************************************
Blue Banner content left side step by step animation 
***************************************/
document.addEventListener('DOMContentLoaded', () => {
  // Register ScrollTrigger with GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Create a timeline for sequential animations
  const heroTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner-title-small", // Base the animation on #hero-heading
      start: "top 80%", // Start animation when heading is 80% visible
      end: "top 10%", // End animation when heading is 20% into the viewport
      toggleActions: "play reverse play reverse", // Replay on scroll up/down
      markers: false, // Debugging markers (set to true for testing)
    },
  });
  // White Heading (banner-title-small)
  heroTimeline.fromTo(
    ".banner-title-small",
    { x: -200, opacity: 0, visibility: "hidden" }, // Start state (off-screen to the left)
    {
      x: 0, // Move to original position
      opacity: 1,
      visibility: "visible",
      duration: 1.5,
      ease: "power2.out",
    },
    "+=0.2" // Slight delay after Hero Image animation
  );

  // Blue Heading (.banner-title)
  heroTimeline.fromTo(
    ".banner-title",
    { x: -200, opacity: 0, visibility: "hidden" }, // Start state (off-screen to the left)
    {
      x: 0, // Move to original position
      opacity: 1,
      visibility: "visible",
      duration: 1.5,
      ease: "power2.out",
    },
    "+=0.2" // Slight delay after banner-title-small animation
  );

  // Animate Paragraph (.banner-paragraph)
  heroTimeline.fromTo(
    ".banner-paragraph",
    { x: -200, opacity: 0, visibility: "hidden" }, // Start state (off-screen to the left)
    {
      x: 0,
      opacity: 1,
      visibility: "visible",
      duration: 1.5,
      ease: "power2.out",
    },
    "+=0.2" // Delay after banner-title animation
  );

  // Animate Button (.orange-btn)
  heroTimeline.fromTo(
    ".banner-btn",
    { x: -200, opacity: 0, visibility: "hidden" }, // Start state (off-screen to the left)
    {
      x: 0,
      opacity: 1,
      visibility: "visible",
      duration: 1.5,
      ease: "power2.out",
    },
    "+=0.2" // Delay after Paragraph animation
  );
});
/**************************************
About content left side step by step animation 
***************************************/
document.addEventListener('DOMContentLoaded', () => {
  // Register ScrollTrigger with GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Create a timeline for sequential animations
  const aboutMe = gsap.timeline({
    scrollTrigger: {
      trigger: ".li1", // Base the animation on #hero-heading
      start: "top 80%", // Start animation when heading is 80% visible
      end: "top 10%", // End animation when heading is 20% into the viewport
      toggleActions: "play reverse play reverse", // Replay on scroll up/down
      markers: false, // Debugging markers (set to true for testing)
    },
  });
   // About Me  Heading 
   aboutMe.fromTo(
    ".li1", //".li1, .li2"we can give 1 or more than classes like this but both classes will animate same time
    { x: -200, opacity: 0, visibility: "hidden" }, // Start state (off-screen to the left)
    {
      x: 0, // Move to original position
      opacity: 1,
      visibility: "visible",
      duration: 1.5,
      ease: "power2.out",
    },
    "+=0.2" // Slight delay after Hero Image animation
  );

  // About me paragraph 
  aboutMe.fromTo(
    ".li2",//if we give seperate class for seperate line & script it will animate step by step
    { x: -200, opacity: 0, visibility: "hidden" }, // Start state (off-screen to the left)
    {
      x: 0, // Move to original position
      opacity: 1,
      visibility: "visible",
      duration: 1.5,
      ease: "power2.out",
    },
    "+=0.2" // Slight delay after Hero Image animation
  );

  // Animate list 1 with hand symbol
  aboutMe.fromTo(
    ".li3",
    { x: -200, opacity: 0, visibility: "hidden" }, // Start state (off-screen to the left)
    {
      x: 0, // Move to original position
      opacity: 1,
      visibility: "visible",
      duration: 1.5,
      ease: "power2.out",
    },
    "+=0.2" // Slight delay after Hero Image animation
  );

  // Animate list 2 with hand symbol
  aboutMe.fromTo(
    ".li4",
    { x: -200, opacity: 0, visibility: "hidden" }, // Start state (off-screen to the left)
    {
      x: 0,
      opacity: 1,
      visibility: "visible",
      duration: 1.5,
      ease: "power2.out",
    },
    "+=0.2" // Delay after H1 animation
  );

  // Animate list 3 with hand symbol
  aboutMe.fromTo(
    ".li5",
    { x: -200, opacity: 0, visibility: "hidden" }, // Start state (off-screen to the left)
    {
      x: 0,
      opacity: 1,
      visibility: "visible",
      duration: 1.5,
      ease: "power2.out",
    },
    "+=0.2" // Delay after Paragraph animation
  );
});
/**************************************
 center animation Headings 
***************************************/
document.addEventListener('DOMContentLoaded', () => {
  // Ensure GSAP and ScrollTrigger are available
  gsap.registerPlugin(ScrollTrigger);

  // Select all headings (modify selector as needed)
  const headings = document.querySelectorAll(' h5.card-title');

  headings.forEach((heading) => {
    gsap.fromTo(
      heading,
      { scale: 0.1, opacity: 0 }, // Initial state
      {
        scale: 1, // End state
        opacity: 1,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 80%', // Start animation when 80% of the element is in the viewport
          end: 'top 10%', // End animation at 20%
          toggleActions: 'play reverse play reverse', // Play on scroll down, reverse on scroll up
        },
      }
    );
  });
});
/**************************************
Left animation Headings 
***************************************/
document.addEventListener('DOMContentLoaded', () => {
  // Ensure GSAP and ScrollTrigger are available
  gsap.registerPlugin(ScrollTrigger);

  // Select all headings (modify selector as needed)
  const leftheadings = document.querySelectorAll('h2');

  leftheadings.forEach((leftheading) => {
    // Apply GSAP animation
    gsap.fromTo(
      leftheading,
      { 
        x: -100, // Start off-screen to the left
        opacity: 0 // Fully transparent
      },
      {
        x: 0, // Slide to original position
        opacity: 1, // Fully visible
        duration: 1.5, // Animation duration
        ease: 'power2.out',
        scrollTrigger: {
          trigger: leftheading, // Trigger animation on this element
          start: 'top 80%', // Start animation when 80% of the element is visible
          end: 'top 10%', // End animation when 10% of the element is visible
          toggleActions: 'play reverse play reverse', // Play on entering, no resets
          markers: false // Set to true for debugging if needed
        },
      }
    );
  });
});

/**************************************
 Left content Right Image
***************************************/
document.addEventListener('DOMContentLoaded', () => {
  // Register ScrollTrigger with GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Combine selectors
  const allElements = document.querySelectorAll('h3, #testimonialSlider, .left-animation, .left-animation.noscroll');

  // Loop through all elements
  allElements.forEach((element) => {
    // Determine toggleActions based on the class
    const toggleActions = element.classList.contains('noscroll')
      ? 'play none none none' // One-time animation for .noscroll elements
      : 'play reverse play reverse'; // Replay animation for other elements

    // Apply GSAP animation
    gsap.fromTo(
      element,
      { x: -100, opacity: 0 }, // Start off-screen to the left
      {
        x: 0, // Move to original position
        opacity: 1, // Fully visible
        duration: 1.5, // Animation duration
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element, // Trigger animation on this element
          start: 'top 80%', // Start animation when 80% visible
          end: 'top 10%', // End animation when 10% visible
          toggleActions: toggleActions, // Use determined toggleActions
          markers: false, // Set to true for debugging
        },
      }
    );
  });
//////
 // Slide image from right
 const image = document.querySelector(".right-img-animation");
 if (image) {
   gsap.fromTo(
     image,
     { x: 100, opacity: 0 }, // Start off-screen to the right
     {
       x: 0, // Move to original position
       opacity: 1, // Fade in
       duration: 1, // Animation duration
       ease: 'power2.out',
       scrollTrigger: {
         trigger: image, // Animate when the image is in view
         start: 'top 80%', // Trigger when 80% of the image is in the viewport
         end: 'top 10%', // End when the top reaches 20%
         toggleActions: 'play reverse play reverse', // Replay on scroll up/down
         markers: false, // Debug markers (set to true to see them)
       },
     }
   );
 }
////

});


/**************************************
Image Gallery
***************************************/
document.addEventListener('DOMContentLoaded', () => {
  // Register ScrollTrigger with GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Target all gallery items
  const galleryItems = document.querySelectorAll('.portfolio-item');

  galleryItems.forEach((item, index) => {
    const image = item.querySelector('img');
    const caption = item.querySelector('.caption');

    // Image animation
    gsap.fromTo(
      image,
      { y: 50, opacity: 0 }, // Start slightly below and transparent
      {
        y: 0, // Move to original position
        opacity: 1, // Fully visible
        duration: 1, // Animation duration
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item, // Trigger animation on each image-wrapper
          start: 'top 90%', // Start when top of item is 90% visible
          end: 'top 10%', // End when top is 20% visible
          toggleActions: 'play reverse play reverse', // Replay on scroll up/down
        },
      }
    );

   
  });
});
/**************************************
End
***************************************/