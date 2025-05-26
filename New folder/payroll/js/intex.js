"use strict";
var _lhref = window.location.href
  , checkurl = _lhref.indexOf("'") > -1 || _lhref.indexOf("<") > -1 || _lhref.indexOf(">") > -1 || _lhref.indexOf('"') > -1;
function createCookie(e, o) {
    if (checkAnalyticsCookie()) {
        var t = document.cookie.indexOf(e) >= 0
          , n = document.referrer;
        if (!t && n) {
            var i = new Date;
            i.setTime(i.getTime() + 2592e6);
            var l = "; expires=" + i.toGMTString() + "; domain=.zoho.com; path=/";
            document.cookie = e + "=" + encodeURIComponent(n) + l,
            document.cookie = o + "=" + encodeURIComponent(window.location.href) + l
        }
    }
}
function setSelectedTab(e) {
    $("#" + e + " > a").addClass("selected")
}
function setSelectedFeature(e) {
    $("#" + e).addClass("selected")
}
function showMenu(e) {
    var o = e.lastElementChild
      , t = e.firstElementChild;
    o.classList.add("dropdown-show"),
    t.style.opacity = "0.6"
}
function hideMenu(e) {
    var o = e.lastElementChild
      , t = e.firstElementChild;
    o.classList.remove("dropdown-show"),
    t.style.opacity = "1"
}
function toggleHeaderMenu(e) {
    var o = e.lastElementChild
      , t = e.firstElementChild;
    o.classList.contains("dropdown-show") ? (o.classList.remove("dropdown-show"),
    t.style.opacity = "1") : (o.classList.add("dropdown-show"),
    t.style.opacity = "0.6")
}
checkurl && (window.location = _lhref.replace(/'/g, "%27").replace(/"/g, "%22").replace(/</g, "%3C").replace(/>/g, "%3E"));
