export{}

const btnSorting = document.querySelector('.comments__container-sorting'); //btn sorting comments
let content = document.querySelector('.section5__contents');
const btnSendMy = document.getElementById('btn__send');
const textareaMain = document.getElementById('text__style');
const counter = document.querySelector('.current');
const body = document.querySelector('body');
const divInBtnSorting = document.createElement('div'); //new div created for sorting comments
const btnComSortFav = document.querySelector('.comments__container');
const maxLenght = 1000;
let addedBlockAnswer = document.createElement('div');
let addedBlockSavedAnswer = document.createElement('div');

let comments = [
    {id: 1, img: '..//images/Alex user.png', author: 'Алексей_1994b', date: `15.01 13:55`, text: `Самое обидное когда сценарий по сути есть - в виде книг, 
    где нет сюжетных дыр, всё логично, стройное повествование и достаточно взять и экранизировать оригинал как это было в первых 
    фильмах с минимальным количеством отсебятины и зритель с восторгом примет любой такой фильм и сериал, однако вместо этого 
    'Кольца власти' просто позаимствовали имена из оригинала, куски истории, мало связанные между собой и выдали очередной 
    среднячковый сериал на один раз в лучшем случае.`, isAnswer: false, isComment: true, parentId: null, isMyComment: false},
    {id: 2, img: '..//images/Junior user.png', author: 'Джунбокс3000', text: `Наверное, самая большая ошибка создателей сериала была в том,
     что они поставили уж слишком много надежд на поддержку фанатов вселенной. Как оказалось на деле, большинство 'фанатов' с самой настоящей
      яростью и желчью стали уничтожать сериал, при этом объективности в отзывах самый минимум.`,  date: `15.01 15:18`, isComment: false, parentId: 1, isMyComment: false},
    {id: 3, img: '..//images/mr user.png', author: 'Мистер__душнила',  date: `15.01 18:18`, text: 'Что то написано', isComment: true, parentId: null, isMyComment: false},
    {id: 4, img: '..//images/Maks user.png', author: 'Максим Авдеенко',  date: `16.01 15:18`, text: 'value', isComment: true, parentId: null, isMyComment: true}
];    

let num = 1;

btnSorting.addEventListener('click', () => {
  num++;
 if (num % 2 === 0) {
   btnSorting.innerHTML = `По количеству оценок &#9650;`;
   divInBtnSorting.className = 'comments__container-list';
   divInBtnSorting.innerHTML = `<ul class='sorting__list'><li id='date' class='sorting__list-item'>По дате</li>
   <li id='raiting' class='sorting__list-item'>По количеству оценок</li><li id='actual' class='sorting__list-item'>По актуальности</li>
   <li id='answer' class='sorting__list-item'>По количеству ответов</li></ul>`;
   btnComSortFav.append(divInBtnSorting)
 } else {
   btnSorting.innerHTML = `По количеству оценок &#9660;`
   divInBtnSorting.remove()
 }
});

body.addEventListener('click', (event) => {
    if(event.target.matches('#date')) {
        console.log('hi', comments)
        comments.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
})

textareaMain.addEventListener('keyup', () => {
    if(textareaMain.scrollTop > 0) {
        textareaMain.style.height = textareaMain.scrollHeight + "px";
    } else {
        textareaMain.style.height = (textareaMain.scrollHeight) + "px";
    }
});

let forAnswerSaved = comments.find(child => child.isMyComment === true);

    let myTextA;
    let myTextAnswer = '';

comments.forEach(commentParent => {
    if(commentParent.isComment && commentParent.isMyComment === false) {

    let savedText = 
    `<section class="section2">
        <div class="section3__comments">
            <img class="user__images section1__image" src="${commentParent.img}" alt="user">
            <span class="style__name section1__name">${commentParent.author}</span>
            <span class="comments__date section3__comments-date">${commentParent.date}</span>
        </div>
        <p class="section__content section2__content">${commentParent.text}</p>
            <div class="section__btn-comments section2__btn">
                <button id="section2__btn-answer${commentParent.id}" class="btn__style-first section2__btn-answer">Ответить
                    <img src="..//images/arrow.svg" alt="arrow">
                </button>
                <button class="btn__style-first section2__btn-favorites favorites${commentParent.id}">В избранное
                    <img class='favorites__img${commentParent.id}' src="..//images/heart transparent.svg" alt="heart">
                </button>
                <div class="section__btn-raiting section2__btn-container">
                    <button class="btn__style-first btn__raiting section2__btn-down">
                        <img class="btn__raiting-down${commentParent.id}" src="..//images/btn -.svg">
                    </button>
                    <span class="raiting__show${commentParent.id}">0</span>
                    <button class="btn__style-first btn__raiting section2__btn-up">
                        <img class="btn__raiting-up${commentParent.id}" src="..//images/btn +.svg">
                    </button>
                </div>
            </div>
    </section>`;

  content.insertAdjacentHTML('beforeend', savedText);

    let addFavorites = false; 
    content.addEventListener('click', (event) => {
        if(event.target.classList.contains('favorites' + commentParent.id)){
            if(!addFavorites) {
                document.querySelector('.favorites__img' + commentParent.id).src = "..//images/heart big.svg";
                addFavorites = true;
            } else if (addFavorites) {
                document.querySelector('.favorites__img' + commentParent.id).src = "..//images/heart transparent.svg";
                addFavorites = false;
            }
        }
    })

    let isBlockAnswerAdded = false;

    content.addEventListener('click', (event) => {
    if(event.target.matches("#section2__btn-answer" + commentParent.id)) {
        if (createNewAnswer && !isBlockAnswerAdded) {
            addedBlockAnswer.innerHTML = createNewAnswer;
            content.insertAdjacentElement('beforebegin', addedBlockAnswer);
            isBlockAnswerAdded = true; 
          } else if (createNewAnswer && isBlockAnswerAdded) {
            addedBlockAnswer.remove();
            isBlockAnswerAdded = false; 
          }
        }
    })

  let counterRaiting = document.querySelector('.raiting__show' + commentParent.id);

  content.addEventListener('click', (event) => {
    if(event.target.classList.contains('btn__raiting-down' + commentParent.id)){
        let raitingDown = counterRaiting.textContent;
        raitingDown--;
        counterRaiting.innerHTML = raitingDown--;; 
        console.log('down')
    }
    
    if(event.target.classList.contains('btn__raiting-up' + commentParent.id)){
        let raitingUp = counterRaiting.textContent;
        raitingUp++;
        counterRaiting.innerHTML = raitingUp++;; 
        console.log('up')
    }
  })
    
    body.addEventListener('input', event => {
        if (event.target.value.length > maxLenght) {
            event.target.value = event.target.value.substring(0, maxLenght);
        }

        if(event.target.classList.contains('blockAnswer' + commentParent.id)){
            let btnSend = document.querySelector('.btn__send' + commentParent.id);
            let counterEvery = document.querySelector('.current' + commentParent.id);
            counterEvery.innerHTML = event.target.value.length;

            if(event.target.value.length > 0) {
                btnSend.classList.remove('section1__btn')
                btnSend.classList.add('active')
            } 

            if(event.target.value) {
                myTextA = localStorage.setItem("myTextAnswer", event.target.value)
                console.log('hiii')
            }

            if(event.target.value.length === 0) {
                btnSend.classList.remove('active')
                btnSend.classList.add('section1__btn')
            }
        }

        if (textareaMain.value.length > 0) {
            btnSendMy.classList.remove('section1__btn');
            btnSendMy.classList.add('active');
          } else {
            btnSendMy.classList.remove('active');
            btnSendMy.classList.add('section1__btn');
          }

          counter.innerHTML = textareaMain.value.length;

        if (textareaMain.value.length > maxLenght) {
            event.target.value = event.target.value.substring(0, maxLenght);
        }

        if(event.target.classList.contains('blockAnswer' + commentParent.id)){
            event.target.addEventListener('keyup', () => {
                if(event.target.scrollTop > 0) {
                    event.target.style.height = event.target.scrollHeight + "px";
                } else {
                    event.target.style.height = (event.target.scrollHeight) + "px";
                }
              });
        }
    });

    let childComments = comments.filter(c => c.parentId === commentParent.id)
        childComments.forEach(childComment => {

    let elementAnswerSaved = 
    `<section class="section2">
        <div class="section3__comments">
            <img class="user__images section3__comments-image" src="${childComment.img}">
            <span class="style__name section3__comments-name">${childComment.author}</span>
            <span class="section3__comments-answer">${commentParent.author}
            <img src="..//images/arrow.svg" alt="arrow">
            </span>
            <span class="comments__date section3__comments-date">${childComment.date}</span>
        </div>
          <p class="section__content section3__content">${childComment.text}</p>
            <div class="section__btn-answer section3__btn">
                <button class="btn__style-first section3__btn-favorites favorites${childComment.id}">В избранное
                    <img class='favorites__img${childComment.id}' src="..//images/heart transparent.svg" alt="heart">
                </button>
                    <div class="section__btn-raiting section2__btn-container">
                        <button class="btn__style-first btn__raiting section2__btn-down">
                            <img class="btn__raiting-down${childComment.id}" src="..//images/btn -.svg">
                        </button>
                        <span class="raiting__show${childComment.id}">0</span>
                        <button class="btn__style-first btn__raiting section2__btn-up">
                            <img class="btn__raiting-up${childComment.id}" src="..//images/btn +.svg">
                        </button>
                    </div>
            </div>
    </section>`;

  content.insertAdjacentHTML('beforeend', elementAnswerSaved );

  let addFavorites = false; 
  content.addEventListener('click', (event) => {
      if(event.target.classList.contains('favorites' + childComment.id)){
          if(!addFavorites) {
              document.querySelector('.favorites__img' + childComment.id).src = "..//images/heart big.svg";
              addFavorites = true;
          } else if (addFavorites) {
              document.querySelector('.favorites__img' + childComment.id).src = "..//images/heart transparent.svg";
              addFavorites = false;
          }
      }
  })


  let counterRaitingChild = document.querySelector('.raiting__show' + childComment.id);

  content.addEventListener('click', (event) => {
    if(event.target.classList.contains('btn__raiting-down' + childComment.id)){
        let raitingDownC = counterRaitingChild.textContent;
        raitingDownC--;
        counterRaitingChild.innerHTML = raitingDownC--;
        }

    if(event.target.classList.contains('btn__raiting-up' + childComment.id)){
        let raitingDownC = counterRaitingChild.textContent;
        raitingDownC++;
        counterRaitingChild.innerHTML = raitingDownC++;
        }
    })
    })
}

let createNewAnswer =
`<secton class='section1'>
    <div class="section__answer section2__comments">
        <img class="user__images section3__comments-image" src="..//images/Maks user.png">
        <span class="style__name section3__comments-name">Максим Авдеенко</span>
        <span class="section3__comments-answer">${commentParent.author}
            <img src="..//images/arrow.svg" alt="arrow">
        </span>
            <span class="comments__date section3__comments-date">${new Date()}</span>
    </div>
        <div class="section1__row2">
            <div class="container">
                <textarea class="blockAnswer${commentParent.id} section1__input  textarea__answer" placeholder="Введите текст сообщения..." cols="30" rows="10"></textarea>
                    <div class="counter">
                        <span class="current${commentParent.id}">0</span>&nbsp;/
                            <span class="total section1__maxwords">Макс. 1000 символов</span>
                    </div>
            </div>
                <button id="btn__send" class="btn__style-first btn__send-answer section1__btn btn__send${commentParent.id}">Отправить</button>
        </div>
</section>`;
}); //forEach end

let answerSaved: any;
const childC = comments.find(child => child.isMyComment === false)
let maxParentId = comments.reduce((max, comment) => Math.max(max, comment.parentId), 0)
const childSavedA = comments.filter(child => child.id)

childSavedA.forEach(childSaved =>{
answerSaved = 
`<section class="section2">
    <div class="section3__comments">
        <img class="user__images section3__comments-image" src="${forAnswerSaved.img}">
        <span class="style__name section3__comments-name">${forAnswerSaved.author}</span>
        <span class="section3__comments-answer">${childSaved.author}
        <img src="..//images/arrow.svg" alt="arrow">
        </span>
        <span class="comments__date section3__comments-date">${new Date()}</span>
    </div>
      <p class="section__content section3__content">${localStorage.getItem("myTextAnswer", myTextA)}</p>
        <div class="section__btn-answer section3__btn">
            <button class="btn__style-first section3__btn-favorites favorites${childSaved.id}">В избранное
                <img class='favorites__img${childSaved.id}' src="..//images/heart transparent.svg" alt="heart">
            </button>
        </div>
</section>`;

let addFavorites = false; 
content.addEventListener('click', (event) => {
    if(event.target.classList.contains('favorites' + childSaved.id)){
        if(!addFavorites) {
            document.querySelector('.favorites__img' + childSaved.id).src = "..//images/heart big.svg";
            addFavorites = true;
        } else if (addFavorites) {
            document.querySelector('.favorites__img' + childSaved.id).src = "..//images/heart transparent.svg";
            addFavorites = false;
        }
    }
})

let createNewAnswer1 =
`<secton class='section1'>
    <div class="section__answer section2__comments">
        <img class="user__images section3__comments-image" src="..//images/Maks user.png">
        <span class="style__name section3__comments-name">Максим Авдеенко</span>
        <span class="section3__comments-answer">${childSaved.author}
            <img src="..//images/arrow.svg" alt="arrow">
        </span>
            <span class="comments__date section3__comments-date">${new Date()}</span>
    </div>
        <div class="section1__row2">
            <div class="container">
                <textarea class="blockAnswer${childSaved.id} section1__input  textarea__answer" placeholder="Введите текст сообщения..." cols="30" rows="10"></textarea>
                    <div class="counter">
                        <span class="current${childSaved.id}">0</span>&nbsp;/
                            <span class="total section1__maxwords">Макс. 1000 символов</span>
                    </div>
            </div>
                <button id="btn__send" class="btn__style-first btn__send-answer section1__btn btn__send${childSaved.id}">Отправить</button>
        </div>
</section>`;

let isBlockAnswerAdded = false;
body.addEventListener('click', (event) => {
    if(event.target.classList.contains('btn__send' + childSaved.id, 'active')) {
        if (createNewAnswer1 && !isBlockAnswerAdded) {
            addedBlockAnswer.innerHTML = createNewAnswer1
            addedBlockSavedAnswer.innerHTML = answerSaved;
            content.insertAdjacentElement('afterbegin', addedBlockAnswer);
            content.insertAdjacentElement('afterbegin', addedBlockSavedAnswer);
            isBlockAnswerAdded = true; 
            addedBlockAnswer.remove();
          } else if (createNewAnswer1 && isBlockAnswerAdded) {
            isBlockAnswerAdded = false; 
          }
        }
    })
})

body.addEventListener('click', (event) => {
    if(event.target.classList.contains('active')) {
        comments.push(
            {
                id: ++maxId,
                img: result.img, 
                author: result.author,
                date: new Date(),
                text: myTextAnswer,
                isComment: childC.isComment,
                parentId: childSavedA,
                isMyComment: false
            })
      }
})


let myText = '';
let myTextS;

textareaMain.addEventListener('input', () => {
    if(textareaMain.value) {
        myTextS = localStorage.setItem("myText", textareaMain.value)
        // console.log(event.target.value, textareaMain.value)
    }
})

let maxId = comments.reduce((max, comment) => Math.max(max, comment.id), 0)
const result = comments.find(item => item.isMyComment === true);

btnSendMy.addEventListener('click', (event) => {
    maxId++
    let newId = maxId;
    let savedTextMyComments = 
    `<section class="section2">
        <div class="section3__comments">
            <img class="user__images section1__image" src="${result.img}" alt="user">
            <span class="style__name section1__name">${result.author}</span>
            <span class="comments__date section3__comments-date">${new Date()}</span>
        </div>
        <p class="section__content section2__content">${localStorage.getItem("myText", myText)}</p>
            <div class="section__btn-comments section2__btn">
                <button class="btn__style-first section3__btn-favorites favorites${newId}">В избранное
                    <img class='favorites__img${newId}' src="..//images/heart transparent.svg" alt="heart">
                </button>
                <div class="section__btn-raiting section2__btn-container">
                    <button class="btn__style-first btn__raiting section2__btn-down">
                        <img class="btn__raiting-down${newId}" src="..//images/btn -.svg">
                    </button>
                    <span class="raiting__show${newId}">0</span>
                    <button class="btn__style-first btn__raiting section2__btn-up">
                        <img class="btn__raiting-up${newId}" src="..//images/btn +.svg">
                    </button>
                </div>
            </div>
    </section>`;
   
    if(event.target.classList.contains('active')) {
        comments.push(
            {
                id: maxId,
                img: result.img, 
                author: result.author,
                date: new Date(),
                text: textareaMain.value,
                isComment: result.isComment,
                parentId: 1,
                isMyComment: true
            })
        content.insertAdjacentHTML('afterbegin', savedTextMyComments);
        textareaMain.value = '';
        if(textareaMain.value.length === 0) {
            btnSendMy.classList.remove('active')
            btnSendMy.classList.add('section1__btn')
            counter.innerHTML = textareaMain.value.length;
        }
    }
    let counterRaitingA = document.querySelector('.raiting__show' + newId);
    
    content.addEventListener('click', (event) => {
      if(event.target.classList.contains('btn__raiting-down' + newId)) {
          let raitingDownA = counterRaitingA.textContent;
          raitingDownA--;
          counterRaitingA.innerHTML = raitingDownA--;
      }
      if(event.target.classList.contains('btn__raiting-up' + newId)) {
          let raitingDownA = counterRaitingA.textContent;
          raitingDownA++;
          counterRaitingA.innerHTML = raitingDownA++;
      }
    })
    let addFavorites = false; 
content.addEventListener('click', (event) => {
    if(event.target.classList.contains('favorites' + newId)){
        if(!addFavorites) {
            document.querySelector('.favorites__img' + newId).src = "..//images/heart big.svg";
            addFavorites = true;
        } else if (addFavorites) {
            document.querySelector('.favorites__img' + newId).src = "..//images/heart transparent.svg";
            addFavorites = false;
        }
    }
})

})





