// ==================== CUSTOM CURSOR ====================
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

if (cursor && cursorFollower) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    // Cursor hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2)';
            cursor.style.background = 'rgba(74, 151, 130, 0.3)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = 'transparent';
        });
    });
}

// ==================== NAVIGATION ====================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Navbar scroll effect
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobile menu toggle
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Active navigation link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Close mobile menu
        if (window.innerWidth <= 768 && hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Update active link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== SMOOTH SCROLL ====================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll('.scroll-animate');
animatedElements.forEach(el => observer.observe(el));

// ==================== 3D CARD TILT EFFECT ====================
const cards3D = document.querySelectorAll('.card-3d');

cards3D.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==================== BUTTON RIPPLE EFFECT ====================
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation CSS dynamically
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !email || !phone || !service || !message) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Đang gửi... ⏳';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = 'Gửi thành công! ✅';
            submitBtn.style.background = '#4A9782';
            
            // Show success message
            alert(`Cảm ơn ${name}! Chúng tôi đã nhận được yêu cầu của bạn và sẽ liên hệ qua email ${email} trong thời gian sớm nhất.`);
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 2000);
        }, 1500);
    });
}

// ==================== SCROLL TO TOP BUTTON ====================
const scrollTopBtn = document.getElementById('scrollTop');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== PARALLAX EFFECT ====================
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const parallaxElements = document.querySelectorAll('.floating-shape');
    
    parallaxElements.forEach((el, index) => {
        const speed = (index + 1) * 0.05;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==================== INTERACTIVE BACKGROUND ON MOUSE MOVE ====================
const backgroundAnimation = document.querySelector('.background-animation');
const floatingShapes = document.querySelectorAll('.floating-shape');

if (backgroundAnimation) {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth animation loop
    function animateShapes() {
        // Smooth follow
        currentX += (mouseX - currentX) * 0.05;
        currentY += (mouseY - currentY) * 0.05;

        floatingShapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.02;
            const offsetX = (currentX - window.innerWidth / 2) * speed;
            const offsetY = (currentY - window.innerHeight / 2) * speed;
            
            // Get current scroll offset
            const scrolled = window.scrollY;
            const scrollSpeed = (index + 1) * 0.05;
            
            // Combine mouse movement with existing scroll parallax
            shape.style.transform = `translate(${offsetX}px, ${offsetY + scrolled * scrollSpeed}px) rotate(${offsetX * 0.1}deg)`;
        });

        requestAnimationFrame(animateShapes);
    }

    animateShapes();

    // Create interactive particles on mouse move
    let particleTimeout;
    document.addEventListener('mousemove', (e) => {
        clearTimeout(particleTimeout);
        particleTimeout = setTimeout(() => {
            createParticle(e.clientX, e.clientY);
        }, 50);
    });

    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.className = 'mouse-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        const colors = ['var(--primary)', 'var(--secondary)', 'var(--accent)'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        backgroundAnimation.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1000);
    }

    // Add particle styles
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        .mouse-particle {
            position: fixed;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
            animation: particleFade 1s ease-out forwards;
            opacity: 0.6;
        }
        
        @keyframes particleFade {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 0.6;
            }
            50% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 0.4;
            }
            100% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(particleStyle);
}

// ==================== SERVICE CARDS INTERACTION ====================
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    const btn = card.querySelector('.btn-service');
    
    if (btn) {
        btn.addEventListener('click', function() {
            const serviceName = card.querySelector('h3').textContent;
            alert(`Bạn đã chọn dịch vụ: ${serviceName}\n\nVui lòng liên hệ hotline 0263.123.4567 hoặc điền form bên dưới để được tư vấn chi tiết!`);
        });
    }
});

// ==================== FLOATING ANIMATION FOR FEATURE CARDS ====================
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
    card.style.animation = 'floatCard 3s ease-in-out infinite';
});

// Add floating animation
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes floatCard {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(floatStyle);

// ==================== DYNAMIC TEXT TYPING EFFECT ====================
const heroSubtitle = document.querySelector('.hero-subtitle');

if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    heroSubtitle.textContent = '';

    let charIndex = 0;
    function typeText() {
        if (charIndex < originalText.length) {
            heroSubtitle.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        }
    }

    // Start typing effect after page load
    window.addEventListener('load', () => {
        setTimeout(typeText, 500);
    });
}

// ==================== FORM VALIDATION ====================
const inputs = document.querySelectorAll('input, textarea, select');

inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '' && this.hasAttribute('required')) {
            this.style.borderColor = '#ff6b6b';
        } else {
            this.style.borderColor = '';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = '#4A9782';
    });
});

// Email validation
const emailInput = document.getElementById('email');
if (emailInput) {
    emailInput.addEventListener('blur', function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(this.value) && this.value.trim() !== '') {
            this.style.borderColor = '#ff6b6b';
            // You can add a custom error message here
        }
    });
}

// Phone validation
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('blur', function() {
        const phonePattern = /^[0-9]{10,11}$/;
        if (!phonePattern.test(this.value.replace(/\s/g, '')) && this.value.trim() !== '') {
            this.style.borderColor = '#ff6b6b';
        }
    });
}

// ==================== PERFORMANCE OPTIMIZATION ====================
// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    // Observe images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ==================== EASTER EGG ====================
let clickCount = 0;
const logo = document.querySelector('.logo');

if (logo) {
    logo.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 5) {
            alert('🎉 Chúc mừng! Bạn đã khám phá được Easter Egg! Nhập mã "DALAT2025" khi đặt tour để được giảm giá 10%! 🎉');
            clickCount = 0;
        }
    });
}

// ==================== CONSOLE WELCOME MESSAGE ====================
console.log('%c🌸 Chào mừng đến với Đà Lạt Travel! 🌸', 'color: #4A9782; font-size: 20px; font-weight: bold;');
console.log('%cWebsite được thiết kế với ❤️ bởi đội ngũ phát triển chuyên nghiệp', 'color: #666; font-size: 12px;');
console.log('%c💡 Tip: Click vào logo 5 lần để nhận mã giảm giá!', 'color: #FFA500; font-size: 14px;');

// ==================== ADDITIONAL FEATURES ====================

// Prevent default behavior for demo buttons
document.addEventListener('DOMContentLoaded', () => {
    const demoLinks = document.querySelectorAll('a[href="#"]');
    demoLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add loading animation on page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events with debounce
const optimizedScroll = debounce(() => {
    // Add any heavy scroll calculations here
}, 100);

window.addEventListener('scroll', optimizedScroll);

// ==================== END OF SCRIPT ====================