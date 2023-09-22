

//To display each todolist as HTML LIST
(function(){
  
    var list = document.querySelector('#list'),//list
        form = document.querySelector('form'),//tag
        item = document.querySelector('#item');//input box
    if(item==="")
    {
        alert("r")
    }
    form.addEventListener('submit',
    function(e){
      e.preventDefault();//to prevent the refreshing of page
      list.innerHTML += '<li>' + item.value + '</li>';
      store();
      item.value ="";//to give empty space to the input box
    })
    //removing items ON CLICK
    list.addEventListener('click',
    function(b){
    //targets this function
      var t = b.target;
     //IF CHECK IS AVAILABLE, DELETE ON CLICK ELSE
      if(t.classList.contains('checked'))
      {
        t.parentNode.removeChild(t);
      } else {
        t.classList.add('checked');
      }
      store();
    })
    //stores in local storage
    function store() 
    {
      window.localStorage.myitems = list.innerHTML;
    }
    //gets the values of each list
    function getValues() {
      var storedValues = window.localStorage.myitems;
      if(!storedValues) 
      {
        list.innerHTML = '<li>Make a to do list</li>'+'<li>Check off first thing on the to do list</li>'+'<li>Realize you have already accomplished 2 things in the list</li>'+'<li>Reward yourself with a nap</li>';
      }
      else
      {
        list.innerHTML = storedValues;
      }
    }
    getValues();
  })();