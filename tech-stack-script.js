// --- TECH STACK MODAL LOGIC ---
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        // Kunin ang content mula sa loob ng .key-info ng pinindot na key
        const title = key.querySelector('.key-info h3').innerText;
        const description = key.querySelector('.key-info p').innerText;
        
        // Kunin din natin ang icon para mas maganda tingnan ang modal
        const iconHtml = key.querySelector('.keycap').innerHTML;
        
        const modal = document.getElementById('mobileModal');
        const modalBody = document.getElementById('modalBody');
        
        // I-display sa loob ng modal (May kasamang Icon, Title, at Description)
        modalBody.innerHTML = `
            <div style="text-align: center; margin-bottom: 15px;">
                <div style="font-size: 5rem; display: inline-block;">${iconHtml}</div>
            </div>
            <h3 style="color: #ff00bb; font-size: 2.2rem; margin-bottom: 10px; text-align: center; font-family: inherit;">${title}</h3>
            <p style="color: #fff; line-height: 1.6; font-size: 1.6rem; text-align: center; font-family: inherit;">${description}</p>
        `;
        
        modal.style.display = 'flex';
    });
});

// Close button logic (Yung 'X' button sa modal)
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('mobileModal').style.display = 'none';
});

// Isara ang modal kapag clinick ng user ang labas ng modal content box
window.onclick = function(event) {
    const modal = document.getElementById('mobileModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}