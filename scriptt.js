// ========================================
// Advanced Portfolio JavaScript
// ========================================

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  easing: 'ease-out-cubic',
  once: true,
  offset: 100
});

// ========================================
// Particles.js Configuration
// ========================================
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#00d4ff'
    },
    shape: {
      type: 'circle'
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#00d4ff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

// ========================================
// Theme Toggle
// ========================================
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  icon.classList.remove('fa-moon');
  icon.classList.add('fa-sun');
} else {
  document.body.classList.remove('dark-mode');
  icon.classList.remove('fa-sun');
  icon.classList.add('fa-moon');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
  }
});

// ========================================
// Mobile Menu Toggle
// ========================================
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  const icon = menuIcon.querySelector('i');
  if (navLinks.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Close menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuIcon.querySelector('i').classList.remove('fa-times');
    menuIcon.querySelector('i').classList.add('fa-bars');
  });
});

// ========================================
// Smooth Scrolling
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========================================
// Typing Animation
// ========================================
const typedTextElement = document.getElementById('typed-text');
const textArray = [
  'Systems Lead at ZenYukti',
  'CSE Student (8.3 GPA)',
  'IIT Bombay 2nd Runner Up',
  'Problem Solver (160+ DSA)',
  'Open Source Contributor'
];
let textArrayIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;

function typeText() {
  if (!typedTextElement) return;
  
  const currentText = textArray[textArrayIndex];
  
  if (isDeleting) {
    typedTextElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingDelay = 50;
  } else {
    typedTextElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingDelay = 100;
  }
  
  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    typingDelay = 2000; // Pause at end
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    typingDelay = 500;
  }
  
  setTimeout(typeText, typingDelay);
}

// Start typing animation
setTimeout(typeText, 1000);

// ========================================
// Counter Animation
// ========================================
const counters = document.querySelectorAll('.counter');
const animationDuration = 2000;

const animateCounter = (counter) => {
  const target = parseInt(counter.getAttribute('data-target'));
  const increment = target / (animationDuration / 16);
  let current = 0;
  
  const updateCounter = () => {
    current += increment;
    if (current < target) {
      counter.textContent = Math.floor(current) + '+';
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target + '+';
    }
  };
  
  updateCounter();
};

// Intersection Observer for counter animation
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => {
  counterObserver.observe(counter);
});

// ========================================
// Navbar Scroll Effect
// ========================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
  } else {
    navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.5)';
  }
  
  // Hide/show navbar on scroll
  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});

// ========================================
// Active Navigation Link
// ========================================
const sections = document.querySelectorAll('section[id]');

function setActiveLink() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
    
    if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.style.color = 'var(--accent-color)';
    } else if (navLink) {
      navLink.style.color = 'var(--text-color)';
    }
  });
}

window.addEventListener('scroll', setActiveLink);

// ========================================
// Skill Bar Animation
// ========================================
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fillBar 1.5s ease-out forwards';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});

// ========================================
// Project Cards Hover Effect
// ========================================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// ========================================
// Cursor Trail Effect (Optional)
// ========================================
const createCursorTrail = () => {
  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  trail.style.cssText = `
    position: fixed;
    width: 10px;
    height: 10px;
    background: var(--accent-color);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.3s;
  `;
  document.body.appendChild(trail);
  
  document.addEventListener('mousemove', (e) => {
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    trail.style.opacity = '0.5';
    
    setTimeout(() => {
      trail.style.opacity = '0';
    }, 100);
  });
};

// Uncomment to enable cursor trail
// createCursorTrail();

// ========================================
// Loading Animation
// ========================================
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Animate hero elements sequentially
  const heroElements = document.querySelectorAll('.hero-content > *');
  heroElements.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, index * 100);
  });
});

// ========================================
// Form Validation (for contact page)
// ========================================
function validateForm() {
  const name = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const message = document.getElementById('message')?.value.trim();
  
  if (!name || !email || !message) {
    showNotification('Please fill in all fields.', 'error');
    return false;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showNotification('Please enter a valid email address.', 'error');
    return false;
  }
  
  showNotification('Message sent successfully!', 'success');
  return false; // Prevent actual form submission
}

// ========================================
// Notification System
// ========================================
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    padding: 1rem 2rem;
    background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
    color: white;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    z-index: 10000;
    animation: slideInRight 0.3s ease-out;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ========================================
// Easter Egg: Konami Code
// ========================================
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      activateEasterEgg();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

function activateEasterEgg() {
  showNotification('🎉 You found the Easter Egg! Thanks for exploring!', 'success');
  document.body.style.animation = 'rainbow 3s linear infinite';
}

// ========================================
// Performance Optimization
// ========================================
// Lazy load images
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      imageObserver.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ========================================
// Console Message
// ========================================
console.log('%c👋 Hello, Developer!', 'font-size: 20px; color: #00d4ff; font-weight: bold;');
console.log('%cThanks for checking out the code!', 'font-size: 14px; color: #7000ff;');
console.log('%c💼 Portfolio by Ashutosh Mishra', 'font-size: 12px; color: #00d4ff;');
console.log('%c🚀 Built with HTML, CSS, and JavaScript', 'font-size: 12px;');

// ========================================
// Debug Mode (Press Ctrl+Shift+D)
// ========================================
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && e.key === 'D') {
    document.body.classList.toggle('debug-mode');
    showNotification('Debug mode toggled!', 'info');
  }
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
  
  @keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
  }
`;
document.head.appendChild(style);
