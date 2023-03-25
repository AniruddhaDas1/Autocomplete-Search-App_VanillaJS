// All the Keywords kept in this Array
const availableKeywords = [
  "Cooking queries",
  "Love-related queries",
  "Coming-of-age queries",
  "Difficult/technical queries",
  "Health queries",
  "how to tie a tie",
  "how to kiss",
  "how to get pregnant",
  "how to lose weight",
  "how to draw",
  "how to make money",
  "how to make pancakes",
  "how to write a cover letter",
  "how to make french toast",
  "how to lose belly fat",
  "Where to learn coding",
  "where to learn JS",
];

//Variable declare and define for DOM
const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

// on key press, function will run this function
inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
  }
  display(result);

  if (!result.length) {
    resultBox.innerHTML = "";
  }
};

//classlist added
function display(result) {
  const content = result.map((list) => {
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });
  resultBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

//Value set for list input
function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = "";
}
