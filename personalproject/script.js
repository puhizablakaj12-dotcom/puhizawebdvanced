
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

:root {
    --dark: #211a17;
    --brown: #604737;
    --gold: #b18b60;
    --cream: #f7f3ed;
    --beige: #e9dfd1;
    --white: #fff;
}

body {
    background: var(--cream);
    color: var(--dark);
    font-family: 'DM Sans', sans-serif;
}

header {
    min-height: 85px;
    padding: 20px 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--cream);
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 1px solid #e5dbcf;
}

.logo {
    font-family: 'Playfair Display', serif;
    font-size: 27px;
    font-weight: 700;
    color: var(--dark);
    text-decoration: none;
    letter-spacing: 3px;
}

.logo span {
    color: var(--gold);
}

nav {
    display: flex;
    gap: 25px;
}

nav a {
    text-decoration: none;
    color: var(--dark);
    font-size: 13px;
    transition: .3s;
}

nav a:hover {
    color: var(--gold);
}

.nav-button, .main-button {
    background: var(--dark);
    color: white;
    text-decoration: none;
    padding: 14px 22px;
    border: none;
    font-size: 11px;
    letter-spacing: 1px;
    cursor: pointer;
    display: inline-block;
    transition: .3s;
}

.nav-button:hover, .main-button:hover {
    background: var(--gold);
}

.hero {
    min-height: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 50px;
    padding: 60px 10%;
    background: var(--beige);
}

.hero-content {
    max-width: 480px;
}

.eyebrow {
    font-size: 10px;
    letter-spacing: 3px;
    color: var(--gold);
    font-weight: 700;
    margin-bottom: 22px;
}

.hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(50px, 6vw, 80px);
    line-height: 1.1;
    font-weight: 500;
}

.hero h1 span {
    color: var(--brown);
    font-style: italic;
}

.hero-text {
    max-width: 390px;
    line-height: 1.9;
    color: #76685d;
    margin: 25px 0 32px;
    font-size: 14px;
}

.hero-image {
    height: 430px;
    overflow: hidden;
    border-radius: 180px 180px 0 0;
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.intro {
    text-align: center;
    padding: 100px 20px;
}

.intro p {
    color: var(--gold);
    letter-spacing: 4px;
    font-size: 10px;
    margin-bottom: 22px;
}

.intro h2, .section-heading h2,
.about h2, .contact h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(35px, 4vw, 50px);
    font-weight: 500;
    line-height: 1.3;
}

.collection {
    padding: 80px 9%;
}

.section-heading {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 40px;
}

.section-heading h2 span {
    color: var(--gold);
}

.section-heading > p {
    color: #88796c;
    font-size: 13px;
}

.perfume-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
}

.perfume-card {
    background: #eee7dd;
    overflow: hidden;
    transition: .3s;
}

.perfume-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px #5d49351b;
}

.card-image {
    height: 300px;
    overflow: hidden;
    background: var(--beige);
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .5s;
}

.perfume-card:hover img {
    transform: scale(1.06);
}

.card-info {
    padding: 22px;
}

.card-info h3 {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    margin-bottom: 10px;
}

.card-info p {
    color: #88796c;
    font-size: 12px;
    margin-bottom: 12px;
}

.card-info .description {
    line-height: 1.7;
    min-height: 40px;
}

.card-info a {
    display: inline-block;
    margin-top: 8px;
    color: var(--brown);
    font-size: 11px;
    font-weight: 700;
    text-decoration: none;
    letter-spacing: 1px;
}

.card-info a:hover {
    color: var(--gold);
}

.men-section {
    background: var(--beige);
}

.feature {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 70px;
    padding: 100px 10%;
}

.feature-image {
    height: 420px;
}

.feature-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.feature-content h2 {
    font-family: 'Playfair Display', serif;
    font-size: 45px;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: 22px;
}

.feature-content h2 i {
    color: var(--gold);
}

.feature-content > p:not(.eyebrow) {
    color: #88796c;
    line-height: 1.9;
    font-size: 14px;
    margin-bottom: 30px;
}

.about {
    background: var(--dark);
    color: var(--cream);
    padding: 100px 10%;
    text-align: center;
}

.about h2 {
    margin-bottom: 25px;
}

.about h2 span {
    color: var(--gold);
}

.about > p:not(.eyebrow) {
    max-width: 650px;
    margin: auto;
    color: #c0b4a8;
    line-height: 2;
    font-size: 14px;
}

.about-details {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 35px;
    margin-top: 60px;
}

.about-details div {
    border-top: 1px solid #66564a;
    padding-top: 25px;
}

.about-details h3 {
    font-family: 'Playfair Display', serif;
    color: var(--gold);
    font-size: 23px;
    margin-bottom: 14px;
}

.about-details p {
    color: #c0b4a8;
    font-size: 13px;
    line-height: 1.8;
}

.contact {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 70px;
    padding: 100px 10%;
}

.contact h2 {
    margin-bottom: 20px;
}

.contact h2 i {
    color: var(--gold);
}

.contact > div > p:last-child {
    color: #88796c;
    font-size: 14px;
    line-height: 1.8;
}

.contact form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.contact input, .contact textarea {
    padding: 16px;
    background: transparent;
    border: 1px solid #d7cabc;
    font-family: inherit;
    outline: none;
}

.contact input:focus, .contact textarea:focus {
    border-color: var(--gold);
}

.contact textarea {
    min-height: 130px;
    resize: vertical;
}

.contact form button {
    align-self: flex-start;
}

footer {
    background: #17120f;
    color: #c0b4a8;
    padding: 40px 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
}

footer .logo {
    color: var(--cream);
}

footer p {
    font-size: 11px;
}

@media (max-width: 850px) {
    header {
        flex-wrap: wrap;
        gap: 20px;
    }

    nav {
        order: 3;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
    }

    .hero {
        grid-template-columns: 1fr;
    }

    .hero-image {
        height: 350px;
    }

    .perfume-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .feature, .contact {
        grid-template-columns: 1fr;
    }

    .about-details {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 500px) {
    .perfume-grid {
        grid-template-columns: 1fr;
    }

    .section-heading {
        display: block;
    }

    .section-heading > p {
        margin-top: 15px;
    }

    footer {
        justify-content: center;
        text-align: center;
    }
}
