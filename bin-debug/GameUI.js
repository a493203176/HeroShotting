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
        _this.btn_replay.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onclick_replay, _this);
        _this.onclick_replay();
        return _this;
    }
    GameUI.prototype.onclick_replay = function () {
        this.group_over.visible = false;
        this.Score = 0;
        this.Time = 15000;
    };
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
            if (this._time <= 0) {
                this._time = 0;
                this.GameOver();
            }
            var s = Math.floor(this._time / 1000);
            var m = this._time % 1000;
            this.lb_time.text = s + "." + m;
        },
        enumerable: true,
        configurable: true
    });
    GameUI.prototype.GameOver = function () {
        this.group_over.visible = true;
        this.lb_overscore.text = this.Score.toString();
        if (this.Score > this.getBestScore()) {
            this.setBestScore(this.Score);
        }
        this.lb_bestscore.text = this.getBestScore().toString();
    };
    GameUI.prototype.getBestScore = function () {
        var str = egret.localStorage.getItem("KZ_BESTSCORE");
        if (str == null) {
            return 0;
        }
        else {
            return parseInt(str);
        }
    };
    GameUI.prototype.setBestScore = function (value) {
        egret.localStorage.setItem("KZ_BESTSCORE", value.toString());
    };
    return GameUI;
}(eui.Component));
__reflect(GameUI.prototype, "GameUI");
//# sourceMappingURL=GameUI.js.map