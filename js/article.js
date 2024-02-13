
let base64String
document.getElementById('myFile').addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        base64String = reader.result;
    };

});


const handleSubmit = () => {
    const articles = JSON.parse(localStorage.getItem("articles")) ?? []
    var title = document.getElementById('title').value
    var body = document.getElementById('body').value
    var tag = document.getElementById('tag').value
    if (!title || !base64String || !body || !tag) {
        return;
    }
    var newArticle = {
        id: articles.length,
        title: title,
        body: body,
        image: base64String,
        tag: tag,
    };

    articles.unshift(newArticle)
    localStorage.setItem("articles", JSON.stringify(articles));
    document.getElementById('title').value = '',
        document.getElementById('body').value = '',
        document.getElementById('tag').value = '',
        document.getElementById('myFile').value = ''
    alert('data inserted well done')
    return false

};

