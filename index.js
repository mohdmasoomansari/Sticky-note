const btn = document.querySelector("button");
const note = document.querySelector("textarea");
const bgColor = document.querySelector("#bg");
const textColor = document.querySelector("#text");
const rightDiv = document.querySelector(".right");


btn.addEventListener('click' , createStickyNote)
function createStickyNote(){
    const text = note.value
    if(text.length === 0){
        alert("please enter text")
    }

    const stickyNote = document.createElement('div');
    const textSpan = document.createElement('span')
    textSpan.innerText = text;

    textSpan.addEventListener('blur' , makeEditableFalse)
    stickyNote.appendChild(textSpan);
    stickyNote.classList.add('note');

    const cross = document.createElement('span');
    cross.innerHTML = 'x';
    cross.classList.add('close');
    cross.addEventListener('click', removeStickyNote)
    stickyNote.appendChild(cross);
    // console.log(stickyNote);

    const edit = document.createElement("span");
    edit.innerText = "E";
    edit.addEventListener("click", editStickyNote);
    stickyNote.append(edit);


    stickyNote.style.backgroundColor = bgColor.value;
    stickyNote.style.color = textColor.value;

    rightDiv.appendChild(stickyNote)
    note.value = "";

}
function removeStickyNote(e){
    e.target.parentElement.remove();
}


function editStickyNote(e){
    e.target.parentElement.children[0].contentEditable = true;
}

function makeEditableFalse(e){
    e.target.contentEditable = false;
}