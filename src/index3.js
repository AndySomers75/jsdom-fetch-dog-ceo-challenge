document.addEventListener('DOMContentLoaded', ()=> {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(json => json.message.forEach(image => {
        const imgContainer = document.getElementById('dog-image-container')
        const dogImg = document.createElement('img')
        dogImg.src = image
        imgContainer.append(dogImg)
    }))
// challenge two ------
fetch('https://dog.ceo/api/breeds/list/all')
.then(res => res.json())
.then(json => Object.keys(json.message).forEach(breeds => {
    const dogBreeds = document.getElementById('dog-breeds');
    const breedsList = document.createElement('li')
    breedsList.innerHTML = breeds
    dogBreeds.append(breedsList)
    //challenge three-----
breedsList.addEventListener('click', ()=>{
    breedsList.style.color = 'blue';
})
}))
.then(()=>{
    const dropDown = document.getElementById('breed-dropdown');
    const breedsList = document.querySelectorAll('#dog-breeds > li')
    dropDown.addEventListener('change', (breed)=>{
        let value = breed.target.value;
        console.log(breedsList)
        let dogArray = Array.from(breedsList)
        let filterBreed = dogArray.filter(breed => {
           return breed.innerHTML.startsWith(value)
        })
        const dogBreeds = document.getElementById('dog-breeds');
        dogBreeds.innerHTML = “”
        filterBreed.forEach(breed => {
            dogBreeds.append(breed)
        })
    })
})
})