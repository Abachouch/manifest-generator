class Code extends Object {

    private static _name = ""
    private static _shortName = ''
    private static _description = ''
    private static _themeColor = '#f44e4e'
    private static _backgroundColor = '#cccccc'
    private static _display = 'fullscreen'
    private static _scope = '/'
    private static _startUrl = '/'
    private static _icons = ''
    private static _icon: string
    private static _file: File 
    private static _aviableSizes= [72, 96, 128, 144, 152, 192, 256, 384, 512]


    public static get aviableSizes() : number[] {
        return Code._aviableSizes
    }
 
    
    public static get file(): File {
        return Code._file
    }
    public static set file(value: File) {
        Code._file = value
    }

    private static phoneBody:HTMLElement = document.querySelector('phone-body') ;
    private static phoneHeader:HTMLElement = document.querySelector('phone-header') ;

    public static get appname() {
        return Code._name
    }
    public static set appname(value) {
        Code._name = value.trim()
        Code.phoneBody.setAttribute('app-name', Code._name)
    }

    public static get shortName() {
        return Code._shortName
    }
    public static set shortName(value) {
        Code._shortName = value
    }

    public static get description() {
        return Code._description
    }
    public static set description(value) {
        Code._description = value
    }

    public static get themeColor() {
        return Code._themeColor
    }
    public static set themeColor(value) {
        Code._themeColor = value
        this.phoneHeader.setAttribute('theme-color' ,  Code._themeColor)
    }
    
    public static get backgroundColor() {
        return Code._backgroundColor
    }
    public static set backgroundColor(value) {
        Code._backgroundColor = value
        this.phoneBody.setAttribute('background-color' ,  Code._backgroundColor)
    }

    public static get display() {
        return Code._display
    }
    public static set display(value) {
        Code._display = value
    }

    public static get scope() {
        return Code._scope
    }
    public static set scope(value) {
        Code._scope = value
    }

    public static get startUrl() {
        return Code._startUrl
    }
    public static set startUrl(value) {
        Code._startUrl = value
    }
    public static get icons(): string {
        return Code._icons
    }

    public static get icon(): string {
        return Code._icon
    }
    public static set icon(value: string) {
        Code._icon = value

        Code.aviableSizes.forEach(s => {
            this._icons += 
            `
            {
                "src": "assets/imgs/app/icon-${s}x${s}.png",
                "sizes": "${s}x${s}",
                "type": "image/png"
            },
            `

        })

        this.phoneBody.setAttribute('icon' , Code._icon)
    }

    constructor() {
        super()
    }

    
    static toString(){
        return `
        {
            "name" : "${Code._name}" ,
            "description" : "${Code._description}"
            "short_name" : "${Code._shortName}",
            "theme_color" : "${Code._themeColor}" ,
            "background_color" : "${Code._backgroundColor}" ,
            "display" : "${Code._display}" ,
            "scope" : "${Code._scope}" ,
            "start_url" : "${Code._startUrl}" ,
            "icons" : [
                ${Code._icons}]
        }
        `
    }
}

export default Code;