//Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
            for (const user of users) {
                let divElement = document.createElement('div');
                divElement.classList.add('wrap')

                let userDiv = document.createElement('div');
                userDiv.classList.add('user_wrap')

                let id = document.createElement('h4');
                id.innerText = `ID: ${user.id}`;

                let name = document.createElement('h4');
                name.innerHTML = `Name: ${user.name}`;

                let username = document.createElement('h4');
                username.innerText = `Username: ${user.username}`;

                let email = document.createElement('h4');
                email.innerText = `Email: ${user.email}`;


                let address = document.createElement('div')
                address.innerText = 'Address:'
                for (const adr in user.address) {
                    if (adr !== 'geo') {
                        let divAdr = document.createElement('h5');
                        divAdr.innerText = user.address[adr];
                        address.appendChild(divAdr);
                    }
                }
                let geo = document.createElement('div');
                geo.innerText = 'Geo: ';
                address.appendChild(geo);
                for (const divGeo in user.address.geo) {
                    let elem = document.createElement('h6');
                    elem.innerText = user.address.geo[divGeo];
                    geo.appendChild(elem);
                }

                let phone = document.createElement('h4')
                phone.innerText = `Phone: ${user.phone}`;

                let website = document.createElement('h4')
                website.innerText = `Website: ${user.website}`;

                let company = document.createElement('div')
                company.innerText = `Company: `
                for (const divCompany in user.company) {
                    let elem = document.createElement('h4');
                    elem.innerText = user.company[divCompany];
                    company.appendChild(elem)
                }

                let btnUser = document.createElement('button');
                btnUser.classList.add('btnUser')
                btnUser.innerText = 'Show posts';

                btnUser.onclick = function () {
                    fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(response => response.json())
                        .then(posts => {
                            let divPosts = document.createElement('div');
                            divPosts.classList.add('posts')
                            for (const post of posts) {
                                if (user.id === post.userId) {
                                    let divPost = document.createElement('div');
                                    divPost.classList.add('post')
                                    divPosts.append(divPost);
                                    for (const postKey in post) {
                                        let poost = document.createElement('h4');
                                        poost.innerText = `${postKey}: ${post[postKey]}`
                                        divPost.appendChild(poost);
                                    }
                                    let btnComment=document.createElement('button');
                                    btnComment.classList.add('btnComment')
                                    btnComment.innerText='Show comments';
                                    divPost.appendChild(btnComment);

                                    btnComment.onclick=function (){
                                        fetch('https://jsonplaceholder.typicode.com/comments')
                                            .then(response=>response.json())
                                            .then(comments=>{
                                                let divComments = document.createElement('div');
                                                divComments.classList.add('comments');
                                                divPosts.append(divComments);
                                                for (const comment of comments){
                                                    if (post.id===comment.postId){
                                                        let divComment = document.createElement('div');
                                                        divComment.classList.add('comment')
                                                        divComments.append(divComment);
                                                        divPost.appendChild(divComment);
                                                        for (const commentKey in comment) {
                                                            let com = document.createElement('h4');
                                                            com.innerText = `${commentKey}: ${comment[commentKey]}`
                                                            divComment.appendChild(com);
                                                        }
                                                    }
                                                }
                                            })
                                        btnComment.disabled=true;
                                    }

                                }
                            }
                            divElement.append(divPosts);
                        })
                    btnUser.disabled=true;
                }


                userDiv.append(id, name, username, email, address, phone, website, company, btnUser);
                divElement.appendChild(userDiv);
                document.body.appendChild(divElement);
            }
        }
    )

