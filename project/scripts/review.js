// Product Array (project-related services)
console.log("review.js loaded successfully")
const products = [
  {
    id: "tb-001",
    name: "Tour to the Beach",
    averagerating: 4.8
  },
  {
    id: "rs-002",
    name: "Restaurant Services",
    averagerating: 4.6
  },
  {
    id: "ht-003",
    name: "Hotel Accommodation",
    averagerating: 4.4
  },
  {
    id: "ts-004",
    name: "Transportation Service",
    averagerating: 4.2
  },
  {
    id: "ev-005",
    name: "Event Organization",
    averagerating: 4.7
  },
  {
    id: "gd-006",
    name: "Guided City Tour",
    averagerating: 4.5
  }
];

// Populate product select dynamically
document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("product");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name; //  value must be product name
    option.textContent = `${product.name} ( ${product.averagerating})`;
    productSelect.appendChild(option);
  });
});
