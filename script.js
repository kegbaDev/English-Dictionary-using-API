const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

async function fetchAPI(word){
    try {

    infoTextEl.style.display = "block";
    infoTextEl.innerText = `Searching the meaning of ${word}`
    meaningContainerEl.style.display = "none";


    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());
    
    infoTextEl.style.display = "none";

    meaningContainerEl.style.display = "block";
    titleEl.innerHTML = `${result[0].word}`;
    meaningEl.innerHTML = `${result[0].meanings[0].definitions[0].definition}`;
    audioEl.attributes.src = result[0].phonetics[0].audio;

    // audioEl.attributes.src = `https://api.dictionaryapi.dev/media/pronunciations/en/${word}-au.mp3`;

    console.log(result[0].phonetics[0].audio);


    } catch (error) {
        console.log(error);
        innerTextEl.innerText = `an error happened, try again later`;
    }

}



inputEl.addEventListener("keyup", (e) => {
    if(e.target.value && e.key === "Enter"){
      fetchAPI(e.target.value)  
    }
})