const apiUrl = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
let data = [];
const cardsContainer = document.querySelector("#cards");

async function fetchCards() {
  try {
    let r = await fetch(apiUrl)
    return await r.json()
  } catch {
    console.log("Error")
  }
}

function renderCards(cards) {
  cardsContainer.innerHTML = "";
  cards.map(createCards);
}

function createCards(card) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${card.photo}" class="card-img" alt="${card.name}" />
    <div class="card-text">
    
      <p class="place-type">
        ${card.property_type}
      </p>

      <p class="place-title">
      ${card.name}
      </p>    

      <p class="place-price">
        R$${card.price},00/noite
    </p>

    </div>
  `;
  cardsContainer.appendChild(div);
}

async function main() {
  data = await fetchCards();
  if (data) {
    renderCards(data);
  }
}

main();