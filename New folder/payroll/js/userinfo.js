"use strict";
function _typeof(o) {
    "@babel/helpers - typeof";
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o
    }
    : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
    }
    )(o)
}
var skipInfoCallPrdCommon = !0
  , DCArray = ["eu", "in", "com"]
  , hostUrl = window.location.hostname
  , zDomain = hostUrl.split(".")[1];
"zoho" !== zDomain && (DCArray = ["com"],
zDomain = "localzoho");
var dcName, DCCount = DCArray.length;
function loadAccountsInfoScript() {
    dcName = DCArray.pop();
    var o = document.createElement("script");
    o.className = "accounts-info-script",
    o.onload = checkIsUserLoggedin,
    o.onerror = checkIsUserLoggedin,
    o.src = "https://accounts." + zDomain + "." + dcName + "/u/info",
    document.getElementsByTagName("head")[0].appendChild(o)
}
function getCookieValue(o) {
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(o).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
}
function deviceType() {
    return navigator.userAgent.indexOf("Android") > -1 && navigator.userAgent.indexOf("Mobile") > -1 ? "Mobile - Android" : navigator.userAgent.indexOf("Android") > -1 && -1 === navigator.userAgent.indexOf("Mobile") ? "Tablet - Android" : navigator.userAgent.indexOf("iPad") > -1 ? "Tablet - iPad" : navigator.userAgent.indexOf("iPhone") > -1 ? "Mobile - iPhone" : /webOS|iPod|BlackBerry|IEMobile|MeeGo|Opera Mini/i.test(navigator.userAgent) ? "Mobile" : "Desktop"
}
function checkIsUserLoggedin() {
    if (document.querySelectorAll(".accounts-info-script").length === DCCount || window.zohouser && window.zohouser.DISPLAY_NAME ? (showUserInfo(),
    void 0 !== window.geturL && void 0 !== window.resetUrl && (window.resetUrl("payroll"),
    window.geturL())) : DCArray.length && loadAccountsInfoScript(),
    !window.countryCode) {
        var o = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*zip\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
        if (o) {
            var e = o.split("|");
            window.countryCode = e[1].toUpperCase()
        }
    }
    if ("RU" === window.countryCode && "object" === _typeof(window.zohouser) && 0 === Object.keys(window.zohouser).length) {
        var n = "https://accounts.zoho.com/signin?servicename=ZohoPayroll&signupurl=https://www.zoho.com/payroll/signup/";
        document.querySelectorAll(".signup").forEach(function(o) {
            o.href = n,
            o.innerHTML = "Sign in"
        }),
        $(".ZP-form").css("padding-top", "30px"),
        $(".ZP-form").html('<div style="text-align: center"><a class="btn btn-primary" href="' + n + '">Sign in</a></div>'),
        $(".account-login").remove()
    }
}
function showUserInfo() {
    var o = window.zohouser && window.zohouser.DISPLAY_NAME
      , e = getHostNameForURL();
    if (o) {
        var n, t = "".concat(window.getCookieValue("ZohoMarkSrc"), ",").concat(window.getCookieValue("ZohoMarkRef"), ",").concat(window.getCookieValue("cookie-uid"), ",").concat(window.deviceType(), ",").concat(window.location.href);
        n = "https://payroll." + e + "/?ref_value=" + encodeURIComponent(t),
        o = decodeHexString(o),
        $(".signin").css("display", "none"),
        $(".signup").attr("href", n),
        $(".signup").each(function() {
            var o = $(this).attr("data-logged-in-text");
            o ? $(this).text(o) : $(this).text("Access Zoho Payroll")
        }),
        $(".zp-access").html("Access Zoho Payroll"),
        document.querySelector(".pricing-page-comparison") && document.querySelector(".pricing-page-comparison").classList.add("logged-in");
        var r = window.location.href.includes("/ar-sa/") ? "الوصول إلى Zoho Payroll" : "ACCESS ZOHO PAYROLL";
        $(".ZP-form").css("padding-top", "30px"),
        $(".ZP-form").html('<div style="text-align: center"><a class="btn btn-primary" href="' + n + '">' + r + "</a></div>"),
        $(".account-login").remove()
    } else
        window.noUserLoggedIn && window.noUserLoggedIn()
}
function decodeHexString(o) {
    return o = (o = o.replace(/\\x([0-9A-Fa-f]{2})/g, function() {
        return String.fromCharCode(parseInt(arguments[1], 16))
    })).replace(/\\u([\d\w]{4})/gi, function() {
        return String.fromCharCode(parseInt(arguments[1], 16))
    })
}
function getHostNameForURL() {
    return zDomain + "." + dcName
}
function isLocalDC() {
    var o = getHostNameForURL();
    return "localzoho.com" === o || "localhost" === o
}
function swapLoginUrls() {
    document.querySelectorAll(".signin").forEach(function(o) {
        var e = o.getAttribute("href");
        e = e.replace(new RegExp("zoho\\.(\\w*)","g"), "localzoho.com"),
        o.setAttribute("href", e)
    })
}
$(document).ready(function() {
    loadAccountsInfoScript()
});
