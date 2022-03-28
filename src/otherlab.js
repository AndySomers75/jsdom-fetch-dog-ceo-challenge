//console.log('%c HI', 'color: firebrick')


function loadDog() {
    fetch("https://dog.ceo/api/breeds/image/random/")
    .then(function(response) {
        return response.json();
        
    })
    .then(function(json) {
        return json.message
    })
      //  let dogImg = document.createElement('img');
       // dogImg.src = json.message;
       
        document.querySelector("#dogBtn").addEventListener('click', () => {

        loadDog().then(img => {
            document.querySelector("dogImg").src = img;
        })
        })
    }    
