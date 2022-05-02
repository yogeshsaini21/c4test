// write js code here corresponding to matches.html

// <select id="filterVenue">
//       <option value="none">Filter by venue</option>
//       <option value="Mumbai">Mumbai</option>
//       <option value="Banglore">Banglore</option>
//       <option value="Hyderabad">Hyderabad</option>
//       <option value="Delhi">Delhi</option>
//       <option value="Pune">Pune</option>
//     </select>






var tdetailArr = JSON.parse(localStorage.getItem("schedule"));
var favArr=[] || JSON.parse(localStorage.getItem("favourites"));
// var filter=document.querySelector("#filtervenue").addEventListener("change",handlefiltersort);

// function handlefiltersort(){
//     var selected=document.querySelector("#filtervenue").value
//     tdetailArr.forEach(function(el){
//         if(el.venue=selected);
//     })
//     console.log(tdetailArr);
//     displayData(tdetailArr);
// }

displayData(tdetailArr);

function displayData(data){
    // document.querySelector("#data").innerHTML="";
    data.forEach(function(el){

    var tr=document.createElement("tr");


    var td1=document.createElement("td")
    td1.innerText=el.matchNum;
    var td2=document.createElement("td")
    td2.innerText=el.teamA;
    var td3=document.createElement("td")
    td3.innerText=el.teamB;
    var td4=document.createElement("td")
    td4.innerText=el.date;
    var td5=document.createElement("td")
    td5.innerText=el.venue;
    var td6=document.createElement("td")
    console.log(el);
    td6.innerText="favourite";
    td6.style.color="green";
    td6.style.cursor="pointer";
    td6.addEventListener("click",function(){
       favArrc(el);
       
        
    })
    
   
    
    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("tbody").append(tr);

})
}

function favArrc(el){
    console.log(el);
    favArr.push(el);
    localStorage.setItem("favourites",JSON.stringify(favArr));
}








