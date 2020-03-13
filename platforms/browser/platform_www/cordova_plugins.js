cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-exit/www/exit.js",
        "id": "cordova-plugin-exit.exit",
        "pluginId": "cordova-plugin-exit",
        "clobbers": [
            "cordova.plugins.exit"
        ]
    },
    {
        "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
        "id": "cordova-plugin-x-toast.Toast",
        "pluginId": "cordova-plugin-x-toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-exit": "1.0.3",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-x-toast": "2.7.2"
}
// BOTTOM OF METADATA
});