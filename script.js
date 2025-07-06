const myArray = [
    '<img class="image" onclick="openOverlay(0)" src="./img/animal-1842566_640.jpg">',
    '<img class="image" onclick="openOverlay(1)" src="./img/badger-44204_640.jpg">',
    '<img class="image" onclick="openOverlay(2)" src="./img/barn-swallow-5346612_640.jpg">',
    '<img class="image" onclick="openOverlay(3)" src="./img/brown-bear-7591629_640.jpg">',
    '<img class="image" onclick="openOverlay(4)" src="./img/duck-7938454_640.jpg">',
    '<img class="image" onclick="openOverlay(5)" src="./img/raptor-3480542_640.jpg">',
    '<img class="image" onclick="openOverlay(6)" src="./img/turtle-174706_640.jpg">',
    '<img class="image" onclick="openOverlay(7)" src="./img/wild-boar-5219630_640.jpg">',
    '<img class="image" onclick="openOverlay(8)" src="./img/wolf-8142720_640.png">'
]

function init() {
    renderImgs();
}

function renderImgs() {
    let renderRef = document.getElementById('content');

    for (let d = 0; d < myArray.length; d++) {
        renderRef.innerHTML += myArray[d];
    }
}

function openOverlay(id) {
    document.getElementById('overlay').classList.remove('d_none');
    dialogFilling(id);
}

function closeOverlay() {
    document.getElementById('overlay').classList.add('d_none');
}

function dialogFilling(id) {
    let diaImg = myArray[id];
    document.getElementById('dialog_image').innerHTML = diaImg;
    document.getElementById('site_count').innerHTML = `<p>${id + 1} / ${myArray.length}</p>`;
}

function turnLeft() {
    let tLeft = document.getElementById('dialog_image').innerHTML;
    let x = 0;
    for (let d = 0; d < myArray.length; d++) {
        if (myArray[d] == tLeft && myArray[0] != tLeft) {
            dialogFilling(d - 1)
        } else if (myArray[0] == tLeft) {
            x = myArray.length - 1;
            dialogFilling(x)
        }
    }
}

function turnRight() {
    let tRight = document.getElementById('dialog_image').innerHTML;
    let x = 0;
    for (let d = 0; d < myArray.length; d++) {
        if (myArray[d] == tRight && myArray[myArray.length - 1] != tRight) {
            dialogFilling(d + 1)
        } else if (myArray[myArray.length - 1] == tRight) {
            dialogFilling(x)
        }
    }
}