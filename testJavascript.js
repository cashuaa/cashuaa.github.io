let availableAircraftKeywords = [
    'NIGHT BOMBER',
    'SPEED CANARD',
    'OSPREY',
    'B-17 FLYING FORTESS',
    'B-52 STRATOFORTRESS',
    'F-1 MIRRAGE',
    'SUPER ETENDARD',
    'JAGUAR',
    'MIRRAGE 2000C',
    'MIRRAGE 3',
    'RAFALE',
    'C-47 SKYTRAIN',
    ];

let availableNavalKeywords = [
    'naval1'
    ];

let availableGroundKeywords = [
    'ground1'
    ];

const resultsBox = document.querySelector(".result-box");

const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function()
{
    let result = [];
    let input = inputBox.value;
    if (input.length)
    {
        result = availableAircraftKeywords.filter((keyword) => 
        {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }

    display(result);
    if(!result.length)
    {
        resultsBox.innerHTML = '';
    }
}

function display(result)
{
    const content = result.map((list)=> 
    {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list)
{
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}