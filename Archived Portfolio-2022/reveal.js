window.addEventListener('scroll', reveal1);

function reveal1(){
    var reveals = document.querySelectorAll('.reveal1');
    
    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 0;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }

        else{
            reveals[i].classList.remove('remove');
        }

    }

}