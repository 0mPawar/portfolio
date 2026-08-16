const wheel = document.getElementById("wheel");
const segmentContents = document.querySelectorAll(".segment-content");

const total = projects.length;
const angle = 360 / total;
const radius = 240;

let currentRotation = 0;

function showToast() {
  const toast = document.getElementById("toast");

  toast.innerHTML =
    "This project currently runs on localhost only. Please check the Gallery section for project screenshots and preview.";

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

function showGithubToast() {
  const toast = document.getElementById("toast");

  toast.innerHTML =
    "This repository is currently private or under development.";

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

function showGalleryToast() {
  const toast = document.getElementById("toast");

  toast.innerHTML = "Project gallery and screenshots will be available soon.";

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

segmentContents.forEach((item, index) => {
  const currentAngle = angle * index - 90 + angle / 2;
  const rad = currentAngle * (Math.PI / 180);
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;
  item.style.left = `calc(50% + ${x}px - 70px)`;
  item.style.top = `calc(50% + ${y}px - 60px)`;
  item.style.transform = `rotate(${currentAngle + 90}deg)`;
});

function spinWheel() {
  const totalSegments = projects.length;
  const segmentAngle = 360 / totalSegments;
  const winningIndex = Math.floor(Math.random() * totalSegments);
  const stopAngle = winningIndex * segmentAngle + segmentAngle / 2;
  const normalizedRotation = currentRotation % 360;
  const targetRotation =
    currentRotation + 1800 + (360 - normalizedRotation) - stopAngle;
  currentRotation = targetRotation;

  wheel.style.transform = `rotate(${currentRotation}deg)`;

  setTimeout(() => {
    updateProject(winningIndex);
  }, 5000);
}

wheel.addEventListener("click", (e) => {
  const rect = wheel.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  let clickAngle = (Math.atan2(y, x) * 180) / Math.PI;
  clickAngle += 90;
  if (clickAngle < 0) {
    clickAngle += 360;
  }
  let adjustedAngle = (clickAngle - (currentRotation % 360) + 360) % 360;
  const segmentAngle = 360 / projects.length;
  const segment = Math.floor(adjustedAngle / segmentAngle);
  updateProject(segment);
});
