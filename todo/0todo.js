function xbtnclick(e) {
    pnode = e.target.parentNode;
    list = document.getElementById('todolist')
    list.removeChild(pnode)
}
//도전문제 '확인버튼을 만들고 상호작용시 중앙선 그려지게 만들것'
// function ubtnclick(d) {
//     pnode = d.target.parentNode;
//     list = document.getElementById('todolist')
//     list.appendChild(pnode)
// }
// console.log('addItem 함수가 호출됨');


// function addItem() {
//     todo = document.getElementById('item')
//     list = document.getElementById('todolist')

//     listitem = document.createElement('li')
//     listitem.innerText = todo.value
//     listitem.className = 'list-group-item list-group-item-action list-group-item-warning';

//     ubtn = document.createElement('button')
//     ubtn.innerHTML = "&times"

//     ubtn.onclick = ubtnclick;

//     ubtn.className = 'close'

//     listitem.appendChild(ubtn)

//     list.appendChild(listitem)

//     todo.value = ""
//     todo.focus()
// }

function addItem() {
    todo = document.getElementById('item')
    list = document.getElementById('todolist')

    listitem = document.createElement('li')
    listitem.innerText = todo.value
    listitem.className = 'list-group-item list-group-item-action list-group-item-warning';

    xbtn = document.createElement('button')
    xbtn.innerHTML = "&times"

    // xbtn = document.createElement('button')
    // xbtn.innerHTML = "완료"

    //oncilck 지원방법 1 - 함수적용
    xbtn.onclick = xbtnclick;

    //oncilck 지원방법 2 - 익명함수 적용
    // xbtn.oncilck = function(e) {
    //     pnode = e.target.parentNode
    //     list.removeChild(pnode)
    // }

    //oncilck 지원방법 3 - 화살표 함수 적용
    // xbtnclick = (e) => {
    //     pnode = e.target.parentNode
    //     list.removeChild(pnode)
    // }
    xbtn.className = 'close'

    listitem.appendChild(xbtn)

    list.appendChild(listitem)

    todo.value = ""
    todo.focus()

}