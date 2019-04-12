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
var GameUI = (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "src/GameUISkin.exml";
        //console.log(this.lb_score.text);
        _this.Score = 0;
        _this.Time = 15000;
        return _this;
    }
    Object.defineProperty(GameUI.prototype, "Score", {
        get: function () {
            return parseInt(this.lb_score.text);
        },
        set: function (value) {
            this.lb_score.text = value.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameUI.prototype, "Time", {
        get: function () {
            return this._time;
        },
        set: function (value) {
            this._time = value;
            var s = Math.floor(value / 1000);
            var m = value % 1000;
            this.lb_time.text = s + "." + m;
        },
        enumerable: true,
        configurable: true
    });
    return GameUI;
}(eui.Component));
__reflect(GameUI.prototype, "GameUI");
//# sourceMappingURL=GameUI.js.map