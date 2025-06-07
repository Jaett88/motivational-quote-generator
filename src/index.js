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

function generateCustomQuote() {
  let mood = document.getElementById("moodSelect").value;
  let goal = document.getElementById("goalSelect").value;
  let tone = document.getElementById("toneSelect").value;

  let customQuote = `Stay ${tone.toLowerCase()} and keep working on your ${goal.toLowerCase()}, even when you're feeling ${mood.toLowerCase()}.`;
  if (
    goal === "Select a goal" ||
    mood === "Select a mood" ||
    tone === "Select a tone"
  ) {
    customQuote = "You are capable of amazing things.";
  }

  document.getElementById("quoteText").innerText = customQuote;
}

function shareQuote() {
  let quote = document.getElementById("quoteText").innerText;
  alert("Pretend this shares the quote: \n\n" + quote);
}
