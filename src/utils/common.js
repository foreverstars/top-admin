// 封装公共类、方法

module.exports = {
  setCookie: function setCookie (name, value, expires, path, domain, secure) {
    var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    if (expires instanceof Date) {
      cookieText += "; expires =" + expires.toGMTString();
    }
    if (path) {
      cookieText += "; path=" + path;
    }
    if (domain) {
      cookieText += "; domain=" + domain;
    }
    if (secure) {
      CookieText += "; secure";
    }
    document.cookie = cookieText;
  },

  getCookie: function getCookie (name) {
    var cookieName = encodeURIComponent(name) + "=";
    var cookieStart = document.cookie.indexOf(cookieName);
    var cookieValue = null;
    if (cookieStart > -1) {
      var cookieEnd = document.cookie.indexOf(";", cookieStart);
      if (cookieEnd == -1) {
        cookieEnd = document.cookie.length
      }
      cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }
    return cookieValue
  }
}