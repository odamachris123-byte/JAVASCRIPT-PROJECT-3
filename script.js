// currency converter code
function convertCurrency(){
    const amount = document. getElementById("amount").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const result = document.getElementById("result");

    const rates = {
        USD: { USD: 1, EUR: 0.93, GBP: 0.79, NGN: 1600 },
        EUR: { USD: 1.08, EUR: 1, GBP: 0.85, NGN: 1720 },
        GBP: { USD: 1.27, EUR: 1.18, GBP: 1, NGN: 2000 },
        NGN: { USD: 0.00063, EUR: 0.00058, GBP: 0.0005, NGN: 1 },
    };

    if(amount === "" || amount<=0){
        alert("Enter a valid number");
        return;
    }
    const converted = amount * rates[from][to];
    result.textContent = `Converted Amount: ${converted.toFixed(1)} ${to}`;
    //optional
    //amount.value"";
    
}


    // TO DO LIST APP
   function addTask(){
    const taskInput = document.getElementById("taskInput");
    const input = taskInput.value;
    const tasklist = document.getElementById("taskList");

    if(input === ""){
        alert("please Enter a task");
        return;
    }

    const li = document.createElement("li")
    // <li></li>
    li.textContent = input;
    // <li> input </li>

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.style.background = "transparent";
    deleteBtn.style.color = "red";

    deleteBtn.onclick = ()=>{
        li.remove();
    }

    li.appendChild(deleteBtn);
    // <li> input <button>remove</button></li>

    tasklist.appendChild(li);
    taskInput.value = "";

}    