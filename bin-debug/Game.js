// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this) || this;
        _this._lasttimestamp = 0;
        _this._brithTimer = 0; // 怪物出现时间戳
        var bg = new egret.Bitmap();
        bg.texture = RES.getRes("bg_png");
        _this.addChild(bg);
        _this._gun = new egret.Bitmap(RES.getRes("gun_gatling_1_png"));
        _this._gun.x = 640 / 2;
        _this._gun.y = 960;
        _this._gun.anchorOffsetX = 45;
        _this._gun.anchorOffsetY = 90;
        //this._gun.rotation = 45;  // 旋转角度
        _this.addChild(_this._gun);
        _this.touchEnabled = true;
        _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.ontouch_begin, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.ontouch_move, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.ontouch_end, _this);
        egret.startTick(_this.onUpdate, _this);
        _this._actor_layer = new egret.Sprite();
        _this.addChild(_this._actor_layer);
        _this._bullets_layer = new egret.Sprite();
        _this.addChild(_this._bullets_layer);
        return _this;
    }
    Game.prototype.onUpdate = function (timestamp) {
        //console.log("onUpdate");
        var span = timestamp - this._lasttimestamp;
        this._lasttimestamp = timestamp;
        this._brithTimer += span;
        if (this._brithTimer >= 1000) {
            // console.log("onUpdate  111");
            this._brithTimer = 0;
            var zombie = new Zombie();
            zombie.x = 80 + Math.random() * 480;
            zombie.y = 200 * Math.random();
            this._actor_layer.addChild(zombie);
        }
        for (var i = this._actor_layer.numChildren - 1; i >= 0; i--) {
            var actor = this._actor_layer.getChildAt(i); // 获取小僵尸
            actor.onUpdate(span);
        }
        return false;
    };
    Game.prototype.ontouch_begin = function (e) {
        console.log("stageX " + e.$stageX);
        console.log("stageY " + e.$stageY);
        /* 角度计算公式
         *  angle = arctan((y2 - y1) / (x2 - x1))
         */
        var vx = e.stageX - this._gun.x;
        var vy = e.stageY - this._gun.y;
        this._gun.rotation = Math.atan2(vy, vx) * 180 / Math.PI + 90;
        //console.log("localX " +e.localX);
        // console.log("localY " +e.localY);
    };
    Game.prototype.ontouch_move = function (e) {
        /* 角度计算公式
         *  angle = arctan((y2 - y1) / (x2 - x1))
         */
        var vx = e.stageX - this._gun.x;
        var vy = e.stageY - this._gun.y;
        this._gun.rotation = Math.atan2(vy, vx) * 180 / Math.PI + 90;
    };
    Game.prototype.ontouch_end = function (e) {
    };
    return Game;
}(egret.DisplayObjectContainer));
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map