var submit = document.getElementById('submit');//записал в переменную кнопку "Отправить"
  submit.addEventListener('click', handler);//добавляем событие и обработчик

  function handler() {//начало функции-обработчика
    var data = document.getElementById('in_1c').value;//получил и записал в переменную данные из textarea, тип данных "строка"
    var position = document.querySelector('.container');//записал в переменную родителя
    //проверка, если поле textarea не пустое, то вывести данные, иначе сообщение об ошибке
    if (data != 0) {
        //разбил объект по пробелу на массив строк          
        var newArr = data.split('/\s/'); // тип данных object(массив)
        //создаю новый массив методом .map в котором обрабатываю каждый элемент из массива newArr (в моем случае ищу подстроки регулярным выражением и помечаю их css-стилем)
        var updateData = newArr.map(function(el) {
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
    }
    else { //сообщение об ошибке
      var warningEl = document.createElement('div'); //создание элемента
      warningEl.setAttribute('class', 'warning'); //создание атрибута
      var message = document.createTextNode('Пожалуйста, заполните соотвествующие поля для обработки!'); //создание текстового узла
      warningEl.appendChild(message); //закрепляем текстовый узел в созданном элементе
        //далее помещаем новый узел в нужное место в DOM
      var container = document.getElementsByClassName('container')[0]; //получил в переменную родительский элемент
      container.appendChild(warningEl); //установка нового элемента на заданную позицию (по умолчанию ставится в конец)
        //функция удаляет элемент
        warningEl.addEventListener('transitionEnd', animate);
        function animate() {
            container.removeChild(warningEl);
      }
        //метод вызывает функцию "timer" с задержкой
        setTimeout(animate, 2000);
    }
  }
//конец функции обработчика события




//блок кода отвечает за обработку кнопок "закрыть" само событие расположено вот так "onclick="removeParent(this);" Откуда "container"?
function removeParent(container) { //обработчик
  var parentElem = container.parentNode; //определяем родителя
  parentElem.parentNode.removeChild(parentElem); //удаляем элемент с родителем
}
//очищение полей без перезагрузки
  function resetValue1() {
      textArea = document.getElementById('in_1c');
      textArea.value = "";
       
   }
  function resetValue2() {
      textArea = document.getElementById('in_price');
      textArea.value = "";  
  }
