let redHeart = document.getElementsByClassName("heart");
for (i = 0; i < redHeart.length; i++) {
    console.log(redHeart[i].classList);
    redHeart[i].addEventListener('click', function () {
        console.log('clicked');
        redHeart[i].classList.add('red-heart');
    })
}