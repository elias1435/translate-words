<script>

// Function to replace words on the page
function replaceWords() {
    const translations = {
        "Available": "ব্যবহারযোগ্য",
        "to Coupons": "থেকে ইউরো",
        "Total": "মোট",
        "value": "মূল্য",
        "Redeemed": "ট্রান্সরড",
        "Used": "ব্যবহার হয়েছে",
        "earned": "জিতেছেন"
    };

    // Loop through each translation and replace the text
    const elements = document.body.getElementsByTagName('*');
    for (let element of elements) {
        if (element.children.length === 0) { // Replace text only in elements without children
            for (const [key, value] of Object.entries(translations)) {
                const regex = new RegExp(`\\b${key}\\b`, 'gi'); // Use \b to match whole words and 'gi' for case-insensitive
                element.textContent = element.textContent.replace(regex, value);
            }
        }
    }
}

// Observe for changes in the DOM (e.g., when a popup appears)
const observer = new MutationObserver(replaceWords);

// Start observing the entire document for child list changes and subtree changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Call replaceWords initially to handle any pre-existing content
replaceWords();



</script>
