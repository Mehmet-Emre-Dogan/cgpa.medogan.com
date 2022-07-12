const validLetters = ["AA", "BA", "BB", "CB", "CC", "DC", "DD", "FD", "FF", "NA", "U", "P", "W", "I", "EX", "S"];

function addKnownRow(data, id){
    const target = document.getElementById(id);
    var inputs = target.getElementsByTagName("input");
    var courseNameBox = inputs[0];
    var creditBox = inputs[1];
    var dropdown =  target.getElementsByTagName("select")[0];

    courseNameBox.value = data["courseName"];
    creditBox.value = data["credit"].toString();
    dropdown.selectedIndex = validLetters.indexOf(data["letter"]) + 1;
}

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

function download_txt() {
    var containers = document.getElementsByClassName("container");

    // len = containers.length; 

    var courseCount = 0;
    var weights = 0;
    var credits = 0;

    var myDict = {};
    var dataArray = [];

    var currentdate = new Date(); 
    var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + "_"  
                + currentdate.getHours() + "-"  
                + currentdate.getMinutes() + "-" 
                + currentdate.getSeconds();

    // $.extend(ListData, {"hello": { "label":"Hello", "url":"#hello" }});
    for (item of containers) {
        // var inputs = containers[i].getElementsByTagName("input");
        try{
        var inputs = item.getElementsByTagName("input");
        var credit = inputs.namedItem("credit").valueAsNumber;

        // var dropdown =  containers[i].getElementsByTagName("select")[0];
        var dropdown =  item.getElementsByTagName("select")[0];
        var letter = dropdown.options[dropdown.selectedIndex].text

        if(letter == "Grade"){
            letter = "--"
        }

        if(isNaN(credit)){
            credit = 0;
        }
        
        var grade = letterToGrade(letter);
        var weight = grade*credit;
        credits += credit;
        weights += weight;
        courseCount++;

        var currDict = {"courseName": inputs[0].value, "credit": credit, "letter":letter, "grade":grade, "weight":weight};
        dataArray.push(currDict);

        console.log(credit + "-" + letter + "-" + weight);
        }
        catch(err){
            console.log(err);
        }
    }

    myDict = {"data": dataArray, "date":datetime};
    
    var textToSave = JSON.stringify(myDict);
    var hiddenElement = document.createElement('a');

    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    hiddenElement.target = '_blank';
    hiddenElement.download = "Online_Guess__" +  datetime + '.json';
    hiddenElement.click();
  }
  
  document.getElementById('downloadJson').addEventListener('click', download_txt);




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