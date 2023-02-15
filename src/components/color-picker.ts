window.customElements.define('color-picker', class extends HTMLElement {

    constructor() {
        super()

        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {


        this.shadowRoot.innerHTML = `
        <style>
        :host{
            display : inline-block ;
        }
            .wraper{
                display : inline; 
                align-items: center;
                position : relative ; 
            }
            .preview{
                display : inline-block;
                margin : 0 2px ;
                overflow : hidden ; 
                width : 12px ;
                height: 12px ;
                border-radius : 50% ;
                border : 1px solid black ;
            }
            
            .code{
                color : current ;
            }
            .picker{
                position : absolute ; 
                width :100% ;
                opacity : 0 ;
                display: inline ;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
            
            }
        </style>

        <span class="wraper" >
            <span class="preview" ></span>
            <span class="code"></span>
            <input type="color" class="picker" />
        </span>
        `;

        "theme_color"

        const pickerEl =<HTMLInputElement> this.shadowRoot.querySelector('.picker') ;
        pickerEl.addEventListener('change' , (e)=> {
            this.changeColor((<HTMLInputElement>e.target).value);
        });

        const initialColor = this.getAttribute('color') ;
        this.changeColor( initialColor) ;
}

    changeColor(color:string){
        const previewEL =<HTMLElement> this.shadowRoot.querySelector('.preview') ; 
        const codeEl =<HTMLElement>  this.shadowRoot.querySelector('.code') ;
        previewEL.style.backgroundColor = color ;
        codeEl.innerText = color ;
        
        const colorChangeEvent = new CustomEvent("onColorChange" , {detail : {
            color 
        }})
        this.dispatchEvent(colorChangeEvent) 
       }
}

)



