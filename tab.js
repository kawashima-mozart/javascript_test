(()=>{

  const $document = document;
  const $tab = $document.getElementById('js-tab')
  const $nav = $tab.querySelectorAll('[data-nav]');
  const $content = $tab.querySelectorAll('[data-content]');
  const ACTIVE_CLASS = 'is-active'
  const navLen = $nav.length

  const init = () =>{
    $content[0].style.display = 'block';
  };

  init();

  // クリックイベント
  const handleClick = (e)=>{
    e.preventDefault();
   
    //クリックされたnavとdataを取得
    const $this = e.target;
    const targetValue = $this.dataset.nav;

    //対象外のコンテンツをリセット
    let index = 0;
    while(index < navLen){
      $content[index].style.display = 'none';
      $nav[index].classList.remove(ACTIVE_CLASS)
      index++;
    }



    //対象のコンテンツをアクティブ化
    $tab.querySelectorAll('[data-content="' + targetValue +'"]')[0].style.display = 'block';
    $nav[targetValue].classList.add(ACTIVE_CLASS);
  };
    

  // 関数をnavに適応
  let index = 0;
  while (index < navLen){
  $nav[index].addEventListener('click', (e)=>handleClick(e));
  index++;
  }


})();