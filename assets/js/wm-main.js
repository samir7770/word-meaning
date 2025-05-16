document.addEventListener("dblclick", async function () {
    const selectedWord = window.getSelection().toString().trim();
    if( !selectedWord || selectedWord.includes(" ")) {
        return;
    }
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`);

        // alert(selectedWord + " is selected.");
        console.log(response);
    } catch (error) {
        console.error("Error fetching word meaning:", error);
    }
});