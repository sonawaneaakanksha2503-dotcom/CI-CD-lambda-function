document.getElementById("contactForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const response = await fetch("YOUR_API_GATEWAY_URL", {
        method: "POST",
        body: JSON.stringify(data)
    });

    const result = await response.text();
    document.getElementById("response").innerText = result;
});