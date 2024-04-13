/*
let buttonInput = document.querySelector('input');
addEventListener("click", function buttonClick() {
if (buttonInput === 'gone') {
    window.location="../pages/lad.html";
} else {
    alert('You entered the wrong password, prepare for the consequences');
}
});
*/

document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var password = document.getElementById('password').value;

    if (password === 'nowmummysgone') {
        window.location = './pages/lad.html';
    } else {
        document.getElementById('message').textContent = 'You entered the wrong password, prepare for consequences';
    }
});
