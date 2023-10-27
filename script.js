const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const toast = document.getElementById("toastMssg");
console.log(toast.style.display);

const getQuote = async (url) => {
  const response = await fetch(url);
  var data = await response.json();

  quote.innerHTML = data.content;
  author.innerHTML = data.author;
};

const shareQuote = () => {
  let range = document.createRange();
  range.selectNode(quote);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  toast.style.display = "flex";
  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
};

getQuote(api_url);
