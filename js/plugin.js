
const textarea = document.body.querySelectorAll("textarea");
const inputs = document.body.querySelectorAll("input[type=text]");

const div = `
<div class="mainDiv" id="mainDiv"></div>
`;
document.body.insertAdjacentHTML("beforeend", div);

const contextMenu = document.getElementById("mainDiv");

const getSelectedText = ()=>{
    if(window.getSelection){
        return window.getSelection().toString();
    }else if(document.getSelection){
        return document.getSelection().toString();
    }
    return '';
}

textarea.forEach((single)=>{
    single.addEventListener("mouseup", (e)=>{

        const text = getSelectedText();
        if(text){
            const cords = single.getBoundingClientRect();
            console.log(cords);
            contextMenu.style.display = "block";
            contextMenu.innerHTML = text;
            contextMenu.style.top = cords.top - 30 + "px";
            contextMenu.style.left = cords.x + "px";
        }else{
            contextMenu.style.display = "none"
        }
    })
    single.addEventListener("keyup", (e)=>{
        const text = getSelectedText();
        if(text){
            const cords = single.getBoundingClientRect();
            console.log(cords);
            contextMenu.style.display = "block";
            contextMenu.innerHTML = text;
            contextMenu.style.top = cords.top - 30 + "px";
            contextMenu.style.left = cords.x + "px";
        }else{
            contextMenu.style.display = "none"
        }
    })
});

inputs.forEach((single)=>{
    single.addEventListener("mouseup", (e)=>{

        const text = getSelectedText();
        if(text){
            const cords = single.getBoundingClientRect();
            console.log(cords);
            const totalHeight = window.innerHeight;
            
            contextMenu.style.display = "block";
            contextMenu.innerHTML = text;
            if(totalHeight - cords.top < 200){
                contextMenu.style.top = cords.top - 130 + "px";
                contextMenu.style.left = cords.x + "px";
            }else{
                contextMenu.style.top = cords.top + 35 + "px";
                contextMenu.style.left = cords.x + "px";
            }
            
        }else{
            contextMenu.style.display = "none"
        }
    })
    single.addEventListener("keyup", (e)=>{
        const text = getSelectedText();
        if(text){
            const cords = single.getBoundingClientRect();
            console.log(cords);
            const totalHeight = window.innerHeight;

            contextMenu.style.display = "block";
            contextMenu.innerHTML = text;
            if(totalHeight - cords.top < 200){
                contextMenu.style.top = cords.top - 130 + "px";
                contextMenu.style.left = cords.x + "px";
            }else{
                contextMenu.style.top = cords.top + 35 + "px";
                contextMenu.style.left = cords.x + "px";
            }
        }else{
            contextMenu.style.display = "none"
        }
    })
});

