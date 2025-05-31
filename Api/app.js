fetch('https://683afe7843bb370a867466bc.mockapi.io/api/dxdd')
.then(response => response.json())
.then(data => {
  let body = document.querySelector("body")
data.map(dxdd => {
body.innerHTML +=`
    <div class="card" style="width: 18rem;">
    <img src="./assets/${dxdd.imagem}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${dxdd.nome}</h5>
        <p class="card-text">${dxdd.descricao}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
`
})
})



