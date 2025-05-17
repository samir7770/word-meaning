
document.addEventListener("dblclick", async function (e) {
    const selectedWord = window.getSelection().toString().trim();
    if( !selectedWord || selectedWord.includes(" ")) {
        return;
    }
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedWord}`);
        const data = await response.json();
        const wordMeaning = data[0]['meanings'][0]['definitions'][0]['definition'];

        document.getElementById("wm-tooltip").style.display = "block";
        document.getElementById("wm-tooltip").style.top = (e.pageY + 10) + "px";
        document.getElementById("wm-tooltip").style.left = (e.pageX + 10) + "px";
        document.getElementById("tooltip-header").innerHTML = "Meaning of " + selectedWord;
        document.getElementById("word-meaning").innerHTML = wordMeaning;

        setTimeout(() => {
            document.getElementById("wm-tooltip").style.display = "none";
        }, 5000);
        // console.log(data[0]['meanings'][0]['definitions'][1]);
        
    } catch (error) {
        console.error("Error fetching word meaning:", error);
    }
});