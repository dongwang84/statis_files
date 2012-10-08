var _tg="http://stat.yicai.com/dolog/tt.gif";
var _fls="http://stat.yicai.com/dolog/col_2.swf";
var _cover_data="http://stat.yicai.com/webcover.php";
var _hotspotmap_data="http://stat.yicai.com/hotspotmap.php";
var _ckey="__ckid1__=";
var _lkey="__lkey__=";
var _cpath="/";
var _csec=false;
var _cff=false;
var _hflash=false;
var _cid="";
var _iof=false;
var _cfc1=0;
var _cfc2=0;

var _doc=document,_loc=_doc.location,_cok=_doc.cookie,_dom=_doc.domain;
//if (_udl.hash) _udlh=_udl.href.substring(_udl.href.indexOf('#'));
var _st=new Date().getTime();
var _ed=new Date(_st+63072000000);

if(_dom.substring(0,4)=="www."){
 _dom=_dom.substring(4,_dom.length);
}
_dom = _dom.toLowerCase();

function doLog(p){
 var url;
 _cid=getCookie(_ckey);
 if (!_cid || _cid=="") {
   createflash("watermarkflash", _fls, document.domain);
   setTimeout(function(){checkFlash(p);},500);
   //   var rt=Math.round(_st/1000);
   //   var rr=Math.round(Math.random()*2147483647);
   //   _cid=rt+"_"+rr;
   //   _hflash=true;
   //   tDoLog(p,_cid);
 } else {
   tDoLog(p,_cid);
 }
}

function flash_loaded(){
  _iof = true;
}

function is_ready_flash(){
  //alert(_iof);
  return _iof;
  //return a.PercentLoaded() == 100;
}

function get_movie(mn){
  var fc;
  if (navigator.appName.indexOf("Microsoft") != -1){
    return window[mn];
  } else {
    return document[mn];
  }
}

function checkFlash(p){
  //var a = _doc.getElementById("watermarkflash");
  if(is_ready_flash()){
    var a = get_movie("watermarkflash");
    _cid=a.getCookieId();
    if(!_cid || _cid=="") {
      var rt=Math.round(_st/1000);
      var rr=Math.round(Math.random()*2147483647);
      _cid=rt+"_"+rr;
      a.setCookieId(_cid);
    }
    _hflash=true;
    tDoLog(p,_cid);
  } else {
    if(_cfc1 < 2) {
      _cfc1 = _cfc1 + 1;
      setTimeout(function(){checkFlash(p);},500);
    } else {
      var rt=Math.round(_st/1000);
      var rr=Math.round(Math.random()*2147483647);
      _cid=rt+"_"+rr;
      _hflash=true;
      tDoLog(p,_cid);
    }
  }
}

function tDoLog(p,cid){
 var r="";
 var lt=getCookie(_lkey);
 setCookie2(_ckey,_cid,_ed,_cpath,_dom,_csec);
 //setCookie(_ckey,_cid,_ed,_cpath,_dom,_csec);
 var url=_loc.host+_loc.pathname+_loc.search;
 //var url=_loc.href;
 if (p && p!="") {
  r+="&a="+_uES(p,1);
  r+="&b="+_uES(_loc.href,1);
  r+="&c=-&d=-&e=-&f=-&g=-";
 } else {
  r+="&a="+_uES(url,1);
  if (_doc.referrer && _doc.referrer!="") r+="&b="+_uES(_doc.referrer,1);
  else r+="&b=-";
  if (lt && lt!="") r+="&c="+lt;
  else r+="&c=-";
  if (_doc.title && _doc.title!="") r+="&d="+_uES(_doc.title);
  else r+="&d=-";
  if (_loc.host && _loc.host!="") r+="&e="+_uES(_loc.host);
  else r+="&e=-";
  if (_loc.hash) r+="&f="+_uES(_loc.href.substring(_loc.href.indexOf('#')));
  else r+="&f=-";
  r+="&g="+_uGH();
 }
 r+="&h="+getOs();
 r+="&m="+getBr();
 r+="&n="+_st;
 
 //var rr = "type=1"+"&cid="+cid+r;
// rr = _sp(rr);

 var i2=new Image(1,1);
 i2.src=_tg+"?type=1"+"&cid="+_cid+r;
 //i2.src=_tg+"?dd="+rr;
 //_gp(rr);
 i2.onload=function() { _uVoid(); }
 doUserId();
 doExFunc();
}

function getOs(){
  return navigator.platform;
}

function getBr(){
  var nUserAgent = navigator.userAgent;
  if(nUserAgent.indexOf("MSIE")>-1){
    var msi = nUserAgent.indexOf("MSIE");
    var brname = nUserAgent.substr(msi, 8);
    //alert(brname);
    return brname;
  }
  else if(nUserAgent.indexOf("Firefox")>-1)
    return "Firefox";
  else if(nUserAgent.indexOf("Opera")>-1)
    return "Opera";
  else if(nUserAgent.indexOf("Safari")>-1)
    return "Safari";
  else if(nUserAgent.indexOf("Chrome")>-1)
    return "Chrome";
  else if(nUserAgent.indexOf("OmniWeb")>-1)
    return "OmniWeb";
  else if(nUserAgent.indexOf("Netscape")>-1)
    return "Netscape";
  else if(nUserAgent.indexOf("Gecko")>-1)
    return "Gecko";
  else if(nUserAgent.indexOf("Mozilla")>-1)
    return "Mozilla";
  else if(nUserAgent.indexOf("Maxthon")>-1)
    return "Maxthon";
  else if(nUserAgent.indexOf("360se")>-1)
    return "360se";
  else return "other";
}

function doExFunc(){
  var v;
  var i = _loc.search.indexOf("coverid=");

  if(i != -1){
    var e = _loc.search.indexOf("&",i);
    if(e == -1){
      v = _loc.search.substr(i+8);
    } else {
      v = _loc.search.substr(i+8, e-i-7);
    }
    doWebCover(v);
    return ;
  }

  i = _loc.search.indexOf("hotmapid=");
  if(i != -1){
    var e = _loc.search.indexOf("&",i);
    if(e == -1){
      v = _loc.search.substr(i+9);
    } else {
      v = _loc.search.substr(i+9, e-i-8);
    }
    doHotspotMap(v);
    return ;
  }

  v=getCookie("__ckcover__=");
  if (v && v!=""){
    doWebCover(v);
    return ;
  } 
  
  v=getCookie("__ckhotmap__=");
  if (v && v!=""){
    doHotspotMap(v);
    return ;
  }

}

function doUserId(){
  //alert(_loc.pathname);
 //if(_loc.pathname == '/IES/authsec/portal/default/Weekly+Report/Fill+in+Weekly+Report'){
 //if(_loc.pathname == '/ies.html'){
    var ido=_doc.getElementById("param0.employeeId");
    if(ido && ido!=""){
      var id=ido;
      var i2=new Image(1,1);
      i2.src=_tg+"?type=2&cid="+_cid+"&userid="+id;
      i2.onload=function() { _uVoid();}
    }
 //}
}

function doWebCover(id){
  var v;
  var ed=new Date(_st+1800000);
  setCookie("__ckcover__=",v,ed,_cpath,_dom,_csec);
  ed=new Date(_st-1);
  setCookie("__ckhotmap__=",v,ed,_cpath,_dom,_csec);
  v = "coverid=" + id;
  var url=_loc.pathname+_loc.search;
  var req=_cover_data + "?url=" + _uES(url) + "&" + v + "&tid="+ _st;
  _cover_ifr=new ActiveXObject("Microsoft.XMLHTTP");
  _cover_ifr.onreadystatechange = getReady;
  _cover_ifr.Open("GET", req, true);
  _cover_ifr.send(null);
}

function dAlert(aObj,coverData){
  if(aObj == null || aObj.href == null || aObj.href == "")
    return false;
  var j = 0;
  for(var i = 0; i < aObj.href.length; i++) {
    if(aObj.href.charCodeAt(i) == 47) {
      j++;
      if (j == 3) break;
    }
  }
  var ll = aObj.href.substr(i);
  ll = _uES(ll);
  var vd = coverData[ll];
  if(vd != null)
    sAlert(aObj,vd);
}

function sAlert(aObj,vData){
  var fw = vData.click_pc*3/10;
  var lx=0,ly=0;
  var el = aObj;
  for (;el!=null;lx+=el.offsetLeft,ly+=el.offsetTop,el=el.offsetParent);

  var msgObj=parent.document.createElement("div")
  msgObj.style.background="white";
  msgObj.style.border="1px solid #336699";
  msgObj.style.position = "absolute";
  msgObj.style.left = lx + 223;
  msgObj.style.top = ly + aObj.offsetHeight + 75;
  msgObj.style.marginLeft = "-225px" ;
  msgObj.style.marginTop = -75+parent.document.documentElement.scrollTop+"px";
  msgObj.style.width = "90px";
  msgObj.style.height = "20px";
  msgObj.style.lineHeight ="1px";
  msgObj.style.display="inline";
  msgObj.style.overflow="hidden";
  msgObj.style.zIndex = "10001";
  
  var allBox=parent.document.createElement("div")
  allBox.style.top = "1px";
  allBox.style.width = "30px";
  allBox.style.height = "15px";
  allBox.style.border="#CDCDCD 1px solid";
  allBox.style.display="inline";
  allBox.style.overflow="hidden";
  allBox.style.float="left";
  allBox.style.position = "absolute";
  allBox.setAttribute("align","center");
  msgObj.appendChild(allBox);
  
  var fillBox=parent.document.createElement("div")
  fillBox.style.height = "11px";
  fillBox.style.background="#0000ff";
  fillBox.style.border="#ff6600 1px solid";
  fillBox.style.position = "absolute";
  fillBox.style.top = "1px";
  fillBox.style.left = "1px";
  fillBox.style.width = fw + "px";
  fillBox.style.zIndex = "1";
  fillBox.style.overflow="hidden";
  allBox.appendChild(fillBox);
  
  var texBox=parent.document.createElement("div")
  texBox.style.top = "1px";
  texBox.style.width = "50px";
  texBox.style.height = "15px";
  texBox.style.left = "31px";
  texBox.style.display="inline";
  texBox.style.overflow="hidden";
  texBox.style.position = "absolute";
  texBox.style.font="10px/1.2em Verdana, Geneva, Arial, Helvetica, sans-serif";
  texBox.innerHTML=vData.click_pc + "%";
  msgObj.appendChild(texBox);
  
  parent.document.body.appendChild(msgObj);
}

function alertAllLink(coverData){
  var allA = parent.document.all.tags("A");
   for(var i = 0; i < allA.length; i++) {
     dAlert(allA[i],coverData);
   }
}

function _uES(s,u) {
  return escape(s);
}

function getReady()
{
 if(_cover_ifr.readyState==4){
  if(_cover_ifr.status==200){
    coverData=eval('('+_cover_ifr.responseText+')');
    alertAllLink(coverData);
    //alert(coverData['/InfoCenter/DocLib/Forms/AllItems.aspx']["click"]);
  } else {
    alert(1);
  }
 }
}


function doHotspotMap(id){
  var v;
  var ed=new Date(_st+1800000);
  setCookie("__ckhotmap__=",v,ed,_cpath,_dom,_csec);
  ed=new Date(_st-1);
  setCookie("__ckcover__=",v,ed,_cpath,_dom,_csec);
  v = "hotmapid=" + id;
  /*var ifr = document.createElement("iframe");
  ifr.style.display="none"
  document.body.appendChild( ifr );*/
  var url=_loc.pathname+_loc.search;
  var imgsrc = _hotspotmap_data + "?url=" + _uES(_uES(url)) + "&" + v + "&tid="+ _st;
  //alert(imgsrc);
  //document.write('<img id="fff" style="width:' + screen.width + 'px; height:' +  screen.height + 'px;position: absolute; top: 0; left: 0" src="' + imgsrc + '"/>');
  var newElement = document.createElement('div');
  newElement.id = 'hotspot_id';
  //newElement.style.width = (screen.width - 50) + 'px';
  //newElement.style.height = (screen.height + 30) + 'px';
  newElement.style.width = document.body.scrollWidth + 'px';
  newElement.style.height = document.body.scrollHeight + 'px';
  newElement.style.position = 'absolute';
  newElement.style.top = 0 ;
  newElement.style.left = 0 ;
  newElement.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + imgsrc + '", sizingMethod="scale")';
  document.body.appendChild(newElement);

  //document.write('<span id="hotspot_id" style="width:' + screen.width + 'px; height:' +  screen.height + 'px; position: absolute; top: 0; left: 0;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + imgsrc + '\', sizingMethod=\'scale\');" />');
  //document.write('<div id="hotspot_id" style="width:' + screen.width + 'px; height:' +  screen.height + 'px; position: absolute; top: 0; left: 0;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + imgsrc + '\', sizingMethod=\'scale\');" />');


}

function getCookie(name){
 var r="";
 if (!name || name=="") return r;
 if (!_cok || _cok=="") return r;
 var s=_cok.indexOf(name);
 if(s>-1){
  s+=name.length;
  var e=_cok.indexOf(";",s);
  if(e<0) e=_cok.length;
  r=_cok.substring(s,e);
 }
 return r; 
}
 
function setCookie(name,value,expires,path,domain,secure){
 var e = ((!expires || expires=="") ? "" : (";expires="+expires.toGMTString()));
 var p = ((!path || path=="") ? "" : (";path="+path));
 var d = ((!domain || domain=="") ? "" : (";domain="+domain));
 var s = ((secure==false) ? "" : (";secure"));
 _doc.cookie = name + escape(value) + e + p + d + s;
}

function setCookie2(name,value,expires,path,domain,secure){
  setCookie(name,value,expires,path,domain,secure);
  if(!_hflash){
    createflash("watermarkflash", _fls, document.domain);
    setTimeout(setFlashCookie,500);
  }
}

function setFlashCookie(){
  if(is_ready_flash()){
    var a = get_movie("watermarkflash");
    a.setCookieId(_cid);
    _hflash=true;
  } else {
    if(_cfc1 < 2) {
      _cfc2 = _cfc2 + 1;
      setTimeout(setFlashCookie,500);
    }
  }
}

function _uGH() {
 var hid;
 var wc=window;
 if (wc && wc.gaGlobal && wc.gaGlobal.hid) {
  hid=wc.gaGlobal.hid;
 } else {
  hid=Math.round(Math.random()*0x7fffffff);
  if (!wc.gaGlobal) wc.gaGlobal={};
  wc.gaGlobal.hid=hid;
 }
 return hid;
}
 
function _uVoid() { return; }
 
function _uES(s,u) {
 //if (typeof(encodeURIComponent) == 'function') {
 // if (u) return encodeURI(s);
 // else return encodeURIComponent(s);
 //} else {
  return escape(s);
 //}
}
 
function _uUES(s) {
 //if (typeof(decodeURIComponent) == 'function') {
 //     alert(1);
  //return decodeURIComponent(s);
 //} else {
  return unescape(s);
 //}
}

function _sp(code)
{
  var c=String.fromCharCode(code.charCodeAt(0)+code.length);
  for(var i=1;i<code.length;i++){
    c+=String.fromCharCode(code.charCodeAt(i)+code.charCodeAt(i-1));
  }
  return _uES(c);
}

function _gp(code)
{ //alert(code);
  code = _uUES(code);
  //alert(code);
  var c=String.fromCharCode(code.charCodeAt(0)-code.length);
  //alert(String.fromCharCode(code.charCodeAt(0)-code.length)+ ","+code.charCodeAt(0)+","+code.length);
  for(var i=1;i<code.length;i++){
    c+=String.fromCharCode(code.charCodeAt(i)-c.charCodeAt(i-1));
    //if(i<3)alert(String.fromCharCode(code.charCodeAt(i)-c.charCodeAt(i-1)) + "," + code.charCodeAt(i) + "," + c.charCodeAt(i-1));
  }
  return c;
}

function createflash(flashId, flashSrc, flashParam) {
  if(_cff)return;
  _cff=true;
  //document.write('<object type="application/x-shockwave-flash" data="' + flashSrc +
  //  '" width="0" height="0" id="' + flashId +
  //  '"><param name="allowScriptAccess" value="always" /> ' +
  //  '<param name="movie" value="' + flashSrc + '" />' +
  //  '<PARAM NAME=FlashVars VALUE="domainAllowed=' + flashParam + '" />' +
  //  '<param name="bgColor" value="#fff" /> </object>');
  
  document.write('<div id="' + flashId + '", name="' + flashId + '"></div>');

  var flashvars = {
    domainAllowed: flashParam
    };
  var params = {
    menu: "false",
    scale: "noScale",
    allowScriptAccess: "always"
    };
  swfobject.embedSWF(flashSrc, flashId, "0", "0", "9.0.0", "expressInstall.swf", flashvars, params);
}

function mousePosition(ev){
    if(ev.pageX || ev.pageY){
        var x = Math.round(ev.pageX * 256 / document.body.scrollWidth);
        var y = Math.round(ev.pageY * 192 / document.body.scrollHeight);
        return "&x=" + x + "&y=" + y;
    } else {
        var ox = (ev.clientX + document.body.scrollLeft - document.body.clientLeft);
        var oy = (ev.clientY + document.body.scrollTop - document.body.clientTop);
        var x = Math.round(ox * 256 / document.body.scrollWidth);
        var y = Math.round(oy * 192 / document.body.scrollHeight);
        //var s = "";
        //s += "ox:" + ox;
        //s += "oy:" + oy;
        //s += "x:" + x;
        //s += "y:" + y;
        //s += "x1:" + x1;
        //s += "y1:" + y1;
        //s += "document.body.clientWidth:" + document.body.clientWidth;
        //s += "document.body.clientHeight:" + document.body.clientHeight;
        //s += "document.body.scrollWidth:" + document.body.scrollWidth;
        //s += "document.body.scrollHeight:" + document.body.scrollHeight;
        //s += "window.screen.width:" + window.screen.width;
        //s += "window.screen.height:" + window.screen.height;

        //alert(s);
        return "&x=" + x + "&y=" + y;
    };
}

function mousedown_e(ev){
    ev = ev || window.event;
    var mousePos = mousePosition(ev);
    var url=_loc.host+_loc.pathname+_loc.search;
    //alert(mousePos);
    var i2=new Image(1,1);
    i2.src=_tg+"?type=4&cid=-&a="+_uES(url,1)+mousePos;
    i2.onload=function() { _uVoid();}
}

document.onmousedown = mousedown_e;
document.onkeydown = function(e) {
    var curKeyCode = isIe ? event.keyCode : e.which;
    if(curKeyCode == 27) {
      var hotspot_obj=_doc.getElementById("hotspot_id");
      if(hotspot_obj){
        hotspot_obj.style.display = "none";
      }
    }
};

var agt = navigator.userAgent.toLowerCase();
var isIe = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1) && (agt.indexOf("omniweb") == -1));





