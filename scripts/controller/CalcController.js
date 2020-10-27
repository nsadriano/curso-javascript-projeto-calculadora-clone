class CalcController {
    //Metodo construtor
    constructor(){
        //Atributos
        this._displayCalc = "0";
        this._currenteDate;

        this.initialize();
    }

    initialize(){
        let displayCalcEL = document.querySelector("#display");
        let DataEL = document.querySelector("#data");
        let TimeEL = document.querySelector("#hora");

        displayCalcEL.innerHTML = "4567";
        DataEL.innerHTML = "26/10/2020";
        TimeEL.innerHTML = "21:15:00";

    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentDate(){
        return this._currenteDate;
    }

    set currentDate(valor){
        this._currenteDate = valor;
    }
}