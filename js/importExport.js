const validLetters = ["AA", "BA", "BB", "CB", "CC", "DC", "DD", "FD", "FF", "NA", "U", "P", "W", "I", "EX", "S"];

function addKnownRow(data, id){
    const target = document.getElementById(id);
    var inputs = target.getElementsByTagName("input");
    var courseNameBox = inputs[0];
    var creditBox = inputs[1];
    var dropdown =  target.getElementsByTagName("select")[0];

    courseNameBox.value = data["courseName"];
    creditBox.value = data["grade"].toString();
    dropdown.selectedIndex = validLetters.indexOf(data["letter"]) + 1;
}


// async function loadData(){
//     fileDialog = document.getElementById("formFile");
//     var path = fileDialog.files[0];
//     console.log(path);
//     var data = {};
//     data = await readFile(path);

//     console.log(data);
// }

// async function readFile(fptr){
//     let response = await fetch(fptr);
//     if (response.ok) { // if HTTP-status is 200-299
//         // get the response body (the method explained below)
//         let json = await response.json();
//         return json;
//       } else {
//         alert("HTTP-Error: " + response.status);
//       }
// }


document.getElementById('formFile')
.addEventListener('change', function() {
  
var fr=new FileReader();
fr.onload=function(){
    // document.getElementById('output')
    //         .textContent=fr.result;
    try{
        jsonData = JSON.parse(fr.result);
        console.log(jsonData);
        var count = Object.keys(jsonData["data"]).length;
        alert(count)
        // const rows = document.getElementsByClassName("container");
        // for (item of rows) {
        //     item.remove();
        // }

        document.getElementById("myDisplay").remove();
        const displayDiv = document.createElement("div");
        displayDiv.setAttribute('id','myDisplay');

        // <div class="container" id="0"></div>
        const zerothContainerDiv = document.createElement("div");
        zerothContainerDiv.setAttribute('class','container');
        zerothContainerDiv.setAttribute('id','0');

        document.getElementById("displayWrapper").appendChild(displayDiv);
        document.getElementById("myDisplay").appendChild(zerothContainerDiv);
         


        for(var i=0; i<count; i++){
            addRow('myDisplay');
        }
        
        for(var i=1; i<=count; i++){
            addKnownRow(jsonData["data"][(i-1).toString()], i.toString())
        }

    }
    catch(err){
        alert(err);
    }
}
  
fr.readAsText(this.files[0]);
})
