const slider = document.getElementById('slider');

    function updateSliderBackground() {
        const value = slider.value;
        slider.style.background = `linear-gradient(to right, orange ${value}%, #ddd ${value}%)`;
    }

slider.addEventListener('input', updateSliderBackground);
updateSliderBackground();