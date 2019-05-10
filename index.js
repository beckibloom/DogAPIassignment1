'use strict';

function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJson => 
            generateDogImage(responseJson))
        .catch(error => alert('Uh oh! No doggies are available at this moment. So sorry. :('));
}

function renderDogImage(imagesCode) {
    $('.results').removeClass('hidden');
    $('.results-images').append(imagesCode);
}

function generateDogImage(responseJson) {
    console.log(responseJson);
    // let imagesCode = `<img src="${responseJson.message}" class="results-img">`;
    // renderDogImage(imagesCode);
    renderDogImage();
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let num = document.getElementById("number").value;
    let i = 1;
    for (i = 1; i <= num; i++) {
        getDogImage();
    }
  });
}

$(function() {
  console.log('App ready');
  watchForm();
});