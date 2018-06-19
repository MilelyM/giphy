
const inputText =document.querySelector("input")
        const containerImage =document.getElementById("elementos")
        
        inputText.addEventListener("keypress", (event)=>{
          let key = event.which || event.keyCode;
          if (key ===13 )
{
            let gif = inputText.value;
            inputText.value = "";
            containerImage.innerText.value;
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=x6HId4K1cWsJexbwYzly01B4jihLsCLi&q=${gif}&limit=25&offset=0&rating=G&lang=en`)
            .then(response => response.json())
            .then(data => {

                renderInfo(data);
            })
        }
    })   

const renderInfo = data =>{
    data.data.forEach(element => {
    let Ig = element.images.downsized.url;
    containerImage.innerHTML += `<img src="${Ig}">`; 
    
  });
}
