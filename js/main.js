function handleLogin(event) {
    // 1. Always prevent the default form submission (already done)
    event.preventDefault(); 

    // 2. Cache DOM elements once for cleaner access
    const emailInput = document.getElementById("login-email");
    const passwordInput = document.getElementById("login-pass");

    const email = emailInput.value.trim(); // 3. Use .trim() to handle leading/trailing spaces
    const password = passwordInput.value;

    // 4. Basic Client-side Validation: Check for emptiness and add a simple email format check
    if (!email || !password) {
        // 5. Improved UX: Log error and call a dedicated error display function
        console.error("Validation failed: Email or password missing.");
        displayError("Please enter your email and password to log in.");
        return;
    }

    // Optional: More rigorous email format check (using a basic regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError("Please enter a valid email address.");
        return;
    }

    // --- REAL-WORLD AUTHENTICATION (REPLACE REDIRECT) ---
    
    // 6. Real-World Logic: Instead of direct redirect, call an async API function
    authenticateUser(email, password); 
}

// Helper function to handle the asynchronous authentication process
async function authenticateUser(email, password) {
    // 7. UX Improvement: Disable the button and show a loader (simulated)
    const loginButton = document.querySelector(".login__button"); // Assuming a class is available
    loginButton.textContent = "Logging in...";
    loginButton.disabled = true;

    try {
        // 8. SECURITY: This is where you make an asynchronous call to your server.
        // NEVER send sensitive data via GET. Use POST and HTTPS.
        
        /*
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            // Success: Parse the response (e.g., get a JWT token)
            // const data = await response.json(); 
            window.location.href = "dashboard.html"; 
        } else {
            // Failure: Handle specific server errors (e.g., 401 Unauthorized)
            const errorData = await response.json();
            displayError(errorData.message || "Login failed. Check your credentials.");
        }
        */

        // --- DEMO SIMULATION (Remove this block for real use) ---
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network latency
        if (email === "test@nasa.gov" && password === "Exoplanet1!") {
             window.location.href = "dashboard.html";
        } else {
             displayError("Invalid email or password. Please try again.");
        }
        // --- END DEMO SIMULATION ---

    } catch (error) {
        console.error("Network or Authentication Error:", error);
        displayError("An unexpected error occurred. Please try again.");
    } finally {
        // 9. Cleanup: Re-enable the button regardless of success/failure
        loginButton.textContent = "Login to Database";
        loginButton.disabled = false;
    }
}


// A stub for a dedicated error function (for better UX than 'alert')
function displayError(message) {
    // In a real application, this function would update a specific 
    // HTML element (e.g., a red text box inside the form)
    
    // For this simple example, we keep the alert:
    alert(message); 
}