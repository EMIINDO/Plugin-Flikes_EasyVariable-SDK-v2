"use strict";
{
    const SDK = globalThis.SDK;

    const PLUGIN_CLASS = SDK.Plugins.Flikes_EasyVariable;

    PLUGIN_CLASS.Type = class EasyVariableType extends SDK.ITypeBase {
        constructor(sdkPlugin, iObjectType) {
            super(sdkPlugin, iObjectType);
        }
    };
}