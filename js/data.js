const cards = document.querySelectorAll ('.card');

const cards =[
    {
    title: "Hond op steen",
    imagepath: "img/download (1).jpeg",
    body: "Hier staat een hond op een steen",
}
,


{
    title: "Hond op gras",
    imagepath: "img/download.jpeg",
    body: "Hier zit een hond op gras",
}

]


const element = document.querySelector(".all")
console.log(element)


element.innerHTML +=
`<div class="container-fluid">
<div class="row">
    <div class="col-3"></div>
<div class="card" style="width: 18rem;">
<img src="img/" class="card-img-top" alt="...">
<div class="card-body">${cards[0].body}
  <h5 class="card-title">${cards[0].title}</h5>
  <p class="card-text"> </p>
 
</div>
</div>

<div class="container-fluid">
<div class="row">
    <div class="col-3"></div>
<div class="card" style="width: 18rem;">
<img src="img/" class="card-img-top" alt="...">
<div class="card-body">${cards[1].body}
  <h5 class="card-title">${cards[1].title}</h5>
  <p class="card-text"> </p>
 
</div>
</div>`