/*!
 * IsSmartTv.js v0.9.1
 * by Jean Kássio
 *
 * More info:
 * https://github.com/jeankassio
 *
 * Copyright Jean Kássio
 * Released under the MIT license
 * https://github.com/jeankassio/IsSmartTv.js/blob/main/LICENSE
 *
 * @preserve
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['exports'], factory);
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    // CommonJS
    factory(exports);
  } else {
    // Browser global
    factory(root.is = {});
  }
})(typeof self !== 'undefined' ? self : this, (function (exports) {
  var smartTVUserAgents = [
    "airties", "aldinord", "aldisued", "altech uec", "altus", "amazon", "aoc", "arris", "atlantic", 
    "atvio", "awox", "aya", "bangolufsen", "beko", "blaupunkt_umc", "botech", "bush", "cecotec", 
    "celcus", "changhong", "clayton", "continental_edi", "crenova", "crown", "daewoo", "digihome", 
    "dikom", "diora", "dmm", "elektroland", "electronia", "essentielb", "expressluck", "finlux", 
    "fu", "fuego", "gogen", "grundig", "haier", "hanseatic", "hi-level", "hisense", "hitachi", 
    "hofer", "horizon", "hotel", "humax", "hyundai", "ikea", "intek", "inverto", "jvc", "kalley", 
    "kendo", "kubo", "laurus", "lg", "lifemaxx", "linsar", "loewe", "logik", "luxor", "manhattan", 
    "maxbell", "medion", "micromax", "mori", "nad", "namkoo", "nevir", "novatech", "oki", "oktos", 
    "orava", "otto", "panasonic", "philips", "pioneer", "pulse", "radiola", "rca", "realcable", 
    "reflexion", "roadstar", "roku", "saba", "samsung", "sanyo", "seg", "seg_micromax", "seg_vivax", 
    "selectron", "sharp", "shengchuang", "skyworth", "smarttech", "soniq", "sony", "stiebel", 
    "sunstech", "supersonic", "sven", "teac", "technicolor", "technika", "technisat", "techwood", 
    "tel", "telefunken", "telesystem", "terris", "thomson", "tivo", "tornado", "toucan", "toyomi", 
    "trimax", "trium", "tvstar", "unika", "upstar", "vaxa", "vestel", "videocon", "viewsonic", 
    "vitek", "vivax", "vox", "wahl", "walker", "wallis", "watson", "welson", "wemax", "westwood", 
    "winia", "xiaomi", "xtreme", "yamaha", "zeevee", "zephir", "zgemma", 
    "appletv", "crkey", "aftmm", "aftss", "aftka", "aftb", "aftt", "smarttv", "tv", "smart-tv", 
    "tizen", "webostv", "webos", "bravia", "dtv",
    // Additional identifiers for sticks and dongles
    "chromecast", "fire tv", "fire_tv", "amazon fire", "nexus player", "androidtv", "mitv", "stick"
  ];
  
  function SmartTV() {
    var userAgent = navigator.userAgent.toLowerCase();
    for (var i = 0; i < smartTVUserAgents.length; i++) {
      if (userAgent.indexOf(smartTVUserAgents[i]) !== -1) {
        return true;
      }
    }
    return false;
  }

  exports.SmartTV = SmartTV;
}));

