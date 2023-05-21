
const resultsBox = document.querySelector(".result-box");

const inputBox = document.getElementById("input-box");

const submitButton = document.getElementById("submit-button");

var x = document.getElementsByClassName("aircraftImgs");
var slideIndex = 1; 

showDivs (slideIndex);

function plusDivs(n)
{
    showDivs(slideIndex += n); 
}

function showDivs(n)
{
    var index; 
    if ( n > x.length ) 
    {
        slideIndex = 1
    }
    if ( n < 1 ) 
    {
        slideIndex = x.length 
    }
    for(index=0; index<x.length; index++)
    {
        x[index].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";

    console.log(x[slideIndex-1].id);
}


inputBox.onkeyup = function()
{
    let result = [];
    let input = inputBox.value;
    if (input.length)
    {
        result = aircraftKeywords.filter((keyword) => 
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

submitButton.onclick = function()
{
    console.log(inputBox.value);
    console.log(x[slideIndex-1].id);
    if (inputBox.value.toLowerCase() == x[slideIndex-1].id.toLowerCase())
    {
        document.getElementById("box").style.backgroundColor = "Green";

    }
    else 
    {
        document.getElementById("box").style.backgroundColor = "Red";
    }

}