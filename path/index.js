
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
