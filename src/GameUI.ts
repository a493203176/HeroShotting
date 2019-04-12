class GameUI extends eui.Component{
	private lb_score:eui.Label;
	private lb_time:eui.Label;

	public constructor() {
		super();
		this.skinName = "src/GameUISkin.exml";
		//console.log(this.lb_score.text);
		this.Score = 0;
		this.Time = 15000;
	}

	public set Score(value:number) {
		this.lb_score.text = value.toString();
	}

	public get Score():number {
		return parseInt(this.lb_score.text); 
	}

	private _time:number;
	public set Time(value:number) {
		this._time = value;
		var s = Math.floor(value / 1000);
		var m = value % 1000;
		this.lb_time.text = s + "." + m;
	}

	public get Time():number {
		return this._time; 
	}
}