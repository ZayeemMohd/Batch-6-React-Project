import "./Grocery.css";

const categories = [
  { icon: "🥬", name: "Fresh veggies", note: "Picked today", color: "mint" },
  { icon: "🍎", name: "Fresh fruits", note: "Nature's best", color: "peach" },
  { icon: "🥛", name: "Dairy, bread & eggs", note: "Daily essentials", color: "blue" },
  { icon: "🍿", name: "Snacks & munchies", note: "Little treats", color: "yellow" },
  { icon: "🧴", name: "Beauty & care", note: "Feel-good finds", color: "pink" },
  { icon: "🧹", name: "Home & kitchen", note: "For happy homes", color: "lavender" },
  { icon: "🍚", name: "Atta, rice & dal", note: "Pantry staples", color: "cream" },
  { icon: "🥤", name: "Drinks & juices", note: "Sip something nice", color: "sky" },
];

const products = [
  {
    name: "Farm fresh tomatoes",
    detail: "500 g · Farm fresh",
    price: "₹32",
    mrp: "₹40",
    offer: "20% OFF",
    image: "photo-1546094096-0df4bcaaa337",
    tone: "tomato",
  },
  {
    name: "Sweet red strawberries",
    detail: "1 pack · 200 g",
    price: "₹119",
    mrp: "₹149",
    offer: "FRESH PICK",
    image: "photo-1464965911861-746a04b4bca6",
    tone: "berry",
  },
  {
    name: "Creamy whole milk",
    detail: "1 litre · Pasteurised",
    price: "₹68",
    mrp: "₹72",
    offer: "BESTSELLER",
    image: "photo-1563636619-e9143da7973b",
    tone: "milk",
  },
  {
    name: "Crunchy green capsicum",
    detail: "2 pcs · Approx. 300 g",
    price: "₹36",
    mrp: "₹45",
    offer: "20% OFF",
    image: "photo-1563565375-f3fdfdbefa83",
    tone: "pepper",
  },
  {
    name: "Golden sweet corn",
    detail: "2 cobs · Naturally sweet",
    price: "₹49",
    mrp: "₹60",
    offer: "FRESH PICK",
    image: "photo-1551754655-cd27e38d2076",
    tone: "corn",
  },
  {
    name: "Green seedless grapes",
    detail: "500 g · Premium",
    price: "₹89",
    mrp: "₹110",
    offer: "19% OFF",
    image: "photo-1537640538966-79f369143f8f",
    tone: "grapes",
  },
  {
    name: "Rustic sourdough loaf",
    detail: "400 g · Baked today",
    price: "₹99",
    mrp: "₹120",
    offer: "BAKERY LOVE",
    image: "photo-1585478259715-876acc5be8eb",
    tone: "bread",
  },
  {
    name: "Farm eggs, brown",
    detail: "6 pieces · Free range",
    price: "₹78",
    mrp: "₹90",
    offer: "GOOD VALUE",
    image: "photo-1506976785307-8732e854ad03",
    tone: "eggs",
  },
];

const collections = [
  {
    eyebrow: "THE GOOD MORNING CLUB",
    title: "Breakfast, sorted.",
    copy: "Everything you need for a slower, happier morning.",
    icon: "☀️",
    className: "breakfast",
    items: "Bread · Eggs · Milk · Cereal",
  },
  {
    eyebrow: "A LITTLE SOMETHING",
    title: "Snack o'clock!",
    copy: "Crunchy, sweet, salty. Pick your kind of happy.",
    icon: "🍪",
    className: "snacks",
    items: "Chips · Cookies · Nuts · Chocolate",
  },
  {
    eyebrow: "YOUR HOME, YOUR HAPPY PLACE",
    title: "Neat little things.",
    copy: "Smart everyday essentials for the home you love.",
    icon: "🪴",
    className: "home",
    items: "Cleaning · Storage · Kitchen · Decor",
  },
];

const imageUrl = (photo, width = 520) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=${width}&q=85`;

function ProductCard({ product }) {
  return (
    <article className="grocery-product-card">
      <div className={`grocery-product-art ${product.tone}`}>
        <img src={imageUrl(product.image)} alt={product.name} loading="lazy" />
        <span className="grocery-product-badge">{product.offer}</span>
        <button className="grocery-add-button" type="button" aria-label={`Add ${product.name}`}>
          +
        </button>
      </div>
      <div className="grocery-product-copy">
        <p className="grocery-product-detail">{product.detail}</p>
        <h3>{product.name}</h3>
        <div className="grocery-product-price">
          <strong>{product.price}</strong>
          <del>{product.mrp}</del>
        </div>
      </div>
    </article>
  );
}

function ProductShelf({ eyebrow, title, description, items, id }) {
  return (
    <section className="grocery-shelf" aria-labelledby={`${id}-title`}>
      <div className="grocery-section-heading">
        <div>
          <p className="grocery-eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`}>{title}</h2>
          <p className="grocery-section-description">{description}</p>
        </div>
        <a className="grocery-see-all" href="#all-products">
          See all <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="grocery-product-grid">
        {items.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}

const Grocery = () => {
  const freshProduce = products.slice(0, 4);
  const everydayFavourites = products.slice(4);

  return (
    <main className="grocery-page">
      <div className="grocery-topline">
        <span>Good things, at your door.</span>
        <span className="grocery-topline-right">
          <span aria-hidden="true">✦</span> Fresh finds, fair prices, always
        </span>
      </div>

      <div className="grocery-shell">
        <section className="grocery-welcome" aria-label="Delivery location and search">
          <div className="grocery-delivery">
            <span className="grocery-location-icon" aria-hidden="true">⌖</span>
            <div>
              <p>Delivering to</p>
              <strong>Indiranagar, Bengaluru <span aria-hidden="true">⌄</span></strong>
            </div>
          </div>
          <div className="grocery-search">
            <span className="grocery-search-icon" aria-hidden="true">⌕</span>
            <span>Search for fruits, snacks, and all things lovely</span>
            <kbd>⌘ K</kbd>
          </div>
          <div className="grocery-profile">
            <span aria-hidden="true">☺</span>
            <div><strong>Hey, there!</strong><small>Your happy place</small></div>
          </div>
        </section>

        <nav className="grocery-quick-nav" aria-label="Shop departments">
          <a className="active" href="#categories">Shop all</a>
          <a href="#fresh-picks">Fresh picks</a>
          <a href="#everyday-favourites">Everyday essentials</a>
          <a href="#collections">Little collections</a>
          <span className="grocery-nav-note">Thoughtfully picked for you <span>✳</span></span>
        </nav>

        <section className="grocery-hero">
          <div className="grocery-hero-copy">
            <span className="grocery-hero-sticker">YOUR NEIGHBOURHOOD MARKET, ONLINE</span>
            <h1>Little joys.<br /><em>Delivered.</em></h1>
            <p>From your morning chai to tonight’s dinner, find the good stuff for every little moment.</p>
            <a className="grocery-hero-cta" href="#categories">
              Explore the good stuff <span aria-hidden="true">→</span>
            </a>
            <div className="grocery-hero-proof">
              <div className="grocery-avatar-stack" aria-hidden="true">
                <span>👩🏽</span><span>👨🏻</span><span>👩🏿</span>
              </div>
              <p><strong>12,000+ happy homes</strong><br />stock up with us every week</p>
            </div>
          </div>
          <div className="grocery-hero-art">
            <div className="grocery-hero-orbit grocery-orbit-one" />
            <div className="grocery-hero-orbit grocery-orbit-two" />
            <div className="grocery-hero-note"><span>✿</span><br />A little<br />more fresh</div>
            <img
              src={imageUrl("photo-1542838132-92c53300491e", 900)}
              alt="A colourful basket of fresh market vegetables"
            />
            <span className="grocery-hero-caption">Picked with care, packed with love.</span>
          </div>
          <div className="grocery-hero-bottom">
            <span>Good food, good mood.</span>
            <span>01 — 03 <i /></span>
          </div>
        </section>

        <section className="grocery-promise-row" aria-label="Our promises">
          <div><span>⚡</span><p><strong>At your door in minutes</strong><small>Quick delivery, no fuss</small></p></div>
          <div><span>🌱</span><p><strong>Freshness you can feel</strong><small>Picked for your basket today</small></p></div>
          <div><span>♡</span><p><strong>Lovely prices, always</strong><small>Little joys shouldn't cost more</small></p></div>
          <div><span>☻</span><p><strong>Real people, real help</strong><small>We're always happy to help</small></p></div>
        </section>

        <section className="grocery-categories" id="categories">
          <div className="grocery-section-heading grocery-category-heading">
            <div>
              <p className="grocery-eyebrow">A LITTLE BIT OF EVERYTHING</p>
              <h2>What are you in the mood for?</h2>
              <p className="grocery-section-description">The good stuff, tucked into its own little corner.</p>
            </div>
            <span className="grocery-hand-doodle" aria-hidden="true">↘</span>
          </div>
          <div className="grocery-category-grid">
            {categories.map((category, index) => (
              <a className={`grocery-category-card ${category.color}`} href="#fresh-picks" key={category.name}>
                <span className="grocery-category-number">0{index + 1}</span>
                <span className="grocery-category-icon" aria-hidden="true">{category.icon}</span>
                <strong>{category.name}</strong>
                <small>{category.note}</small>
                <span className="grocery-category-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="grocery-seasonal-banner">
          <div className="grocery-seasonal-art" aria-hidden="true">
            <span>🥑</span><span>🍋</span><span>🥝</span><span>🍊</span>
          </div>
          <div className="grocery-seasonal-copy">
            <p className="grocery-eyebrow">A BRIGHTER KIND OF BASKET</p>
            <h2>Make room for<br /><em>something fresh.</em></h2>
            <p>Colourful, crunchy, and straight from the good-earth gang. Your feel-good picks are waiting.</p>
            <a href="#fresh-picks">Meet your fresh picks <span aria-hidden="true">→</span></a>
          </div>
          <div className="grocery-seasonal-seal"><span>100%</span><br />GOOD<br />MOOD</div>
        </section>

        <ProductShelf
          eyebrow="STRAIGHT FROM THE GOOD-EARTH GANG"
          title="Fresh picks, just for you."
          description="A little sunshine for your kitchen, handpicked this morning."
          items={freshProduce}
          id="fresh-picks"
        />

        <section className="grocery-collection-section" id="collections">
          <div className="grocery-section-heading">
            <div>
              <p className="grocery-eyebrow">MADE FOR YOUR EVERYDAY</p>
              <h2>Little collections, lots of love.</h2>
              <p className="grocery-section-description">A few good things to make an ordinary day feel extra nice.</p>
            </div>
            <a className="grocery-see-all" href="#everyday-favourites">Browse all <span aria-hidden="true">↗</span></a>
          </div>
          <div className="grocery-collection-grid">
            {collections.map((collection, index) => (
              <a className={`grocery-collection-card ${collection.className}`} href="#everyday-favourites" key={collection.title}>
                <span className="grocery-collection-count">COLLECTION 0{index + 1}</span>
                <span className="grocery-collection-icon" aria-hidden="true">{collection.icon}</span>
                <p className="grocery-eyebrow">{collection.eyebrow}</p>
                <h3>{collection.title}</h3>
                <p className="grocery-collection-copy">{collection.copy}</p>
                <span className="grocery-collection-items">{collection.items}</span>
                <span className="grocery-collection-link">Explore the edit <span aria-hidden="true">↗</span></span>
              </a>
            ))}
          </div>
        </section>

        <section className="grocery-note-banner">
          <span className="grocery-note-spark" aria-hidden="true">✳</span>
          <div>
            <p className="grocery-eyebrow">A SMALL NOTE FROM US</p>
            <p className="grocery-note-quote">“The best things in life are shared — especially the last mango.”</p>
          </div>
          <span className="grocery-note-signoff">With love, your local grocer <span>♡</span></span>
        </section>

        <div id="all-products">
          <ProductShelf
            eyebrow="THE LITTLE THINGS YOU LOVE"
            title="Everyday favourites."
            description="The familiar, the lovely, the “oops, we're out of that” essentials."
            items={everydayFavourites}
            id="everyday-favourites"
          />
        </div>

        <section className="grocery-bottom-promo">
          <div className="grocery-bottom-promo-icon" aria-hidden="true">🧺</div>
          <div>
            <p className="grocery-eyebrow">YOUR BASKET CALLED</p>
            <h2>It has room for a little more happy.</h2>
          </div>
          <a href="#categories">Keep exploring <span aria-hidden="true">→</span></a>
          <span className="grocery-bottom-flower" aria-hidden="true">✿</span>
        </section>
      </div>
    </main>
  );
};

export default Grocery;
