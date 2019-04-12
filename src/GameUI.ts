class GameUI extends eui.Component{
	private lb_score:eui.Label;
	private lb_time:eui.Label;
	private group_over:eui.Group;
	private lb_overscore:eui.Label;
	private lb_bestscore:eui.Label;
	private btn_replay:eui.Button;

	public constructor() {
		super();
		this.skinName = "src/GameUISkin.exml";
		//console.log(this.lb_score.text);
		this.btn_replay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_replay,this);
		this.onclick_replay();
	}

	private onclick_replay() {
		this.group_over.visible = false;
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
		if (this._time <= 0) {
			this._time = 0;
			this.GameOver();
		}
		var s = Math.floor(this._time / 1000);
		var m = this._time % 1000;
		this.lb_time.text = s + "." + m;
	}

	public get Time():number {
		return this._time; 
	}

	private GameOver() {
		this.group_over.visible = true;
		this.lb_overscore.text = this.Score.toString();

			if (this.Score > this.getBestScore()) {
				this.setBestScore(this.Score);
			}
			this.lb_bestscore.text = this.getBestScore().toString();
	}

	public getBestScore():number 
	{
		var str = egret.localStorage.getItem("KZ_BESTSCORE");
		if (str == null) {
			return 0;
		}else {
			return parseInt(str);
		}
	}

	public setBestScore(value:number) {
		egret.localStorage.setItem("KZ_BESTSCORE",value.toString());
	}

}