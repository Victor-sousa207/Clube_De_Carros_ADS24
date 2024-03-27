document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var author = document.getElementById('author').value;
    var content = document.getElementById('content').value;

    if (author.trim() === '' || content.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    var postDiv = document.createElement('div');
    postDiv.classList.add('post');

    var authorPara = document.createElement('p');
    authorPara.classList.add('author');
    authorPara.textContent = author;

    var contentPara = document.createElement('p');
    contentPara.classList.add('content');
    contentPara.textContent = content;

    postDiv.appendChild(authorPara);
    postDiv.appendChild(contentPara);

    document.getElementById('posts').appendChild(postDiv);

    document.getElementById('author').value = '';
    document.getElementById('content').value = '';
});


