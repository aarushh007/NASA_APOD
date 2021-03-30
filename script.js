let img='';
let explanation=''

axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => {
    img = response.data.url;
    explanation = response.data.explanation;
    document.querySelector('img').src = img;
    document.querySelector('p').innerText = explanation;
  })
  .catch(error => console.log(error))
