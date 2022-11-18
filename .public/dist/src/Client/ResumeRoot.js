var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
var ResumeRoot = /** @class */ (function (_super) {
    __extends(ResumeRoot, _super);
    function ResumeRoot(props) {
        return _super.call(this, props) || this;
    }
    ResumeRoot.prototype.render = function () {
        return React.createElement("div", null, "Testy test test");
    };
    return ResumeRoot;
}(React.Component));
export { ResumeRoot };
