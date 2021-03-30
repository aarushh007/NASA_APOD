let img='';
let explanation=''

axios.get('https://api.nasa.gov/planetary/apod?api_key=RKgdwJgpccxKXckFqQNjb2wEbPTZcaF8b7kC8DbF')
  .then(response => {
    img = response.data.url;
    explanation = response.data.explanation;
    document.querySelector('img').src = img;
    document.querySelector('#content').innerText = explanation;
  })
  .catch(error => console.log(error))
