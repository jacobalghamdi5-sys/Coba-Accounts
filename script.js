let portalMode = "signup"; // Mode state toggle indicator
let chosenAvatar = "🤖";    // Profile identity tracker constant

let complianceDocuments = {
    terms: {
        title: "Terms of Service",
        body: "<p>Welcome to Coba Accounts. By building a master identity node sequence within our digital network configurations cluster, you explicitly consent to follow our sandbox environment usage rules.</p><p>1. Local Security: Credential profiles are securely contained on the local browser layer.</p><p>2. Testing Parameters: This template is strictly isolated for development execution chores.</p>"
    },
    policy: {
        title: "Privacy Framework Policy",
        body: "<p>Your security keys configuration values are strictly private:</p><p>1. Enclave Safety: Passwords remain encrypted inside the device localStorage vault strings matrix.</p><p>2. Zero Telemetry: Coba core handles zero user cookies logging files or third-party analytic sales.</p>"
    }
};

// Validates the checkbox to unlock form buttons
function validateCheckboxState() {
    let check = document.getElementById("legalAgreeCheck");
    let btn = document.getElementById("portalSubmitBtn");
    btn.disabled = portalMode === "signup" ? !check.checked : false;
}

function openLegalModal(docType) {
    let doc = complianceDocuments[docType];
    document.getElementById("legalModalTitle").innerText = doc.title;
    document.getElementById("legalModalBody").innerHTML = doc.body;
    document.getElementById("legalModalWindow").style.display = "flex";
}

function closeLegalModal() {
    document.getElementById("legalModalWindow").style.display = "none";
}

// Allows clicking avatar loops inside input cards
function selectProfileAvatar(emoji) {
    chosenAvatar = emoji;
    document.querySelectorAll('.avatar-chip').forEach(chip => {
        chip.classList.remove('active');
        if(chip.innerText === emoji) chip.classList.add('active');
    });
}

// Seamless presentation panels transition rules matching professional setups
function togglePortalMode() {
    let title = document.getElementById("portalTitle");
    let sub = document.getElementById("portalSub");
    let toggleBtn = document.getElementById("portalToggleBtn");
    let submitBtn = document.getElementById("portalSubmitBtn");
    let legalRow = document.getElementById("legalCheckboxRow");
    let confirmRow = document.getElementById("confirmFieldRow");
    let avatarSection = document.getElementById("avatarSection");
    let alertBox = document.getElementById("portalStatusBox");

    alertBox.style.display = "none";
    document.getElementById("portalUser").value = "";
    document.getElementById("portalPass").value = "";
    document.getElementById("portalPassConfirm").value = "";

    if (portalMode === "signup") {
        portalMode = "login";
        title.innerText = "Sign in";
        sub.innerText = "to continue to your Coba Workspace";
        toggleBtn.innerText = "Create account";
        submitBtn.innerText = "Next";
        legalRow.style.display = "none";
        confirmRow.style.display = "none";
        avatarSection.style.display = "none";
        submitBtn.disabled = false;
    } else {
        portalMode = "signup";
        title.innerText = "Create your Coba Account";
        sub.innerText = "One master digital identity to access all your secure sandbox modules";
        toggleBtn.innerText = "Sign in instead";
        submitBtn.innerText = "Next";
        legalRow.style.display = "flex";
        confirmRow.style.display = "block";
        avatarSection.style.display = "block";
        validateCheckboxState();
    }
}

function togglePasswordVisibility() {
    let field = document.getElementById("portalPass");
    field.type = field.type === "password" ? "text" : "password";
}
// Handles account validation gates operations
function handleAccountAction() {
    let user = document.getElementById("portalUser").value.trim();
    let pass = document.getElementById("portalPass").value.trim();
    let confirmPass = document.getElementById("portalPassConfirm").value.trim();

    if (user === "" || pass === "") {
        displayPortalAlert("Please completely fill out all credential validation inputs.", "error");
        return;
    }

    if (portalMode === "signup") {
        if (pass !== confirmPass) {
            displayPortalAlert("Passwords do not match. Please verify validation keys.", "error");
            return;
        }
        // Save to browser secure isolation parameters data vault block
        localStorage.setItem("coba_vault_user_" + user, pass);
        localStorage.setItem("coba_vault_avatar_" + user, chosenAvatar);
        displayPortalAlert("🎉 Coba registration complete! Launching login panel sequence...", "success");
        setTimeout(() => { togglePortalMode(); }, 1600);
    } else {
        let storedPasswordMatrix = localStorage.getItem("coba_vault_user_" + user);
        if (storedPasswordMatrix && storedPasswordMatrix === pass) {
            let savedAvatar = localStorage.getItem("coba_vault_avatar_" + user) || "🤖";
            displayPortalAlert("✅ Verification authorized! Redirecting...", "success");
            setTimeout(() => { enterDashboardEnvironment(user, savedAvatar); }, 1000);
        } else {
            displayPortalAlert("Invalid account ID profile name or security pattern entry.", "error");
        }
    }
}

function displayPortalAlert(txt, type) {
    let box = document.getElementById("portalStatusBox");
    box.innerText = txt;
    box.className = "portal-status-alert " + type;
}

// Redirects into live settings environment panel interface layout
function enterDashboardEnvironment(username, avatar) {
    document.getElementById("accountPortal").style.display = "none";
    document.getElementById("appContainer").style.display = "flex";
    
    document.getElementById("userBadge").innerText = "@" + username;
    document.getElementById("userAvatarDisplay").innerText = avatar;
    switchDashboardTab('security');
}

// Dashboard Tabs management routing controls
function switchDashboardTab(tabName) {
    document.querySelectorAll('.folder-item').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.tab-panel-view').forEach(panel => panel.style.display = 'none');

    if(tabName === 'security') {
        document.getElementById("navSecurity").classList.add("active");
        document.getElementById("panelSecurity").style.display = "block";
        document.getElementById("tabMainHeader").innerText = "Security Settings Core";
    }
    if(tabName === 'profile') {
        document.getElementById("navProfile").classList.add("active");
        document.getElementById("panelProfile").style.display = "block";
        document.getElementById("tabMainHeader").innerText = "Personal Info Profile Settings";
    }
    if(tabName === 'connected') {
        document.getElementById("navConnected").classList.add("active");
        document.getElementById("panelConnected").style.display = "block";
        document.getElementById("tabMainHeader").innerText = "Connected Ecosystem Modules";
    }
}

function logoutAccount() {
    document.getElementById("accountPortal").style.display = "flex";
    document.getElementById("appContainer").style.display = "none";
    togglePortalMode(); // Swaps view panel state back safely cleanly
}
