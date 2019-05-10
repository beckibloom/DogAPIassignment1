'use strict';

function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJson => 
            generateDogImage(responseJson))
        .catch(error => alert('Uh oh! No doggies are available at this moment. So sorry. :('));
    console.log('getDogImage ran.');
}

function renderDogImage(imagesCode) {
    // Put the dog image html into the DOM after generateDogImage runs
    $('.results').removeClass('hidden');
    console.log('renderDogImage ran.');
    $('.results-images').appendChild(imagesCode);
}

function generateDogImage(responseJson) {
    console.log(responseJson);
    // let imagesCode = `<img src="${responseJson.message}" class="results-img">`;
    let imagesCode = '<p>this is a picture of a dog</p>';
    renderDogImage(imagesCode);
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