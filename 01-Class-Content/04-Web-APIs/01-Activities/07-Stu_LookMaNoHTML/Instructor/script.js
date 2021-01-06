// Create your HTML Page via DOM Methods here!
// console.log("Peter's here no worries!");

// * A centered h1 with a centered h2 under it.
var h1Tag = document.createElement("h1");
document.body.appendChild(h1Tag);
h1Tag.textContent = "h1 type content for the new year 2021!";
h1Tag.style.textAlign = "center";
var h2Tag = document.createElement("h2");
document.body.appendChild(h2Tag);
h2Tag.textContent = "h2 type content for the new year 2021!";
h2Tag.style.textAlign = "center";
h2Tag.style.textDecoration = "underline";

// * A centered image, with a center caption under it.
var figureTag = document.createElement("figure");
document.body.appendChild(figureTag);

var imgTag = document.createElement("img");
figureTag.appendChild(imgTag);
var figCapTag = document.createElement("figcaption");
figureTag.appendChild(figCapTag);
figureTag.style.textAlign = "center";

// set the src attribute so we can see our image
imgTag.setAttribute("src", "data:image/jpeg;base64,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");
// seo alt tag added for search engines
imgTag.setAttribute("alt", "Panda eating bamboo");
// imgTag.style.display = "block";
// imgTag.style.margin = "0 auto";

figCapTag.textContent = "Panda";
figCapTag.style.textAlign = "center";

// * A list of your favorite foods (or some other list of favorites).
var listFavFoods = ["Apples", "Mangoes", "Watermelon Radish", "Clootie", "Bubble and squeak"];
var listTag = document.createElement("ol");
document.body.appendChild(listTag);

// since we have an array, we can use our operational definition of a for-loop
for(var i = 0; i < listFavFoods.length; i++){
    var liTag = document.createElement("li");
    listTag.appendChild(liTag);
    liTag.textContent = listFavFoods[i];
    console.log(listFavFoods[i]);
    // liTag.style.textAlign = "center";
    liTag.style.border = "20px black solid";
    // conditional styles
    if( i === 1 || listFavFoods[i] === "Clootie"){
        liTag.style.background = "yellow";
    }
    
}

listTag.style.display = "block";
listTag.style.margin = "0 auto";
listTag.style.width = "fit-content";

// * Some extra styling to all elements.
