// ========================================
// PORTFOLIO ELEGANTE - SCRIPT
// ========================================

$(document).ready(function() {
    
    console.log('%c✨ Portfolio Cargado', 'background: #d4c5e2; color: #2d2d2d; padding: 8px 15px; font-weight: bold;');
    
    // ========================================
    // GSAP REGISTRO
    // ========================================
    
    gsap.registerPlugin(ScrollTrigger);
    
    // ========================================
    // CURSOR PERSONALIZADO (CENTRADO CORRECTO)
    // ========================================
    
    const cursor = $('.cursor');
    let mouseX = 0, mouseY = 0;
    
    $(document).on('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Posicionar cursor exactamente en el centro del mouse
        gsap.to(cursor, {
            x: mouseX,
            y: mouseY,
            duration: 0.15,
            ease: 'power2.out'
        });
    });
    
    // Efectos hover - cursor más grande
    $('a, .project-image-wrapper, .skill, .tag').on('mouseenter', function() {
        cursor.addClass('active');
    }).on('mouseleave', function() {
        cursor.removeClass('active');
    });
    
    // ========================================
    // NAVEGACIÓN SUAVE SIN ATASCOS
    // ========================================
    
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        const targetElement = $(target);
        
        if (targetElement.length) {
            const offsetTop = targetElement.offset().top - 100;
            
            // Scroll suave y directo
            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 800, 'swing');
        }
    });
    
    // ========================================
    // ANIMACIONES DE ENTRADA - HERO
    // ========================================
    
    const heroTl = gsap.timeline({ delay: 0.3 });
    
    heroTl
        .from('.hero-label', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        })
        .from('.hero-title .line', {
            opacity: 0,
            y: 60,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out'
        }, '-=0.4')
        .from('.hero-text', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6')
        .from('.hero-scroll', {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.nav', {
            opacity: 0,
            y: -20,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=1');
    
    // ========================================
    // SCROLL TRIGGER - SOBRE MÍ
    // ========================================
    
    gsap.from('.about-image', {
        opacity: 0,
        x: -60,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 70%',
            toggleActions: 'play none none none'
        }
    });
    
    gsap.from('.about-content > *', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 75%',
            toggleActions: 'play none none none'
        }
    });
    
    // ========================================
    // SCROLL TRIGGER - PROYECTOS
    // ========================================
    
    // Headers de sección
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // Proyectos individuales
    gsap.utils.toArray('.project').forEach((project, index) => {
        const imageWrapper = project.querySelector('.project-image-wrapper');
        const info = project.querySelector('.project-info');
        
        // Imagen aparece con fade + scale
        gsap.from(imageWrapper, {
            opacity: 0,
            scale: 0.9,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: project,
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
        
        // Info aparece desde el lado
        gsap.from(info, {
            opacity: 0,
            x: index % 2 === 0 ? 50 : -50,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: project,
                start: 'top 75%',
                toggleActions: 'play none none none'
            }
        });
        
        // Tags con stagger
        gsap.from(project.querySelectorAll('.tag'), {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: info,
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        });
    });
    
    // ========================================
    // PARALLAX SUAVE EN IMÁGENES
    // ========================================
    
    gsap.utils.toArray('.project-image').forEach(image => {
        gsap.to(image, {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
                trigger: image.parentElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            }
        });
    });
    
    // Parallax en imagen de sobre mí
    gsap.to('.image-placeholder', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        }
    });
    
    // ========================================
    // SECCIÓN CONTACTO
    // ========================================
    
    const contactTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 70%',
            toggleActions: 'play none none none'
        }
    });
    
    contactTl
        .from('.contact-title .line', {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        })
        .from('.contact-subtitle', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6')
        .from('.cta-btn', {
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            ease: 'back.out(1.5)'
        }, '-=0.4')
        .from('.contact-info', {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.4');
    
    // ========================================
    // FOOTER
    // ========================================
    
    gsap.from('.footer', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%',
            toggleActions: 'play none none none'
        }
    });
    
    // ========================================
    // HOVER MEJORADO EN BOTÓN
    // ========================================
    
    $('.cta-btn').on('mouseenter', function() {
        gsap.to(this, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    }).on('mouseleave', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    // ========================================
    // ANIMACIONES EN SKILLS Y TAGS
    // ========================================
    
    $('.skill, .tag').each(function() {
        $(this).on('mouseenter', function() {
            gsap.to(this, {
                y: -5,
                duration: 0.3,
                ease: 'power2.out'
            });
        }).on('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    // ========================================
    // NAVBAR BACKGROUND AL SCROLL
    // ========================================
    
    let lastScroll = 0;
    
    $(window).on('scroll', function() {
        const currentScroll = $(this).scrollTop();
        
        if (currentScroll > 100) {
            gsap.to('.nav', {
                background: 'rgba(250, 248, 245, 0.98)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                duration: 0.3
            });
        } else {
            gsap.to('.nav', {
                background: 'rgba(250, 248, 245, 0.95)',
                boxShadow: 'none',
                duration: 0.3
            });
        }
        
        lastScroll = currentScroll;
    });
    
    // ========================================
    // REFRESH SCROLLTRIGGER AL RESIZE
    // ========================================
    
    let resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 250);
    });
    
    // ========================================
    // LOG DE CONFIRMACIÓN
    // ========================================
    
    console.log('%c✓ Animaciones activas', 'color: #b8c5b3; font-weight: bold;');
    console.log('%c✓ Navegación suave activa', 'color: #b8c5b3; font-weight: bold;');
    console.log('%c✓ Cursor centrado correctamente', 'color: #b8c5b3; font-weight: bold;');
    
});
