const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const screen = document.getElementById("screen");

increment.addEventListener('click', (event) => {
    screen.textContent++;
    decrement.disabled = false;
});

decrement.addEventListener('click', (event) => {
    screen.textContent--;
    if(screen.textContent == 0)
        decrement.disabled = true;
});