let title = document.getElementById('title');
let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let total = document.getElementById('total');
let count = document.getElementById('count')
let category = document.getElementById('category')
let submit = document.getElementById('submit')
// console.log(title,price,taxes,ads,discount,total,count,category,submit)
// getTotal
function getTotal(){


    if(price.value != ""){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        console.log(result)
        total.style.background = 'green'
        
    }
    else{
        total.innerHTML = '';
        total.style.background = 'red'

    }

}
// create product
let proData;
if(localStorage.product != null){
    proData = JSON.parse(localStorage.product)

} else {
    proData = []
}





// create input 
submit.onclick = function(){
    let getData = {
    title:title.value,
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
    discount:discount.value,
    total:total.innerHTML,
    count:count.value,
    category:category.value,

}

proData.push(getData);
localStorage.setItem('product', JSON.stringify(proData))
console.log(proData)
  clearData();
  setData()
}

// clear input 
function clearData(){
    title.value = "";
   price.value = "";
  taxes.value= '';
    ads.value = '';
   discount.value = '';
    total.innerHTML = '';
   count.value = '';
    category.value = '';
}

// read

function setData(){
    let table = '';

for( let i = 0 ; i < proData.length; i++){
    table += `
    <tr>
                <td>${i}</td>
                <td>${proData[i].title}</td>
                <td>${proData[i].price}</td>
                <td>${proData[i].taxes}</td>
                <td>${proData[i].ads}</td>
                <td>${proData[i].discount}</td>
                <td>${proData[i].count}</td>
                <td>${proData[i].category}</td>
                <td><button id="update">update</button></td>
                <td><button onclick='deleteData(${i})' id="delete">delete</button></td>
                </tr>
    
    
    
    
    `
    document.getElementById('tbody').innerHTML = table
}


}
setData();


// delete


function deleteData(i){
  proData.splice(i,1);
  localStorage.product = JSON.stringify(proData);
  setData()
}


