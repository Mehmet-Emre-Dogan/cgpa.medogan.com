function letterToGrade(letter){
    var validLetters = ["AA", "BA", "BB", "CB", "CC", "DC", "DD", "FD", "FF", "NA", "U", "P", "W", "I", "EX", "S"];
    if (letter == "--"){
        return 0
    }
    var index = validLetters.indexOf(letter)
    if (index>=8 && index<=13){
        return 0
    }
    else if (index>= 14 && index<=15){
        return 4
    }
    else{
        return (4 - 0.5*index)
    }
}

function calc(){
    // alert("hello")
    const resultDisplayer = document.getElementById("cgpaResultArea");
    var containers = document.getElementsByClassName("container");

    len = containers.length; 

    // var inputs = containers[1].getElementsByTagName("input");
    // var credit = inputs.namedItem("credit");
    // console.log(credit.value);

    // var inputs = containers[3].getElementsByTagName("input");
    // var credit = inputs.namedItem("credit");
    // console.log(credit.value);

    var courseCount = 0;
    var weights = 0;
    var credits = 0;
    
    for (item of containers) {
        // var inputs = containers[i].getElementsByTagName("input");
        try{
        var inputs = item.getElementsByTagName("input");
        var credit = inputs.namedItem("credit").valueAsNumber;

        // var dropdown =  containers[i].getElementsByTagName("select")[0];
        var dropdown =  item.getElementsByTagName("select")[0];
        var letter = dropdown.options[dropdown.selectedIndex].text

        var weight = letterToGrade(letter)*credit;
        credits += credit;
        weights += weight;
        courseCount++;

        console.log(credit + "-" + letter + "-" + weight);
        }
        catch(err){
            console.log(err);
        }
    }

    resultDisplayer.innerHTML = (Math.round( (weights/credits)*1000) /1000).toString() + '/4.000';

    $("#yourCgpaIs").modal('show');

}