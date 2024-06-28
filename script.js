const notesBx=document.querySelector(".notes-box");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-bx");

function showNotes(){
    notesBx.innerHTML=localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes",notesBx.innerHTML);
}

createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-bx";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    notesBx.appendChild(inputBox).appendChild(img); 
})

notesBx.addEventListener("click",(e)=>{
    if(e.target.tagName==='IMG')
    {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==='P')
    {
        notes=document.querySelectorAll(".input-bx");
        notes.forEach(nt =>{
            nt.onkeyup=()=> updateStorage();
        });
    }
})

document.addEventListener("keydown",(e)=>{
    if(e.key==="Enter")
    {
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})