class CalcController {
    //Metodo construtor
    constructor(){
        //Atributos
        this._addOperation = [];
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

        this.setLastNumberToDisplay();
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        })
    }

    getLastOperation(){
        return this._addOperation[this._addOperation.length-1];
    };

    isOperator(value){
        return (['+', '-', '*', '/', '%'] .indexOf(value) > -1);
    };

    setLastOperation(value){
        this._addOperation[this._addOperation.length-1] = value;
    };

    pushOperation(value){
        this._addOperation.push(value);

        if (this._addOperation.length > 3){
            this.calc();
        }
    }

    calc(){
        let last = '';

        if (this._addOperation.length > 3){
            this._addOperation.pop();
        }
        
        let result = eval(this._addOperation.join(""));

        if ( last == '%'){
            result /= 100;
            this._addOperation = [result];
        }else{
            this._addOperation = [result];
            
            if (last) this._addOperation.push(last);
        }
        
        this.setLastNumberToDisplay();
    }

    setLastNumberToDisplay(){
        let lastnumber;

        for (let i = this._addOperation.length-1; i >=0; i--){
            if(!this.isOperator(this._addOperation[i])){
                lastnumber = this._addOperation[i];
                break;
            }
        }

        if (!lastnumber) lastnumber = 0;

        this.displayCalc = lastnumber;
    }

    addOperation(value){
        if (isNaN(this.getLastOperation())){
            if (this.isOperator(value)){
                this.setLastOperation(value);
            }else if(isNaN(value)) {
                console.log("A - ");
            } else{
                this.pushOperation(value);
                this.setLastNumberToDisplay();
            }

        }else{

            if (this.isOperator(value)){
                this.pushOperation(value);
            }else{
                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(parseInt(newValue));

                //Atualizar display
                this.setLastNumberToDisplay();
            }
            
        }

        //console.log(this._addOperation);
    };

    clearEntry(){
        this._addOperation.pop()
        this.setLastNumberToDisplay();
    };

    clearAll(){
        this._addOperation = [];
        this.setLastNumberToDisplay();
    }

    displayError(){
        this.displayCalc = "Error";
    }

    execBtn(value){
        switch(value){
            case "ac":
                this.clearAll();
                break;
            case "ce":
                this.clearEntry();
                break;
            case "multiplicacao":
                this.addOperation("*");
                break;
            case "subtracao":
                this.addOperation("-");
                break;
            case "soma":
                this.addOperation("+");
                break;
            case "divisao":
                this.addOperation("/");
                break;
            case "porcento":
                this.addOperation("%");
                break;
            case "igual":
                this.calc();
                break;
            case "ponto":
                this.addOperation(".");
                break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case '8':
            case "9":
                this.addOperation(parseInt(value));
                break;
            default:
                this.displayError();
                break;
        }
    };

    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{
            this.addEventListenerAll(btn, "click drag", e => {
                let textBtn = btn.className.baseVal.replace('btn-','');
                //console.log(btn.className.baseVal.replace('btn-', ''));
                this.execBtn(textBtn);
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{
                btn.style.cursor = "pointer";
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