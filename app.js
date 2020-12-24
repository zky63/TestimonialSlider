const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const text = document.querySelector('#text');
const names = document.querySelector('#names');
const picture = document.querySelector('#picture');
const textContainer = document.querySelector('#textContainer');


prev.addEventListener('click', toPrev);
next.addEventListener('click', toNext);
   

function toPrev(){
        textContainer.classList.remove('mainContainer__textContainer--John');
        text.innerHTML = '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”';        
        names.innerHTML = 'Tanya Sinclair <span id = "position" class = "textContainer__position">UX Engineer</span>';
        picture.classList.remove('mainContainer__imgContainer--John');
        picture.classList.add('mainContainer__imgContainer--Tanya');
}

function toNext(){
        textContainer.classList.add('mainContainer__textContainer--John');
        text.innerHTML = '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”';
        names.innerHTML = 'John Tarkpor <span id = "position" class = "textContainer__position">Junior Front-end Developer</span>';
        picture.classList.add('mainContainer__imgContainer--John');
}

