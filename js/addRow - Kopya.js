function addRow(where) {
    const myRow = document.createElement("div");
    myRow.classList.add("container");
    myRow.innerHTML = '      <div class="container">        <div class="row" >            <div class="col col-8"><input type="text" class="form-control bg-dark text-white" placeholder="Course Name"/></div>            <div class="col"><input type="number" class="form-control bg-dark text-white" placeholder="Credit"></div>            <div class="col">            <select class="form-select form-select bg-dark text-white">                <option selected>Grade</option>                <option value="4.0">AA</option>                <option value="3.5">BA</option>                <option value="3.0">BB</option>                <option value="2.5">CB</option>                <option value="2.0">CC</option>                <option value="1.5">DC</option>                <option value="1.0">DD</option>                <option value="0.5">FD</option>                <option value="0.0">FF</option>                <option value="0.0">NA</option>                <option value="-1">U</option>                <option value="-1">P</option>                <option value="-1">W</option>                <option value="-1">I</option>                <option value="-1">EX</option>                <option value="-1">S</option>            </select>            </div>            <div class="col col-1 text-end"> <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#areYouSureToDelete">X</button></div>        </div>        <br>      </div>';
    document.getElementById(where).appendChild(myRow)
}