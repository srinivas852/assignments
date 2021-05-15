// function popup(){
//     document.getElementById('registor').style.display = 'block';
// }
// function closeForm(){
//   document.getElementById('registor').style.display = 'none';
// }
// var covid_form = document.getElementById('registor');

document.getElementById('reg1').addEventListener('click', popup());
        function popup(){
        document.getElementById('registor').style.display = 'block';
    }

    document.getElementById('reg2').addEventListener('click' , closeForm());
        function closeForm(){
        document.getElementById('registor').style.display = 'none';
    }

var covid_form = document.getElementById('registor');

window.onclick = function(event){
    if(event.target == covid_form){
      covid_form.style.display = 'none';
    }
}