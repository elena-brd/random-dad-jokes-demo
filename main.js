const button = document.querySelector('button');
const list = document.querySelector('#jokes');


const addJoke = async () => {
    const jokesText = await getDadsJoke();
    const Newli = document.createElement('li');
    Newli.append(jokesText);
    list.append(Newli);
}

button.addEventListener('click', addJoke);

const getDadsJoke = async () => {
    try {
        const header = { headers: { Accept: 'appliAcation/json' } };
        const response = await axios.get('https://icanhazdadjoke.com/', header);
        return response.data.joke;
    }
    catch (e) {
        console.log('Not Found', e);
    }

}