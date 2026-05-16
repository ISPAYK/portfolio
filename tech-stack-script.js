// --- 1. TYPEWRITER SETTINGS ---
const prefixText = "Hello! I'm";
const nameText = "Harell Diaz";
let isTyping = false;
let typeTimeouts = []; 

function typeEffect(elementId, text, speed = 100) {
    let i = 0;
    const element = document.getElementById(elementId);
    if (!element) return;
    element.innerHTML = ""; 
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            typeTimeouts.push(setTimeout(typing, speed));
        }
    }
    typing();
}

function deleteEffect(elementId, speed = 40) {
    const element = document.getElementById(elementId);
    if (!element) return;
    let text = element.innerHTML;
    function deleting() {
        if (text.length > 0) {
            text = text.substring(0, text.length - 1);
            element.innerHTML = text;
            typeTimeouts.push(setTimeout(deleting, speed));
        } else {
            element.innerHTML = "";
        }
    }
    deleting();
}

function clearAllTimeouts() {
    typeTimeouts.forEach(t => clearTimeout(t));
    typeTimeouts = [];
}

// --- 2. ANIME.JS INTEGRATION: Floating Profile Image (FIXED INTERACTION) ---
window.addEventListener('load', () => {
    // Naghihintay ng 3s para matapos ang splash screen transition
    setTimeout(() => {
        anime({
            targets: '.home-img', /* INAYOS: Ang mismong outer container na ang gagalaw para hindi masira ang size */
            translateY: [0, -15, 0],
            duration: 3000,
            easing: 'easeInOutQuad',
            loop: true
        });
    }, 3000);
});

// --- 3. TEXT & ELEMENT REVEAL ANIMATION (Intersection Observer) ---
const observerOptions = { threshold: 0.15 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('exit');
            if (entry.target.classList.contains('typewriter-container')) {
                if (!isTyping) {
                    isTyping = true;
                    clearAllTimeouts();
                    setTimeout(() => typeEffect("typewriter-prefix", prefixText), 500);
                    setTimeout(() => typeEffect("typewriter-name", nameText), 1600);
                }
            }
        } else {
            entry.target.classList.remove('show');
            entry.target.classList.add('exit');
            if (entry.target.classList.contains('typewriter-container')) {
                isTyping = false;
                clearAllTimeouts();
                deleteEffect("typewriter-prefix");
                deleteEffect("typewriter-name");
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-text').forEach((el) => observer.observe(el));

// --- 4. TECH STACK MODAL LOGIC (With SweetAlert2 Ready) ---
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const title = key.querySelector('.key-info h3').innerText;
        const description = key.querySelector('.key-info p').innerText;
        const iconHtml = key.querySelector('.keycap').innerHTML;
        
        const modal = document.getElementById('mobileModal');
        const modalBody = document.getElementById('modalBody');
        
        if (modalBody && modal) {
            modalBody.innerHTML = `
                <div style="text-align: center; margin-bottom: 15px;">
                    <div style="font-size: 5rem; display: inline-block;">${iconHtml}</div>
                </div>
                <h3 style="color: var(--nav-glow); font-size: 2.2rem; margin-bottom: 10px; text-align: center; font-family: inherit;">${title}</h3>
                <p style="color: #fff; line-height: 1.6; font-size: 1.6rem; text-align: center; font-family: inherit;">${description}</p>
            `;
            modal.style.display = 'flex';
        }
    });
});

const closeModalBtn = document.querySelector('.close-modal');
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        document.getElementById('mobileModal').style.display = 'none';
    });
}

// --- 5. NAVBAR HIGH STABILITY POSITIONING (FIXED AND STABLE FOR MULTI-PAGE) ---
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.navbar a');
    const currentPath = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const linkAttribute = link.getAttribute('href');
        
        // Awtomatikong nilalagyan ng active class kung anong file ang kasalukuyang gamit mo
        if (currentPath === linkAttribute || (currentPath === "" && linkAttribute === "index.html")) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Default static variables para sa orihinal na pink capsule glow mo
    document.documentElement.style.setProperty('--nav-glow', '#ff007f');
    document.documentElement.style.setProperty('--nav-secondary', '#00d2ff');
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('mobileModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
});