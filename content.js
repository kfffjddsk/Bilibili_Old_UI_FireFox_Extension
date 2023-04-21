if (window.location.hostname === "www.bilibili.com") {
  var cookieValue = getCookie("go_old_video");
  if (cookieValue !== null) {
    document.cookie = "go_old_video=1; path=/; domain=.bilibili.com; hostonly=false";
    document.cookie = "i-wanna-go-back=1; path=/; domain=.bilibili.com; hostonly=false";
  } else {
    document.cookie = "go_old_video=1; path=/; domain=.bilibili.com; hostonly=false";
    document.cookie = "i-wanna-go-back=1; path=/; domain=.bilibili.com; hostonly=false";
  }
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
  return null;
}
