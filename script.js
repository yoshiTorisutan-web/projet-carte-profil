// Animation 3D selon la souris
const card = document.getElementById("profileCard");

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  card.style.transform = `rotateY(${(x - rect.width / 2) / 15}deg) rotateX(${
    -(y - rect.height / 2) / 15
  }deg) translateY(-10px)`;
  card.style.boxShadow = `0 20px 40px rgba(16,185,129,0.4)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateY(0deg) rotateX(0deg) translateY(0px)";
  card.style.boxShadow = "0 10px 20px rgba(16,185,129,0.2)";
});
