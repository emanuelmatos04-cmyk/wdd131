document.addEventListener("DOMContentLoaded", () => {
  // Footer dynamic year and last modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;

  // Tours array
  const tours = [
    { name: "Beach Tour", description: "Relax at Punta Cana beaches", rating: 4.8 },
    { name: "City Tour", description: "Explore Santo Domingo’s Colonial Zone", rating: 4.6 },
    { name: "Mountain Adventure", description: "Hike the Cordillera Central", rating: 4.7 }
  ];

  // Restaurants array
  const restaurants = [
    { name: "La Casa de Campo", description: "Traditional Dominican cuisine", rating: 4.7 },
    { name: "El Malecón Grill", description: "Seafood with ocean views", rating: 4.5 },
    { name: "Santo Domingo Bistro", description: "Modern fusion dining", rating: 4.6 }
  ];

  // Populate tours
  const tourList = document.getElementById("tourList");
  if (tourList) {
    tours.forEach(tour => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${tour.name}</strong>: ${tour.description} (⭐ ${tour.rating})`;
      tourList.appendChild(div);
    });
  }

  // Populate restaurants
  const restaurantList = document.getElementById("restaurantList");
  if (restaurantList) {
    restaurants.forEach(r => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${r.name}</strong>: ${r.description} (⭐ ${r.rating})`;
      restaurantList.appendChild(div);
    });
  }

  // Newsletter form with localStorage
  const form = document.getElementById("newsletterForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      localStorage.setItem("subscriberName", name);
      localStorage.setItem("subscriberEmail", email);
      alert(`Thank you ${name}, you are subscribed!`);
      form.reset();
    });
  }
});
