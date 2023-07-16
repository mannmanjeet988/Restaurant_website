const endpoint="https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";
let fetchedData=[];

// Note : Click on MENU  OR   YOUR RESTAURANT MENU , you will be directed to menu page

async function getMenu(){  
    try{
        const response = await fetch(endpoint,{method:'GET'});
        fetchedData= await response.json();
        const items = fetchedData;
        //console.log(data);
        renderDataOnUI(items);
        return items;
    }catch(error){
        console.log(error.message)
    }   
}
 getMenu();
 

function renderDataOnUI(data){
   data.forEach(item => {
    const card= document.createElement("div");
    card.className="card";
    const{name,price,imgSrc}=item;
    card.innerHTML=`
    <div class="top-container">
        <div id="image">
        <img src="${imgSrc}">
        </div>
    </div>
    <div class="bottom-container">
        <div class="details"> 
            <span>${name}</span>
            <span>$${price}/-</span>
        </div>
        <span><i class="fa-solid fa-square-plus"></i></span>
    </div>    `;  
    
    container.appendChild(card);
    });   
}

// Code to change colour of current anchor tag if target href matches with clicked href
const anchorTags = document.querySelectorAll('a');

// Iterate through each anchor tag
anchorTags.forEach(anchorTag => {
  // Add a click event listener to each anchor tag
  anchorTag.addEventListener('click', event => {
    // Get the href of the clicked anchor tag
    const clickedHref = event.target.getAttribute('href');

    // Iterate through each anchor tag again to check for matching href
    anchorTags.forEach(tag => {
      // Get the href of the current anchor tag
      const tagHref = tag.getAttribute('href');

      if (tagHref === clickedHref) {
        // Changing the color of the anchor tag
        tag.style.color = 'green'; 
      }
    });
  });
});