let hasOpened = false;
const images = ["dress1.jpg", "dress2.jpg"];

function startMusic() {
  const music = document.getElementById("bg-music");
  music.play().catch(e => {});
}

function openBag(element) {
  if (hasOpened) return;
  hasOpened = true;

  const bags = document.querySelectorAll('.bag');
  bags.forEach(bag => {
    bag.onclick = null;
    bag.style.opacity = "0.3";
  });

  element.classList.add('shake');
  const reward = images[Math.floor(Math.random() * images.length)];
  const popup = document.getElementById("popup");
  const rewardImage = document.getElementById("rewardImage");
  rewardImage.src = reward;
  rewardImage.style.display = "block";
  popup.classList.remove("hidden");

  setTimeout(() => {
    rewardImage.style.display = "none";
  }, 3000);
}