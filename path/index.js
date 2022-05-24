
        function displayabout() {
            var arrow = document.getElementById('animation');
            arrow.classList.toggle('rotate');
            var display = document.getElementById('about');
            display.classList.toggle('active');

        }

    
    function showprojects() {
        const projetos = document.querySelector('.card')
        var display = projetos.style.display 
        if (display == "none") 
        document.querySelector('.card').style.display = 'flex'
        else document.querySelector('.card').style.display = 'none'
    }   








var btn = document.querySelector('button');
var hint = document.getElementById('hint');
var height = hint.clientHeight;
var width = hint.clientWidth;
var display = hint.style.display 
console.log(width + 'x' + height);
// initialize them (within hint.style)


function teste(){
    if(hint.style.visibility == 'hidden'){
        hint.style.visibility = 'visible';
        //hint.style.opacity = '1';
        hint.style.height = '380px';
        hint.style.width = '100%';
        hint.style.padding = '15px';
      }
  else{
    hint.style.visibility = 'hidden';
    //hint.style.opacity = '0';
    hint.style.height = '0';
    hint.style.width = '0';
    hint.style.padding = '0';
  }

};