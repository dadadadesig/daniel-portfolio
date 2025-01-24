// swapark.js

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 80, // Adjust for sticky header
      behavior: 'smooth'
    });
  });
});

// Header Animation on Scroll
gsap.to('.header', {
  scrollTrigger: {
    trigger: '.home-section',
    start: 'top top',
    end: '+=100',
    toggleClass: {targets: '.header', className: 'scrolled'},
    // markers: true, // Uncomment for debugging
  },
});

/*--------------------------------------
  HOME SECTION
--------------------------------------*/
gsap.from('.home-section h1', {
  scrollTrigger: {
    trigger: '.home-section h1',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: -50,
  opacity: 0,
  duration: 1,
  ease: 'bounce.out',
});

gsap.from('.home-section p', {
  scrollTrigger: {
    trigger: '.home-section p',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: 'power2.out',
});

gsap.from('.home-section .responsive-image', {
  scrollTrigger: {
    trigger: '.home-section .responsive-image',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
});

/*--------------------------------------
  STORY INTRO
--------------------------------------*/
gsap.from('.story-intro-section h2', {
  scrollTrigger: {
    trigger: '.story-intro-section h2',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: -30,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
});

gsap.from('.story-intro-section p', {
  scrollTrigger: {
    trigger: '.story-intro-section p',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: 'power2.out',
});

/*--------------------------------------
  PROBLEM SECTION
--------------------------------------*/
gsap.from('.problem-section h2', {
  scrollTrigger: {
    trigger: '.problem-section h2',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: -30,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
});

gsap.from('.problem-section p', {
  scrollTrigger: {
    trigger: '.problem-section p',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: 'power2.out',
});

gsap.from('.problem-illustration img', {
  scrollTrigger: {
    trigger: '.problem-illustration img',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  x: -100,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
});

/*--------------------------------------
  GOALS SECTION
--------------------------------------*/
gsap.from('.goals-section h2', {
  scrollTrigger: {
    trigger: '.goals-section h2',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: -30,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
});

gsap.from('.goals-section ul li', {
  scrollTrigger: {
    trigger: '.goals-section ul',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: 20,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: 'power2.out',
});

/*--------------------------------------
  RESEARCH SECTION
--------------------------------------*/
gsap.from('.research-section h2', {
  scrollTrigger: {
    trigger: '.research-section h2',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: -30,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
});

gsap.from('.research-item', {
  scrollTrigger: {
    trigger: '.research-item',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: 'power2.out',
});

/*--------------------------------------
  APP STRATEGY SECTION
--------------------------------------*/
gsap.from('.strategy-section h2', {
  scrollTrigger: {
    trigger: '.strategy-section h2',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: -30,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
});

gsap.from('.strategy-section ul li', {
  scrollTrigger: {
    trigger: '.strategy-section ul',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: 20,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: 'power2.out',
});

/*--------------------------------------
  TIMELINE SECTION
--------------------------------------*/
gsap.from('.timeline-item', {
  scrollTrigger: {
    trigger: '.timeline-item',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  x: -100,
  opacity: 0,
  stagger: 0.3,
  duration: 1,
  ease: 'power2.out',
});

/*--------------------------------------
  SCREENS SECTION
--------------------------------------*/
gsap.from('.screens-section h2', {
  scrollTrigger: {
    trigger: '.screens-section h2',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: -30,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
});

gsap.from('.screens-section p', {
  scrollTrigger: {
    trigger: '.screens-section p',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: 'power2.out',
});

gsap.from('.screen-item', {
  scrollTrigger: {
    trigger: '.screen-item',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: 'power2.out',
});

/*--------------------------------------
  DETAILS SECTION
--------------------------------------*/
gsap.from('.details-section .card', {
  scrollTrigger: {
    trigger: '.details-section .card',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: 'power2.out',
});

/*--------------------------------------
  CONTACT SECTION
--------------------------------------*/
gsap.from('.contact-section h2', {
  scrollTrigger: {
    trigger: '.contact-section h2',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: -30,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
});

gsap.from('.contact-form', {
  scrollTrigger: {
    trigger: '.contact-form',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
});

/*--------------------------------------
  NEW SECTIONS (PERSONAS, WIREFRAMES,
  CHALLENGES, CONCLUSION, LESSONS)
--------------------------------------*/

// Personas Section
gsap.from('.personas-section h2', {
  scrollTrigger: {
    trigger: '.personas-section h2',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: -30,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
});

gsap.from('.personas-section p', {
  scrollTrigger: {
    trigger: '.personas-section p',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: 'power2.out',
});

// Animate each persona card
gsap.from('.persona', {
  scrollTrigger: {
    trigger: '.personas-section',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: 'power2.out',
});

// Wireframes Section
gsap.from('.wireframes-section h2', {
  scrollTrigger: {
    trigger: '.wireframes-section h2',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: -30,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
});

gsap.from('.wireframes-section p', {
  scrollTrigger: {
    trigger: '.wireframes-section p',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: 'power2.out',
});

gsap.from('.wireframe-item', {
  scrollTrigger: {
    trigger: '.wireframes-content',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: 'power2.out',
});

// Challenges & Solutions Section
gsap.from('.challenges-section h2', {
  scrollTrigger: {
    trigger: '.challenges-section h2',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: -30,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
});

gsap.from('.challenge-item', {
  scrollTrigger: {
    trigger: '.challenges-section',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: 'power2.out',
});

// Conclusion Section
gsap.from('.conclusion-section h2', {
  scrollTrigger: {
    trigger: '.conclusion-section h2',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: -30,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
});

gsap.from('.conclusion-section p', {
  scrollTrigger: {
    trigger: '.conclusion-section p',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: 30,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
});

// Lessons Learned (אם הוספת סקשן כזה)
gsap.from('.lessons-section h2', {
  scrollTrigger: {
    trigger: '.lessons-section h2',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: -30,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
});

gsap.from('.lessons-section p', {
  scrollTrigger: {
    trigger: '.lessons-section p',
    start: 'top 80%',
    toggleActions: 'play none none none',
  },
  y: 30,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
});

/*--------------------------------------
  HOVER ANIMATIONS & INTERACTIONS
--------------------------------------*/

// Hover Animations for Cards, Timeline Items, and Screens
document.querySelectorAll('.card, .timeline-content, .screen-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    gsap.to(item, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
  });
  item.addEventListener('mouseleave', () => {
    gsap.to(item, { scale: 1, duration: 0.3, ease: 'power2.out' });
  });
});

/*--------------------------------------
  LIGHTBOX FUNCTIONALITY (EXAMPLE)
--------------------------------------*/
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Open Lightbox on Image Click
document.querySelectorAll('.screen-item img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    // אם יש לך data-src, נשתמש בו. אם לא, אפשר פשוט:
    lightboxImg.src = img.getAttribute('src');
    lightboxImg.alt = img.alt;

    gsap.fromTo(lightbox, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    gsap.fromTo(lightboxImg, { scale: 0.8 }, { scale: 1, duration: 0.5 });
  });
});

// Close Lightbox on Close Button Click
closeBtn.addEventListener('click', () => {
  gsap.to(lightboxImg, {
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
      lightboxImg.alt = '';
    }
  });
});

// Close Lightbox on Outside Click
window.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    gsap.to(lightboxImg, {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
        lightboxImg.alt = '';
      }
    });
  }
});

/*--------------------------------------
  SCROLL PROGRESS BAR
--------------------------------------*/
window.addEventListener('scroll', () => {
  const scrollProgress = document.getElementById('scroll-progress');
  if (!scrollProgress) return; // אם לא קיים אלמנט כזה ב-HTML, לצאת
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / totalHeight) * 100;
  scrollProgress.style.width = `${progress}%`;
});