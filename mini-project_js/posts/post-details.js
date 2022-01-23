let postsDetails = JSON.parse(localStorage.getItem('post'));

let divPosts = document.getElementsByClassName('post_div')[0];
let postBlock = document.createElement('div');
postBlock.classList.add('posts_block');

let userId = document.createElement('h4');
userId.innerText = `UserID: ${postsDetails.userId}`;

let id = document.createElement('h4');
id.innerText = `ID: ${postsDetails.id}`;

let title = document.createElement('h5');
title.innerText = `Title: ${postsDetails.title}`;

let body = document.createElement('h5');
body.innerText = `Body: ${postsDetails.body}`;

postBlock.append(userId, id, title, body);
divPosts.appendChild(postBlock);

let btnComment = document.createElement('button');
btnComment.classList.add('btn_comment');
btnComment.innerText = 'Comments';

btnComment.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postsDetails.id}/comments`)
        .then(response => response.json())
        .then(comments => {
            let commentsDiv = document.getElementsByClassName('comment_div')[0];
            for (const comment of comments) {
                if (postsDetails.id === comment.postId) {
                    let commentDiv = document.createElement('div');
                    commentDiv.classList.add('comment')
                    for (const key in comment) {
                        let elemComment = document.createElement('h4');
                        elemComment.innerText = `${key}: ${comment[key]}`
                        commentDiv.appendChild(elemComment);
                    }
                    commentsDiv.appendChild(commentDiv);
                }
            }

        })
    btnComment.disabled=true;
}
divPosts.appendChild(btnComment);