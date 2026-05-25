/**
 * ⚡ COBA CORE LIVE INTERACTIVE WORKSPACE UTILITIES
 */

// Sets up live keyboard input checks once the script activates
document.addEventListener("DOMContentLoaded", () => {
    let passwordField = document.getElementById("portalPass");
    if (passwordField) {
        // Creates the visual meter bar element dynamically on the fly
        let meterContainer = document.createElement("div");
        meterContainer.className = "strength-meter-container";
        meterContainer.id = "passStrengthBarParent";
        
        let meterFill = document.createElement("div");
        meterFill.className = "strength-bar-fill";
        meterFill.id = "passStrengthBarFill";
        
        meterContainer.appendChild(meterFill);
        passwordField.parentNode.appendChild(meterContainer);
        
        // Listens to character typing inside input boxes live
        passwordField.addEventListener("input", analyzeKeyStrengthLive);
    }
    
    injectThemeSelectorWidgets();
});

// Checks your input key length to tell you if it is strong or weak
function analyzeKeyStrengthLive() {
    let text = document.getElementById("portalPass").value;
    let container = document.getElementById("passStrengthBarParent");
    let fill = document.getElementById("passStrengthBarFill");
    
    if (text.length === 0) {
        container.style.display = "none";
        return;
    }
    
    container.style.display = "block";
    
    if (text.length < 5) {
        fill.style.width = "30%";
        fill.style.backgroundColor = "#ff6b6b"; // Weak - Neon Red
    } else if (text.length >= 5 && text.length < 9) {
        fill.style.width = "65%";
        fill.style.backgroundColor = "#fbbc05"; // Medium - Yellow
    } else {
        fill.style.width = "100%";
        fill.style.backgroundColor = "#00a884"; // Strong - Coba Green
    }
}

// Spawns layout theme toggle dots automatically at the base of the interface card
function injectThemeSelectorWidgets() {
    let card = document.querySelector(".coba-auth-card");
    if (!card) return;
    
    let cluster = document.createElement("div");
    cluster.className = "theme-toggle-cluster";
    cluster.innerHTML = `
        <div class="color-dot-switch" style="background:#15191e;" onclick="swapPortalTheme('slate')"></div>
        <div class="color-dot-switch" style="background:#0b111e;" onclick="swapPortalTheme('blue')"></div>
        <div class="color-dot-switch" style="background:#120b1e;" onclick="swapPortalTheme('violet')"></div>
    `;
    card.appendChild(cluster);
}

// Changes workspace colors immediately when tapping a dot element
function swapPortalTheme(styleName) {
    let card = document.querySelector(".coba-auth-card");
    if (!card) return;
    
    card.classList.remove("theme-canvas-blue", "theme-canvas-violet");
    
    if (styleName === "blue") card.classList.add("theme-canvas-blue");
    if (styleName === "violet") card.classList.add("theme-canvas-violet");
}
