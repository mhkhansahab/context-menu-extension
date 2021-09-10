const div = `
<div class="mainDiv" id="mainDiv">
    <div class="btn-container">
        <div class="popup-btn" id="upper">UPPERCASE</div>
        <div class="popup-btn" id="lower">lowercase</div>
        <div class="popup-btn" id="title">Titlecase</div>
        <div class="popup-btn" id="search">Search with Google</div>
    </div>
    <div id="text-container">
    </div>
</div>
`;
document.body.insertAdjacentHTML("beforeend", div);

const contextMenu = document.getElementById("mainDiv");
const menuText = document.getElementById("text-container");
const upperBtn = document.getElementById("upper");
const lowerBtn = document.getElementById("lower");
const titleBtn = document.getElementById("title");
const searchBtn = document.getElementById("search");

upperBtn.onclick = ()=>{
    menuText.innerHTML = menuText.innerHTML.toUpperCase();
}
lowerBtn.onclick = ()=>{
    menuText.innerHTML = menuText.innerHTML.toLowerCase();
}
titleBtn.onclick = ()=>{
    const text = menuText.innerHTML;
    const titleCase = text.split(" ").map((word)=>{
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    }).join(' ')
    menuText.innerHTML = titleCase;
}
searchBtn.onclick = ()=>{
    const text = menuText.innerHTML.replace(" ","+");
    window.open(`https://www.google.com/search?q=${text}`)
}

const getSelectedText = () => {
  if (window.getSelection) {
    return window.getSelection().toString();
  } else if (document.getSelection) {
    return document.getSelection().toString();
  }
  return "";
};

document.body.onclick = () => {

    const textarea = document.body.querySelectorAll("textarea");
  const inputs = document.body.querySelectorAll("input[type=text]");

  textarea.forEach((single) => {
    
    single.addEventListener("mouseup", (e) => {
        contentPopper(single);
    });

    single.addEventListener("keyup", (e) => {
        contentPopper(single);
    });

  });

  inputs.forEach((single) => {
    
    single.addEventListener("mouseup", (e) => {
        contentPopper(single);
    });

    single.addEventListener("mouseover",()=>{
        contextMenu.style.display = "none";
    })

    single.addEventListener("keyup", (e) => {
     contentPopper(single);
    });

  });

};

function contentPopper(element){
    const text = getSelectedText();
    if(text){
        const cords = element.getBoundingClientRect();
        const totalHeight = window.innerHeight;

        contextMenu.style.display = "block";
        menuText.innerHTML = text;
        
        if (totalHeight - cords.top < 200) {
          contextMenu.style.top = cords.top - 130 + "px";
          contextMenu.style.left = cords.x + "px";
        } else {
          contextMenu.style.top = cords.top + 35 + "px";
          contextMenu.style.left = cords.x + "px";
        }
      } else {
        contextMenu.style.display = "none";
      }
    }