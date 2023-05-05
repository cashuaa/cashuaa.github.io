createElement();

function changeImage() 
{
    if (document.getElementById("imgClickAndChange").src === "/Users/joshuacash/Desktop/newSiteAttempt/pictures/night_bomber.png")
    {
        document.getElementById("imgClickAndChange").src = "/Users/joshuacash/Desktop/newSiteAttempt/pictures/testAircraftTopView.jpeg";
    } 
    else if (document.getElementById("imgClickAndChange").src === "/Users/joshuacash/Desktop/newSiteAttempt/pictures/Speed_Canard_1.jpeg") 
    {
        document.getElementById("imgClickAndChange").src = "/Users/joshuacash/Desktop/newSiteAttempt/pictures/night_bomber.png";
    }
    else 
    {
        document.getElementById("imgClickAndChange").src = "/Users/joshuacash/Desktop/newSiteAttempt/pictures/Speed_Canard_1.png";
    }
}


const img = document.querySelector('img');
//img.addEventListener('click', toggleBlur);

function toggleBlur() 
{
    this.classList.toggle('blur');
}
