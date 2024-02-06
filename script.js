
function showResponse(response) {
    if (response === 'No') {
        document.getElementById('noBtn').innerText = getRandomWord();
    } else {
        alert('Yay! Happy Valentine\'s Day!');
    }
}

function getRandomWord() {
    const words = ['Absolutely!', 
        'Forever Yours',
        'You & Me Forever',
        'Together Always',
        'My Heart Says Yes',
        'Dream Come True',
        'Eternal Bliss',
        'Forever and Always',
        'In Your Arms',
        'Destined'];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var closePopupButton = document.getElementById("closePopup");

    // Show the popup when the page loads
    popup.style.display = "block";

    // Close the popup when the close button is clicked
    closePopupButton.addEventListener("click", function() {
        popup.style.display = "none";
    });
});
