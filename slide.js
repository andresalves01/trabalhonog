var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; 


slider.oninput = function() {
  output.innerHTML = this.value;
}
function rateStar(starCount) {
    
    for (let i = 1; i <= 5; i++) {
        const star = document.getElementById(`star${i}`);
        if (star) {
            star.classList.remove('checked');
        }
    }

    
    for (let i = 1; i <= starCount; i++) {
        const star = document.getElementById(`star${i}`);
        if (star) {
            star.classList.add('checked');
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    
    function updateStars() {
        var sliderValue = document.getElementById('ratingSlider').value;
        var starContainer = document.getElementById('starContainer');
        starContainer.innerHTML = ''; 

        for (var i = 1; i <= 5; i++) {
            var star = document.createElement('span');
            star.className = 'fa fa-star ' + (i <= sliderValue ? 'checked' : '');
            starContainer.appendChild(star);
        }
    }

    
    document.getElementById('ratingSlider').addEventListener('input', updateStars);

    
    updateStars();
});
