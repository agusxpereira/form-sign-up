let inputs = document.querySelectorAll('input'); 

inputs.forEach(input => {
    console.log(input)
    input.addEventListener("focus", ()=>{
        let spans = document.querySelectorAll('span');
        spans.forEach(span =>{
            span.classList.toggle('target')
        });
    });
});