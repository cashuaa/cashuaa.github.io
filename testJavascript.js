createElement();


let availableKeywords = [
    'Night Bomber',
    'Speed Canard',
    ];

const resultsBox = document.querySelector(".result-box");

const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let results = [];
    let input = inputBox.value;
    if (input.length)
    {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(inputtoLowerCase());
        });
        console.log(result)
    }

    display(result);
}

function display(result)
{
    const content = result.map((list)=> 
    {
        return "<li>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content + "</ul>";
}