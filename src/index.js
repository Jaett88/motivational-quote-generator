let quotes = [
  "You don’t find strength—you shape it.",
  "Small steps every day lead to big changes.",
  "Believe in the power of yet.",
  "You are braver than you feel.",
  "Discomfort is the birthplace of growth.",
  "Push forward, even when it’s uphill.",
];

function refreshQuote() {
  let quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteText").innerText = quote;
}

function shareQuote() {
  let quote = document.querySelector("#quoteText").innerText;
  alert("Pretend this shares the quote: \n\n" + quote);
}

function displayQuote(response) {
  new Typewriter("#quoteText", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateCustomQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "c4efdbtoc0e93fda0c4d6e83f5f34a37";
  let context =
    "You are a Motivational Quote expert and love to write short quotes. Your mission is to generate a quote in basic HTML. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a motivational quote about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelectorAll("#quoteText");
  quoteElement.classlist.remove("quote");
  customQuote.innerHTML = `⏳ Generating a Motivational Quote for you ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayQuote);
}

let quoteFormElement = document.querySelector("#customQuote");
quoteFormElement.addEventListener("submit", generateCustomQuote);
