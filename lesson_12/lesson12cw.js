//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(responses => responses.json())
    .then(responses => {
        for (const response of responses) {
            let divElement = document.createElement('div');
            divElement.classList.add('post');
            divElement.innerText = `id:${response.id} \n ${response.title}`;
            let btn = document.createElement('button');
            btn.innerText = 'Data';
            btn.addEventListener('click', function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${response.id}/comments`)
                    .then(comments => comments.json())
                    .then(comments => {
                        let commentDiv = document.createElement('div');
                        for (const commentElem of comments) {
                            let comment = document.createElement('div');
                            comment.classList.add('comment');
                            comment.innerText = `${commentElem.id}: ${commentElem.email}`;
                            commentDiv.appendChild(comment);
                        }
                        divElement.appendChild(commentDiv);
                    })
                btn.disabled=true;
            })
            divElement.appendChild(btn);
            document.body.appendChild(divElement);
        }
    });