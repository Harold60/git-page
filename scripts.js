document.querySelector('.contact-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const introSection = document.querySelector('.intro');
    const contactInfo = document.getElementById('contact-info');

    // Desaparecemos la intro y mostramos la información de contacto
    introSection.classList.add('fade-out');
    
    setTimeout(() => {
        introSection.style.display = 'none';
        contactInfo.classList.remove('hidden-section');
        contactInfo.classList.add('show-section');
    }, 500); // Esperamos a que termine la animación antes de cambiar de contenido
});

document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const introSection = document.querySelector('.intro');
        
        // Primero ocultamos todas las secciones
        document.querySelectorAll('.main-content section').forEach(section => {
            section.classList.add('hidden-section');
            section.classList.remove('show-section');
        });

        // Si es la sección "Contact", mostramos nuevamente la intro
        if (targetId === 'contact') {
            introSection.style.display = 'block'; // Hacemos visible la sección de introducción
            introSection.classList.remove('hidden-section');
            introSection.classList.add('show-section'); // Aplicamos la animación para que aparezca suavemente
            
        } else {
            // Ocultamos la intro si no es la sección de contacto
            introSection.style.display = 'none';
        }

        // Mostramos la sección seleccionada
        if (targetSection && targetId !== 'contact') {
            targetSection.classList.remove('hidden-section');
            targetSection.classList.add('show-section');
        }
    });
});

// Mostrar información de contacto al hacer clic en el botón "Contact me!"
document.querySelector('.contact-btn').addEventListener('click', function(e) {
    e.preventDefault();

    const contactInfo = document.getElementById('contact-info');

    // Añadir los enlaces de contacto
    contactInfo.innerHTML = `
        <a href="https://github.com/harold-github" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/harold-linkedin" target="_blank">LinkedIn</a>
        <a href="cv/harold-cv.pdf" download>Download CV</a>
    `;

    // Mostrar los enlaces con animación
    contactInfo.classList.add('show-contact-info');
});
