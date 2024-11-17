const addtask = document.querySelector(".addtask");
const adddesc = document.querySelector(".adddesc");
const button = document.querySelector(".btn");
const taskcontainer = document.querySelector(".TaskContainer");

button.addEventListener("click", () => {
  if (addtask.value == "" || adddesc.value == "") {
    alert("Please add task");
  }
   else {
    let task = document.createElement("div");
    task.style.cssText =
      "background-color:#ABBA7C;  width:auto; height:auto;border-radius: 20px; margin: 2rem;padding: 1.7rem;display:flex; justify-content: space-between;margin-right: 2rem;"
    let leftpart = document.createElement("div");
    let rightpart = document.createElement("div");

    //   left part ---->

    let taskheading = document.createElement("h3");
    // style

    let taskdesc = document.createElement("p");

    taskheading.innerHTML = addtask.value;
    taskdesc.innerHTML = adddesc.value;

    leftpart.appendChild(taskheading);
    leftpart.appendChild(taskdesc);
    

    let delbutton = document.createElement("button");
    delbutton.innerHTML = "&#10005";

    delbutton.style.cssText="background-color: red;border-radius:30px; width:30px; heightr:30px;margin-left: 2rem;"

    delbutton.addEventListener("click", () => {
      taskcontainer.removeChild(task);
    });

    rightpart.appendChild(delbutton);

    task.appendChild(leftpart);
    task.appendChild(rightpart);

    taskcontainer.appendChild(task);

    addtask.value = "";
    adddesc.value = "";
  }
});
