const mainContainer = document.querySelector('.charcont')
async function fetchData(){
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json()
    data.results.forEach(function(characters){
        const container= document.createElement('div');
        container.classList.add('container');
        container.innerHTML = `   
        <div><img src="${characters.image}"/></div>     
        <h1>${characters.name}</h1>
        <h2>${characters.gender}</h2>
        <p>${characters.status}</p>
        <p>${characters.type}<p>
        <p>${characters.species}<p>
        
       
        `
        mainContainer.appendChild(container)
    }   
    )
}
fetchData()