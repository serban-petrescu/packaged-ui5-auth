sap.ui.define(["sap/ui/base/Object"],function(t){return t.extend("spet.auth.selector.CustomDataSelector",{metadata:{interfaces:["spet.auth.ISelector"]},_sKey:"",_oValue:null,constructor:function(t){this._sKey=t.name,this._oValue=t.value},check:function(t,e){return e.data&&e.data(this._sKey)===this._oValue}})},!1);