function move(e){

    this.querySelectorAll('#triangle').forEach(layer => {
        
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX*speed)/50;
        layer.style.transform = `translateX(${x}px)`;
    })
}

document.addEventListener("mousemove", move);