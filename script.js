let events = JSON.parse(localStorage.getItem("events")) || [];

displayEvents();

function addEvent(){

let name=document.getElementById("eventName").value;
let date=document.getElementById("eventDate").value;
let organizer=document.getElementById("organizer").value;

if(name=="" || date=="" || organizer==""){
alert("Please fill all fields");
return;
}

events.push({
name,
date,
organizer,
registrations:0
});

localStorage.setItem("events",JSON.stringify(events));

document.getElementById("eventName").value="";
document.getElementById("eventDate").value="";
document.getElementById("organizer").value="";

displayEvents();

}

function displayEvents(){

let table=document.getElementById("eventTable");

table.innerHTML="";

let total=0;

events.forEach((event,index)=>{

total+=event.registrations;

table.innerHTML+=`
<tr>

<td>${event.name}</td>

<td>${event.date}</td>

<td>${event.organizer}</td>

<td>${event.registrations}</td>

<td>

<button onclick="registerEvent(${index})">
Register
</button>

<button class="delete"
onclick="deleteEvent(${index})">
Delete
</button>

</td>

</tr>
`;

});

document.getElementById("totalEvents").innerHTML=events.length;
document.getElementById("totalRegistrations").innerHTML=total;

}

function registerEvent(index){

events[index].registrations++;

localStorage.setItem("events",JSON.stringify(events));

displayEvents();

}

function deleteEvent(index){

events.splice(index,1);

localStorage.setItem("events",JSON.stringify(events));

displayEvents();

}

function searchEvent(){

let input=document.getElementById("search").value.toLowerCase();

let rows=document.querySelectorAll("#eventTable tr");

rows.forEach(row=>{

if(row.innerText.toLowerCase().includes(input))
row.style.display="";
else
row.style.display="none";

});

}
