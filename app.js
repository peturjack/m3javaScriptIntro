let peopleInside = document.getElementById("peopleInside"); // getting the id peopleInside from the h2 element
saveEl = document.getElementById("save-el")
let count = 0; // starting the count from 0

function addPeople() { // a function called addPeople and when you press the add people button it adds people
    count += 1; // well count equels count + 1 so 0 = 0 + 1 and if you click again 1 = 1 + 2
    peopleInside.textContent = count; // the inner text of the h2 equels to that of the count
}

//function reset() { // a funcion for the reset button
    //count = count = 0; // so the count lets so could be 10 = 10 = 0 so it will always end up being 0
   // peopleInside.innerText = count; // the inner text of the h2 equels to that of the count
//}




function save() {
    let countStr = count + " - " 
    saveEl.textContent += countStr
    count = 0;
    peopleInside.textContent = count;
    console.log(count)
}




