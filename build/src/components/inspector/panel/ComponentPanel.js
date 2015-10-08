var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var $ = require('jquery');
var WOZLLA = require('wozllajs');
var angular2_1 = require('angular2/angular2');
var Panel = require('./Panel');
var ProjectFileField = require('../field/ProjectFileField');
var JsonField = require('../field/JsonField');
var SpriteSelector = require('../SpriteSelector');
var tpl = require('./component-panel.html');
var CompFactory = WOZLLA.component.ComponentFactory;
var tempValue = null;
var ComponentPanel = (function () {
    function ComponentPanel() {
        this.ptype = WOZLLA.component.Type;
    }
    ComponentPanel.prototype.getPropertyAnnos = function () {
        var ret = [];
        var compName = this.compdata.name;
        while (compName) {
            var compAnno = CompFactory.getAnnotation(compName);
            for (var _i = 0, _a = compAnno.properties; _i < _a.length; _i++) {
                var propAnno = _a[_i];
                ret.push(propAnno);
            }
            var superClass = CompFactory.getSuperClass(CompFactory.getType(compName));
            if (superClass) {
                compName = CompFactory.getName(superClass);
            }
            else {
                compName = null;
            }
        }
        return ret;
    };
    ComponentPanel.prototype.onPropertyChange = function (prop) {
    };
    ComponentPanel.prototype.onClick = function (e) {
        if ($(e.target).hasClass('close-btn')) {
            if (window.confirm('确认删除？')) {
                var idx = this.objdata.components.indexOf(this.compdata);
                this.objdata.components.splice(idx, 1);
            }
        }
    };
    ComponentPanel.prototype.getValueFromComponentData = function (compdata, propertyName) {
        var value = compdata.properties[propertyName];
        if (value) {
            tempValue = value;
            return value;
        }
        if (tempValue) {
            value = tempValue;
            compdata.properties[propertyName] = value;
        }
        return value;
    };
    ComponentPanel = __decorate([
        angular2_1.Component({
            selector: 'component-panel',
            properties: ['objdata', 'compdata', 'title']
        }),
        angular2_1.View({
            template: tpl,
            styles: [],
            directives: [SpriteSelector, Panel, angular2_1.coreDirectives, angular2_1.formDirectives, ProjectFileField, JsonField]
        }), 
        __metadata('design:paramtypes', [])
    ], ComponentPanel);
    return ComponentPanel;
})();
module.exports = ComponentPanel;
//# sourceMappingURL=ComponentPanel.js.map