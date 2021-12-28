//const url = "https://dingtalk.jiandaoyun.com/dashboard/app/5e44e189409e0f0006a58a51/get_member_signature";

if($request.url.indexOf("dingtalk" && "get_member_signature") != -1){
    getHeaders("钉钉健康打卡", "Cookie", "ddCookie");
    getHeaders("钉钉健康打卡","X-CSRF-Token", "ddToken");
    getHeaders("钉钉健康打卡", "X-Request-ID", "ddId")
}
    
    
    
function getHeaders(name, subName, key){
    var currentC = $request.headers.subName;
    var existC = key => $prefs.valueForKey(key);
    var create = (currentC, key) => $prefs.setValueForKey(currentC, key);
    if(currentC && existC(key)){
    currentC != existC(key) ?
    (create(currentC, key),
    $notify(name, `更新${subName}成功`, "")) :
    console.log(name + `目前的${subName}一致`)
    }else{
        currentC != undefined ? 
        (create(currentC, key),
        $notify(name, `获取${subName}成功`, existC)) : 
        $notify(name, `获取${subName}失败`, "")
    }
}
$done({})
