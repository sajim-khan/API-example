const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = user => {
    document.getElementById('name').innerHTML = user.results[0].name.first + ' ' + user.results[0].name.last    
    // const gender = document.getElementById('gender')
    // gender.innerHTML = user.results[0].gender
    document.getElementById('gender').innerHTML = user.results[0].gender
}
loadUser()
