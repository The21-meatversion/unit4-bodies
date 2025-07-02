function playAudio(soundId) {
    const audio = document.getElementById(soundId);
    audio.play();
}

function showhideVocab(vocabId,btnId) {
    const text = document.getElementById(vocabId);
    const btn = document.getElementById(btnId);
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