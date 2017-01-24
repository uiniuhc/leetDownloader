
function getTextFromAceLine(lineNode) {
    if(lineNode==undefined)return "";
    var childs = lineNode.childNodes;
    var res = "";
    var i = 0;
    var len = childs.length;
    for (i = 0; i < len; i++) {
        if(childs[i]==undefined)continue;
        if(childs[i].nodeType == 3){
            //text
            res += childs[i].textContent;
        }else{
            //span, text is in it
            res += childs[i].childNodes[0].textContent;
        }
    }
    res+="\n";
    return res;
}

var obj=new Object();
title = $("h3")[0].childNodes[0].textContent.trim();
title=title.replace(/ /g,"_");
var arr = $(".ace_line");
var res="";
for(var i=0,len=arr.length;i<len;i++){
    res+=getTextFromAceLine(arr[i]);
}
var lang=$(".select2-selection__rendered")[0].childNodes[0].textContent;
obj.fileName=title;
obj.codeText=res;
obj.usedLang=lang;
/*start download to local storage*/
/*
var objs=localStorage.leetCodeProblems;
if(objs==undefined){
    objs=[obj];
    localStorage.leetCodeProblems=JSON.stringify(objs);
}
else{
objs=JSON.parse(objs);
//check repeatations
for(var i=0,len=objs.length;i<len;i++){
if(objs[i].fileName==obj.fileName && objs[i].usedLang==obj.usedLang)
    break;
}
if(i==len){
    objs[len]=obj;
    localStorage.leetCodeProblems=JSON.stringify(objs);
}
}
*/
/*end download to local storage */
//window.alert(JSON.stringify(obj));
chrome.runtime.sendMessage(obj);
//var uploadPage="http://192.168.43.224:10365/uploadfile.php";
