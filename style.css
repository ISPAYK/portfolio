/* ==========================================================================
   GLOBAL & INITIAL SETUP
   ========================================================================== */
html {
    overflow-y: scroll;
    background-color: #0b0c10; /* Sinisiguro na pati html base ay dark */
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-decoration: none;
    scroll-behavior: smooth;
}

body {
    background-color: #0b0c10; 
    color: #fff;
    overflow-x: hidden;
    min-height: 100vh;
}

/* Prevent scroll during splash screen */
body.hidden-scroll {
    overflow: hidden;
}

/* ==========================================================================
   1. SPLASH SCREEN (Introduction)
   ========================================================================== */
.splash-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #000; /* Solid black para sa loading transition */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.8s ease-in-out;
}

.splash-screen.fade-out {
    opacity: 0;
    pointer-events: none;
}

.splash-container { 
    text-align: center; 
    z-index: 10; 
}

.intro-heading { 
    font-size: 1rem;
    letter-spacing: 5px; 
    color: #ccc; 
    margin-bottom: 1rem; 
    text-transform: uppercase;
}

.main-text h1 { 
    font-size: 5rem; 
    margin: 0; 
    line-height: 1.1;
}

.year-text { 
    font-style: italic; 
    color: #ff007f; /* Pareho sa About page brand color */
}

.services-labels {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 20px;
    font-size: 0.9rem;
    color: #aaa;
    letter-spacing: 2px;
}

/* Neon Rings Effect sa Splash */
.neon-ring {
    position: absolute;
    border-radius: 50%;
    border: 2px solid rgba(255, 0, 127, 0.3);
    box-shadow: 0 0 30px rgba(255, 0, 127, 0.2);
}
.ring-top { width: 500px; height: 500px; top: -10%; left: -10%; }
.ring-bottom { width: 600px; height: 600px; bottom: -15%; right: -10%; }

/* ==========================================================================
   2. MAIN CONTENT TRANSITION
   ========================================================================== */
.main-content {
    opacity: 0; 
    transition: opacity 1s ease;
}

.main-content.show-main {
    opacity: 1;
}

/* ==========================================================================
   3. FIXED HEADER (STABLE & DYNAMIC)
   ========================================================================== */
:root {
    --nav-glow: #ff007f; /* Solid pink consistent color */
    --nav-secondary: rgba(255, 0, 127, 0.4); 
}

.header { 
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    padding: 0 10%; 
    background: rgba(11, 12, 16, 0.9);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-between; /* Logo sa kaliwa, Navbar sa kanan */
    align-items: center;
    z-index: 1000;
}

.logo { 
    font-size: 25px; 
    color: #fff; 
    font-weight: 700; 
    text-decoration: none; 
}

.font-orbitron { font-family: 'Orbitron', sans-serif; }

body.about-page { background-color: #080808; }

#typewriter-prefix {
    font-size: 2.2rem;
    min-height: 45px;
}

#typewriter-name {
    font-size: 3rem;
    min-height: 60px;
    color: #ff00bb;
}

.home-content-right .btn-wrapper {
    margin-top: 1.5rem;
}

.home-content-right h3.role {
    color: #ff00bb;
    background: none;
    -webkit-text-fill-color: #ff00bb;
    filter: drop-shadow(0 0 10px rgba(255,0,187,0.4));
}

.navbar { 
    display: flex; 
    align-items: center; 
    gap: 2rem; /* Distansya na katulad ng About page niyo */
}

.navbar a {
    color: #fff;
    padding: 0.5rem 1.2rem; /* Saktong sukat ng kapsula */
    border-radius: 9999px; /* Perpektong pabilog */
    transition: all 0.3s ease;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
}

/* --- NAVIGATION GLOW (ACTIVE AT HOVER STATES NAKA-PILL) --- */
.navbar a:hover, 
.navbar a.active {
    background: #ff007f !important; /* Pinanatili ang important para ma-override ang Tailwind classes */
    color: #fff !important;
    padding: 0.5rem 1.2rem;
    border-radius: 9999px;
    font-weight: 700; 
    box-shadow: 0 0 15px rgba(255, 0, 127, 0.6) !important; 
    transform: translateY(-3px); /* Bahagyang pag-angat */
}

/* ==========================================================================
   4. HOME HERO SECTION (DESKTOP)
   ========================================================================== */
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 80px);
    padding: 120px 10% 2rem 10%;
    gap: 50px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    animation: backgroundShift 10s infinite;
    flex-direction: row;
}

/* KONTROLADO AT PINALIIT NA CONTAINER */
.home-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220px;      
    height: 220px;     
    max-width: 220px;
    max-height: 220px;
    flex-shrink: 0;
    animation: floatContainer 5s ease-in-out infinite;
}

/* Perfect at malinis na bilog ng profile picture */
.img-frame {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 4px solid #ff007f;
    box-shadow: 0 0 25px rgba(255, 0, 127, 0.6);
    overflow: hidden;
    animation: neonBorderShift 10s infinite;
}

.img-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center; 
    display: block;
}

.home-content-left, 
.home-content-right {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.home-content-left { text-align: right; }
.home-content-right { text-align: left; }

.home-content-left h1 { font-size: 50px; font-weight: 700; }

.home-content-right h3 {
    font-size: 32px;
    font-weight: 700;
    background: linear-gradient(90deg, #ff007f, #ff0000, #ff007f);
    background-size: 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: colorSyncLogic 10s linear infinite;
}

.btn {
    display: inline-block;
    padding: 12px 28px;
    background: linear-gradient(90deg, #ff007f, #ff0000, #ff007f);
    background-size: 200%;
    color: #fff;
    font-weight: 600;
    border-radius: 40px;
    box-shadow: 0 0 15px rgba(255, 0, 127, 0.4);
    transition: all 0.3s ease;
    margin-top: 20px;
    width: fit-content;
    animation: colorSyncLogic 10s linear infinite;
    cursor: pointer;
}

.btn:hover {
    box-shadow: 0 0 25px rgba(255, 0, 127, 0.8);
    transform: scale(1.05);
}

/* ==========================================================================
   5. UNIFORM SECTIONS & TECH STACK GRID
   ========================================================================== */
section {
    min-height: 100vh;
    padding: 100px 10% 2rem; 
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.heading {
    font-size: 4.5rem;
    text-align: center;
    margin-bottom: 3rem;
}

.heading span {
    color: #ff007f;
    animation: textColorShift 10s infinite;
}

.grid {
    display: grid;
    gap: 1.5rem;
}

.key {
    position: relative;
    width: 100%; 
    height: 160px; 
    cursor: pointer;
    perspective: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #111827; 
    border: 1px solid #374151; 
    border-radius: 12px;
    transition: all 0.3s ease;
    overflow: hidden;
}

.key-info {
    display: none; 
}

.keycap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    z-index: 1;
}

.keycap i {
    font-size: 50px; 
}

.keycap img {
    width: 48px;
    height: 48px;
    object-fit: contain;
}

.key:hover {
    transform: translateY(-4px); 
    box-shadow: 0 0 20px rgba(255, 0, 127, 0.3); 
}

/* Interactive Border Glows */
.key.border-pink-glow:hover { border-color: #ec4899; }
.key.border-blue-glow:hover { border-color: #3b82f6; }
.key.border-green-glow:hover { border-color: #22c55e; }

.key-overlay {
    position: absolute;
    inset: 0;
    background: rgba(3, 7, 18, 0.95); 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 5;
    pointer-events: none;
}

.key:hover .key-overlay {
    opacity: 1;
}

.key:hover .keycap {
    opacity: 0.1; 
}

/* --- MOBILE POPUP MODAL (TECH STACK) --- */
.mobile-modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9); 
    backdrop-filter: blur(8px);
    justify-content: center;
    align-items: center;
}

.mobile-modal .modal-content {
    background: #1a1a1a;
    color: #fff;
    padding: 30px;
    border-radius: 20px;
    border: 2px solid #ff007f; 
    text-align: center;
    width: 90%;
    max-width: 400px; 
    box-shadow: 0 0 30px rgba(255, 0, 127, 0.3);
    position: relative;
}

#modalBody div i, #modalBody div img {
    font-size: 6rem;
    margin-bottom: 1rem;
}

.close-modal {
    position: absolute;
    right: 20px;
    top: 10px;
    font-size: 35px;
    color: #ff007f;
    cursor: pointer;
}

/* ==========================================================================
   6. CERTIFICATIONS & MODALS
   ========================================================================== */
.certifications {
    padding: 100px 10% 4rem 10%;
    max-width: 1200px;
    margin: 0 auto;
}

.cert-container {
    display: flex;
    justify-content: center;
    gap: 2.5rem;
    margin-top: 2rem;
    flex-wrap: wrap;
}

.cert-box {
    max-width: 450px;
    background: #111827; 
    padding: 1.5rem;
    border-radius: 12px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 1px solid #374151; 
    transition: all 0.3s ease;
}

.cert-box:hover {
    border-color: #ec4899; 
    box-shadow: 0 0 20px rgba(255, 0, 127, 0.3); 
    transform: translateY(-4px); 
}

.cert-label {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    text-align: left;
}

.cert-label h3 {
    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
}

.cert-label p {
    color: #9ca3af;
    font-size: 1rem;
}

.cert-label strong {
    color: #fff;
}

.cert-img-container {
    position: relative;
    width: 100%;
    height: 220px;
    overflow: hidden;
    border-radius: 10px;
    background: #0b0c10;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.cert-img-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    cursor: pointer;
}

.page-controls {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    background: rgba(0, 0, 0, 0.7);
    padding: 5px 12px;
    border-radius: 20px;
    z-index: 10;
}

.page-btn {
    background: transparent;
    border: none;
    color: #fff;
    font-size: 0.7rem;
    cursor: pointer;
    padding: 3px 10px;
    border-radius: 5px;
    transition: 0.3s;
}

.page-btn.page-active {
    background: #ff007f;
    font-weight: bold;
}

.cert-buttons { 
    display: flex; 
    gap: 10px; 
    justify-content: center; 
    margin-top: 1.2rem;
    flex-wrap: wrap;
}

.btn-small { padding: 8px 16px; font-size: 0.85rem; border-radius: 8px; cursor: pointer; font-weight: 600; transition: 0.3s; }
.btn-small.fill { background: #ff007f; color: #fff; border: none; }
.btn-small.outline { background: transparent; border: 1px solid #ff007f; color: #ff007f; }

/* General Image Pop Modals */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    justify-content: center;
    align-items: center;
}

.modal .modal-content { 
    max-width: 80%; 
    max-height: 85%; 
    border-radius: 20px; 
    border: 2px solid #ff007f; 
    box-shadow: 0 0 30px rgba(255, 0, 127, 0.3); 
}
.close { position: absolute; top: 20px; right: 35px; color: #fff; font-size: 40px; font-weight: bold; cursor: pointer; }

/* ==========================================================================
   7. CONTACT SECTION & SOCIAL LINKS
   ========================================================================== */
.contact-section {
    min-height: 100vh;
    padding: 10rem 9% 2rem;
    background: #0b0c10; 
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact-container {
    max-width: 1100px;
    width: 100%;
}

.contact-section h2 {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 4.5rem;
    color: #fff;
}

.contact-section h2 span {
    color: #ff007f; 
    animation: textColorShift 10s infinite; 
}

.contact-subtitle {
    text-align: center;
    color: #888;
    font-size: 1.6rem;
    margin-bottom: 4rem;
}

.contact-wrapper {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 4rem;
    align-items: start;
}

.contact-form {
    background: rgba(255, 255, 255, 0.03); 
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 4rem;
    border-radius: 2rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}

.input-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
}

.contact-form input, 
.contact-form textarea {
    width: 100%;
    padding: 1.5rem;
    font-size: 1.6rem;
    color: #fff;
    background: #161b22; 
    border-radius: 1rem;
    border: 1px solid #30363d;
    transition: 0.3s ease;
}

.contact-form input:focus, 
.contact-form textarea:focus {
    border-color: #ff007f;
    box-shadow: 0 0 15px rgba(255, 0, 127, 0.5);
    outline: none;
}

.contact-form textarea {
    resize: none;
    margin-bottom: 2rem;
}

.btn-send {
    display: inline-block;
    padding: 1.5rem 4rem;
    background: #ff007f;
    color: #fff;
    font-size: 1.8rem;
    font-weight: 600;
    border-radius: 1rem;
    cursor: pointer;
    border: none;
    transition: 0.2s ease;
    box-shadow: 0 5px 0 #ad0056; 
}

.btn-send:hover {
    transform: translateY(-2px);
    box-shadow: 0 7px 20px rgba(255, 0, 127, 0.4);
}

.btn-send:active {
    transform: translateY(4px);
    box-shadow: 0 1px 0 #ad0056;
}

.contact-info h3 {
    font-size: 2.8rem;
    color: #fff;
    margin-bottom: 2rem;
}

.social-icons {
    display: flex;
    flex-direction: column; 
    gap: 1.5rem;
    width: 100%;
}

.social-icons a {
    display: flex;
    align-items: center;
    gap: 2rem; 
    width: 100%; 
    padding: 1.2rem 2rem; 
    background: #161b22; 
    border-radius: 16px; 
    border: 1px solid #30363d;
    text-decoration: none;
    box-sizing: border-box;
    transition: all 0.3s ease; 
}

.social-icons a .icon {
    font-size: 2.5rem; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0; 
}

.social-icons a i {
    font-size: 2.5rem;
    color: #fff;
}

.social-icons a span {
    font-size: 1.8rem;
    font-weight: 500;
    color: #fff;
    opacity: 1; 
    white-space: nowrap; 
}

/* Brand Hover States */
.social-icons a.facebook:hover {
    border-color: #1877F2;
    background: #1877F2;
    box-shadow: 0 0 25px rgba(24, 119, 242, 0.7);
    transform: translateY(-5px); 
}

.social-icons a.instagram:hover {
    border-color: #E4405F;
    background: #E4405F;
    box-shadow: 0 0 25px rgba(228, 64, 95, 0.7);
    transform: translateY(-5px);
}

.social-icons a.linkedin:hover {
    border-color: #0077B5;
    background: #0077B5;
    box-shadow: 0 0 25px rgba(0, 119, 181, 0.7);
    transform: translateY(-5px);
}

.social-icons a.github:hover {
    border-color: #ff007f; 
    background: #333;
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.3);
    transform: translateY(-5px);
}

/* ==========================================================================
   8. ANIMATION KEYFRAMES
   ========================================================================== */
@keyframes neonBorderShift {
    0%, 45%, 100% { border-color: #ff007f; box-shadow: 0 0 25px #ff007f, inset 0 0 10px #ff007f; }
    50%, 95% { border-color: #ff0000; box-shadow: 0 0 25px #ff0000, inset 0 0 10px #ff0000; }
}

@keyframes backgroundShift {
    0%, 45%, 100% { background: radial-gradient(circle at 50% 50%, rgba(255, 0, 127, 0.1), transparent 60%); }
    50%, 95% { background: radial-gradient(circle at 50% 50%, rgba(255, 0, 0, 0.1), transparent 60%); }
}

@keyframes textColorShift {
    0%, 45%, 100% { color: #ff007f; text-shadow: 0 0 10px #ff007f; }
    50%, 95% { color: #ff0000; text-shadow: 0 0 10px #ff0000; }
}

@keyframes colorSyncLogic {
    0%, 45%, 100% { background-position: 0%; box-shadow: 0 0 15px rgba(255, 0, 127, 0.4); }
    50%, 95% { background-position: 100%; box-shadow: 0 0 15px rgba(255, 0, 0, 0.4); }
}

@keyframes floatContainer {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
}

/* ==========================================================================
   9. TEXT, TYPEWRITER EFFECTS & ELEMENT REVEALS
   ========================================================================== */
.animate-text {
    opacity: 1; 
    transform: translateY(0); 
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: opacity, transform;
}

.typewriter-container.animate-text {
    opacity: 1 !important;
    transform: none !important;
}

.animate-text.show {
    opacity: 1;
    transform: translateY(0);
}

.animate-text.exit {
    opacity: 0;
    transform: translateY(-30px);
}

.typewriter-container {
    min-height: 120px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.typewriter-container h1 {
    min-height: 1.2em;
    display: block;
    color: #fff; 
}

/* Ang Blinking Cursor (|) */
#typewriter-prefix::after,
#typewriter-name::after {
    content: "|";
    margin-left: 5px;
    color: var(--nav-glow, #ff007f); 
    animation: blink 0.7s infinite;
    display: inline-block;
    vertical-align: middle;
}

.reveal {
    animation: fadeInUp 1s forwards;
}

.home-img.animate-text {
    transition-delay: 0.3s;
    opacity: 1; 
}

.home-img.animate-text.show {
    opacity: 1; 
}

/* ==========================================================================
   10. RESPONSIVE BREAKPOINTS (Mobile Adjustments)
   ========================================================================== */
@media (max-width: 991px) {
    .contact-wrapper {
        grid-template-columns: 1fr;
    }
    .contact-info {
        text-align: center;
    }
    .social-icons {
        justify-content: center;
    }
}

@media (max-width: 768px) {
    .header { 
        height: auto;
        padding: 1rem 5%; 
        flex-direction: column; 
        gap: 0.8rem; 
        background: rgba(11, 12, 16, 0.95); 
    }
    .navbar { 
        gap: 10px; 
        flex-wrap: wrap; 
        justify-content: center; 
    }
    .navbar a { 
        font-size: 14px; 
        padding: 6px 12px; 
    }
    .navbar a:hover, 
    .navbar a.active {
        padding: 6px 12px;
    }

    /* --- HOME SECTION MOBILE --- */
    .home { 
        flex-direction: column; 
        text-align: center; 
        padding-top: 190px; 
        gap: 2rem; 
        justify-content: flex-start;
    }

    .home-img { 
        order: 1; 
        width: 150px;
        height: 150px;
        max-width: 150px;
        max-height: 150px;
        margin: 0 auto; 
    }

    .home-content-left { 
        order: 2; 
        text-align: center; 
    }
    .home-content-left h1 {
        font-size: 1.8rem; 
        min-height: auto;
    }
    .home-content-left .name {
        font-size: 2.2rem;
        min-height: auto;
    }

    .home-content-right {
        order: 3; 
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .home-content-right h3 {
        font-size: 1.8rem;
    }

    /* --- GENERAL SECTIONS --- */
    section {
        padding: 180px 6% 2rem; 
    }
    .heading { 
        font-size: 2.6rem; 
        margin-bottom: 2rem;
    }

    /* --- TECH STACK MOBILE --- */
    .keyboard-base {
        grid-template-columns: repeat(auto-fit, minmax(70px, 1fr)); 
        padding: 15px;
        gap: 10px;
    }
    .key {
        width: 70px;
        height: 70px;
    }
    .keycap i, .keycap img {
        font-size: 30px;
    }

    /* --- CERTIFICATIONS MOBILE --- */
    .cert-container {
        gap: 1.5rem;
    }
    .cert-box {
        max-width: 100%;
        padding: 1.2rem;
    }
    .cert-img-container {
        height: 180px;
    }

    /* --- CONTACT MOBILE --- */
    .contact-section {
        padding-top: 180px;
    }
    .contact-subtitle {
        font-size: 1.2rem;
        margin-bottom: 2.5rem;
    }
    .contact-wrapper {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
    .contact-form {
        padding: 2rem; 
        border-radius: 1.5rem;
    }
    .input-box {
        grid-template-columns: 1fr;
        gap: 1.2rem;
    }
    .contact-form input, 
    .contact-form textarea {
        padding: 1.2rem;
        font-size: 1.2rem;
    }
    .btn-send {
        padding: 1.2rem 3rem;
        font-size: 1.4rem;
        width: 100%; 
    }
    .contact-info h3 {
        font-size: 2rem;
        text-align: center;
    }
    .social-icons a {
        padding: 1rem 1.5rem;
        gap: 1.2rem;
    }
    .social-icons a i,
    .social-icons a .icon {
        font-size: 1.8rem;
    }
    .social-icons a span {
        font-size: 1.3rem;
    }
}

@media (max-width: 600px) {
    .input-box {
        grid-template-columns: 1fr;
    }
}