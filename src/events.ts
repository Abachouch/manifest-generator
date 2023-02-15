import Code from './Code';

document.addEventListener('DOMContentLoaded', () => {

    // name 
    const nameInput = <HTMLInputElement>document.getElementById('nameInput');
    nameInput.addEventListener('keyup', () => {
        Code.appname = nameInput.innerText.trim()
    })

    // short name
    const shortNameInput = <HTMLInputElement>document.getElementById('shortNameInput');
    shortNameInput.addEventListener('keyup', () => {
        Code.shortName = shortNameInput.innerText.trim()
    })

     // description 
     const descriptionInput = <HTMLInputElement>document.getElementById('descriptionInput');
     descriptionInput.addEventListener('keyup', () => {
         Code.description = descriptionInput.innerText.trim()
     })

    // theme Color
    const themeColorInput = <HTMLElement>document.getElementById('themeColorInput');
    themeColorInput.addEventListener('onColorChange', (e: CustomEvent) => {
        Code.themeColor = e.detail.color;
    })

    // background Color
    const backgroundColorInput = <HTMLElement>document.getElementById('backgroundColorInput');
    backgroundColorInput.addEventListener('onColorChange', (e: CustomEvent) => {
        Code.backgroundColor = e.detail.color;
    })

    // background Color
    const displayInput = <HTMLSelectElement>document.getElementById('displayInput');
    displayInput.addEventListener('change', (e) => {
        Code.display = displayInput.value;
    })

     // scoupe 
     const scoupInput = <HTMLInputElement>document.getElementById('scoupInput');
     scoupInput.addEventListener('keyup', () => {
         Code.scope = scoupInput.innerText.trim()
     })

    // start URL 
    const startUrlInput = <HTMLInputElement>document.getElementById('startUrlInput');
    startUrlInput.addEventListener('keyup', () => {
        Code.startUrl = startUrlInput.innerText.trim()
    })

    // icon
    const iconInput = <HTMLInputElement>document.getElementById('iconInput');
    const download= document.getElementById('download')
    const btnShowDownloadModal = document.getElementById('btnShowDownloadModal') ;
    document.getElementById('iconChooser').addEventListener('click', () => {
        iconInput.click()
    })

    iconInput.addEventListener('change', () => {

        console.log(iconInput.value)
        Code.icon = URL.createObjectURL(iconInput.files[0])
        Code.file = iconInput.files[0]

        // show download button 
        download.style.display = 'inline-block'

        // show icons array
        document.getElementById('iconsCode').innerText = Code.icons
    })

    // Copy 
    const copyBtn =  document.getElementById('copy')
    copyBtn.addEventListener('click' , ()=> {        
        navigator.clipboard.writeText(Code.toString());
    }) 

    // download Modal
    let sizesSelect:HTMLElement  ;
    btnShowDownloadModal.addEventListener('click' , ()=> {
        if(sizesSelect) {
            sizesSelect.remove() ; 
            sizesSelect = null ;
            console.log('sozezae')
            return
        }
        const downloadPlaceHolder = document.getElementById('downloadPlaceHolder') ; 
        sizesSelect = document.createElement('download-select') ; 
        downloadPlaceHolder.append(sizesSelect)
    })
}) 

