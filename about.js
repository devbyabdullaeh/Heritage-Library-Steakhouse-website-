/* ════════════════ ABOUT PAGE AI LOGIC ════════════════ */
function handleVaultPress(e) {
    if (e.key === 'Enter') processVaultQuery();
}

function askVault(keyword) {
    const inputEl = document.getElementById("vaultInput");
    if (keyword === 'secrets') inputEl.value = "Secret of 1924";
    if (keyword === 'philosophy') inputEl.value = "The Cook's Authorship";
    if (keyword === 'humidity') inputEl.value = "Aging Chamber Physics";
    processVaultQuery();
}

function processVaultQuery() {
    const inputEl = document.getElementById("vaultInput");
    const outputEl = document.getElementById("vaultResponse");
    const query = inputEl.value.trim().toLowerCase();
    
    if (!query) return;
    
    outputEl.innerHTML = "<em>Accessing local vault logs... Please stand by...</em>";
    inputEl.value = "";

    setTimeout(() => {
        let text = `[Log Reference Code: #ERR-404] The archives hold no specific entry for "${query}". However, our history indicates deep dark luxury thresholds in every chapter. Try asking about '1924', 'philosophy', 'aging', or 'origin'.`;

        if (query.includes("1924") || query.includes("secret") || query.includes("sauce")) {
            text = `<strong>[Vault Entry: 1924]</strong> The secret of our signature Artisan Fettuccine sauce relies entirely on an heirloom reductive extraction technique. We utilize slow-temperature infusion over 14 hours inside stone-insulated chambers to maintain generational consistency.`;
        } else if (query.includes("philosophy") || query.includes("authorship") || query.includes("cook")) {
            text = `<strong>[Vault Entry: Philosophy]</strong> Our Head Archivist famously noted: "Cooking is not a technical calculation; it is genuine authorship." Every steak cut isn't just grilled—it is curated and documented as an uncompromised piece of culinary culture.`;
        } else if (query.includes("aging") || query.includes("humidity") || query.includes("physics") || query.includes("chamber")) {
            text = `<strong>[Vault Entry: Vault Core]</strong> Our Dry-Aging chambers run on a customized molecular air control algorithm. We maintain exact sub-zero thresholds with precise 72% custom localized humidity to allow natural enzymes to perfectly tenderize the rustic ribeye fibers.`;
        } else if (query.includes("origin") || query.includes("history") || query.includes("start")) {
            text = `<strong>[Vault Entry: Chronicles]</strong> Herritage Library was conceptually drafted in 1994 inside a private rustic underground cellar. The blueprint was clear: to blend high-society literary spatial silence with pure, cinematic gastronomic artistry.`;
        }

        outputEl.innerHTML = text;
    }, 700);
}