const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
const submitButton = document.getElementById("submit-button");
const lineDrawings = document.getElementById("line-drawings");
const pictures = document.getElementById("pictures");

const aircraftLineList = document.getElementById("aircraft-line-list");
const aircraftRealList = document.getElementById("aircraft-real-list");

var aircraftLine = document.getElementsByClassName("aircraftLineDrawings");
var aircraftReal = document.getElementsByClassName("aircraftRealDrawings");
var whichPictures = aircraftLine;

var health = 0;


var slideIndex = 1; 

showDivs (slideIndex);

function plusDivs(n)
{
    showDivs(slideIndex += n); 
}

function showDivs(n)
{
    var index; 

    if ( n > whichPictures.length ) 
    {
        slideIndex = 1
    }
    if ( n < 1 ) 
    {
        slideIndex = whichPictures.length 
    }
    for( index = 0; index < whichPictures.length; index++ )
    {
        whichPictures[index].style.display = "none";
    }

    whichPictures[slideIndex-1].style.display = "block";

    console.log(whichPictures[slideIndex-1].id);
}


inputBox.onkeyup = function()
{
    let result = [];
    let input = inputBox.value;
    if (input.length)
    {
        if (whichPictures == aircraftLine)
        {    
            result = lineAircraftKeywords.filter((keyword) => 
            {
                return keyword.toLowerCase().includes(input.toLowerCase());
            });
        }
        else if (whichPictures == aircraftReal)
        {
            result = realAircraftKeywords.filter((keyword) => 
            {
                return keyword.toLowerCase().includes(input.toLowerCase());
            });
        }
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
    if (health <= 5)
    {
        console.log(inputBox.value);
        console.log(whichPictures[slideIndex-1].id);
        if (inputBox.value.toLowerCase() == whichPictures[slideIndex-1].id.toLowerCase())
        {
            document.getElementById("box").style.backgroundColor = "rgb(63, 116, 63)";
            document.getElementById("box").textContent = "correct";
            slideIndex = Math.floor(Math.random() * whichPictures.length);
            showDivs(slideIndex);
        }
        else 
        {
            document.getElementById("box").style.backgroundColor = "rgb(107, 12, 0)";
            document.getElementById("box").textContent = "incorrect";
            health += 1 ;
            console.log(health);
            document.getElementById("heart-"+health).src = "https://raw.githubusercontent.com/cashuaa/cashuaa.github.io/main/ccsPictures/heart_empty.png";
        }
    }
    else
    {
        document.getElementById("box").style.backgroundColor = "rgb(122, 122, 122)";
        document.getElementById("box").textContent = "out of lives";
    }
}

lineDrawings.onclick = function()
{
    if (whichPictures != aircraftLine)
    {
        whichPictures = aircraftLine;
        for( index = 0; index < aircraftReal.length; index++ )
        {
            aircraftReal[index].style.display = "none";
        }
        whichPictures[0].style.display = "block";

        aircraftLineList.style.display = "block";
        aircraftRealList.style.display = "none";
        showDivs(slideIndex);
    }
}

pictures.onclick = function()
{
    if (whichPictures != aircraftReal)
    {
        whichPictures = aircraftReal;
        for( index = 0; index < aircraftLine.length; index++ )
        {
            aircraftLine[index].style.display = "none";
        }
        whichPictures[0].style.display = "block";

        aircraftLineList.style.display = "none";
        aircraftRealList.style.display = "block";
        showDivs(slideIndex);
    }

}

function toggleDiv(divid)
  {
 
    varon = divid + 'list';
    varoff = divid + 'guess';
 
    if(document.getElementById(varon).style.display == 'block')
    {
        document.getElementById(varoff).style.transition= 'transform 1s';
        document.getElementById(varon).style.display = 'none';
        document.getElementById(varoff).style.display = 'block';
        document.getElementById('flip-card').style.transform = "rotateY(" + 0 + "deg)";
        document.getElementById('flip-card').style.transition= 'transform 1s';
    }
   
    else
    {  
        document.getElementById(varon).style.transition= 'transform 1s';
        document.getElementById(varoff).style.display = 'none';
        document.getElementById(varon).style.display = 'block';
        document.getElementById('flip-card').style.transform = "rotateY(" + 180 + "deg)";
        document.getElementById('flip-card').style.transition= 'transform 1s';
    }
} 

function clickToGuess(id)
{
    if (health <= 5)
    {
        console.log(inputBox.value);
        console.log(whichPictures[slideIndex-1].id);
        if (id.toLowerCase() == whichPictures[slideIndex-1].id.toLowerCase())
        {
            document.getElementById("box").style.backgroundColor = "rgb(63, 116, 63)";
            document.getElementById("box").textContent = "correct";
            slideIndex = Math.floor(Math.random() * whichPictures.length);
            showDivs(slideIndex);
        }
        else 
        {
            document.getElementById("box").style.backgroundColor = "rgb(107, 12, 0)";
            document.getElementById("box").textContent = "incorrect";
            health += 1 ;
            document.getElementById("heart-"+health).src = "https://raw.githubusercontent.com/cashuaa/cashuaa.github.io/main/ccsPictures/heart_empty.png";
        }
    }
    else
    {
        document.getElementById("box").style.backgroundColor = "rgb(122, 122, 122)";
        document.getElementById("box").textContent = "out of lives";
    }
}