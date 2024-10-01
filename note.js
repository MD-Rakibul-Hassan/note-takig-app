const btn = document.querySelector('.btn');
const noteContainer = document.querySelector(".note-container");
const noteText = document.querySelectorAll(".note-text");

function showNotes() {
    noteContainer.innerHTML = localStorage.getItem("notes")
}
showNotes();

function updateNote() {
    localStorage.setItem('notes',noteContainer.innerHTML)
}

btn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img')
    inputBox.className = 'note-text';

    inputBox.setAttribute("contenteditable", "true");
    img.src = './images/delate.png'
    img.className = 'delate'
    inputBox.appendChild(img);
    noteContainer.appendChild(inputBox)
})

noteContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove()
        updateNote()
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".note-text")
        notes.forEach(nt => {
            nt.onkeyup = () => {
                updateNote()
            }
        })
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        document.execCommand("insertLineBreak");
        e.preventDefault()
    }
})