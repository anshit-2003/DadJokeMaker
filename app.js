const getjoke = async() =>{
    const config = {headers: {Accept : "application/json"}}
    const res = await axios.get('https://cors-anywhere.herokuapp.com/https://icanhazdadjoke.com',config);
    return res.data.joke
}
const h2 = document.querySelector('#joke');
const button = document.querySelector('#Generate');
const addnewjoke = async() =>{
    const joke = await getjoke();
    h2.innerText = joke;

}
button.addEventListener('click', addnewjoke)