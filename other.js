//run this code in chrome console when tab is on leetcode algorithm problemset page
//it will open and close pages
//extension will do all the other work
var arr=$("tr");
var res=[];
for(var i=0,len=arr.length;i<len;i++){
	if(arr[i].getElementsByTagName("span").length>0 && arr[i].getElementsByTagName("span")[0].classList[0]=="text-success"){
        var link=arr[i].getElementsByTagName("a")[0].getAttribute("href");
        link="https://leetcode.com"+link;
        res.push(link);
    }
}
var ws=[];
var i=0; var timer=setInterval(function(){
    if(i<res.length){
        ws.push(window.open(res[i]));
        console.log("open: "+i+" : "+res[i]);
        i++;
    }
    if(i>=4){
        if(i-4>=res.length)clearInterval(timer);
        ws[i-4].close();
    }
    
    }, 8000); 

setInterval(function(){window.alert(i++)},1000)