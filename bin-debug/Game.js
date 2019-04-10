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
        return _this;
    }
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