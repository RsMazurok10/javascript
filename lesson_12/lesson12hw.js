//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(responses => responses.json())
    .then(responses => {
        let divPosts = document.createElement('div');
        divPosts.classList.add('wraper');
        for (const response of responses) {
            let divPost = document.createElement('div');
            divPost.classList.add('post')
            divPost.innerHTML = `<h3>id: ${response.id}</h3> 
                                  <h5>title: ${response.title}</h5> 
                                  <b>body</b>: ${response.body}`;
            divPosts.appendChild(divPost);
            document.body.appendChild(divPosts);
        }
    });

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(comments => comments.json())
    .then(comments => {
        let divComments = document.createElement('div');
        divComments.classList.add('wrapper');
        for (const comment of comments) {
            let divComment = document.createElement('div');
            divComment.classList.add('coment');
            divComment.innerHTML = ` <h3>id: ${comment.id}</h3>
                                    <h4>name: ${comment.name}</h4>
                                    <h5>email: ${comment.email}</h5>
                                    <p>body: ${comment.body}</p> `;
            divComments.appendChild(divComment);
            document.body.appendChild(divComments);
        }
    });
