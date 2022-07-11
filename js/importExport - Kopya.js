const validLetters = ["AA", "BA", "BB", "CB", "CC", "DC", "DD", "FD", "FF", "NA", "U", "P", "W", "I", "EX", "S"];


function addKnownRow(data, id){
    const target = document.getElementById(id);
    var inputs = target.getElementsByTagName("input");
    var courseNameBox = inputs[0];
    var creditBox = inputs[1];
    var dropdown =  target.getElementsByTagName("select")[0];

    courseNameBox.value = data["courseName"];
    creditBox.value = data["grade"].toString();
    dropdown.selectedIndex = validLetters.indexOf(data["letter"]);
}


async function loadData(){
    fileDialog = document.getElementById("formFile");
    var path = fileDialog.files[0];
    console.log(path);
    var data = {};
    data = await readFile(path);

    console.log(data);
}

async function readFile(fptr){
    let response = await fetch(fptr);
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        return json;
      } else {
        alert("HTTP-Error: " + response.status);
      }
}
