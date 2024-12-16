document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("categories-container");

    try {
        const response = await fetch("https://learning-hub-1whk.onrender.com/categories");
        const categories = await response.json();

        categories.forEach(category => {
            const categoryDiv = document.createElement("div");
            categoryDiv.classList.add("category");

            categoryDiv.innerHTML = `
                <h2>${category.title}</h2>
                <a href="category.html?id=${category.id}">
                    <img src="${category.img_url}" alt="${category.title}">
                </a>
            `;

            container.appendChild(categoryDiv);
        });
    } catch (error) {
        console.error("Error fetching categories:", error);
        container.innerHTML = "<p>Failed to load categories. Please try again later.</p>";
    }
});
