createElement();


let availableKeywords = [
    'Night Bomber',
    'Speed Canard',
    ];

const resultsBox = document.querySelector(".list-container");

const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let results = [];
    let input = inputBox.value;
    if (input.length)
    {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(inputtoLowerCase());
        });
    }
}