let usersDetails = JSON.parse(localStorage.getItem('user'));

let userData = document.getElementById('user_data');
let userBlock = document.createElement('div');
userBlock.classList.add('user_block');

let id = document.createElement('h4');
id.innerText = `ID: ${usersDetails.id}`

let name = document.createElement('h4');
name.innerText = `Name:${usersDetails.name}`

let username = document.createElement('h4');
username.innerText = `Username: ${usersDetails.username}`

let email = document.createElement('h4');
email.innerText = `Email: ${usersDetails.email}`;

let address = document.createElement('div');
address.classList.add('address');
address.innerText = 'Address: ';

for (const adr in usersDetails.address) {
    if (adr !== 'geo') {
        let elemAddress = document.createElement('h5');
        elemAddress.innerText = `${adr}: ${usersDetails.address[adr]}`
        address.append(elemAddress);
    }
}
let geo = document.createElement('div');
geo.innerText = 'Geo: '
geo.classList.add('geo');

for (const geolocation in usersDetails.address.geo) {
    let elemGeo = document.createElement('h6');
    elemGeo.innerText = `${geolocation}: ${usersDetails.address.geo[geolocation]}`
    geo.append(elemGeo);
}
address.append(geo);

let phone = document.createElement('h4')
phone.innerText = `Phone: ${usersDetails.phone}`;

let website = document.createElement('h4')
website.innerText = `Website: ${usersDetails.website}`;

let company = document.createElement('div');
company.innerText = 'Company: '
company.classList.add('company');

for (const comp in usersDetails.company) {
    let elemCompany = document.createElement('h5');
    elemCompany.innerText = `${comp}: ${usersDetails.company[comp]}`
    company.append(elemCompany);
}

userBlock.append(id, name, username, email, address, phone, website, company);
userData.appendChild(userBlock);


let btnTitle = document.createElement('button');
btnTitle.classList.add('btn_posts')
btnTitle.innerText = 'Posts of current user';

btnTitle.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${usersDetails.id}/posts`)
        .then(response => response.json())
        .then(posts => {
            let divPosts = document.createElement('div');
            divPosts.classList.add('posts_div')
            for (const post of posts) {
                if (usersDetails.id === post.userId) {
                    let divPost = document.createElement('div');
                    divPost.classList.add('title_text')

                    let divTitle = document.createElement('h3');
                    divTitle.innerText = `Title: ${post.title}`


                    let btnPostDtls=document.createElement('button');
                    btnPostDtls.classList.add('btn_post_dtls')
                    btnPostDtls.innerText='Info post'
                    btnPostDtls.onclick=function (){
                        localStorage.setItem('post',JSON.stringify(post))
                    }
                    let link=document.createElement('a');
                    link.href='../posts/post-details.html'
                    link.appendChild(btnPostDtls)

                    divPost.append(divTitle,link);
                    divPosts.appendChild(divPost);
                }
            }
            userData.appendChild(divPosts);
        })
    btnTitle.disabled=true;
}
userBlock.appendChild(btnTitle);






