const cardsContainer = document.querySelector(".container .cards");
const card = document.querySelector("a.card");

const cards = [
  {
    title: "Super Nintendo, seu Hardware e sua Sagacidade",
    thumb: "https://images.unsplash.com/photo-1531594896955-305cf81269f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VwZXIlMjBuaW50ZW5kb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    href: "supernintendo.html"
  },
  {
    title: "Glitchs em jogos clássicos",
    thumb: "https://ak.picdn.net/shutterstock/videos/1015901845/thumb/1.jpg",
    href: "glitchs.html"
  },
  {
    title: "Teclados e a Magía que faz surgir letras",
    thumb: "https://images.unsplash.com/photo-1563191911-e65f8655ebf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8a2V5Ym9hcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    href: "teclados.html"
  },
  {
    title: "CPUs são bruxarias mecânicas",
    thumb: "https://images.unsplash.com/photo-1625315714730-d0830cd368bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3B1fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    href: "cpus.html"
  },
]

cards.map(item => {
  const cardClone = card.cloneNode(true);
  cardClone.href = item.href;
  cardClone.querySelector("img").src = item.thumb;
  cardClone.querySelector("h1").textContent = item.title;
  cardsContainer.appendChild(cardClone);
})

card.remove();
