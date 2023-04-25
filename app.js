const h2 = document.querySelector('#joke');
const language = document.querySelector("#language");
const button = document.querySelector('#Generate');
const getjokeeng = async() =>{
    const config = {headers: {Accept : "application/json"}}
    const res = await axios.get('https://icanhazdadjoke.com',config);
    return res.data.joke
}

const getjokehindi = async () =>{
    const res = await axios.get('https://hindi-jokes-api.onrender.com/jokes?api_key=730345873dcf3f6eb674014cc9af');
    return res.data.jokeContent;

}
const addnewjoke = async(getjokeeng) =>{
    const joke = await getjokeeng();
    h2.innerText = joke;

}

button.addEventListener('click', () => {
    if(language.value == "Hindi"){
        addnewjoke(getjokehindi);
    }
    else if(language.value == "English"){
        addnewjoke(getjokeeng);
    }
})