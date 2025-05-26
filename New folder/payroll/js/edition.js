"use strict";
function setEditionCookie(e, o) {
    if (cookieCheck()) {
        var n = new Date
          , i = o;
        n.setDate(n.getDate() + 150),
        document.cookie = encodeURIComponent(e) + "=" + i + "; path=/; expires=" + n
    }
}
function getCookieValue(e) {
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
}
function isSupportedEdition(e) {
    return -1 !== ["in", "us", "ae", "en-sa"].indexOf(e)
}
function switchEdition(e) {
    var o = window.location.href
      , n = o.split("/");
    isSupportedEdition(n[3]) ? n[3] = e : n.splice(3, 0, e),
    setEditionCookie("ZFEdition", e),
    o = n.join("/"),
    window.location.href !== o && (window.location = o)
}
document.addEventListener("DOMContentLoaded", function() {
    if (!window.CountryCode) {
        var e = getCookieValue("zip");
        if (e) {
            var o = e.split("|");
            window.CountryCode = o[1].toUpperCase()
        }
    }
});
