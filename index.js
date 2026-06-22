/* ═══════════════════════════════════════════════════
   INDEX.JS — Homepage testimonial slider
   ═══════════════════════════════════════════════════ */

let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');

function changeTestimonial(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Auto cycle testimonials every 5 seconds
setInterval(() => changeTestimonial(1), 5000);

/* ════════════════ AI ARCHIVIST CORE LOGIC FOR INDEX ════════════════ */
function toggleAIWidget() {
    const panel = document.getElementById("aiChatPanel");
    panel.style.display = (panel.style.display === "flex") ? "none" : "flex";
}

function handleAIPress(e) {
    if (e.key === 'Enter') processAIQuery();
}

function sendSuggestedQuery(text) {
    document.getElementById("aiUserInput").value = text;
    processAIQuery();
}

function appendMessage(sender, text) {
    const chatBody = document.getElementById("aiChatBody");
    const msgDiv = document.createElement("div");
    msgDiv.className = `ai-bubble ${sender}-bubble`;
    msgDiv.innerHTML = text;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function processAIQuery() {
    const inputEl = document.getElementById("aiUserInput");
    const query = inputEl.value.trim().toLowerCase();
    if (!query) return;

    appendMessage("user", inputEl.value);
    inputEl.value = "";

    setTimeout(() => {
        let response = `A profound inquiry. Our library holds secret chapters. Try searching for 'steak', 'sweet', or ask about a specific chapter number!`;
        
        if (query.includes("sweet") || query.includes("dessert") || query.includes("final")) {
            response = `Ah, the grand epilogue! <strong>Chapter Final: Molten Library</strong> is a warm Belgian chocolate masterpiece served with aged vanilla cream. Absolute perfection.`;
        } else if (query.includes("chapter iii") || query.includes("wagyu") || query.includes("burger")) {
            response = `<strong>Chapter III: Wagyu Masterpiece</strong> is our crown jewel—a royal combination of premium Wagyu beef and rare truffles on toasted brioche.`;
        } else if (query.includes("steak") || query.includes("ribeye") || query.includes("chapter i")) {
            response = `Our foundation relies on <strong>Chapter I: Dry-Aged Ribeye</strong>. It is aged precisely for 28 days to unlock a rustic, bold flavor profile.`;
        } else if (query.includes("coffee") || query.includes("espresso") || query.includes("chapter ii")) {
            response = `For lovers of dark energy, <strong>Chapter II: Vintage Espresso</strong> offers exceptional Ethiopian beans bringing out pure 'dark gold' chocolate notes.`;
        }
        
        appendMessage("system", response);
    }, 600);
}