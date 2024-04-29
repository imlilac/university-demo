// scripts.js
document.addEventListener("DOMContentLoaded", () => {
   // Tab navigation functionality
   const tabs = document.querySelectorAll(".tabs li");
   const contents = document.querySelectorAll(".tab-content");

   tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
         // Hide all contents
         contents.forEach((content) => content.classList.remove("active"));

         // Show the selected content
         contents[index].classList.add("active");
      });
   });

   // Right menu navigation functionality
   const menuItems = document.querySelectorAll(".menu li");
   menuItems.forEach((item) => {
      item.addEventListener("click", () => {
         alert(`You clicked on ${item.innerText}`);
         // Add navigation logic here
      });
   });
});
