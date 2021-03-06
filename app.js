const quiz = [
  {
    question:'お酢に卵を殻ごといれると卵はどうなるでしょう？',
    answers: [
      '透明な卵になる',
      '鏡のようになんでもうつる卵になる',
      '卵が溶けてなくなる',
      '卵が石のように堅くなる'
    ],
    correct: '透明な卵になる'
  },{
    question:'リンカーンは大統領になる前は何をしていたでしょうか？？',
    answers: [
      'プロ野球選手',
      '猟師',
      'レスラー',
      'タクシー運転手'
    ],
    correct: 'レスラー'
  },{
    question:'飛行機の中で食べるように作られた野菜があります。その野菜はどれでしょう？',
    answers: [
      'ミニトマト',
      'パプリカ',
      'アボカド',
      'ズッキーニ'
    ],
    correct: 'ミニトマト'
  }
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


//クイズ野問題文、選択肢
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex ++;
  }
};
setupQuiz();

const clickHandler = (e) =>{
  if (quiz[quizIndex].correct === e.target.textContent ){
    window.alert('正解！');
    score ++;
  }else{
    window.alert('不正解！')
  }
  quizIndex ++;

  if (quizIndex < quizLength){
    setupQuiz();
    } else{
      window.alert('終了  あなたの正解数は' + score + '/' + quizLength + '問です' )
    }
};

let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click',(e)=>{
    clickHandler(e);
  });
  handlerIndex++;
}
