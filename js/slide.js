export default class Slide{
    constructor(slide,wrapper){
        this.slide = document.querySelector(slide)
        this.wrapper= document.querySelector(wrapper);
    }

    onStart(event) {
      event.preventDefault() ; 
      console.log('mousedown');
      this.wrapper.addEventiListener('mousemove',this.onMove);

    }

    onMove(event){
      console.log('moveu')
    }

    onEnd(event) {
        console.log('acabou')
        this.wrapper.removeEventListene('mousemove',this.onMove);

    }

    addSlideEvents() {
       this.wrapper.addEventiListener('mousedown',this.onStart);
       this.wrapper.addEventiListener('mouseup',this.onEnd);
      
    }

    bindEvents() {
       this.onStart = this.onStart.bind(this);
       this.onMove = this.onMove.bind(this);
       this.onEnd = this.onEnd.bind(this);

    }

    init() {
       this.bindEvents() ;
       this.addSlideEvents();
       return this;
    }
}