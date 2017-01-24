

var uploadPage="http://192.168.43.224:10365/uploadfile.php";

chrome.runtime.onMessage.addListener(function(obj,sender,sendResponse) {
   
//upload file in next version
     $.post(uploadPage,obj);
     //window.alert("get msg:"+obj.fileName);
});







//