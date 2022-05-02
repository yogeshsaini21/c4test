// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",store1)
tdetailArr= JSON.parse(localStorage.getItem("schedule")) || [] ;
function store1(){
  event.preventDefault()

  var tdetailObj={
    matchNum:masaiForm.matchNum.value,
    teamA:masaiForm.teamA.value,
    teamB:masaiForm.teamB.value,
    date:masaiForm.date.value,
    venue:masaiForm.venue.value,
  }
  tdetailArr.push(tdetailObj);
  console.log(tdetailArr);
  localStorage.setItem("schedule",JSON.stringify(tdetailArr));
  window.location.reload();
}