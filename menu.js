const endpoint="https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";
let fetchedData=[];

// Note : Click on MENU  OR   YOUR RESTAURANT MENU , you will be directed to menu page

async function getMenu(){  
    try{
        const response = await fetch(endpoint,{method:'GET'});
        const fetchedData= await response.json();
        const items = fetchedData.slice(0, 8);
        //console.log(data);
        renderDataOnUI(items);
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
        <span  <i class="fa-solid fa-square-plus"></i></span>
    </div>    `;  
    
    container.appendChild(card);
    });   
}
