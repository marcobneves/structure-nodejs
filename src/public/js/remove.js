let booksElement = document.querySelector("#books")
const urlApi = 'http://localhost:3000'

//Remove Book
booksElement.addEventListener('click', (event) => {
    let elementClick = event.target
    if (elementClick.dataset.type == "remove") {
        let bookId = elementClick.dataset.ref
        fetch(`${urlApi}/book/${bookId}`, { method: 'DELETE' })
            .then(() => {
                let elementTr = elementClick.closest(`#livro_${bookId}`)
                elementTr.remove()
            })
            .catch(error => { console.log('Error', error) })
    }
})

