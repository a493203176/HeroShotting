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
var Zombie = (function (_super) {
    __extends(Zombie, _super);
    function Zombie() {
        var _this = _super.call(this) || this;
        _this._speed = 220;
        _this._body = new egret.Bitmap(RES.getRes("enemy_05_walk_front_00_png"));
        _this.addChild(_this._body);
        return _this;
    }
    Zombie.prototype.onUpdate = function (span) {
        this.y += this._speed * (span / 1000);
        if (this.y >= 900) {
            this.parent.removeChild(this);
        }
    };
    Zombie.prototype.getBlock = function () {
        return new egret.Rectangle(this.x + 10, this.y, 58 - 10, 60 - 10);
    };
    return Zombie;
}(egret.Sprite));
__reflect(Zombie.prototype, "Zombie");
//# sourceMappingURL=Zombie.js.map