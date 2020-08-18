// Business Logic
function puzzle(sentence) {
  const puzzleSentence = sentence.split('');
  for (let index = 0; index <= sentence.length -1; index++) {
    let letter = puzzleSentence[index].toLowerCase();
    if(
      letter === 'a' || 
      letter === 'e' || 
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u') {
        puzzleSentence.splice(index, 1, '-');
      }
  }
  return puzzleSentence.join('');
}

//UI logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    const userSentence = $("input#userInput").val();

    $(".output").text(puzzle(userSentence));

  });
});
