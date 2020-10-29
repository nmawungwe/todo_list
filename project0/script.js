// Creating a "close" button and append it to each list item
let my_tasks = document.getElementsByTagName("LI");

for(i=0; i < my_tasks.length; i++){

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  my_tasks[i].appendChild(span)

}


// Clicking on the close button to hide the current list item
let close = document.getElementsByClassName("close")
  for(i=0; i < close.length; i++){

    close[i].onclick = function(){
      
      let div = this.parentElement;
      div.style.display = "none"

    }
}

// Adding a "checked" symbol when clicking on a list item

let list = document.querySelector('ul')
list.addEventListener('click', (ev)=>{
  if (ev.target.tagName === 'LI'){
    ev.target.classList.toggle('checked');
  }
}, false)

// let task_count = my_tasks.length
// console.log(task_count)

let tasks = []

function newTodo(){


  let li = document.createElement("li")
  let input_task = document.getElementById("myInput").value
  let t = document.createTextNode(input_task)
  li.appendChild(t)

  if (input_task === ''){
    alert("You must right something")
  } else {
    document.getElementById("todo-list").appendChild(li)
    tasks.push(input_task)
  }

  document.getElementById("myInput").value = ""

  let span = document.createElement("SPAN")
  let txt = document.createTextNode("\u00D7")
  span.className = "close"
  span.appendChild(txt)
  li.appendChild(span)




  // let tasks = document.getElementsByTagName("LI")
  let tasks_count = tasks.length



  let item_count = document.getElementById("item-count")
      item_count.innerHTML = `${tasks_count}`

  let checked_tasks = document.getElementsByClassName("checked")
      checked_tasks_count = checked_tasks.length
      console.log(checked_tasks_count)

  let unchecked_tasks = tasks_count - checked_tasks_count

  let unchecked_count = document.getElementById("unchecked-count")
      unchecked_count.innerHTML = `${unchecked_tasks}`

  for (i = 0; i < close.length; i++){
    close[i].onclick = function(){
      let div = this.parentElement;
      div.style.display = "none"

    }
  }
}

