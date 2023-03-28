//Add Comments
let form = document.getElementById('comment-form');
let submit = document.getElementById('submit');
let commentList = document.getElementById('list');

const handleSubmit = (e) => {
    e.preventDefault();
    let text = document.getElementById('comment-input').value;
    let p = document.createElement('p');

    p.textContent = text;
    commentList.append(p);
}

submit.addEventListener('click', handleSubmit);

//Counter ticks up
let counter = document.getElementById('counter');
let init = counter.innerText
let recurId;

function handleCounter() {
    init++;
    counter.innerText = init;
    recurId = setTimeout(handleCounter, 1000);
};

const counterId = setTimeout(handleCounter, 1000);

 

//Plus-minus buttons
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');

plus.addEventListener('click', () => {
    init++;
    counter.innerText = init;
});

minus.addEventListener('click', () => {
    init--;
    counter.innerText = init;
});



//Heart button
let heart = document.getElementById('heart');
let ul = document.querySelector('ul');
let countArray = []
let likes;

function handleLikes() {

    if (!countArray.includes(init)) {
        let li = document.createElement('li');
        likes = 1
    
        li.textContent = `${init} was liked ${likes} time.`
        li.setAttribute('Id', init);

        ul.appendChild(li);
        countArray.push(init)
    
    } else {
        likes++
        document.getElementById(`${init}`).innerText = `${init} was liked ${likes} times.`
    };
};

heart.addEventListener('click', handleLikes);



//Pause Button
let pause = document.getElementById('pause');
let paused = false;

function handlePause() {
    paused = !paused
    
    if (paused) {
        heart.disabled = true;
        plus.disabled = true;
        minus.disabled = true;
        submit.disabled = true;
        pause.innerText = 'resume'
        clearTimeout(counterId);
        clearTimeout(recurId);
    } else {
        heart.disabled = false;
        plus.disabled = false;
        minus.disabled = false;
        submit.disabled = false;
        pause.innerText = 'pause'
        setTimeout(handleCounter, 1000);
    };
};

pause.addEventListener('click', handlePause);