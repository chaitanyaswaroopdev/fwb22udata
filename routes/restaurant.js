extends layout

block content
  h1= title
  - const gas = ['restaurant_type','quantity','cost']
  - let results;
  script.
    function buy(x){
      alert('purchased item ' + x)
   } 
  div(class='container-fluid')
    div(class='row')
      each results, index in gas
        div(class='col-sm-2' onclick='buy('+index+')') #{results} 
        

  
