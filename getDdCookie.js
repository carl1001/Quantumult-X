//const url = "https://dingtalk.jiandaoyun.com/dashboard/app/5e44e189409e0f0006a58a51/get_member_signature";

if($request.url.indexOf("dingtalk" && "get_member_signature") != -1){
    getCookie("钉钉健康打卡", "ddCookie")}
    
    
    
function getCookie(name, key){
    var currentC = $request.headers.Cookie;
    var existC = key => $prefs.valueForKey(key);
    var create = (currentC, key) => $prefs.setValueForKey(currentC, key);
    if(currentC && existC(key)){
    currentC != existC(key) ?
    (create(currentC, key),
    $notify(name, "更新Cookie成功", "")) :
    console.log(name + "目前的cookie一致")
    }else{
        currentC != undefined ? 
        (create(currentC, key),
        $notify(name, "获取cookie成功", existC)) : 
        $notify(name, "获取Cookie失败", "")
    }
}
$done({})
