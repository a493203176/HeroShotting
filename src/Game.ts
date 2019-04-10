// TypeScript file

class Game extends egret.DisplayObjectContainer {
    private _gun:egret.Bitmap;
    public constructor() {
        super();
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("bg_png");
        this.addChild(bg);
        this._gun = new egret.Bitmap(RES.getRes("gun_gatling_1_png"));
        this._gun.x = 640/2;
        this._gun.y = 960;
        this._gun.anchorOffsetX = 45;
        this._gun.anchorOffsetY = 90;
        //this._gun.rotation = 45;  // 旋转角度
        this.addChild(this._gun);
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.ontouch_begin,this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.ontouch_move,this);
        this.addEventListener(egret.TouchEvent.TOUCH_END,this.ontouch_end,this);
    }

    private ontouch_begin(e:egret.TouchEvent) {
        console.log("stageX " +e.$stageX);
        console.log("stageY " +e.$stageY);

        /* 角度计算公式
         *  angle = arctan((y2 - y1) / (x2 - x1))
         */
        var vx = e.stageX - this._gun.x;
        var vy = e.stageY - this._gun.y;
        this._gun.rotation = Math.atan2(vy,vx)*180/Math.PI + 90;

        //console.log("localX " +e.localX);
       // console.log("localY " +e.localY);
    }

    private ontouch_move(e:egret.TouchEvent) {
        /* 角度计算公式
         *  angle = arctan((y2 - y1) / (x2 - x1))
         */
        var vx = e.stageX - this._gun.x;
        var vy = e.stageY - this._gun.y;
        this._gun.rotation = Math.atan2(vy,vx)*180/Math.PI + 90;
    }

    private ontouch_end(e:egret.TouchEvent) {

    }
}