const endpoint="https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";
let fetchedData=[];

// Note : Click on MENU  OR   YOUR RESTAURANT MENU , you will be directed to Menu(another) page
async function getMenu(){  
    try{
        const response = await fetch(endpoint,{method:'GET'});
        const fetchedData= await response.json();
        const items = fetchedData.slice(0, 4);
        //console.log(data);
        renderDataOnUI(items);
        //thankyouFnc();
    }catch(error){
        console.log(error)
    }   
}
//getMenu();


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



// TakeOrder() function: (15 marks)
// Returning a promise:
// Resolving the promise after 2500 milliseconds
// Selecting 3 random burgers and adding them to the order object

  function takeOrder() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       try{
        const data = fetchedData;

        randomItems=[];
        while(randomItems.length<3){
            const randomItemsIndex=Math.floor(Math.random() * data.length);
            const randomItem = data[randomItemsIndex];
            if(!randomItems.includes(randomItem)){
                randomItems.push(randomItem);
            }
        }
        const order={
            items: randomItems,
        }
        console.log(randomItems);
        //renderDataOnUI(randomItems);
        resolve(order);
       } catch(error){
        console.log(error)
       } 
      }, 2500);
    });
  }
 
// orderPrep() function: (15 marks)
// Returning a promise
// Resolving the promise after 1500 milliseconds
// Returning the object with order_status as true and paid as false

function orderPrep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const order={
                order_status: true,
                paid: false,
              }
             resolve(order)
        },1500)
    })
}

// payOrder() function: (15 marks)
// Returning a promise
// Resolving the promise after 1000 milliseconds
// Returning the object with order_status as true and paid as true

function payOrder(){
    return new Promise((resolve,reject)=>{
        // let order_status;
        // let paid;
        setTimeout(()=>{
            const order={
                order_status: true,
                paid: true,
              }
             resolve(order)
        },1000)
    })
}

// thankyouFnc() function: (5 marks)
// Displaying an alert message on the screen

function thankyouFnc() {
    alert("Thank You for Visiting! Please visit again.")
}


async function handlepromiseChain(){
    try{
        const data= await getMenu();
        //console.log("DATA1-->", data, new Date());
        const data2 = await takeOrder();
        console.log("DATA2-->", data2, new Date());
        const data3 =  await orderPrep();
        console.log("DATA3-->", data3, new Date());
        const data4 = await payOrder();
        console.log("DATA4-->", data4, new Date());
        thankyouFnc();
    } catch(error){
        console.log(error)
    }
}

handlepromiseChain();
