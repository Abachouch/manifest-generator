import { readAndCompressImage } from 'browser-image-resizer';
import Code from '../Code';

class DownloadSelect extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({
            mode : "open"
        })
    }

    connectedCallback(){

        const style= document.createElement('style') ; 
        style.innerHTML = `
        :host{
            position: absolute;
            display: block;
            background-color: black;
            width: 100%;
            
            top: 5px;
            border-radius: 0 0 4px 4px;
            font-size: .8rem;

        }
        div{
            display : flex; 
            justify-content : space-between ;
            align-items: center;
            margin: 0.5rem;
            opacity : .8 ;
            cursor : pointer ;
        }

        div:hover{
            opacity : 1  ;
        }
        `

        this.shadowRoot.append(style)
        Code.aviableSizes.forEach(s => {
            this.shadowRoot.appendChild(sizeOption(s))
        })

        function sizeOption(size:number){
            const wraper = document.createElement('div') ; 
            const txt = document.createElement('span') ;
            txt.innerText = `${size}x${size}`

            const icon = document.createElement('i') ;
            icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`
        
            wraper.append(txt , icon)
            wraper.addEventListener('click' , ()=> {
                resizeTo(size)
            })
            return wraper ;
        }

    }

}


async function  resizeTo(size:number  ){
    const config = {
        quality: 0.7,
        maxWidth: size,
        maxHeight: size,
        mimeType : 'image/png'
      };
      let resizedImage = await readAndCompressImage(Code.file, config);      
      downloadFile(size , resizedImage)
}


function downloadFile( size:number  ,  file:Blob){
    const anch = document.createElement('a')
    anch.href = URL.createObjectURL(file)  ;
    anch.download = `icon-${size}x${size}.png`
    document.body.appendChild(anch);
    anch.click()
    anch.remove()
    URL.revokeObjectURL(file.toString())
}

window.customElements.define('download-select' , DownloadSelect)