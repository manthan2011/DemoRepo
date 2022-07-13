fetch('https://jsonplaceholder.typicode.com/posts').then((data)=>{
    return data.json();
}).then((datapass)=>{
    console.log(datapass);
    document.getElementById('Blogs').innerHTML=datapass;
    let data1="";
    datapass.map((values)=>{
        data1+= `<div class="cards">
        <h3 class="userId">${values.userId}</h3>
        <h4 class="id">${values.id}</h4>
        <h5 class="title">${values.title}</h5>
        <h6 class="body">${values.body}</h6>
    </div>`
    });
    document.getElementById("Blogs").innerHTML=data1;
})