class CalcController {
    //Metodo construtor
    constructor(){
        //Atributos
        this._displayCalcEL = document.querySelector("#display");
        this._DataEL = document.querySelector("#data");
        this._TimeEL = document.querySelector("#hora");
        this._currenteDate;

        this.initialize();
    }

    initialize(){
        /*
        this._displayCalcEL.innerHTML = "654";
        this._DataEL.innerHTML = "26/10/2020";
        this._TimeEL.innerHTML = "21:15:00";
        */

        setInterval(()=>{
            this.displayDate = this.currentDate.toLocaleDateString('pt-BR');
            //this.displayDate = this.currentDate.toLocaleDateString('pt-BR');
        },1000);
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