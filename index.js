const films = document.getElementById('films')

const request = async () => {
    let req = await fetch("http://localhost:3000/films")
    let res = await req.json()
        res.forEach((film, i) => {
            const li = document.createElement('li')
            li.innerText = film.title
            films.append(li) 
        })
}