const titleEl = document.getElementById("title")
const authorEl = document.getElementById("author")
const isbnEl = document.getElementById("isbn")
const formEl = document.getElementById("book-form")
const bookListEl = document.getElementById("book-list")

const book ={title:"", author:"", isbn:""}

formEl.addEventListener("sucmit",(e) =>{
    e.preventDefault()
    book["title"] = titleEl.value
    book["author"] = authorEl.value
    book["isbn"] = isbn.value
    console.log(book);
    const row= document.createElement("tr")
    row.innerHTML= `<td>${book[title]}</td><td>${book["author']</td><td>${book[isbn]}</td><td><span class="delete">X</span></td>`
    bookListEl.appendChild(row)

    titleEl.value = ""
    authorEl.value =""
    isbnEl.value =""
})

bookListEl.addEventListener("click",(e) => {
    console.log(e, target);
    if(e.target.className ==="delete"){
        e.target.parentElement.parentElement.remove()
    }
})