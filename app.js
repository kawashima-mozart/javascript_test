const question = 'ゲーム市場,最も売れたゲームは？'
const answers = [
  'スーパーファミコン',
  'プレイステーション',
  'ニンテンドースイッチ',
  'ニンテンド-DS'
];
const correct = 'ニンテンド-DS';
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


//クイズ野問題文、選択肢
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex ++;
  }
};
setupQuiz();

const clickHandler = (e) =>{
  if (correct === e.target.textContent ){
    window.alert('正解！');
  }else{
    window.alert('不正解！')
  }
};

let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click',(e)=>{
    clickHandler(e);
  });
  handlerIndex++;
}
