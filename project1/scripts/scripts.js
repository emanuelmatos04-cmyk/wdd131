document.addEventListener("DOMContentLoaded", () => {
  // === Footer dynamic year and last modified ===
  function updateFooter() {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
  }
  updateFooter();

  // === Tours array of objects ===
  const tours = [
    { name: "Beach Tour", description: "Relax at Punta Cana beaches", rating: 4.8, image: "images/playar.jpg" },
    { name: "City Tour", description: "Explore Santo Domingo’s Colonial Zone", rating: 4.6, image: "images/city.jpg" },
    { name: "Mountain Adventure", description: "Hike the Cordillera Central", rating: 4.7, image: "images/mountain.jpeg" }
  ];

  // === Restaurants array of objects ===
  const restaurants = [
    { name: "La Casa de Campo", description: "Traditional Dominican cuisine", rating: 4.7, image: "images/maleconres.jpg" },
    { name: "El Malecón Grill", description: "Seafood with ocean views", rating: 4.5, image: "images/restaurant2.jpg" },
    { name: "Santo Domingo Bistro", description: "Modern fusion dining", rating: 4.6, image: "images/restaurant3.jpg" }
  ];

  // === Populate tours dynamically ===
  const tourList = document.getElementById("tourList");
  if (tourList) {
    tours.forEach(tour => {
      const div = document.createElement("div");
      div.classList.add("card");
      // Template literals + lazy loading
      div.innerHTML = `
        <img src="${tour.image}" alt="${tour.name}" loading="lazy" width="400" height="250">
        <h3>${tour.name}</h3>
        <p>${tour.description}</p>
        <p>⭐ ${tour.rating}</p>
      `;
      tourList.appendChild(div);
    });
  }

  // === Populate restaurants dynamically ===
  const restaurantList = document.getElementById("restaurantList");
  if (restaurantList) {
    restaurants.forEach(r => {
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
        <img src="${r.image}" alt="${r.name}" loading="lazy" width="400" height="250">
        <h3>${r.name}</h3>
        <p>${r.description}</p>
        <p>⭐ ${r.rating}</p>
      `;
      restaurantList.appendChild(div);
    });
  }

  // === Newsletter form with localStorage ===
  const form = document.getElementById("newsletterForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();

      // Conditional branching: validate inputs
      if (!name || !email) {
        alert("Please fill out both fields before subscribing.");
        return;
      }

      // Save subscriber info
      localStorage.setItem("subscriberName", name);
      localStorage.setItem("subscriberEmail", email);

      alert(`Thank you ${name}, you are subscribed with ${email}!`);
      form.reset();
    });
  }
});
