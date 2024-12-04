document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function (event) {
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Password Match Validation
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            event.preventDefault();
        }

        // Age Validation (Minimum 18 years old)
        const dob = new Date(document.getElementById("dob").value);
        const age = new Date().getFullYear() - dob.getFullYear();
        if (age < 18) {
            alert("You must be at least 18 years old to register.");
            event.preventDefault();
        }
    });
});
