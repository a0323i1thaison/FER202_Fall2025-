const pizzas = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: 24,
    oldPrice: 40,
    img: "https://images.openai.com/thumbnails/url/i5YGk3icu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw7KLExxTytKKSkszA40LS8ycHTMKcgIcQ10d6rKKMzwySowD8s3zE4yNQmqSvQ0yw00zDStcNT1MUxSKwYA7WgpfQ",
    tag: "SALE",
  },
  {
    id: 2,
    name: "Mushroom Pizza",
    price: 25,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/2560px-Pizza-3007395.jpg",
  },
  {
    id: 3,
    name: "Hawaiian Pizza",
    price: 30,
    img: "https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?v=1737104576",
    tag: "NEW",
  },
  {
    id: 4,
    name: "Pesto Pizza",
    price: 16,
    oldPrice: 20,
    img: "https://upload.wikimedia.org/wikipedia/commons/1/10/Pepperoni_pizza.jpeg",
    tag: "SALE",
  },
];

export default function Menu() {
  return (
    <section className="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {pizzas.map((pizza) => (
          <div className="card" key={pizza.id}>
            {pizza.tag && <span className="tag">{pizza.tag}</span>}
            <img src={pizza.img} alt={pizza.name} />
            <h3>{pizza.name}</h3>
            <p>
              {pizza.oldPrice && <span className="old">${pizza.oldPrice}</span>}{" "}
              <span className="price">${pizza.price}</span>
            </p>
            <button>Buy</button>
          </div>
        ))}
      </div>
    </section>
  );
}