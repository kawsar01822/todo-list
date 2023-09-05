document.querySelector('#addTask').addEventListener("click", function(){
    var itemValue = document.querySelector("#new-task").value.trim();
    var listItem = document.createElement("li");
    listItem.className = "item";
    listItem.innerText = itemValue;

    var items = document.querySelector("#items");
    items.append(listItem);
});

document.querySelector('.complete-list ul').addEventListener("click", function(evt){
    evt.target.closest('li').remove();
});

document.getElementById('items').addEventListener('click', function (event) {
    if (event.target.classList.contains('item')){
        var text = event.target.textContent;

        var listItem = document.createElement("li");
        listItem.className = "item";
        listItem.innerText = text;

        var btn = document.createElement("button");
        btn.className = "delete";
        btn.innerText = "Delete";
        listItem.append(btn);

        var list = document.querySelector(".complete-list ul");
        list.append(listItem);
        
        var element = event.target.closest('li');
        element.remove();
    }
  });
