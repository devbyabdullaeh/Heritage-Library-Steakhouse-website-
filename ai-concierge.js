/* ═══════════════════════════════════════════════════
   AI-CONCIERGE.JS — Intelligent Restaurant Agent
   ═══════════════════════════════════════════════════ */

// Menu Database for AI context lookup
const libraryMenu = [
    { name: "Dry-Aged Ribeye", price: 13440, type: "steak", chapter: "Chapter I", desc: "Bold, rustic and premium beef." },
    { name: "Wagyu Masterpiece", price: 26600, type: "steak", chapter: "Chapter III", desc: "Grade A5 Luxury with gold flakes." },
    { name: "Artisan Fettuccine", price: 7840, type: "pasta", chapter: "Chapter V", desc: "Heritage white sauce from 1924 legacy." },
    { name: "Signature Burger", price: 6720, type: "main", chapter: "Chapter III", desc: "Double-stacked Wagyu with aged cheddar." },
    { name: "Vintage Espresso", price: 3360, type: "beverage", chapter: "Chapter II", desc: "Ethiopian dark gold notes." },
    { name: "The Library Fizz", price: 5040, type: "beverage", chapter: "Chapter VII", desc: "Exotic botanicals and citrus zest." },
    { name: "Molten Library", price: 4200, type: "dessert", chapter: "Chapter Final", desc: "Belgian chocolate heart with vanilla cream." }
];

function toggleAIWidget() {
    const panel = document.getElementById("aiChatPanel");
    if (panel.style.display === "flex") {
        panel.style.display = "none";
    } else {
        panel.style.display = "flex";
    }
}

function handleAIPress(e) {
    if (e.key === 'Enter') {
        processAIQuery();
    }
}

function sendSuggestedQuery(text) {
    document.getElementById("aiUserInput").value = text;
    processAIQuery();
}

function appendMessage(sender, text) {
    const chatBody = document.getElementById("aiChatBody");
    const msgDiv = document.createElement("div");
    msgDiv.className = `ai-message ${sender}`;
    msgDiv.innerHTML = text;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function processAIQuery() {
    const inputEl = document.getElementById("aiUserInput");
    const query = inputEl.value.trim();
    if (!query) return;

    appendMessage("user", query);
    inputEl.value = "";

    // Show AI typing delay
    setTimeout(() => {
        const aiResponse = generateArchivistLogic(query.toLowerCase());
        appendMessage("system", aiResponse);
    }, 700);
}

// Intent Processing & Dynamic Smart Recommendation Engine
function generateArchivistLogic(query) {
    // 1. Budget Intent Checking
    if (query.includes("budget") || query.includes("pkr") || query.includes("price") || Array.prototype.some.call(query, c => '0123456789'.includes(c))) {
        let extractedNumber = query.match(/\d+/);
        let budgetLimit = extractedNumber ? parseInt(extractedNumber[0]) : 15000;
        
        if(budgetLimit === 2026) budgetLimit = 15000; // Ignore default system parameters

        let match = libraryMenu.filter(item => item.price <= budgetLimit);
        if (match.length > 0) {
            let options = match.map(m => `<strong>${m.name}</strong> (${m.price.toLocaleString()} PKR)`).join("<br>");
            return `Based on your structural archive ledger, your budget fits these perfectly:<br><br>${options}<br><br>Would you like me to add any of these chapters to your active compilation?`;
        } else {
            return `The minimum single catalog value inside our archive starts with the <strong>Vintage Espresso</strong> at 3,360 PKR. Let me know if you would like to initiate that exploration.`;
        }
    }

    // 2. Premium / Steak Intent Checking
    if (query.includes("steak") || query.includes("luxurious") || query.includes("meat") || query.includes("ribeye") || query.includes("wagyu")) {
        return `Ah, seeking the crown jewels of our volumes. I highly recommend pairing the majestic <strong>Wagyu Masterpiece (Chapter III)</strong> with a deep narrative of <strong>Vintage Espresso (Chapter II)</strong> to contrast the richness of the marbling. Truly cinematic.`;
    }

    // 3. Dessert / Coffee / Sweet Intent Checking
    if (query.includes("coffee") || query.includes("sweet") || query.includes("dessert") || query.includes("molten") || query.includes("fizz")) {
        return `To write a perfect epilogue to your culinary journey, indulge in the <strong>Molten Library (Chapter Final)</strong> seamlessly paired with our botanical brew, <strong>The Library Fizz</strong>. It delivers an exotic balance of velvet chocolate and fresh zest.`;
    }

    // 4. General fallback response
    return `An interesting inquiry. Our culinary chapters blend dark luxury with precise heritage. If you are looking for a complete profile, try combining the <strong>Dry-Aged Ribeye</strong> with the <strong>Artisan Fettuccine</strong> for a complete volume experience. What specific chapter matches your vibe?`;
}