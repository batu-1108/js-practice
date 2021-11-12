const　Quiz = [
    {question:"しゃっくりを止める可能性のある調味料は？",
    answer:["お酢","砂糖","塩","醤油"],
    correct:"砂糖"
    },{question:"和菓子の「ようかん」はもともとあるものを煮込んだスープでした。あるスープとは何でしょう？",
    answer:["牛の血","牛乳","羊の肉","馬の肉"],
    correct:"羊の肉"
    },{
        question:"お坊さんが木魚をたたくのは何のためでしょう？",
    answer:["リズムをとるため","眠くならないようにするため","意味はない","祈るため"],
    correct:"眠くならないようにするため"
    },{
        question:"氷を長持ちさせるには？",
    answer:["塩を入れて氷を作る","沸騰させた水で氷を作る","砂糖を入れて氷を作る","お酢を入れて氷を作る"],
    correct:"沸騰させた水で氷を作る"
    }
];
const quizLength = Quiz.length;
let quizIndex = 0;
let score = 0;



const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;
document.getElementById("js-question").textContent = Quiz[quizIndex].question;

const setupQuiz = () => {
    let buttonIndex = 0;
let buttonLength = $button.length;
while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = Quiz[quizIndex].answer[buttonIndex];
    buttonIndex++;
}
}
setupQuiz();

const clickHandler = (e) => {
    if(Quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解");
        score++;
    }else{
        window.alert("不正解");
    }

    quizIndex++;
    if(quizIndex < quizLength){
        setupQuiz();
    }else{
        window.alert("終了。あなたの正解数は" + score + "/" + quizLength +"です。");
    }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener("click",(e) => {
        clickHandler(e);
});
handlerIndex++;
}


