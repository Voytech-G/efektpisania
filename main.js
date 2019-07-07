  const spnText = document.querySelector(".text");
  const txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea rerum accusantium cupiditate, aut, quod, quos vitae mollitia minima nobis excepturi quasi eveniet repellat quia impedit nesciunt qui numquam iusto.";
  const spnCursor = document.querySelector('.cursor');
  let indexText = 0;

  const addLetter = () => {
    spnText.textContent += txt[indexText];
    indexText++;
    if (indexText == txt.length) clearInterval(indexTyping);
  }
  const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
  }
  const indexTyping = setInterval(addLetter, 50);
  setInterval(cursorAnimation, 400);