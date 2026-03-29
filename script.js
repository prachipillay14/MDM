// Data
const foods = [
    {
        name: "Veg Pizza",
        category: "pizza",
        rating: 4,
        time: 30,
        offer: "50% OFF",
        img: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=500"
    },
    {
        name: "Cheese Burger",
        category: "burger",
        rating: 5,
        time: 20,
        offer: "30% OFF",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500"
    },
    {
        name: "Cold Coffee",
        category: "drink",
        rating: 3,
        time: 15,
        offer: "20% OFF",
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=500"
    },
    {
        name: "Chicken Pizza",
        category: "pizza",
        rating: 4,
        time: 25,
        offer: "40% OFF",
        img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=500"
    }
];

// Display
function displayFoods(data) {
    const container = document.getElementById("foodContainer");
    container.innerHTML = "";

    if (data.length === 0) {
        container.innerHTML = "<h3>No food found</h3>";
        return;
    }

    data.forEach(item => {
        container.innerHTML += `
            <div class="card">
                <div class="badge">${item.offer}</div>
                <img src="${item.img}">
                <div class="card-content">
                    <h4>${item.name}</h4>
                    <p class="info">⭐ ${item.rating} • ⏱️ ${item.time} mins</p>
                    <button class="btn">Add to Cart</button>
                </div>
            </div>
        `;
    });
}

// Filters
function applyFilters() {
    let filtered = [...foods];

    const search = document.getElementById("search").value.toLowerCase();
    const category = document.getElementById("category").value;
    const rating = document.getElementById("rating").value;
    const sort = document.getElementById("sort").value;

    if (search) {
        filtered = filtered.filter(f => f.name.toLowerCase().includes(search));
    }

    if (category !== "all") {
        filtered = filtered.filter(f => f.category === category);
    }

    if (rating !== "all") {
        filtered = filtered.filter(f => f.rating >= Number(rating));
    }

    if (sort === "fast") {
        filtered.sort((a, b) => a.time - b.time);
    } else if (sort === "slow") {
        filtered.sort((a, b) => b.time - a.time);
    }

    displayFoods(filtered);
}

// Events
document.getElementById("search").addEventListener("input", applyFilters);
document.getElementById("category").addEventListener("change", applyFilters);
document.getElementById("rating").addEventListener("change", applyFilters);
document.getElementById("sort").addEventListener("change", applyFilters);

// Load
displayFoods(foods);