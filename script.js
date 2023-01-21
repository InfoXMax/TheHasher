function hashText() {
    var str = document.getElementById("text-input").value;
    var md5 = CryptoJS.MD5(str);
    var sha1 = CryptoJS.SHA1(str);
    var sha256 = CryptoJS.SHA256(str);
    var sha512 = CryptoJS.SHA512(str);
    var base64 = btoa(str);

    document.getElementById("output").innerHTML =
      "Your Text : " + str + "<br>" +
      "The MD5 Hash : " + md5 + "<br>" +
      "The SHA1 Hash : " + sha1 + "<br>" +
      "The SHA256 Hash : " + sha256 + "<br>" +
      "The SHA512 Hash : " + sha512 + "<br>" +
      "The Base64 : " + base64;
  }