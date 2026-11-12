
const perfumes = {
    burberry: {
        name: "Burberry Goddess",
        brand: "BURBERRY",
        description: "A beautiful gourmand fragrance with a warm, creamy vanilla scent and elegant lavender.",
        top: "Lavender",
        heart: "Vanilla Caviar",
        base: "Vanilla Absolute",
        use: "Day & Night",
        strength: "Soft & Elegant",
        occasion: "Everyday, dates and dinners",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=900"
    },

    goodgirl: {
        name: "Good Girl",
        brand: "CAROLINA HERRERA",
        description: "A bold and feminine fragrance combining sweet almond, beautiful white flowers and warm cocoa.",
        top: "Almond and Coffee",
        heart: "Jasmine and Tuberose",
        base: "Tonka Bean and Cacao",
        use: "Mostly Night",
        strength: "Strong & Sensual",
        occasion: "Parties, dates and special occasions",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=900"
    },

    cloud: {
        name: "Cloud",
        brand: "ARIANA GRANDE",
        description: "A dreamy, soft and cozy fragrance with sweet coconut, praline and creamy musk.",
        top: "Lavender and Pear",
        heart: "Coconut and Praline",
        base: "Musk and Woods",
        use: "Day & Night",
        strength: "Soft & Sweet",
        occasion: "School and casual outings",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=900"
    },

    blackopium: {
        name: "Black Opium",
        brand: "YVES SAINT LAURENT",
        description: "An addictive fragrance with rich coffee notes, sweet vanilla and beautiful white flowers.",
        top: "Pink Pepper and Pear",
        heart: "Coffee and Jasmine",
        base: "Vanilla and Patchouli",
        use: "Mostly Night",
        strength: "Strong & Sensual",
        occasion: "Night outs and romantic dates",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=900"
    },

    khamrah: {
        name: "Khamrah",
        brand: "LATTAFA",
        description: "A deliciously warm fragrance with cinnamon, dates, praline and rich vanilla.",
        top: "Cinnamon and Nutmeg",
        heart: "Dates and Praline",
        base: "Vanilla and Amberwood",
        use: "Winter Nights",
        strength: "Very Strong",
        occasion: "Parties and cold winter evenings",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=900"
    },

    lavie: {
        name: "La Vie Est Belle",
        brand: "LANCÔME",
        description: "A sweet and elegant feminine fragrance with fruity notes, iris and delicious praline.",
        top: "Blackcurrant and Pear",
        heart: "Iris and Jasmine",
        base: "Praline and Vanilla",
        use: "Day & Night",
        strength: "Noticeable & Sweet",
        occasion: "Daily wear, dinners and celebrations",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=900"
    },

    valentino: {
        name: "Donna Born in Roma Intense",
        brand: "VALENTINO",
        description: "A luxurious and deep vanilla fragrance with elegant jasmine and warm benzoin.",
        top: "Vanilla Bourbon",
        heart: "Jasmine",
        base: "Benzoin",
        use: "Mostly Night",
        strength: "Strong & Luxurious",
        occasion: "Dates, parties and special nights",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=900"
    }
};

// HOME PAGE
const grid = document.getElementById("perfumeGrid");

if (grid) {
    Object.entries(perfumes).forEach(([key, perfume], index) => {
        grid.innerHTML += `
            <a href="perfume.html?name=${key}" class="perfume-card">

                <div class="card-image">
                    <img src="${perfume.image}" alt="${perfume.name}">

                    <span class="card-number">
                        0${index + 1}
                    </span>
                </div>

                <div class="card-content">
                    <span>${perfume.brand}</span>

                    <h3>${perfume.name}</h3>

                    <p>${perfume.description}</p>

                    <span class="card-link">
                        DISCOVER FRAGRANCE ↗
                    </span>
                </div>

            </a>
        `;
    });
}

// PERFUME DETAILS PAGE
const params = new URLSearchParams(window.location.search);
const selected = params.get("name");
const perfume = perfumes[selected];

if (document.getElementById("productPage")) {

    if (perfume) {

        document.title = perfume.name + " | Maison de Parfum";

        document.getElementById("name").textContent = perfume.name;
        document.getElementById("description").textContent = perfume.description;
        document.getElementById("top").textContent = perfume.top;
        document.getElementById("heart").textContent = perfume.heart;
        document.getElementById("base").textContent = perfume.base;
        document.getElementById("use").textContent = perfume.use;
        document.getElementById("strength").textContent = perfume.strength;
        document.getElementById("occasion").textContent = perfume.occasion;
        document.getElementById("perfumeImage").src = perfume.image;

    } else {

        document.getElementById("name").textContent = "Perfume not found";
        document.getElementById("description").textContent =
            "Please return to the collection and choose a perfume.";

    }
}
