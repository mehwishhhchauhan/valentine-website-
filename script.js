const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const question = document.getElementById("question");

let yesScale = 1;

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      background:linear-gradient(135deg,#ff9a9e,#fad0c4);
      color:white;
      font-family:Poppins,sans-serif;
      text-align:center;
    ">
      <h1>YAYYYY 💖😭<br>You said YES!</h1>
    </div>
  `;
});
