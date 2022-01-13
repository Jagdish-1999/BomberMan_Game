const bombs = [];
let gamePoints = 0;
let canPlay = true;
function updatePoints() {
  const h1 = document.querySelector(".gamePoints");
  h1.innerHTML = "Game Points : " + gamePoints;
}
function addGrid() {
  const appElement = document.getElementById("app");
  appElement.style.border = "1px solid black";
  appElement.style.width = "fit-content";
  appElement.style.margin = "auto";
  for (let i = 0; i < 9; i++) {
    const row = document.createElement("div");
    appElement.appendChild(row);
    row.style.margin = "auto auto auto auto";
    for (let j = 0; j < 9; j++) {
      const index = i * 9 + j;
      const column = document.createElement("div");
      column.style.display = "inline-block";
      column.style.width = "60px";
      column.style.height = "60px";
      column.style.border = "1px solid black";
      column.style.textAlign = "center";
      column.style.verticalAlign = "middle";
      column.setAttribute("index", index);
      column.addEventListener("click", function () {
        if (canPlay) {
          console.log("canPlay invoke");
          if (bombs.includes(index)) {
            column.style.backgroundColor = "red";
            canPlay = false;
            setTimeout(() => alert("Game Over"), 0);
          } else {
            if (column.style.backgroundColor == "grey") {
              updatePoints();
            } else {
              gamePoints++;
              updatePoints();
            }

            column.style.backgroundColor = "grey";
          }
        } else {
          alert("Game Over");
        }
      });
      row.appendChild(column);
    }
  }
}
function generateBombs() {
  while (bombs.length < 11) {
    const randomNum = Math.floor(Math.random() * 100);
    if (randomNum < 81 && !bombs.includes(randomNum)) {
      bombs.push(randomNum);
    }
  }
}

addGrid();
generateBombs();
console.log(bombs);
