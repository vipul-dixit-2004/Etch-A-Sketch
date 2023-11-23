let app = document.querySelector(".drawing-area");
let heading = document.querySelector(".heading");
let block = document.getElementsByClassName("writingBlock");
const color = document.getElementById("colorSelector");
const sizer = document.getElementById("gridSizer");
const clearBtn = document.getElementById("clearGrid");

let colorValue = color.value;
//generating grid
let setgrid = (size) => {
  for (let index = 0; index < size * size; index++) {
    let div = document.createElement("div");
    div.classList.add("writingBlock");
    div.setAttribute("style", `height:${550 / size}px;width:${550 / size}px`);
    div.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = colorValue;
    });
    app.appendChild(div);
  }
};

//change grid value
function updateGrid(size) {
  clearGrid();
  setgrid(size);
}
function reloadGrid() {
  Array.from(block).forEach((element) => {
    element.style.backgroundColor = app.style.backgroundColor;
  });
}

function clearGrid() {
  app.innerHTML = "";
}

color.onchange = () => {
  colorValue = color.value;
  heading.style.color = color.value;
};
clearBtn.onclick = () => reloadGrid();
sizer.onchange = (e) => updateGrid(e.target.value);

window.onload = () => {
  setgrid(sizer.value);
};
