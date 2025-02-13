"use strict";
{
    globalThis.C3.Plugins.Flikes_EasyVariable.Exps = {
        GetVariable(varName)
        {
            //implementation
            return this.runtime._iRuntime.globalVars[varName];
        }
    };
}