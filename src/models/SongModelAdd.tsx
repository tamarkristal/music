
export default class SongModelAdd{

    public title:string='';
    public artist:string='';
    public price:number=0;
    public length:number=0;
    public genre:string='';
    constructor(title:string,artist:string,price:number,length:number,genre:string)
    {
       this.artist=artist;
       this.genre=genre;
       this.length=length;
       this.price=price;
       this.title=title;
    }
}