fetch('https://rickandmortyapi.com/api/character')
.then(response =>response.json())
.then(data => {
    data.results.map(character => {
        let tr = document.createElement("tr")
        tr.innerHTML += `
            <td>${character.name}</td>
            <td>${character.gender}</td>
            <td>${character.species}</td>
            <td>${character.status}</td>
            <td>${character.location.name}</td>
            <td><img src="${character.image}"></td>
        `
        let tbody = document.querySelector("tbody")
        tbody.appendChild(tr)
    })
})