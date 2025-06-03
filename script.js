async function askDroitGPT() {
    const input = document.getElementById("userInput").value;
    const output = document.getElementById("responseOutput");
    output.innerText = "Chargement...";

    try {
        const response = await fetch("https://droitgpt-backend-2.onrender.com/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                messages: [{ role: "user", content: input }]
            })
        });

        const data = await response.json();
        output.innerText = data.response || "Erreur : réponse vide.";
    } catch (error) {
        output.innerText = "Erreur lors de l'envoi : " + error.message;
    }
}
