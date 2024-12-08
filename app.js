const input = document.getElementById("inputfeild");
const cardDiv = document.getElementById("cardDiv");

const search = () => {
    const News_Api = `https://newsapi.org/v2/everything?q=${input.value}&from=2024-11-08&sortBy=publishedAt&apiKey=b7ec37ceb13e4944ad281aae2b94fdf8`;

    fetch(News_Api)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.articles);
            cardDiv.innerHTML = '';

            data.articles.map((article) => {
                cardDiv.innerHTML += `
                    <div class="card shadow-lg rounded-lg p-3 mb-2" style="width: 18rem; background-color: white;">
                        <img src="${article.urlToImage}" class="card-img-top" alt="Image not available" style="height: 200px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title text-truncate">${article.title}</h5>
                            <p class="card-text text-truncate">${article.description}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Published: ${article.publishedAt}</li>
                            <li class="list-group-item">Source: ${article.source.name}</li>
                        </ul>
                        <div class="card-body text-center">
                            <a href="${article.url}" class="btn btn-primary" target="_blank">Read more</a>
                        </div>
                    </div>`;
            });
        })
        .catch((err) => {
            console.log(err);
        });
};
