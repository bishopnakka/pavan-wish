function showWish() {
  const secretInput = document.getElementById('secretInput').value.trim().toLowerCase();

  const correctWord = 'bodi';

  if(secretInput === correctWord) {
    document.getElementById('formBox').style.display = 'none';
    document.getElementById('wishBox').style.display = 'block';
    document.getElementById('backgroundSlider').classList.add('show');
    document.getElementById('card').classList.remove('locked');
  } else {
    alert('think and type currect secret word.');
  }
}