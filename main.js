let inputs = document.querySelectorAll('input'); 
let spans = document.querySelectorAll('span');            

let isOver; 
function addClass(id){
    spans.forEach(span =>{
        if(isOver == true) {
            let num = id;
            if(num == span.id){
                span.classList.add('target');
            }
        }
    });

}
function removeClass(id){
    spans.forEach(span =>{
        if(isOver == false) {
            let num = id;
            if(num == span.id){
                span.classList.remove('target')
            }
        }
    });
}


inputs.forEach(input => {
    let inFocus;

    input.addEventListener("mouseover", (event)=>{
        isOver = true;
        inFocus = false;
        if(event.target.placeholder == ""){
            event.target.placeholder = "you@example.com";
        }
        addClass(event.target.id);
    });

    input.addEventListener("mouseleave", (e)=>{
        isOver = false;
        if(inFocus == false){
            removeClass(e.target.id);
            if(e.target.placeholder == "you@example.com"){
                e.target.placeholder = "";
            }
        }
        });

    input.addEventListener("focus", (event)=>{
        isOver = true;
        inFocus = true;
        addClass(event.target.id);
        if(event.target.placeholder == ""){
            event.target.placeholder = "you@example.com";
        }
        //addClass(event.input.id)
        
    }); 
    input.addEventListener("blur",(e)=>{
        isOver = false;
        inFocus = false;
        if(e.target.value == ""){
            removeClass(e.target.id);
            if(e.target.placeholder == "you@example.com"){
                e.target.placeholder = "";
            }
        } 
    }); 


    input.addEventListener("click",(e)=>{
        isOver = true;
        addClass(e.target.id);

        if(e.target.placeholder == ""){
            e.target.placeholder = "you@example.com";
        }
    })
    
});

/*
focus/blur: 
https://es.javascript.info/focus-blur 
events input: 
https://es.javascript.info/events-change-input

*/