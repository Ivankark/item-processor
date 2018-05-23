var submit = document.getElementById('submit');
submit.addEventListener('click', handler);

function handler() {
    var data = document.getElementById('in_1c').value;
    var position = document.querySelector('.container');
    if (data != 0) {
        var newArr = data.split('/\s/');
        var updateData = newArr.map(function (el) {
            return el.toUpperCase().replace(/([а-яё^\~\!\\\"\'\+\%\#\$\^\:\&\[\]\|\=\,\'\;\`])/ig, '<span style="color:red;display:inline-block;background:yellow">$1</span>');

        });

        position.insertAdjacentHTML('beforeEnd', `
                    <div class="col-sm-12">
                    <button type="button" class="close" aria-label="Close" onclick="removeParent(this);">
                          <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="data"><pre>${updateData}</pre></div></ul>
                </div>
              `);
    } else {
        var warningEl = document.createElement('div');
        warningEl.setAttribute('class', 'warning');
        var message = document.createTextNode('Пожалуйста, заполните соотвествующие поля для обработки!');
        warningEl.appendChild(message);
        var container = document.getElementsByClassName('container')[0];
        container.appendChild(warningEl);
        setTimeout(function () {
            warningEl.classList.add('animate');
        }, 1000);
        warningEl.addEventListener("transitionend", hide);

        function hide(event) {
            var target = event.target;
            container.removeChild(target);
        }

    }
}

function removeParent(container) {
    var parentElem = container.parentNode;
    parentElem.parentNode.removeChild(parentElem);
}
//очищение полей
function resetValue1() {
    textArea = document.getElementById('in_1c');
    textArea.value = "";

}

function resetValue2() {
    textArea = document.getElementById('in_price');
    textArea.value = "";
}

//удаление всех данных с выезжающим блоком "collaps" 
document.getElementById('toggle').addEventListener('click', drop);

function drop() {
    document.getElementById('collaps').style.left = '0';
    document.getElementsByTagName('body')[0].style.overflow = "hidden";
}

function removeCollaps(obj) {
    obj.parentNode.style.left = '-100%';
    document.getElementsByTagName('body')[0].style.overflow = "auto";
}