//���û�һ��ͼ��js
function changeImg() {
    var imgSrc = $("#codeImg");
    var src = imgSrc.attr("src");
    imgSrc.attr("src", chgUrl(src));
}  

//����ʱ�����ȥ�������   
function chgUrl(url) {
    var timestamp = (new Date()).valueOf();if ((url.indexOf("&") >= 0)) {
        url = url + "&timestamp=" + timestamp;
    } else {
        url = url + "?timestamp=" + timestamp;
    }
    return url;
}