class CalcController {
    //Metodo construtor
    constructor(){
        //Atributos
        this._locale = 'pt-BR'
        this._displayCalcEL = document.querySelector("#display");
        this._DataEL = document.querySelector("#data");
        this._TimeEL = document.querySelector("#hora");
        this._currenteDate;
        this.initButtonsEvents();
        this.initialize();
    }

    initialize(){
        /*
        this._displayCalcEL.innerHTML = "654";
        this._DataEL.innerHTML = "26/10/2020";
        this._TimeEL.innerHTML = "21:15:00";
        */

        this.setDisplayDateTime();

        setInterval(()=>{
            this.setDisplayDateTime();    
        },1000);
    }

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{
            btn.addEventListener('click', e => {
                console.log(btn.className.baseVal.replace('btn-',''));
            });
        });
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._TimeEL.innerHTML;
    }

    set displayTime(valor){
        this._TimeEL.innerHTML = valor;
    }
    
    get displayDate(){
        return this._DataEL.innerHTML;
    }

    set displayDate(valor){
        this._DataEL.innerHTML = valor;
    }

    get displayCalc(){
        return this._displayCalcEL.innerHTML;
    }

    set displayCalc(valor){
        this._displayCalcEL.innerHTML = valor;
    }

    get currentDate(){
        return this._currenteDate = new Date();
    }

    set currentDate(valor){
        this._currenteDate = valor;
    }

}