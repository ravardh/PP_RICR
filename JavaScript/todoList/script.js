function addTask() {
  let task = document.getElementById("taskIP");

  if (task.value.trim() === "") {
    alert("Please Add the Task");
  }

  const List = document.getElementById("taskList");

  const li = document.createElement("li");
  li.classList.add("my-2");

  const sp = document.createElement("span");
  sp.innerText = task.value.trim();

  const btn = document.createElement("button");
  btn.classList.add("btn", "btn-danger", "mx-3");
  
  btn.onclick = () => {
    li.remove();
  };

  const sp1 = document.createElement("span");
  sp1.innerText = "Delete";

  const i = document.createElement("i");
  i.classList.add("bi", "bi-trash-fill", "px-2");

  btn.appendChild(i);
  btn.appendChild(sp1);

  li.appendChild(sp);
  li.appendChild(btn);

  List.appendChild(li);

  task.value = "";
}
