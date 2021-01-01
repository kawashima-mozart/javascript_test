(()=>{

  class Accordion{
    //初期化
    constructor(obj){
      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);

      const triggerLength = $trigger.length;
      let index = 0;
      while (index < triggerLength){
        $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
        index++;
      }
    }

    //クリックしたら実行される処理
    clickHandler = (e)=>{
      e.preventDefault();

      const $target = e.currentTarget;
      const $content = $target.nextElementSibling;
      if ($content.style.display === 'block'){
        $content.style.display = 'none';
      } else{
        $content.style.display = 'block';
      }
    };
  }
  
const aAccordion = new Accordion({
  hookName: '#js-faq',
  tagName: 'p'
});

const bAccordion = new Accordion({
  hookName: '#js-accordion',
  tagName: 'a'
});
  
})();