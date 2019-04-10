class Zombie  extends egret.Sprite{
	private _body:egret.Bitmap;
	public constructor() {
		super();
		this._body = new egret.Bitmap(RES.getRes("enemy_05_walk_front_00_png"));
		this.addChild(this._body);
	}
	private _speed:number = 220;
	public onUpdate(span:number) {
		this.y += this._speed*(span/1000);

		if (this.y  >= 900) {
			this.parent.removeChild(this);
		}
	}

	public getBlock():egret.Rectangle {
		return new egret.Rectangle(this.x+10,this.y,58-10,60-10);
	}
}