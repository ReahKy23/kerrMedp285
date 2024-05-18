let movies = document.querySelectorAll('main > a > img');
// console.log(images);

function changeOpacity() {
  movies[0].style.opacity = '0.5'; // change opacity of each image
  movies[1].style.opacity = '0.5';
  movies[2].style.opacity = '0.5';
  movies[3].style.opacity = '0.5';

  this.style.opacity = '1'; // keep current image opaque
  // in event handlers, "this" refers to the HTML element that received the event
  // console.log(this);
}

function resetOpacity() {
  movies[0].style.opacity = '1'; // reset opacity of each image
  movies[1].style.opacity = '1';
  movies[2].style.opacity = '1';
  movies[3].style.opacity = '1';
}

// event listeners for hover on
movies[0].addEventListener('mouseover', changeOpacity);
movies[1].addEventListener('mouseover', changeOpacity);
movies[2].addEventListener('mouseover', changeOpacity);
movies[3].addEventListener('mouseover', changeOpacity);

// event listeners for hover off
movies[0].addEventListener('mouseout', resetOpacity);
movies[1].addEventListener('mouseout', resetOpacity);
movies[2].addEventListener('mouseout', resetOpacity);
movies[3].addEventListener('mouseout', resetOpacity);

