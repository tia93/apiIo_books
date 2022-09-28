let url = 'https://gutendex.com/books/';

fetch(url).then(resp => resp.json()).then(res => displayBooks(res))




function displayBooks(books) {
 const conatiner = document.getElementById('container');
 console.log(books.results);   
 for (const book of books.results) {
    const divLibro = document.createElement('div');
    divLibro.classList.add('libro')

    const id = document.createElement('h2');
    id.innerHTML = '#'+book.id;
    divLibro.appendChild(id);

    const titolo = document.createElement('p');
        titolo.innerHTML = '<b>Title: </b>' + book.title;
        titolo.classList.add('titolo');
        divLibro.appendChild(titolo);

        const cover = document.createElement('img');
        cover.src = book.formats['image/jpeg'];
        cover.classList.add('img');
        divLibro.appendChild(cover);

        const autori = document.createElement('ul');
        autori.classList.add('autori')
        for (const author of book.authors) {
            const authorArry = document.createElement('li');
            authorArry.innerHTML = '<b>Author: </b>' + ' ' + '<br><b>Name: </b>' + author.name + ' ' + '<b>Data di nascita: </b>' + ' ' + author.birth_year + ' ' + '<b>Data di morte: </b>' +  author.death_year + '</br>';
            autori.appendChild(authorArry);
        }
        divLibro.appendChild(autori);

        const translators = document.createElement('h2');
        translators.innerHTML = '<b>Translator: </b>' +  book.translators;
        translators.classList.add('item');
        divLibro.appendChild(translators);

        const subjects = document.createElement('ul');
        for (const subject of book.subjects) {
            const subjectArry = document.createElement('li');
            subjectArry.innerHTML = '<b>Subject: </b>' + subject;
            subjects.appendChild(subjectArry);
        }
        divLibro.appendChild(subjects);

        const bookshelves = document.createElement('ul');
        for (const bookshelve of book.bookshelves) {
            const bookshelveArry = document.createElement('li');
            bookshelveArry.innerHTML = '<b>Bookshelve: </b>' + bookshelve;
            bookshelves.appendChild(bookshelveArry);
        }
        divLibro.appendChild(bookshelves);

        const languages = document.createElement('ul');
        for (const language of book.languages) {
            const languageArry = document.createElement('li');
            languageArry.innerHTML = '<b>Language: </b>' + language;
            languages.appendChild(languageArry);
        }
        divLibro.appendChild(languages);

        const copyright = document.createElement('h2');
        copyright.innerHTML = '<b>copyright : </b>' + book.copyright;
        copyright.classList.add('item');
        divLibro.appendChild(copyright);

        const mediaType = document.createElement('h2');
        mediaType.innerHTML = '<b>type: </b>' +book.media_type;
        mediaType.classList.add('item');
        divLibro.appendChild(mediaType);
 
        const formati = formatii(book.formats);
        divLibro.appendChild(formati)
        
        const downloadCount = document.createElement('h2');
        downloadCount.innerHTML = '<b>Download Count: </b>' + book.download_count;
        divLibro.appendChild(downloadCount);

    conatiner.appendChild(divLibro);
 }
}
function formatii(formats) {
    const lista = document.createElement('ul');
    lista.innerHTML = '<h3>Formati: </h3>';
    lista.classList.add('formatiii')
    
    const elementoLista = document.createElement('li');
    elementoLista.innerHTML = '<a href="'+formats['application/x-mobipocket-ebook'] +'">'+formats['application/x-mobipocket-ebook']+'</a>' 
    
    const elementoLista2 = document.createElement('li');
    const link = document.createElement('a');
    link.setAttribute('href', formats['application/rdf+xml']);
    link.innerHTML = formats['application/rdf+xml'];
    elementoLista2.appendChild(link);

    lista.appendChild(elementoLista);
    lista.appendChild(elementoLista2);

    return lista;
}

