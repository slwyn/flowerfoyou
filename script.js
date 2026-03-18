window.onload = () => {
  // 🌸 Start flower animation
  document.body.classList.remove("container");

  // 🎵 Background music (plays after user click due to browser rules)
  const music = document.getElementById("bg-music");

  if (music) {
    const playMusic = () => {
      music.play().catch(() => {});
      document.removeEventListener("click", playMusic);
    };

    document.addEventListener("click", playMusic);
  }

  // 💖 Show main text after delay (so animation plays first)
  setTimeout(() => {
    const text = document.querySelector(".main-text");

    if (text) {
      text.style.opacity = "1";
      text.style.transform = "translate(-50%, -50%) scale(1)";
    }
  }, 2000);
};