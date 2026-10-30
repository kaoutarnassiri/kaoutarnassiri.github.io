
// Message de bienvenue dans la console du navigateur
console.log("Bienvenue sur le portfolio de Kaoutar Nassiri ! Étudiante en Management des Organisations.");

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Ajout d'un effet de défilement fluide pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        }
    });
});

if (!prefersReducedMotion) {
    const revealTargets = document.querySelectorAll(
        '.section-title, .about-text, .skill-card, .project-card, .contact-text, .contact-links'
    );

    if ('IntersectionObserver' in window) {
        document.documentElement.classList.add('motion-ready');
        revealTargets.forEach(target => target.classList.add('scroll-reveal'));

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealTargets.forEach(target => revealObserver.observe(target));
    }
}