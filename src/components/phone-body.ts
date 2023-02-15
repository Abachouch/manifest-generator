import Code from "../Code";

class PhoneBody extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>
        :host{
            display : block ;
            height : 100% ;
            padding-top: 25%;
        }
        img{
            display: block;
            width : 100px ;
            height : 100px ;
            margin : 0 auto ;
        }
        h3{
            text-align : center ;
        }
        
        </style>

        <img src=""  onerror="this.style.display='none'" >
        <h3></h3>
    `

        this.setAttribute('app-name', Code.appname)
        this.setAttribute('background-color', Code.backgroundColor)
    }

    static get observedAttributes() { return ['background-color', 'app-name', "icon"]; }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (oldValue && oldValue.trim() === newValue.trim())
            return

        switch (name) {
            case 'background-color':
                this.style.backgroundColor = newValue;
                break;
            case 'app-name':
                (<HTMLElement>this.shadowRoot.querySelector('h3')).innerText = newValue;
                break;
            case 'icon': const img = (<HTMLImageElement>this.shadowRoot.querySelector('img'))
            img.src = newValue
            img.style.display = "block";
                break;
        }
    }


}

window.customElements.define('phone-body', PhoneBody)