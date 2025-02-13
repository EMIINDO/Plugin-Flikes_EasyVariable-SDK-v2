"use strict";
{
    globalThis.C3.Plugins.Flikes_EasyVariable.Acts = {
        Insert_Var(nvar, valVal)
        {
            //implementation
            this.runtime._iRuntime.globalVars[nvar] = valVal;
        }
    };
}