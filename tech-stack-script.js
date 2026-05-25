// --- 1. TYPEWRITER SETTINGS ---
const prefixText = "Hello! I'm";
const nameText = "Harell Diaz";
let isTyping = false;
let typeTimeouts = []; 

function typeEffect(elementId, text, speed = 100, callback = null) {
    let i = 0;
    const element = document.getElementById(elementId);
    if (!element) return; // Proteksyon laban sa error kung wala sa kasalukuyang page ang element
    element.innerHTML = "";
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            typeTimeouts.push(setTimeout(typing, speed));
        } else if (callback) {
            // Pagkatapos ng unang text (prefix), patakbuhin naman ang kasunod (name)
            callback();
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

// Function para simulan ang typewriter effects kapag nakita na ang main content
function startHomeAnimations() {
    const checkPrefix = document.getElementById("typewriter-prefix");
    const checkName = document.getElementById("typewriter-name");
    
    // Kung wala ang mga elements na ito sa page (hal. nasa tungkol.html o contact.html ka), huwag ituloy.
    if (!checkPrefix || !checkName) return;

    if (isTyping) return; // Iwasang mag-doble ang takbo ng typing effect
    isTyping = true;
    
    clearAllTimeouts();
    
    // Siguraduhing malinis ang panloob na text bago mag-type
    checkPrefix.innerHTML = "";
    checkName.innerHTML = "";
    
    // Uunahing i-type ang prefix bago ang pangalan mo
    typeEffect("typewriter-prefix", prefixText, 100, () => {
        setTimeout(() => {
            typeEffect("typewriter-name", nameText, 120);
        }, 300);
    });
}

function handleSplashScreen() {
    const splash = document.getElementById('splashScreen');
    const main = document.getElementById('mainContent');

    if (!splash || !main) return;

    if (sessionStorage.getItem('splashWatched') === 'true') {
        splash.style.display = 'none';
        main.classList.add('show-main');
        main.style.opacity = '1';
        document.body.classList.remove('hidden-scroll');
        
        // Pinataas ang delay (500ms) para siguradong tapos nang mag-render ang HTML DOM Elements
        isTyping = false; // Force reset state para sa page returns
        setTimeout(startHomeAnimations, 500);
    } else {
        setTimeout(() => {
            splash.classList.add('fade-out');
            setTimeout(() => {
                splash.style.display = 'none';
                main.classList.add('show-main');
                main.style.opacity = '1';
                document.body.classList.remove('hidden-scroll');
                sessionStorage.setItem('splashWatched', 'true');
                
                // Simulan ang typing matapos mag-fade out nang husto ang splash screen
                isTyping = false;
                setTimeout(startHomeAnimations, 300);
            }, 800);
        }, 2500);
    }
}

function initPageScripts() {
    const keys = document.querySelectorAll('.key');
    const mobileModal = document.getElementById('mobileModal');
    const modalBody = document.getElementById('modalBody');
    const closeModalBtn = document.querySelector('.close-modal');

    if (keys.length && mobileModal && modalBody) {
        keys.forEach(key => {
            key.addEventListener('click', () => {
                const titleElement = key.querySelector('.key-info h3');
                const descElement = key.querySelector('.key-info p');
                const iconHtml = key.querySelector('.keycap').innerHTML;

                if (!titleElement || !descElement) return;

                modalBody.innerHTML = `
                    <div style="text-align: center; margin-bottom: 15px;">
                        <div style="font-size: 5rem; display: inline-block;">${iconHtml}</div>
                    </div>
                    <h3 style="color: var(--nav-glow); font-size: 2.2rem; margin-bottom: 10px; text-align: center; font-family: inherit;">${titleElement.innerText}</h3>
                    <p style="color: #fff; line-height: 1.6; font-size: 1.6rem; text-align: center; font-family: inherit;">${descElement.innerText}</p>
                `;
                mobileModal.style.display = 'flex';
            });
        });
    }

    if (closeModalBtn && mobileModal) {
        closeModalBtn.addEventListener('click', () => {
            mobileModal.style.display = 'none';
        });
    }

    document.querySelectorAll('.contact-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message Sent! (Integrate your mail carrier logic here)');
        });
    });

    const navLinks = document.querySelectorAll('.navbar a');
    const currentPath = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        const linkAttribute = link.getAttribute('href');
        if (currentPath === linkAttribute || (currentPath === '' && linkAttribute === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    document.documentElement.style.setProperty('--nav-glow', '#ff007f');
    document.documentElement.style.setProperty('--nav-secondary', '#00d2ff');
}

function switchPage(imageSrc, button) {
    const certImg = document.getElementById('certDisplay');
    if (!certImg || !button) return;
    certImg.src = imageSrc;

    const buttons = button.parentElement.querySelectorAll('.page-btn');
    buttons.forEach(btn => btn.classList.remove('page-active'));
    button.classList.add('page-active');
}

function openModal(imageSrc) {
    const modal = document.getElementById('certModal');
    const fullImg = document.getElementById('imgFull');
    if (!modal || !fullImg) return;
    fullImg.src = imageSrc;
    modal.style.display = 'flex';
}

function closeModal(event) {
    const modal = document.getElementById('certModal');
    if (!modal) return;
    if (event.target === modal || event.target.classList.contains('close')) {
        modal.style.display = 'none';
    }
}

window.addEventListener('load', () => {
    handleSplashScreen();
    if (window.anime && document.querySelector('.home-img')) {
        setTimeout(() => {
            anime({
                targets: '.home-img',
                translateY: [0, -15, 0],
                duration: 3000,
                easing: 'easeInOutQuad',
                loop: true
            });
        }, 3000);
    }
});

window.addEventListener('DOMContentLoaded', initPageScripts);

window.addEventListener('click', (event) => {
    const mobileModal = document.getElementById('mobileModal');
    if (mobileModal && event.target === mobileModal) {
        mobileModal.style.display = 'none';
    }
});

window.switchPage = switchPage;
window.openModal = openModal;
window.closeModal = closeModal;