function face() {
    const audio = document.getElementById('face');
    audio.play();
}

function hand() {
    const audio = document.getElementById('hand');
    audio.play();
}

function ear() {
    const audio = document.getElementById('ear');
    audio.play();
}

function eye() {
    const audio = document.getElementById('eye');
    audio.play();
}

function showhideText() {
    const text = document.getElementById("eng-word");
    const btn = document.getElementById("showhide-btn");
    if (text.style.display === "none") {
        text.style.display = "block";
        btn.innerHTML = "🙈"; // Mắt gạch
    } else {
        text.style.display = "none";
        btn.innerHTML = "👁️"; // Mắt mở
    }
}

function showhideHand() {
    const text = document.getElementById("hand-en");
    const btn = document.getElementById("showhideHand-btn");
    if (text.style.display === "none") {
        text.style.display = "block";
        btn.innerHTML = "🙈"; // Mắt gạch
    } else {
        text.style.display = "none";
        btn.innerHTML = "👁️"; // Mắt mở
    }
}

function showhideEar() {
    const text = document.getElementById("ear-en");
    const btn = document.getElementById("showhideEar-btn");
    if (text.style.display === "none") {
        text.style.display = "block";
        btn.innerHTML = "🙈"; // Mắt gạch
    } else {
        text.style.display = "none";
        btn.innerHTML = "👁️"; // Mắt mở
    }
}

function showhideEye() {
    const text = document.getElementById("eye-en");
    const btn = document.getElementById("showhideEye-btn");
    if (text.style.display === "none") {
        text.style.display = "block";
        btn.innerHTML = "🙈"; // Mắt gạch
    } else {
        text.style.display = "none";
        btn.innerHTML = "👁️"; // Mắt mở
    }
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
/*-------modal--------*/
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex";
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}
// Đóng modal khi nhấn vào nền mờ
window.addEventListener('click', function(event) {
    const modals = document.getElementsByClassName('modal');
    for (const modal of modals) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});

function displayEn_modal(vocab2, btn2) {
    const text = document.getElementById(vocab2);
    const btn = document.getElementById(btn2);
    if (text.style.display === "none") {
        text.style.display = "block";
        btn.innerHTML = "🙈"; // Mắt gạch
    } else {
        text.style.display = "none";
        btn.innerHTML = "👁️"; // Mắt mở
    }
}