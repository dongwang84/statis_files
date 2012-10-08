// $Id: jquery.js,v 1.12.2.3 2008/06/25 09:38:39 goba Exp $ 

/*
 * jQuery 1.2.6 - New Wave Javascript
 *
 * Copyright (c) 2008 John Resig (jquery.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Date: 2008-05-24 14:22:17 -0400 (Sat, 24 May 2008)
 * Rev: 5685
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(H(){J w=1b.4M,3m$=1b.$;J D=1b.4M=1b.$=H(a,b){I 2B D.17.5j(a,b)};J u=/^[^<]*(<(.|\\s)+>)[^>]*$|^#(\\w+)$/,62=/^.[^:#\\[\\.]*$/,12;D.17=D.44={5j:H(d,b){d=d||S;G(d.16){7[0]=d;7.K=1;I 7}G(1j d=="23"){J c=u.2D(d);G(c&&(c[1]||!b)){G(c[1])d=D.4h([c[1]],b);N{J a=S.61(c[3]);G(a){G(a.2v!=c[3])I D().2q(d);I D(a)}d=[]}}N I D(b).2q(d)}N G(D.1D(d))I D(S)[D.17.27?"27":"43"](d);I 7.6Y(D.2d(d))},5w:"1.2.6",8G:H(){I 7.K},K:0,3p:H(a){I a==12?D.2d(7):7[a]},2I:H(b){J a=D(b);a.5n=7;I a},6Y:H(a){7.K=0;2p.44.1p.1w(7,a);I 7},P:H(a,b){I D.P(7,a,b)},5i:H(b){J a=-1;I D.2L(b&&b.5w?b[0]:b,7)},1K:H(c,a,b){J d=c;G(c.1q==56)G(a===12)I 7[0]&&D[b||"1K"](7[0],c);N{d={};d[c]=a}I 7.P(H(i){R(c 1n d)D.1K(b?7.V:7,c,D.1i(7,d[c],b,i,c))})},1g:H(b,a){G((b==\'2h\'||b==\'1Z\')&&3d(a)<0)a=12;I 7.1K(b,a,"2a")},1r:H(b){G(1j b!="49"&&b!=U)I 7.4E().3v((7[0]&&7[0].2z||S).5F(b));J a="";D.P(b||7,H(){D.P(7.3t,H(){G(7.16!=8)a+=7.16!=1?7.76:D.17.1r([7])})});I a},5z:H(b){G(7[0])D(b,7[0].2z).5y().39(7[0]).2l(H(){J a=7;1B(a.1x)a=a.1x;I a}).3v(7);I 7},8Y:H(a){I 7.P(H(){D(7).6Q().5z(a)})},8R:H(a){I 7.P(H(){D(7).5z(a)})},3v:H(){I 7.3W(19,M,Q,H(a){G(7.16==1)7.3U(a)})},6F:H(){I 7.3W(19,M,M,H(a){G(7.16==1)7.39(a,7.1x)})},6E:H(){I 7.3W(19,Q,Q,H(a){7.1d.39(a,7)})},5q:H(){I 7.3W(19,Q,M,H(a){7.1d.39(a,7.2H)})},3l:H(){I 7.5n||D([])},2q:H(b){J c=D.2l(7,H(a){I D.2q(b,a)});I 7.2I(/[^+>] [^+>]/.11(b)||b.1h("..")>-1?D.4r(c):c)},5y:H(e){J f=7.2l(H(){G(D.14.1f&&!D.4n(7)){J a=7.6o(M),5h=S.3h("1v");5h.3U(a);I D.4h([5h.4H])[0]}N I 7.6o(M)});J d=f.2q("*").5c().P(H(){G(7[E]!=12)7[E]=U});G(e===M)7.2q("*").5c().P(H(i){G(7.16==3)I;J c=D.L(7,"3w");R(J a 1n c)R(J b 1n c[a])D.W.1e(d[i],a,c[a][b],c[a][b].L)});I f},1E:H(b){I 7.2I(D.1D(b)&&D.3C(7,H(a,i){I b.1k(a,i)})||D.3g(b,7))},4Y:H(b){G(b.1q==56)G(62.11(b))I 7.2I(D.3g(b,7,M));N b=D.3g(b,7);J a=b.K&&b[b.K-1]!==12&&!b.16;I 7.1E(H(){I a?D.2L(7,b)<0:7!=b})},1e:H(a){I 7.2I(D.4r(D.2R(7.3p(),1j a==\'23\'?D(a):D.2d(a))))},3F:H(a){I!!a&&D.3g(a,7).K>0},7T:H(a){I 7.3F("."+a)},6e:H(b){G(b==12){G(7.K){J c=7[0];G(D.Y(c,"2A")){J e=c.64,63=[],15=c.15,2V=c.O=="2A-2V";G(e<0)I U;R(J i=2V?e:0,2f=2V?e+1:15.K;i<2f;i++){J d=15[i];G(d.2W){b=D.14.1f&&!d.at.2x.an?d.1r:d.2x;G(2V)I b;63.1p(b)}}I 63}N I(7[0].2x||"").1o(/\\r/g,"")}I 12}G(b.1q==4L)b+=\'\';I 7.P(H(){G(7.16!=1)I;G(b.1q==2p&&/5O|5L/.11(7.O))7.4J=(D.2L(7.2x,b)>=0||D.2L(7.34,b)>=0);N G(D.Y(7,"2A")){J a=D.2d(b);D("9R",7).P(H(){7.2W=(D.2L(7.2x,a)>=0||D.2L(7.1r,a)>=0)});G(!a.K)7.64=-1}N 7.2x=b})},2K:H(a){I a==12?(7[0]?7[0].4H:U):7.4E().3v(a)},7b:H(a){I 7.5q(a).21()},79:H(i){I 7.3s(i,i+1)},3s:H(){I 7.2I(2p.44.3s.1w(7,19))},2l:H(b){I 7.2I(D.2l(7,H(a,i){I b.1k(a,i,a)}))},5c:H(){I 7.1e(7.5n)},L:H(d,b){J a=d.1R(".");a[1]=a[1]?"."+a[1]:"";G(b===12){J c=7.5C("9z"+a[1]+"!",[a[0]]);G(c===12&&7.K)c=D.L(7[0],d);I c===12&&a[1]?7.L(a[0]):c}N I 7.1P("9u"+a[1]+"!",[a[0],b]).P(H(){D.L(7,d,b)})},3b:H(a){I 7.P(H(){D.3b(7,a)})},3W:H(g,f,h,d){J e=7.K>1,3x;I 7.P(H(){G(!3x){3x=D.4h(g,7.2z);G(h)3x.9o()}J b=7;G(f&&D.Y(7,"1T")&&D.Y(3x[0],"4F"))b=7.3H("22")[0]||7.3U(7.2z.3h("22"));J c=D([]);D.P(3x,H(){J a=e?D(7).5y(M)[0]:7;G(D.Y(a,"1m"))c=c.1e(a);N{G(a.16==1)c=c.1e(D("1m",a).21());d.1k(b,a)}});c.P(6T)})}};D.17.5j.44=D.17;H 6T(i,a){G(a.4d)D.3Y({1a:a.4d,31:Q,1O:"1m"});N D.5u(a.1r||a.6O||a.4H||"");G(a.1d)a.1d.37(a)}H 1z(){I+2B 8J}D.1l=D.17.1l=H(){J b=19[0]||{},i=1,K=19.K,4x=Q,15;G(b.1q==8I){4x=b;b=19[1]||{};i=2}G(1j b!="49"&&1j b!="H")b={};G(K==i){b=7;--i}R(;i<K;i++)G((15=19[i])!=U)R(J c 1n 15){J a=b[c],2w=15[c];G(b===2w)6M;G(4x&&2w&&1j 2w=="49"&&!2w.16)b[c]=D.1l(4x,a||(2w.K!=U?[]:{}),2w);N G(2w!==12)b[c]=2w}I b};J E="4M"+1z(),6K=0,5r={},6G=/z-?5i|8B-?8A|1y|6B|8v-?1Z/i,3P=S.3P||{};D.1l({8u:H(a){1b.$=3m$;G(a)1b.4M=w;I D},1D:H(a){I!!a&&1j a!="23"&&!a.Y&&a.1q!=2p&&/^[\\s[]?H/.11(a+"")},4n:H(a){I a.1C&&!a.1c||a.2j&&a.2z&&!a.2z.1c},5u:H(a){a=D.3k(a);G(a){J b=S.3H("6w")[0]||S.1C,1m=S.3h("1m");1m.O="1r/4t";G(D.14.1f)1m.1r=a;N 1m.3U(S.5F(a));b.39(1m,b.1x);b.37(1m)}},Y:H(b,a){I b.Y&&b.Y.2r()==a.2r()},1Y:{},L:H(c,d,b){c=c==1b?5r:c;J a=c[E];G(!a)a=c[E]=++6K;G(d&&!D.1Y[a])D.1Y[a]={};G(b!==12)D.1Y[a][d]=b;I d?D.1Y[a][d]:a},3b:H(c,b){c=c==1b?5r:c;J a=c[E];G(b){G(D.1Y[a]){2U D.1Y[a][b];b="";R(b 1n D.1Y[a])1X;G(!b)D.3b(c)}}N{1U{2U c[E]}1V(e){G(c.5l)c.5l(E)}2U D.1Y[a]}},P:H(d,a,c){J e,i=0,K=d.K;G(c){G(K==12){R(e 1n d)G(a.1w(d[e],c)===Q)1X}N R(;i<K;)G(a.1w(d[i++],c)===Q)1X}N{G(K==12){R(e 1n d)G(a.1k(d[e],e,d[e])===Q)1X}N R(J b=d[0];i<K&&a.1k(b,i,b)!==Q;b=d[++i]){}}I d},1i:H(b,a,c,i,d){G(D.1D(a))a=a.1k(b,i);I a&&a.1q==4L&&c=="2a"&&!6G.11(d)?a+"2X":a},1F:{1e:H(c,b){D.P((b||"").1R(/\\s+/),H(i,a){G(c.16==1&&!D.1F.3T(c.1F,a))c.1F+=(c.1F?" ":"")+a})},21:H(c,b){G(c.16==1)c.1F=b!=12?D.3C(c.1F.1R(/\\s+/),H(a){I!D.1F.3T(b,a)}).6s(" "):""},3T:H(b,a){I D.2L(a,(b.1F||b).6r().1R(/\\s+/))>-1}},6q:H(b,c,a){J e={};R(J d 1n c){e[d]=b.V[d];b.V[d]=c[d]}a.1k(b);R(J d 1n c)b.V[d]=e[d]},1g:H(d,e,c){G(e=="2h"||e=="1Z"){J b,3X={30:"5x",5g:"1G",18:"3I"},35=e=="2h"?["5e","6k"]:["5G","6i"];H 5b(){b=e=="2h"?d.8f:d.8c;J a=0,2C=0;D.P(35,H(){a+=3d(D.2a(d,"57"+7,M))||0;2C+=3d(D.2a(d,"2C"+7+"4b",M))||0});b-=29.83(a+2C)}G(D(d).3F(":4j"))5b();N D.6q(d,3X,5b);I 29.2f(0,b)}I D.2a(d,e,c)},2a:H(f,l,k){J e,V=f.V;H 3E(b){G(!D.14.2k)I Q;J a=3P.54(b,U);I!a||a.52("3E")==""}G(l=="1y"&&D.14.1f){e=D.1K(V,"1y");I e==""?"1":e}G(D.14.2G&&l=="18"){J d=V.50;V.50="0 7Y 7W";V.50=d}G(l.1I(/4i/i))l=y;G(!k&&V&&V[l])e=V[l];N G(3P.54){G(l.1I(/4i/i))l="4i";l=l.1o(/([A-Z])/g,"-$1").3y();J c=3P.54(f,U);G(c&&!3E(f))e=c.52(l);N{J g=[],2E=[],a=f,i=0;R(;a&&3E(a);a=a.1d)2E.6h(a);R(;i<2E.K;i++)G(3E(2E[i])){g[i]=2E[i].V.18;2E[i].V.18="3I"}e=l=="18"&&g[2E.K-1]!=U?"2F":(c&&c.52(l))||"";R(i=0;i<g.K;i++)G(g[i]!=U)2E[i].V.18=g[i]}G(l=="1y"&&e=="")e="1"}N G(f.4g){J h=l.1o(/\\-(\\w)/g,H(a,b){I b.2r()});e=f.4g[l]||f.4g[h];G(!/^\\d+(2X)?$/i.11(e)&&/^\\d/.11(e)){J j=V.1A,66=f.65.1A;f.65.1A=f.4g.1A;V.1A=e||0;e=V.aM+"2X";V.1A=j;f.65.1A=66}}I e},4h:H(l,h){J k=[];h=h||S;G(1j h.3h==\'12\')h=h.2z||h[0]&&h[0].2z||S;D.P(l,H(i,d){G(!d)I;G(d.1q==4L)d+=\'\';G(1j d=="23"){d=d.1o(/(<(\\w+)[^>]*?)\\/>/g,H(b,a,c){I c.1I(/^(aK|4f|7E|aG|4T|7A|aB|3n|az|ay|av)$/i)?b:a+"></"+c+">"});J f=D.3k(d).3y(),1v=h.3h("1v");J e=!f.1h("<au")&&[1,"<2A 7w=\'7w\'>","</2A>"]||!f.1h("<ar")&&[1,"<7v>","</7v>"]||f.1I(/^<(aq|22|am|ak|ai)/)&&[1,"<1T>","</1T>"]||!f.1h("<4F")&&[2,"<1T><22>","</22></1T>"]||(!f.1h("<af")||!f.1h("<ad"))&&[3,"<1T><22><4F>","</4F></22></1T>"]||!f.1h("<7E")&&[2,"<1T><22></22><7q>","</7q></1T>"]||D.14.1f&&[1,"1v<1v>","</1v>"]||[0,"",""];1v.4H=e[1]+d+e[2];1B(e[0]--)1v=1v.5T;G(D.14.1f){J g=!f.1h("<1T")&&f.1h("<22")<0?1v.1x&&1v.1x.3t:e[1]=="<1T>"&&f.1h("<22")<0?1v.3t:[];R(J j=g.K-1;j>=0;--j)G(D.Y(g[j],"22")&&!g[j].3t.K)g[j].1d.37(g[j]);G(/^\\s/.11(d))1v.39(h.5F(d.1I(/^\\s*/)[0]),1v.1x)}d=D.2d(1v.3t)}G(d.K===0&&(!D.Y(d,"3V")&&!D.Y(d,"2A")))I;G(d[0]==12||D.Y(d,"3V")||d.15)k.1p(d);N k=D.2R(k,d)});I k},1K:H(d,f,c){G(!d||d.16==3||d.16==8)I 12;J e=!D.4n(d),40=c!==12,1f=D.14.1f;f=e&&D.3X[f]||f;G(d.2j){J g=/5Q|4d|V/.11(f);G(f=="2W"&&D.14.2k)d.1d.64;G(f 1n d&&e&&!g){G(40){G(f=="O"&&D.Y(d,"4T")&&d.1d)7p"O a3 a1\'t 9V 9U";d[f]=c}G(D.Y(d,"3V")&&d.7i(f))I d.7i(f).76;I d[f]}G(1f&&e&&f=="V")I D.1K(d.V,"9T",c);G(40)d.9Q(f,""+c);J h=1f&&e&&g?d.4G(f,2):d.4G(f);I h===U?12:h}G(1f&&f=="1y"){G(40){d.6B=1;d.1E=(d.1E||"").1o(/7f\\([^)]*\\)/,"")+(3r(c)+\'\'=="9L"?"":"7f(1y="+c*7a+")")}I d.1E&&d.1E.1h("1y=")>=0?(3d(d.1E.1I(/1y=([^)]*)/)[1])/7a)+\'\':""}f=f.1o(/-([a-z])/9H,H(a,b){I b.2r()});G(40)d[f]=c;I d[f]},3k:H(a){I(a||"").1o(/^\\s+|\\s+$/g,"")},2d:H(b){J a=[];G(b!=U){J i=b.K;G(i==U||b.1R||b.4I||b.1k)a[0]=b;N 1B(i)a[--i]=b[i]}I a},2L:H(b,a){R(J i=0,K=a.K;i<K;i++)G(a[i]===b)I i;I-1},2R:H(a,b){J i=0,T,2S=a.K;G(D.14.1f){1B(T=b[i++])G(T.16!=8)a[2S++]=T}N 1B(T=b[i++])a[2S++]=T;I a},4r:H(a){J c=[],2o={};1U{R(J i=0,K=a.K;i<K;i++){J b=D.L(a[i]);G(!2o[b]){2o[b]=M;c.1p(a[i])}}}1V(e){c=a}I c},3C:H(c,a,d){J b=[];R(J i=0,K=c.K;i<K;i++)G(!d!=!a(c[i],i))b.1p(c[i]);I b},2l:H(d,a){J c=[];R(J i=0,K=d.K;i<K;i++){J b=a(d[i],i);G(b!=U)c[c.K]=b}I c.7d.1w([],c)}});J v=9B.9A.3y();D.14={5B:(v.1I(/.+(?:9y|9x|9w|9v)[\\/: ]([\\d.]+)/)||[])[1],2k:/75/.11(v),2G:/2G/.11(v),1f:/1f/.11(v)&&!/2G/.11(v),42:/42/.11(v)&&!/(9s|75)/.11(v)};J y=D.14.1f?"7o":"72";D.1l({71:!D.14.1f||S.70=="6Z",3X:{"R":"9n","9k":"1F","4i":y,72:y,7o:y,9h:"9f",9e:"9d",9b:"99"}});D.P({6W:H(a){I a.1d},97:H(a){I D.4S(a,"1d")},95:H(a){I D.3a(a,2,"2H")},91:H(a){I D.3a(a,2,"4l")},8Z:H(a){I D.4S(a,"2H")},8X:H(a){I D.4S(a,"4l")},8W:H(a){I D.5v(a.1d.1x,a)},8V:H(a){I D.5v(a.1x)},6Q:H(a){I D.Y(a,"8U")?a.8T||a.8S.S:D.2d(a.3t)}},H(c,d){D.17[c]=H(b){J a=D.2l(7,d);G(b&&1j b=="23")a=D.3g(b,a);I 7.2I(D.4r(a))}});D.P({6P:"3v",8Q:"6F",39:"6E",8P:"5q",8O:"7b"},H(c,b){D.17[c]=H(){J a=19;I 7.P(H(){R(J i=0,K=a.K;i<K;i++)D(a[i])[b](7)})}});D.P({8N:H(a){D.1K(7,a,"");G(7.16==1)7.5l(a)},8M:H(a){D.1F.1e(7,a)},8L:H(a){D.1F.21(7,a)},8K:H(a){D.1F[D.1F.3T(7,a)?"21":"1e"](7,a)},21:H(a){G(!a||D.1E(a,[7]).r.K){D("*",7).1e(7).P(H(){D.W.21(7);D.3b(7)});G(7.1d)7.1d.37(7)}},4E:H(){D(">*",7).21();1B(7.1x)7.37(7.1x)}},H(a,b){D.17[a]=H(){I 7.P(b,19)}});D.P(["6N","4b"],H(i,c){J b=c.3y();D.17[b]=H(a){I 7[0]==1b?D.14.2G&&S.1c["5t"+c]||D.14.2k&&1b["5s"+c]||S.70=="6Z"&&S.1C["5t"+c]||S.1c["5t"+c]:7[0]==S?29.2f(29.2f(S.1c["4y"+c],S.1C["4y"+c]),29.2f(S.1c["2i"+c],S.1C["2i"+c])):a==12?(7.K?D.1g(7[0],b):U):7.1g(b,a.1q==56?a:a+"2X")}});H 25(a,b){I a[0]&&3r(D.2a(a[0],b,M),10)||0}J C=D.14.2k&&3r(D.14.5B)<8H?"(?:[\\\\w*3m-]|\\\\\\\\.)":"(?:[\\\\w\\8F-\\8E*3m-]|\\\\\\\\.)",6L=2B 4v("^>\\\\s*("+C+"+)"),6J=2B 4v("^("+C+"+)(#)("+C+"+)"),6I=2B 4v("^([#.]?)("+C+"*)");D.1l({6H:{"":H(a,i,m){I m[2]=="*"||D.Y(a,m[2])},"#":H(a,i,m){I a.4G("2v")==m[2]},":":{8D:H(a,i,m){I i<m[3]-0},8C:H(a,i,m){I i>m[3]-0},3a:H(a,i,m){I m[3]-0==i},79:H(a,i,m){I m[3]-0==i},3o:H(a,i){I i==0},3S:H(a,i,m,r){I i==r.K-1},6D:H(a,i){I i%2==0},6C:H(a,i){I i%2},"3o-4u":H(a){I a.1d.3H("*")[0]==a},"3S-4u":H(a){I D.3a(a.1d.5T,1,"4l")==a},"8z-4u":H(a){I!D.3a(a.1d.5T,2,"4l")},6W:H(a){I a.1x},4E:H(a){I!a.1x},8y:H(a,i,m){I(a.6O||a.8x||D(a).1r()||"").1h(m[3])>=0},4j:H(a){I"1G"!=a.O&&D.1g(a,"18")!="2F"&&D.1g(a,"5g")!="1G"},1G:H(a){I"1G"==a.O||D.1g(a,"18")=="2F"||D.1g(a,"5g")=="1G"},8w:H(a){I!a.3R},3R:H(a){I a.3R},4J:H(a){I a.4J},2W:H(a){I a.2W||D.1K(a,"2W")},1r:H(a){I"1r"==a.O},5O:H(a){I"5O"==a.O},5L:H(a){I"5L"==a.O},5p:H(a){I"5p"==a.O},3Q:H(a){I"3Q"==a.O},5o:H(a){I"5o"==a.O},6A:H(a){I"6A"==a.O},6z:H(a){I"6z"==a.O},2s:H(a){I"2s"==a.O||D.Y(a,"2s")},4T:H(a){I/4T|2A|6y|2s/i.11(a.Y)},3T:H(a,i,m){I D.2q(m[3],a).K},8t:H(a){I/h\\d/i.11(a.Y)},8s:H(a){I D.3C(D.3O,H(b){I a==b.T}).K}}},6x:[/^(\\[) *@?([\\w-]+) *([!*$^~=]*) *(\'?"?)(.*?)\\4 *\\]/,/^(:)([\\w-]+)\\("?\'?(.*?(\\(.*?\\))?[^(]*?)"?\'?\\)/,2B 4v("^([:.#]*)("+C+"+)")],3g:H(a,c,b){J d,1t=[];1B(a&&a!=d){d=a;J f=D.1E(a,c,b);a=f.t.1o(/^\\s*,\\s*/,"");1t=b?c=f.r:D.2R(1t,f.r)}I 1t},2q:H(t,o){G(1j t!="23")I[t];G(o&&o.16!=1&&o.16!=9)I[];o=o||S;J d=[o],2o=[],3S,Y;1B(t&&3S!=t){J r=[];3S=t;t=D.3k(t);J l=Q,3j=6L,m=3j.2D(t);G(m){Y=m[1].2r();R(J i=0;d[i];i++)R(J c=d[i].1x;c;c=c.2H)G(c.16==1&&(Y=="*"||c.Y.2r()==Y))r.1p(c);d=r;t=t.1o(3j,"");G(t.1h(" ")==0)6M;l=M}N{3j=/^([>+~])\\s*(\\w*)/i;G((m=3j.2D(t))!=U){r=[];J k={};Y=m[2].2r();m=m[1];R(J j=0,3i=d.K;j<3i;j++){J n=m=="~"||m=="+"?d[j].2H:d[j].1x;R(;n;n=n.2H)G(n.16==1){J g=D.L(n);G(m=="~"&&k[g])1X;G(!Y||n.Y.2r()==Y){G(m=="~")k[g]=M;r.1p(n)}G(m=="+")1X}}d=r;t=D.3k(t.1o(3j,""));l=M}}G(t&&!l){G(!t.1h(",")){G(o==d[0])d.4s();2o=D.2R(2o,d);r=d=[o];t=" "+t.6v(1,t.K)}N{J h=6J;J m=h.2D(t);G(m){m=[0,m[2],m[3],m[1]]}N{h=6I;m=h.2D(t)}m[2]=m[2].1o(/\\\\/g,"");J f=d[d.K-1];G(m[1]=="#"&&f&&f.61&&!D.4n(f)){J p=f.61(m[2]);G((D.14.1f||D.14.2G)&&p&&1j p.2v=="23"&&p.2v!=m[2])p=D(\'[@2v="\'+m[2]+\'"]\',f)[0];d=r=p&&(!m[3]||D.Y(p,m[3]))?[p]:[]}N{R(J i=0;d[i];i++){J a=m[1]=="#"&&m[3]?m[3]:m[1]!=""||m[0]==""?"*":m[2];G(a=="*"&&d[i].Y.3y()=="49")a="3n";r=D.2R(r,d[i].3H(a))}G(m[1]==".")r=D.5m(r,m[2]);G(m[1]=="#"){J e=[];R(J i=0;r[i];i++)G(r[i].4G("2v")==m[2]){e=[r[i]];1X}r=e}d=r}t=t.1o(h,"")}}G(t){J b=D.1E(t,r);d=r=b.r;t=D.3k(b.t)}}G(t)d=[];G(d&&o==d[0])d.4s();2o=D.2R(2o,d);I 2o},5m:H(r,m,a){m=" "+m+" ";J c=[];R(J i=0;r[i];i++){J b=(" "+r[i].1F+" ").1h(m)>=0;G(!a&&b||a&&!b)c.1p(r[i])}I c},1E:H(t,r,h){J d;1B(t&&t!=d){d=t;J p=D.6x,m;R(J i=0;p[i];i++){m=p[i].2D(t);G(m){t=t.8r(m[0].K);m[2]=m[2].1o(/\\\\/g,"");1X}}G(!m)1X;G(m[1]==":"&&m[2]=="4Y")r=62.11(m[3])?D.1E(m[3],r,M).r:D(r).4Y(m[3]);N G(m[1]==".")r=D.5m(r,m[2],h);N G(m[1]=="["){J g=[],O=m[3];R(J i=0,3i=r.K;i<3i;i++){J a=r[i],z=a[D.3X[m[2]]||m[2]];G(z==U||/5Q|4d|2W/.11(m[2]))z=D.1K(a,m[2])||\'\';G((O==""&&!!z||O=="="&&z==m[5]||O=="!="&&z!=m[5]||O=="^="&&z&&!z.1h(m[5])||O=="$="&&z.6v(z.K-m[5].K)==m[5]||(O=="*="||O=="~=")&&z.1h(m[5])>=0)^h)g.1p(a)}r=g}N G(m[1]==":"&&m[2]=="3a-4u"){J e={},g=[],11=/(-?)(\\d*)n((?:\\+|-)?\\d*)/.2D(m[3]=="6D"&&"2n"||m[3]=="6C"&&"2n+1"||!/\\D/.11(m[3])&&"8q+"+m[3]||m[3]),3o=(11[1]+(11[2]||1))-0,d=11[3]-0;R(J i=0,3i=r.K;i<3i;i++){J j=r[i],1d=j.1d,2v=D.L(1d);G(!e[2v]){J c=1;R(J n=1d.1x;n;n=n.2H)G(n.16==1)n.4q=c++;e[2v]=M}J b=Q;G(3o==0){G(j.4q==d)b=M}N G((j.4q-d)%3o==0&&(j.4q-d)/3o>=0)b=M;G(b^h)g.1p(j)}r=g}N{J f=D.6H[m[1]];G(1j f=="49")f=f[m[2]];G(1j f=="23")f=6u("Q||H(a,i){I "+f+";}");r=D.3C(r,H(a,i){I f(a,i,m,r)},h)}}I{r:r,t:t}},4S:H(b,c){J a=[],1t=b[c];1B(1t&&1t!=S){G(1t.16==1)a.1p(1t);1t=1t[c]}I a},3a:H(a,e,c,b){e=e||1;J d=0;R(;a;a=a[c])G(a.16==1&&++d==e)1X;I a},5v:H(n,a){J r=[];R(;n;n=n.2H){G(n.16==1&&n!=a)r.1p(n)}I r}});D.W={1e:H(f,i,g,e){G(f.16==3||f.16==8)I;G(D.14.1f&&f.4I)f=1b;G(!g.24)g.24=7.24++;G(e!=12){J h=g;g=7.3M(h,H(){I h.1w(7,19)});g.L=e}J j=D.L(f,"3w")||D.L(f,"3w",{}),1H=D.L(f,"1H")||D.L(f,"1H",H(){G(1j D!="12"&&!D.W.5k)I D.W.1H.1w(19.3L.T,19)});1H.T=f;D.P(i.1R(/\\s+/),H(c,b){J a=b.1R(".");b=a[0];g.O=a[1];J d=j[b];G(!d){d=j[b]={};G(!D.W.2t[b]||D.W.2t[b].4p.1k(f)===Q){G(f.3K)f.3K(b,1H,Q);N G(f.6t)f.6t("4o"+b,1H)}}d[g.24]=g;D.W.26[b]=M});f=U},24:1,26:{},21:H(e,h,f){G(e.16==3||e.16==8)I;J i=D.L(e,"3w"),1L,5i;G(i){G(h==12||(1j h=="23"&&h.8p(0)=="."))R(J g 1n i)7.21(e,g+(h||""));N{G(h.O){f=h.2y;h=h.O}D.P(h.1R(/\\s+/),H(b,a){J c=a.1R(".");a=c[0];G(i[a]){G(f)2U i[a][f.24];N R(f 1n i[a])G(!c[1]||i[a][f].O==c[1])2U i[a][f];R(1L 1n i[a])1X;G(!1L){G(!D.W.2t[a]||D.W.2t[a].4A.1k(e)===Q){G(e.6p)e.6p(a,D.L(e,"1H"),Q);N G(e.6n)e.6n("4o"+a,D.L(e,"1H"))}1L=U;2U i[a]}}})}R(1L 1n i)1X;G(!1L){J d=D.L(e,"1H");G(d)d.T=U;D.3b(e,"3w");D.3b(e,"1H")}}},1P:H(h,c,f,g,i){c=D.2d(c);G(h.1h("!")>=0){h=h.3s(0,-1);J a=M}G(!f){G(7.26[h])D("*").1e([1b,S]).1P(h,c)}N{G(f.16==3||f.16==8)I 12;J b,1L,17=D.1D(f[h]||U),W=!c[0]||!c[0].32;G(W){c.6h({O:h,2J:f,32:H(){},3J:H(){},4C:1z()});c[0][E]=M}c[0].O=h;G(a)c[0].6m=M;J d=D.L(f,"1H");G(d)b=d.1w(f,c);G((!17||(D.Y(f,\'a\')&&h=="4V"))&&f["4o"+h]&&f["4o"+h].1w(f,c)===Q)b=Q;G(W)c.4s();G(i&&D.1D(i)){1L=i.1w(f,b==U?c:c.7d(b));G(1L!==12)b=1L}G(17&&g!==Q&&b!==Q&&!(D.Y(f,\'a\')&&h=="4V")){7.5k=M;1U{f[h]()}1V(e){}}7.5k=Q}I b},1H:H(b){J a,1L,38,5f,4m;b=19[0]=D.W.6l(b||1b.W);38=b.O.1R(".");b.O=38[0];38=38[1];5f=!38&&!b.6m;4m=(D.L(7,"3w")||{})[b.O];R(J j 1n 4m){J c=4m[j];G(5f||c.O==38){b.2y=c;b.L=c.L;1L=c.1w(7,19);G(a!==Q)a=1L;G(1L===Q){b.32();b.3J()}}}I a},6l:H(b){G(b[E]==M)I b;J d=b;b={8o:d};J c="8n 8m 8l 8k 2s 8j 47 5d 6j 5E 8i L 8h 8g 4K 2y 5a 59 8e 8b 58 6f 8a 88 4k 87 86 84 6d 2J 4C 6c O 82 81 35".1R(" ");R(J i=c.K;i;i--)b[c[i]]=d[c[i]];b[E]=M;b.32=H(){G(d.32)d.32();d.80=Q};b.3J=H(){G(d.3J)d.3J();d.7Z=M};b.4C=b.4C||1z();G(!b.2J)b.2J=b.6d||S;G(b.2J.16==3)b.2J=b.2J.1d;G(!b.4k&&b.4K)b.4k=b.4K==b.2J?b.6c:b.4K;G(b.58==U&&b.5d!=U){J a=S.1C,1c=S.1c;b.58=b.5d+(a&&a.2e||1c&&1c.2e||0)-(a.6b||0);b.6f=b.6j+(a&&a.2c||1c&&1c.2c||0)-(a.6a||0)}G(!b.35&&((b.47||b.47===0)?b.47:b.5a))b.35=b.47||b.5a;G(!b.59&&b.5E)b.59=b.5E;G(!b.35&&b.2s)b.35=(b.2s&1?1:(b.2s&2?3:(b.2s&4?2:0)));I b},3M:H(a,b){b.24=a.24=a.24||b.24||7.24++;I b},2t:{27:{4p:H(){55();I},4A:H(){I}},3D:{4p:H(){G(D.14.1f)I Q;D(7).2O("53",D.W.2t.3D.2y);I M},4A:H(){G(D.14.1f)I Q;D(7).4e("53",D.W.2t.3D.2y);I M},2y:H(a){G(F(a,7))I M;a.O="3D";I D.W.1H.1w(7,19)}},3N:{4p:H(){G(D.14.1f)I Q;D(7).2O("51",D.W.2t.3N.2y);I M},4A:H(){G(D.14.1f)I Q;D(7).4e("51",D.W.2t.3N.2y);I M},2y:H(a){G(F(a,7))I M;a.O="3N";I D.W.1H.1w(7,19)}}}};D.17.1l({2O:H(c,a,b){I c=="4X"?7.2V(c,a,b):7.P(H(){D.W.1e(7,c,b||a,b&&a)})},2V:H(d,b,c){J e=D.W.3M(c||b,H(a){D(7).4e(a,e);I(c||b).1w(7,19)});I 7.P(H(){D.W.1e(7,d,e,c&&b)})},4e:H(a,b){I 7.P(H(){D.W.21(7,a,b)})},1P:H(c,a,b){I 7.P(H(){D.W.1P(c,a,7,M,b)})},5C:H(c,a,b){I 7[0]&&D.W.1P(c,a,7[0],Q,b)},2m:H(b){J c=19,i=1;1B(i<c.K)D.W.3M(b,c[i++]);I 7.4V(D.W.3M(b,H(a){7.4Z=(7.4Z||0)%i;a.32();I c[7.4Z++].1w(7,19)||Q}))},7X:H(a,b){I 7.2O(\'3D\',a).2O(\'3N\',b)},27:H(a){55();G(D.2Q)a.1k(S,D);N D.3A.1p(H(){I a.1k(7,D)});I 7}});D.1l({2Q:Q,3A:[],27:H(){G(!D.2Q){D.2Q=M;G(D.3A){D.P(D.3A,H(){7.1k(S)});D.3A=U}D(S).5C("27")}}});J x=Q;H 55(){G(x)I;x=M;G(S.3K&&!D.14.2G)S.3K("69",D.27,Q);G(D.14.1f&&1b==1S)(H(){G(D.2Q)I;1U{S.1C.7V("1A")}1V(3e){3B(19.3L,0);I}D.27()})();G(D.14.2G)S.3K("69",H(){G(D.2Q)I;R(J i=0;i<S.4W.K;i++)G(S.4W[i].3R){3B(19.3L,0);I}D.27()},Q);G(D.14.2k){J a;(H(){G(D.2Q)I;G(S.3f!="68"&&S.3f!="1J"){3B(19.3L,0);I}G(a===12)a=D("V, 7A[7U=7S]").K;G(S.4W.K!=a){3B(19.3L,0);I}D.27()})()}D.W.1e(1b,"43",D.27)}D.P(("7R,7Q,43,85,4y,4X,4V,7P,"+"7O,7N,89,53,51,7M,2A,"+"5o,7L,7K,8d,3e").1R(","),H(i,b){D.17[b]=H(a){I a?7.2O(b,a):7.1P(b)}});J F=H(a,c){J b=a.4k;1B(b&&b!=c)1U{b=b.1d}1V(3e){b=c}I b==c};D(1b).2O("4X",H(){D("*").1e(S).4e()});D.17.1l({67:D.17.43,43:H(g,d,c){G(1j g!=\'23\')I 7.67(g);J e=g.1h(" ");G(e>=0){J i=g.3s(e,g.K);g=g.3s(0,e)}c=c||H(){};J f="2P";G(d)G(D.1D(d)){c=d;d=U}N{d=D.3n(d);f="6g"}J h=7;D.3Y({1a:g,O:f,1O:"2K",L:d,1J:H(a,b){G(b=="1W"||b=="7J")h.2K(i?D("<1v/>").3v(a.4U.1o(/<1m(.|\\s)*?\\/1m>/g,"")).2q(i):a.4U);h.P(c,[a.4U,b,a])}});I 7},aL:H(){I D.3n(7.7I())},7I:H(){I 7.2l(H(){I D.Y(7,"3V")?D.2d(7.aH):7}).1E(H(){I 7.34&&!7.3R&&(7.4J||/2A|6y/i.11(7.Y)||/1r|1G|3Q/i.11(7.O))}).2l(H(i,c){J b=D(7).6e();I b==U?U:b.1q==2p?D.2l(b,H(a,i){I{34:c.34,2x:a}}):{34:c.34,2x:b}}).3p()}});D.P("7H,7G,7F,7D,7C,7B".1R(","),H(i,o){D.17[o]=H(f){I 7.2O(o,f)}});J B=1z();D.1l({3p:H(d,b,a,c){G(D.1D(b)){a=b;b=U}I D.3Y({O:"2P",1a:d,L:b,1W:a,1O:c})},aE:H(b,a){I D.3p(b,U,a,"1m")},aD:H(c,b,a){I D.3p(c,b,a,"3z")},aC:H(d,b,a,c){G(D.1D(b)){a=b;b={}}I D.3Y({O:"6g",1a:d,L:b,1W:a,1O:c})},aA:H(a){D.1l(D.60,a)},60:{1a:5Z.5Q,26:M,O:"2P",2T:0,7z:"4R/x-ax-3V-aw",7x:M,31:M,L:U,5Y:U,3Q:U,4Q:{2N:"4R/2N, 1r/2N",2K:"1r/2K",1m:"1r/4t, 4R/4t",3z:"4R/3z, 1r/4t",1r:"1r/as",4w:"*/*"}},4z:{},3Y:H(s){s=D.1l(M,s,D.1l(M,{},D.60,s));J g,2Z=/=\\?(&|$)/g,1u,L,O=s.O.2r();G(s.L&&s.7x&&1j s.L!="23")s.L=D.3n(s.L);G(s.1O=="4P"){G(O=="2P"){G(!s.1a.1I(2Z))s.1a+=(s.1a.1I(/\\?/)?"&":"?")+(s.4P||"7u")+"=?"}N G(!s.L||!s.L.1I(2Z))s.L=(s.L?s.L+"&":"")+(s.4P||"7u")+"=?";s.1O="3z"}G(s.1O=="3z"&&(s.L&&s.L.1I(2Z)||s.1a.1I(2Z))){g="4P"+B++;G(s.L)s.L=(s.L+"").1o(2Z,"="+g+"$1");s.1a=s.1a.1o(2Z,"="+g+"$1");s.1O="1m";1b[g]=H(a){L=a;1W();1J();1b[g]=12;1U{2U 1b[g]}1V(e){}G(i)i.37(h)}}G(s.1O=="1m"&&s.1Y==U)s.1Y=Q;G(s.1Y===Q&&O=="2P"){J j=1z();J k=s.1a.1o(/(\\?|&)3m=.*?(&|$)/,"$ap="+j+"$2");s.1a=k+((k==s.1a)?(s.1a.1I(/\\?/)?"&":"?")+"3m="+j:"")}G(s.L&&O=="2P"){s.1a+=(s.1a.1I(/\\?/)?"&":"?")+s.L;s.L=U}G(s.26&&!D.4O++)D.W.1P("7H");J n=/^(?:\\w+:)?\\/\\/([^\\/?#]+)/;G(s.1O=="1m"&&O=="2P"&&n.11(s.1a)&&n.2D(s.1a)[1]!=5Z.al){J i=S.3H("6w")[0];J h=S.3h("1m");h.4d=s.1a;G(s.7t)h.aj=s.7t;G(!g){J l=Q;h.ah=h.ag=H(){G(!l&&(!7.3f||7.3f=="68"||7.3f=="1J")){l=M;1W();1J();i.37(h)}}}i.3U(h);I 12}J m=Q;J c=1b.7s?2B 7s("ae.ac"):2B 7r();G(s.5Y)c.6R(O,s.1a,s.31,s.5Y,s.3Q);N c.6R(O,s.1a,s.31);1U{G(s.L)c.4B("ab-aa",s.7z);G(s.5S)c.4B("a9-5R-a8",D.4z[s.1a]||"a7, a6 a5 a4 5N:5N:5N a2");c.4B("X-9Z-9Y","7r");c.4B("9W",s.1O&&s.4Q[s.1O]?s.4Q[s.1O]+", */*":s.4Q.4w)}1V(e){}G(s.7m&&s.7m(c,s)===Q){s.26&&D.4O--;c.7l();I Q}G(s.26)D.W.1P("7B",[c,s]);J d=H(a){G(!m&&c&&(c.3f==4||a=="2T")){m=M;G(f){7k(f);f=U}1u=a=="2T"&&"2T"||!D.7j(c)&&"3e"||s.5S&&D.7h(c,s.1a)&&"7J"||"1W";G(1u=="1W"){1U{L=D.6X(c,s.1O,s.9S)}1V(e){1u="5J"}}G(1u=="1W"){J b;1U{b=c.5I("7g-5R")}1V(e){}G(s.5S&&b)D.4z[s.1a]=b;G(!g)1W()}N D.5H(s,c,1u);1J();G(s.31)c=U}};G(s.31){J f=4I(d,13);G(s.2T>0)3B(H(){G(c){c.7l();G(!m)d("2T")}},s.2T)}1U{c.9P(s.L)}1V(e){D.5H(s,c,U,e)}G(!s.31)d();H 1W(){G(s.1W)s.1W(L,1u);G(s.26)D.W.1P("7C",[c,s])}H 1J(){G(s.1J)s.1J(c,1u);G(s.26)D.W.1P("7F",[c,s]);G(s.26&&!--D.4O)D.W.1P("7G")}I c},5H:H(s,a,b,e){G(s.3e)s.3e(a,b,e);G(s.26)D.W.1P("7D",[a,s,e])},4O:0,7j:H(a){1U{I!a.1u&&5Z.9O=="5p:"||(a.1u>=7e&&a.1u<9N)||a.1u==7c||a.1u==9K||D.14.2k&&a.1u==12}1V(e){}I Q},7h:H(a,c){1U{J b=a.5I("7g-5R");I a.1u==7c||b==D.4z[c]||D.14.2k&&a.1u==12}1V(e){}I Q},6X:H(a,c,b){J d=a.5I("9J-O"),2N=c=="2N"||!c&&d&&d.1h("2N")>=0,L=2N?a.9I:a.4U;G(2N&&L.1C.2j=="5J")7p"5J";G(b)L=b(L,c);G(c=="1m")D.5u(L);G(c=="3z")L=6u("("+L+")");I L},3n:H(a){J s=[];G(a.1q==2p||a.5w)D.P(a,H(){s.1p(3u(7.34)+"="+3u(7.2x))});N R(J j 1n a)G(a[j]&&a[j].1q==2p)D.P(a[j],H(){s.1p(3u(j)+"="+3u(7))});N s.1p(3u(j)+"="+3u(D.1D(a[j])?a[j]():a[j]));I s.6s("&").1o(/%20/g,"+")}});D.17.1l({1N:H(c,b){I c?7.2g({1Z:"1N",2h:"1N",1y:"1N"},c,b):7.1E(":1G").P(H(){7.V.18=7.5D||"";G(D.1g(7,"18")=="2F"){J a=D("<"+7.2j+" />").6P("1c");7.V.18=a.1g("18");G(7.V.18=="2F")7.V.18="3I";a.21()}}).3l()},1M:H(b,a){I b?7.2g({1Z:"1M",2h:"1M",1y:"1M"},b,a):7.1E(":4j").P(H(){7.5D=7.5D||D.1g(7,"18");7.V.18="2F"}).3l()},78:D.17.2m,2m:H(a,b){I D.1D(a)&&D.1D(b)?7.78.1w(7,19):a?7.2g({1Z:"2m",2h:"2m",1y:"2m"},a,b):7.P(H(){D(7)[D(7).3F(":1G")?"1N":"1M"]()})},9G:H(b,a){I 7.2g({1Z:"1N"},b,a)},9F:H(b,a){I 7.2g({1Z:"1M"},b,a)},9E:H(b,a){I 7.2g({1Z:"2m"},b,a)},9D:H(b,a){I 7.2g({1y:"1N"},b,a)},9M:H(b,a){I 7.2g({1y:"1M"},b,a)},9C:H(c,a,b){I 7.2g({1y:a},c,b)},2g:H(k,j,i,g){J h=D.77(j,i,g);I 7[h.36===Q?"P":"36"](H(){G(7.16!=1)I Q;J f=D.1l({},h),p,1G=D(7).3F(":1G"),46=7;R(p 1n k){G(k[p]=="1M"&&1G||k[p]=="1N"&&!1G)I f.1J.1k(7);G(p=="1Z"||p=="2h"){f.18=D.1g(7,"18");f.33=7.V.33}}G(f.33!=U)7.V.33="1G";f.45=D.1l({},k);D.P(k,H(c,a){J e=2B D.28(46,f,c);G(/2m|1N|1M/.11(a))e[a=="2m"?1G?"1N":"1M":a](k);N{J b=a.6r().1I(/^([+-]=)?([\\d+-.]+)(.*)$/),2b=e.1t(M)||0;G(b){J d=3d(b[2]),2M=b[3]||"2X";G(2M!="2X"){46.V[c]=(d||1)+2M;2b=((d||1)/e.1t(M))*2b;46.V[c]=2b+2M}G(b[1])d=((b[1]=="-="?-1:1)*d)+2b;e.3G(2b,d,2M)}N e.3G(2b,a,"")}});I M})},36:H(a,b){G(D.1D(a)||(a&&a.1q==2p)){b=a;a="28"}G(!a||(1j a=="23"&&!b))I A(7[0],a);I 7.P(H(){G(b.1q==2p)A(7,a,b);N{A(7,a).1p(b);G(A(7,a).K==1)b.1k(7)}})},9X:H(b,c){J a=D.3O;G(b)7.36([]);7.P(H(){R(J i=a.K-1;i>=0;i--)G(a[i].T==7){G(c)a[i](M);a.7n(i,1)}});G(!c)7.5A();I 7}});J A=H(b,c,a){G(b){c=c||"28";J q=D.L(b,c+"36");G(!q||a)q=D.L(b,c+"36",D.2d(a))}I q};D.17.5A=H(a){a=a||"28";I 7.P(H(){J q=A(7,a);q.4s();G(q.K)q[0].1k(7)})};D.1l({77:H(b,a,c){J d=b&&b.1q==a0?b:{1J:c||!c&&a||D.1D(b)&&b,2u:b,41:c&&a||a&&a.1q!=9t&&a};d.2u=(d.2u&&d.2u.1q==4L?d.2u:D.28.5K[d.2u])||D.28.5K.74;d.5M=d.1J;d.1J=H(){G(d.36!==Q)D(7).5A();G(D.1D(d.5M))d.5M.1k(7)};I d},41:{73:H(p,n,b,a){I b+a*p},5P:H(p,n,b,a){I((-29.9r(p*29.9q)/2)+0.5)*a+b}},3O:[],48:U,28:H(b,c,a){7.15=c;7.T=b;7.1i=a;G(!c.3Z)c.3Z={}}});D.28.44={4D:H(){G(7.15.2Y)7.15.2Y.1k(7.T,7.1z,7);(D.28.2Y[7.1i]||D.28.2Y.4w)(7);G(7.1i=="1Z"||7.1i=="2h")7.T.V.18="3I"},1t:H(a){G(7.T[7.1i]!=U&&7.T.V[7.1i]==U)I 7.T[7.1i];J r=3d(D.1g(7.T,7.1i,a));I r&&r>-9p?r:3d(D.2a(7.T,7.1i))||0},3G:H(c,b,d){7.5V=1z();7.2b=c;7.3l=b;7.2M=d||7.2M||"2X";7.1z=7.2b;7.2S=7.4N=0;7.4D();J e=7;H t(a){I e.2Y(a)}t.T=7.T;D.3O.1p(t);G(D.48==U){D.48=4I(H(){J a=D.3O;R(J i=0;i<a.K;i++)G(!a[i]())a.7n(i--,1);G(!a.K){7k(D.48);D.48=U}},13)}},1N:H(){7.15.3Z[7.1i]=D.1K(7.T.V,7.1i);7.15.1N=M;7.3G(0,7.1t());G(7.1i=="2h"||7.1i=="1Z")7.T.V[7.1i]="9m";D(7.T).1N()},1M:H(){7.15.3Z[7.1i]=D.1K(7.T.V,7.1i);7.15.1M=M;7.3G(7.1t(),0)},2Y:H(a){J t=1z();G(a||t>7.15.2u+7.5V){7.1z=7.3l;7.2S=7.4N=1;7.4D();7.15.45[7.1i]=M;J b=M;R(J i 1n 7.15.45)G(7.15.45[i]!==M)b=Q;G(b){G(7.15.18!=U){7.T.V.33=7.15.33;7.T.V.18=7.15.18;G(D.1g(7.T,"18")=="2F")7.T.V.18="3I"}G(7.15.1M)7.T.V.18="2F";G(7.15.1M||7.15.1N)R(J p 1n 7.15.45)D.1K(7.T.V,p,7.15.3Z[p])}G(b)7.15.1J.1k(7.T);I Q}N{J n=t-7.5V;7.4N=n/7.15.2u;7.2S=D.41[7.15.41||(D.41.5P?"5P":"73")](7.4N,n,0,1,7.15.2u);7.1z=7.2b+((7.3l-7.2b)*7.2S);7.4D()}I M}};D.1l(D.28,{5K:{9l:9j,9i:7e,74:9g},2Y:{2e:H(a){a.T.2e=a.1z},2c:H(a){a.T.2c=a.1z},1y:H(a){D.1K(a.T.V,"1y",a.1z)},4w:H(a){a.T.V[a.1i]=a.1z+a.2M}}});D.17.2i=H(){J b=0,1S=0,T=7[0],3q;G(T)ao(D.14){J d=T.1d,4a=T,1s=T.1s,1Q=T.2z,5U=2k&&3r(5B)<9c&&!/9a/i.11(v),1g=D.2a,3c=1g(T,"30")=="3c";G(T.7y){J c=T.7y();1e(c.1A+29.2f(1Q.1C.2e,1Q.1c.2e),c.1S+29.2f(1Q.1C.2c,1Q.1c.2c));1e(-1Q.1C.6b,-1Q.1C.6a)}N{1e(T.5X,T.5W);1B(1s){1e(1s.5X,1s.5W);G(42&&!/^t(98|d|h)$/i.11(1s.2j)||2k&&!5U)2C(1s);G(!3c&&1g(1s,"30")=="3c")3c=M;4a=/^1c$/i.11(1s.2j)?4a:1s;1s=1s.1s}1B(d&&d.2j&&!/^1c|2K$/i.11(d.2j)){G(!/^96|1T.*$/i.11(1g(d,"18")))1e(-d.2e,-d.2c);G(42&&1g(d,"33")!="4j")2C(d);d=d.1d}G((5U&&(3c||1g(4a,"30")=="5x"))||(42&&1g(4a,"30")!="5x"))1e(-1Q.1c.5X,-1Q.1c.5W);G(3c)1e(29.2f(1Q.1C.2e,1Q.1c.2e),29.2f(1Q.1C.2c,1Q.1c.2c))}3q={1S:1S,1A:b}}H 2C(a){1e(D.2a(a,"6V",M),D.2a(a,"6U",M))}H 1e(l,t){b+=3r(l,10)||0;1S+=3r(t,10)||0}I 3q};D.17.1l({30:H(){J a=0,1S=0,3q;G(7[0]){J b=7.1s(),2i=7.2i(),4c=/^1c|2K$/i.11(b[0].2j)?{1S:0,1A:0}:b.2i();2i.1S-=25(7,\'94\');2i.1A-=25(7,\'aF\');4c.1S+=25(b,\'6U\');4c.1A+=25(b,\'6V\');3q={1S:2i.1S-4c.1S,1A:2i.1A-4c.1A}}I 3q},1s:H(){J a=7[0].1s;1B(a&&(!/^1c|2K$/i.11(a.2j)&&D.1g(a,\'30\')==\'93\'))a=a.1s;I D(a)}});D.P([\'5e\',\'5G\'],H(i,b){J c=\'4y\'+b;D.17[c]=H(a){G(!7[0])I;I a!=12?7.P(H(){7==1b||7==S?1b.92(!i?a:D(1b).2e(),i?a:D(1b).2c()):7[c]=a}):7[0]==1b||7[0]==S?46[i?\'aI\':\'aJ\']||D.71&&S.1C[c]||S.1c[c]:7[0][c]}});D.P(["6N","4b"],H(i,b){J c=i?"5e":"5G",4f=i?"6k":"6i";D.17["5s"+b]=H(){I 7[b.3y()]()+25(7,"57"+c)+25(7,"57"+4f)};D.17["90"+b]=H(a){I 7["5s"+b]()+25(7,"2C"+c+"4b")+25(7,"2C"+4f+"4b")+(a?25(7,"6S"+c)+25(7,"6S"+4f):0)}})})();',62,669,'|||||||this|||||||||||||||||||||||||||||||||||if|function|return|var|length|data|true|else|type|each|false|for|document|elem|null|style|event||nodeName|||test|undefined||browser|options|nodeType|fn|display|arguments|url|window|body|parentNode|add|msie|css|indexOf|prop|typeof|call|extend|script|in|replace|push|constructor|text|offsetParent|cur|status|div|apply|firstChild|opacity|now|left|while|documentElement|isFunction|filter|className|hidden|handle|match|complete|attr|ret|hide|show|dataType|trigger|doc|split|top|table|try|catch|success|break|cache|height||remove|tbody|string|guid|num|global|ready|fx|Math|curCSS|start|scrollTop|makeArray|scrollLeft|max|animate|width|offset|tagName|safari|map|toggle||done|Array|find|toUpperCase|button|special|duration|id|copy|value|handler|ownerDocument|select|new|border|exec|stack|none|opera|nextSibling|pushStack|target|html|inArray|unit|xml|bind|GET|isReady|merge|pos|timeout|delete|one|selected|px|step|jsre|position|async|preventDefault|overflow|name|which|queue|removeChild|namespace|insertBefore|nth|removeData|fixed|parseFloat|error|readyState|multiFilter|createElement|rl|re|trim|end|_|param|first|get|results|parseInt|slice|childNodes|encodeURIComponent|append|events|elems|toLowerCase|json|readyList|setTimeout|grep|mouseenter|color|is|custom|getElementsByTagName|block|stopPropagation|addEventListener|callee|proxy|mouseleave|timers|defaultView|password|disabled|last|has|appendChild|form|domManip|props|ajax|orig|set|easing|mozilla|load|prototype|curAnim|self|charCode|timerId|object|offsetChild|Width|parentOffset|src|unbind|br|currentStyle|clean|float|visible|relatedTarget|previousSibling|handlers|isXMLDoc|on|setup|nodeIndex|unique|shift|javascript|child|RegExp|_default|deep|scroll|lastModified|teardown|setRequestHeader|timeStamp|update|empty|tr|getAttribute|innerHTML|setInterval|checked|fromElement|Number|jQuery|state|active|jsonp|accepts|application|dir|input|responseText|click|styleSheets|unload|not|lastToggle|outline|mouseout|getPropertyValue|mouseover|getComputedStyle|bindReady|String|padding|pageX|metaKey|keyCode|getWH|andSelf|clientX|Left|all|visibility|container|index|init|triggered|removeAttribute|classFilter|prevObject|submit|file|after|windowData|inner|client|globalEval|sibling|jquery|absolute|clone|wrapAll|dequeue|version|triggerHandler|oldblock|ctrlKey|createTextNode|Top|handleError|getResponseHeader|parsererror|speeds|checkbox|old|00|radio|swing|href|Modified|ifModified|lastChild|safari2|startTime|offsetTop|offsetLeft|username|location|ajaxSettings|getElementById|isSimple|values|selectedIndex|runtimeStyle|rsLeft|_load|loaded|DOMContentLoaded|clientTop|clientLeft|toElement|srcElement|val|pageY|POST|unshift|Bottom|clientY|Right|fix|exclusive|detachEvent|cloneNode|removeEventListener|swap|toString|join|attachEvent|eval|substr|head|parse|textarea|reset|image|zoom|odd|even|before|prepend|exclude|expr|quickClass|quickID|uuid|quickChild|continue|Height|textContent|appendTo|contents|open|margin|evalScript|borderTopWidth|borderLeftWidth|parent|httpData|setArray|CSS1Compat|compatMode|boxModel|cssFloat|linear|def|webkit|nodeValue|speed|_toggle|eq|100|replaceWith|304|concat|200|alpha|Last|httpNotModified|getAttributeNode|httpSuccess|clearInterval|abort|beforeSend|splice|styleFloat|throw|colgroup|XMLHttpRequest|ActiveXObject|scriptCharset|callback|fieldset|multiple|processData|getBoundingClientRect|contentType|link|ajaxSend|ajaxSuccess|ajaxError|col|ajaxComplete|ajaxStop|ajaxStart|serializeArray|notmodified|keypress|keydown|change|mouseup|mousedown|dblclick|focus|blur|stylesheet|hasClass|rel|doScroll|black|hover|solid|cancelBubble|returnValue|wheelDelta|view|round|shiftKey|resize|screenY|screenX|relatedNode|mousemove|prevValue|originalTarget|offsetHeight|keyup|newValue|offsetWidth|eventPhase|detail|currentTarget|cancelable|bubbles|attrName|attrChange|altKey|originalEvent|charAt|0n|substring|animated|header|noConflict|line|enabled|innerText|contains|only|weight|font|gt|lt|uFFFF|u0128|size|417|Boolean|Date|toggleClass|removeClass|addClass|removeAttr|replaceAll|insertAfter|prependTo|wrap|contentWindow|contentDocument|iframe|children|siblings|prevAll|wrapInner|nextAll|outer|prev|scrollTo|static|marginTop|next|inline|parents|able|cellSpacing|adobeair|cellspacing|522|maxLength|maxlength|readOnly|400|readonly|fast|600|class|slow|1px|htmlFor|reverse|10000|PI|cos|compatible|Function|setData|ie|ra|it|rv|getData|userAgent|navigator|fadeTo|fadeIn|slideToggle|slideUp|slideDown|ig|responseXML|content|1223|NaN|fadeOut|300|protocol|send|setAttribute|option|dataFilter|cssText|changed|be|Accept|stop|With|Requested|Object|can|GMT|property|1970|Jan|01|Thu|Since|If|Type|Content|XMLHTTP|th|Microsoft|td|onreadystatechange|onload|cap|charset|colg|host|tfoot|specified|with|1_|thead|leg|plain|attributes|opt|embed|urlencoded|www|area|hr|ajaxSetup|meta|post|getJSON|getScript|marginLeft|img|elements|pageYOffset|pageXOffset|abbr|serialize|pixelLeft'.split('|'),0,{}));// $Id: drupal.js,v 1.41.2.3 2008/06/25 09:06:57 goba Exp $

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = document.getElementsByTagName && document.createElement && document.createTextNode && document.documentElement && document.getElementById;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  if (Drupal.jsEnabled) {
    // Execute all of them.
    jQuery.each(Drupal.behaviors, function() {
      this(context);
    });
  }
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'));
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper to address the mod_rewrite url encoding bug
 * (equivalent of drupal_urlencode() in PHP).
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim($(xmlhttp.responseText).text())) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri, '@text': xmlhttp.responseText });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message;
}

// Global Killswitch on the <html> element
if (Drupal.jsEnabled) {
  // Global Killswitch on the <html> element
  $(document.documentElement).addClass('js');
  // 'js enabled' cookie
  document.cookie = 'has_js=1; path=/';
  // Attach all behaviors.
  $(document).ready(function() {
    Drupal.attachBehaviors(this);
  });
}

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;;/*
This file is part of the Kaltura Collaborative Media Suite which allows users 
to do with audio, video, and animation what Wiki platfroms allow them to do with 
text.

Copyright (C) 2006-2008  Kaltura Inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

// initModalBox called from gotoCW - to open the contribution wizard as an iFrame in the 
// widget page
function kalturaInitModalBox ( url, options )
{
	var objBody = document.getElementsByTagName("body").item(0);

	// create overlay div and hardcode some functional styles (aesthetic styles are in CSS file)
	var objOverlay = document.createElement("div");
	objOverlay.setAttribute('id','overlay');
	objBody.appendChild(objOverlay, objBody.firstChild);
	
	var width = 680;
	var height = 360;
	if (options)
	{
		if (options.width)
			width = options.width;
		if (options.height)
			height = options.height;
	}

	// create modalbox div, same note about styles as above
	var objModalbox = document.createElement("div");
	objModalbox.setAttribute('id','modalbox');
	//objModalbox.setAttribute('style', 'width:'+width+'px;height:'+height+'px;margin-top:'+(0-height/2)+'px;margin-left:'+(0-width/2)+'px;');
	objModalbox.style.width = width+'px';
	objModalbox.style.height = height+'px';
	objModalbox.style.marginTop = (0-height/2)+'px';
	objModalbox.style.marginLeft = (0-width/2)+'px';
	$(objModalbox).keydown(function(e) {
	   switch(e.keyCode) {
	     case 27:
	       kalturaCloseModalBox();
	       break;
       default:
         break;
	   }
	});
  $(window).keydown(function(e) {
     switch(e.keyCode) {
       case 27:
         kalturaCloseModalBox();
         break;
       default:
         break;
     }
  });
	
	// create content div inside objModalbox
	var objModalboxContent = document.createElement("div");
	objModalboxContent.setAttribute('id','mbContent');
	if ( url != null )
	{
		objModalboxContent.innerHTML = '<iframe id="kaltura_modal_iframe" scrolling="no" width="' + width + '" height="' + height + '" frameborder="0" src="' + url + '"/>';
	}
	objModalbox.appendChild(objModalboxContent, objModalbox.firstChild);
	
	objBody.appendChild(objModalbox, objOverlay.nextSibling);	
	
	return objModalboxContent;
}
function SendTopToNodePage(){
	window.top.location.href = node_url;
}
function SendTopToEntriesPage(){
  window.top.location.href = goto_url;
}
function kalturaCloseModalBox ()
{
	if ( this != window.top )
	{
		window.top.kalturaCloseModalBox();
		return false;
	}
	//alert ( "kalturaCloseModalBox" );
	// TODO - have some JS to close the modalBox without refreshing the page if there is no need
	overlay_obj = document.getElementById("overlay");
	modalbox_obj = document.getElementById("modalbox");
	overlay_obj.parentNode.removeChild( overlay_obj );
	modalbox_obj.parentNode.removeChild( modalbox_obj );
	
	return false;
}

function $id(x){ return document.getElementById(x); }


function kalturaRefreshTop ()
{
	if ( this != window.top )
	{
		window.top.kalturaRefreshTop();
		return false;
	}	
	window.location.reload(true);
}

function switch_to_exist_partner() {
	var href = location.href;
	tmp = href.replace('&register=no', '');
	href = tmp.replace('?register=no', '');
	if(href.indexOf('?') > 0)
		location.href = href + '&register=no'
	else
		location.href = href + '?register=no'
}

function switch_to_register() {
	var href = location.href;
	tmp = href.replace('&register=no', '');
	href = tmp.replace('?register=no', '');
	location.href = href;
}

KalturaThumbRotator = {

	slices : 16, // number of thumbs per video
	frameRate : 1000, // frameRate in milliseconds for changing the thumbs
	
	timer : null,
	slice : 0,
	img  : new Image(),
	
	thumbBase : function (o) // extract the base thumb path by removing the slicing parameters
	{
		var path = o.src;
		var pos = path.indexOf("/vid_slice");
		if (pos != -1)
			path = path.substring(0, pos);
			
		return path;
	},
	

	change : function (o, i) // set the Nth thumb, request the next one and set a timer for showing it
	{
		slice = (i + 1) % this.slices;

		var path = this.thumbBase(o);
		
		o.src = path + "/vid_slice/" + i + "/vid_slices/" + this.slices;
		this.img.src = path + "/vid_slice/" + slice + "/vid_slices/" + this.slices;

		i = i % this.slices;
		i++;
		
		this.timer = setTimeout(function () { KalturaThumbRotator.change(o, i) }, this.frameRate);
	},
	
	start : function (o) // reset the timer and show the first thumb
	{
		clearTimeout(this.timer);
		var path = this.thumbBase(o);
		this.change(o, 1);
	},

	end : function (o) // reset the timer and restore the base thumb
	{
		clearTimeout(this.timer);
		o.src = this.thumbBase(o);
	}
};


function remove_items_from_field(field_id) { document.getElementById(field_id).value = ''; }
function remove_item_from_field(field_id, entry_id, kaltura_server) {
	field_obj = document.getElementById(field_id);
	field_obj.value = field_obj.value.replace(entry_id, '');
	update_field_thumbs(field_obj, kaltura_server);
}
function get_title() { return document.getElementById("edit-title").value; }

function kaltura_activate_player(thumb_div, player_div) {
	document.getElementById(thumb_div).style.display = 'none';
	document.getElementById(player_div).style.display = 'block';
}

function update_field_thumbs(hidden_field_obj, kaltura_server) {
	entries = Array();
	entries = hidden_field_obj.value.split(',');
	target_div = window.top.document.getElementById(hidden_field_obj.id + '_thumbs_div');
	target_div.innerHTML = '<div class="title">������Ƶ��</div>';
	for(i=0;i<entries.length;i++) {
		if(entries[i].length > 1) {
			target_div.innerHTML += '<div class="kaltura_field_thumb"><img src="'+ kaltura_server +'/entry_id/'+ entries[i] +'" /><br />'+
				'<input type="button" onclick="remove_item_from_field(\''+hidden_field_obj.id+'\', \''+ entries[i] +'\', \''+ kaltura_server +'\');" class="remove_media" /></div>';
		}
	}
	target_div.innerHTML += '<div class="clear-block"></div>';
};/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;;Drupal.AjaxLoad = Drupal.AjaxLoad || {};

/**
 * Load JavaScript and CSS files and data. 
 */
Drupal.AjaxLoad.loadFiles = function (target, response) {
  // Handle scripts.

  // Initialize the list of currently loaded external scripts.
  if (!Drupal.AjaxLoad.externalScripts) {
    Drupal.AjaxLoad.externalScripts = [];
    $('script[src]').each(function() {
      Drupal.AjaxLoad.externalScripts[Drupal.AjaxLoad.externalScripts.length] = $(this).attr('src');
    });
  }
  // See if we have any settings to extend. Do this first so that behaviors
  // can access the new settings easily.
  if (response.scripts) {
    // If there is not already a setting, create one.
    if (!Drupal.settings.ajaxLoad) {
      $.extend(Drupal.settings, {'ajaxLoad': {'loadPending': []}});
    }
    // Each Ajax operation needs its own counter.
    var index = parseInt(Drupal.settings.ajaxLoad.loadPending.length);
    Drupal.settings.ajaxLoad.loadPending[index] = 0;
    var newExternalScripts = 0;
    if (!response.__customSettings && response.scripts.setting) {
      $.extend(Drupal.settings, response.scripts.setting);
    }
    // Inline scripts will be handled separately.
    var types = ['core', 'module', 'theme'];
    $.each(types, function (i, type) {
      if (response.scripts[type]) {
        $.each(response.scripts[type], function (src, data) {
          // Load scripts.
          src = Drupal.settings.basePath + src;
          // Test if the script already exists.
          var found = false;
          for (var j = 0; j < Drupal.AjaxLoad.externalScripts.length; j++) {
            if (Drupal.AjaxLoad.externalScripts[j].indexOf(src) == 0) {
              found = true;
              break;
            }
          }
          if (!found) {
            $.getScript(src, function () {
              newExternalScripts++;
              Drupal.AjaxLoad.externalScripts[Drupal.AjaxLoad.externalScripts.length] = src;
              Drupal.AjaxLoad.loadComplete(index, target, response);
            });
            Drupal.settings.ajaxLoad.loadPending[index]++;
          }
        });
      }
    });
    // Ensure Drupal behaviors are attached to new content, even when no
    // new external scripts have been loaded.
    if (newExternalScripts == 0) {
      Drupal.attachBehaviors(target);
      // Ensure inline scripts are parsed after all external scripts have loaded.
      Drupal.AjaxLoad.loadInline(response);
    }
  }
  if (response.css) {
    // Handle stylesheets.
    var types = ['module', 'theme'];
    $.each(response.css, function (media, files) {
      $.each(types, function (i, type) {
        if (files[type]) {
          $.each(files[type], function (src, data) {
            src = Drupal.settings.basePath + src;
            // Test if the stylesheet already exists.
            if (!$('link[href*=' + src + ']').size()) {
              $('<link type="text/css" rel="stylesheet" media="' + media + '" href="' + src + '" />').appendTo('head');
            }
          });
        }
      });
    });
  }
};

/**
 * When all scripts have loaded, attach behaviors. 
 */
Drupal.AjaxLoad.loadInline = function(response) {
  // Handle inline scripts.
  if (response.scripts.inline) {
    $.each(response.scripts.inline, function (i, script) {
      // document.write calls would mess things up.
      if (script.code.indexOf('document.write') == -1) {
        eval(script.code);
      }
    });
  }
};

/**
 * When all scripts have loaded, attach behaviors. 
 */
Drupal.AjaxLoad.loadComplete = function(index, target, response) {
  Drupal.settings.ajaxLoad.loadPending[index]--;
  if (Drupal.settings.ajaxLoad.loadPending[index] == 0) {
    Drupal.attachBehaviors(target);
    // Ensure inline scripts are parsed after all external scripts have loaded.
    Drupal.AjaxLoad.loadInline(response);
  }
};
;/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options = $.extend({}, options); // clone object since it's unexpected behavior if the expired property were changed
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // NOTE Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};;Drupal.CMS = Drupal.CMS || {};
Drupal.CMS.AJAX = Drupal.CMS.AJAX || {};
Drupal.CMS.sendAjax = function ($url, $data, $callback) {
    $.ajax({
        type: "POST",
        url: $url,
        data: $data,
        error: function(a, b, c){
        },
        success: function(msg){
          var result = Drupal.parseJson(msg);
          if($callback) {
            $callback(result);
          }
        }
    });//ajax end
}

Drupal.CMS.AJAX.responseHandler = function(response) {
  for (var i in response) {
    if (response[i]['command'] && Drupal.CMS.AJAX.commands[response[i]['command']]) {
      Drupal.CMS.AJAX.commands[response[i]['command']](response[i]);
    }
  }
};

Drupal.CMS.AJAX.commands = {
  prepend: function(data) {
    $(data.selector).prepend(data.data);
    Drupal.attachBehaviors($(data.selector));
  },

  append: function(data) {
    $(data.selector).append(data.data);
    Drupal.attachBehaviors($(data.selector));
  },

  replace: function(data) {
    $(data.selector).replaceWith(data.data);
    Drupal.attachBehaviors($(data.selector));
  }, 

  after: function(data) {
    var object = $(data.data);
    $(data.selector).after(object);
    Drupal.attachBehaviors(object);
  },

  before: function(data) {
    var html = $(data.selector).before(data.data);
    Drupal.attachBehaviors(html);
  },

  html: function(data) {
    $(data.selector).html(data.data);
    Drupal.attachBehaviors($(data.selector));
  }, 

  remove: function(data) {
    $(data.selector).remove();
  },

  changed: function(data) {
    if (!$(data.selector).hasClass('changed')) {
      $(data.selector).addClass('changed');
      if (data.star) {
        $(data.selector).find(data.star).append(' <span class="star">*</span> ');
      }
    }
  },

  alert: function(data) {
    alert(data.text, data.title);
  }, 

  css: function(data) {
    $(data.selector).css(data.argument);
  }, 

  settings: function(data) {
    $.extend(Drupal.settings, data.argument);
  },

  data: function(data) {
    $(data.selector).data(data.name, data.value);
  },
  
  attr: function(data) {
    $(data.selector).attr(data.name, data.value);
  },

  restripe: function(data) {
    // :even and :odd are reversed because jquery counts from 0 and
    // we count from 1, so we're out of sync.
    $('tbody tr:not(:hidden)', $(data.selector))
      .removeClass('even')
      .removeClass('odd')
      .filter(':even')
        .addClass('odd')
      .end()
      .filter(':odd')
        .addClass('even');
  }
};

function postContent(url, parameters, containerIdOrCallback) {
    var date = new Date();

    var entity;
    if(isType(containerIdOrCallback,'function')) {
        entity = containerIdOrCallback.toString();
    }
    else {
        entity = "'"+ containerIdOrCallback + "'";
    }

    crossDomainRequest({
        url: url,
        data: parameters,
        method: 'POST',
        success: "postContentSuccess:{containerIdOrCallback:"+entity+"}",
        error: "postContentError:{containerIdOrCallback:"+entity+"}"
    });
}

function postContentSuccess(result, parameters) {
    var options = getObjectFromString(parameters);
    showRpcResult(unescape(result), options.containerIdOrCallback);
}

function postContentError(result, parameters) {
    var options = getObjectFromString(parameters);
    showRpcResult("<span style='color:red'>错误，请稍后重试！</span>", options.containerIdOrCallback);
}

function fetchContent(url, parameters, containerIdOrCallback) {
    var date = new Date();
    var entity;
    if(isType(containerIdOrCallback,'function')) {
        entity = containerIdOrCallback.toString();
    }
    else {
        entity = entity = "'"+ containerIdOrCallback + "'";
    }

    crossDomainRequest({
        url: url,
        data: parameters,
        method: 'GET',
        success: "fetchContentSuccess:{containerIdOrCallback:"+entity+"}",
        error: "fetchContentError:{containerIdOrCallback:"+entity+"}"
    });
}

function fetchContentSuccess(result, parameters) {
    var options = getObjectFromString(parameters);
    showRpcResult(unescape(result), options.containerIdOrCallback);
}

function fetchContentError(result, parameters) {
    var options = getObjectFromString(parameters);
    showRpcResult("<span style='color:red'>错误，请稍后重试！</span>", options.containerIdOrCallback);
}

function showRpcResult(result, containerIdOrCallback) {
    if ('function' == typeof(containerIdOrCallback)) {
        containerIdOrCallback(result);
    }
    else {
        $('#' + containerIdOrCallback).html(result);
    }
}

function crossDomainRequest(options) {
    if (isType(options.beforeSend,'function')) {
        options.beforeSend();
    }
    var adapter = getAdapter("cross_domain_adapter");
    if(adapter.crossDomainRequest) {
        adapter.crossDomainRequest(options);
    } else {
        setTimeout(function(){crossDomainRequest(options)},100);
    }
}

function isType(object, type) {
    return type == typeof(object);
}

function getObjectFromString(string) {
    return eval("("+string+")");
}

function getAdapter(adapterId) {
    if (navigator.appName.indexOf("Microsoft") != -1) {
       return window[adapterId];
    }
    else {
       return document[adapterId];
    }
}

function sleep(n) {
    var start = new Date().getTime();

    while(new Date().getTime() - start < n) {
    }
}
;var cmsMessgageTip = function($message, $obj, $is_append) {
  if ($is_append) {
    $($obj).css('color', '#F00').append('<br/>' + $message);
  }
  else {
    $($obj).css('color', '#F00').text($message);
  }
}

var trim = function($text) {
  return   $text.replace(/(^\s*)|(\s*$)/g, "");  
}

var cmsCheckPlain = function(str) {
  str = String(str);
  //when there is only one line under rich text, it has '<br mce_bogus="1">'. so remove it.
  str.replace(/<br mce_bogus="1">/, '');
  var replace = { '&nbsp;': ' '};
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

//change &nbsp; to ' '
var cmsFilterHTML = function($text) {
  $check = $text.replace(/<[^>].*?>/g, '');
  if (trim($check) == '') {
    $text = '';
  }
  return $text;
}

var cmsGetBodyText = function() {
  var $body_text = '';
  // user rich text
  if ($('#edit-body').css('display') == 'none') {
    $rich_text = $("#edit-body_ifr").contents().find("#tinymce").html();
    if ($rich_text == '<p><br mce_bogus="1"></p>') {
      $body_text = '';
    }
    else {
      //$body_text = cmsFilterHTML(cmsCheckPlain($rich_text));
      $body_text = cmsCheckPlain($rich_text);
    }
  }
  else { //not use rich text
    $text = $('#edit-body').val();
    //$body_text = cmsFilterHTML($text);
    $body_text = cmsCheckPlain($text);
  }

  return $body_text;
}

Drupal.CMS = Drupal.CMS || {};
Drupal.CMS.processTags = function(tagsInput) {
  var tagsInput = $(tagsInput); 
  var tags = tagsInput.val();
  tags = tags.replace(/[\s]*[\uff0c\,][\s]*/g, ','); //将中文逗号替换为英文, 去掉标签两边的空格
  tags = tags.replace(/^[\s]*/, "").replace(/[\s]*$/, ""); //去掉两边的空格
  tags = tags.replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;") //去HTML
  tagsInput.val(tags);
  return tags;
}

Drupal.CMS.getcookie = function(name) {
  var cuki = document.cookie;
  var itemStart = cuki.indexOf(name + "=");
  if (itemStart == -1) {
    return false;
  }
  else {
    var start = cuki.indexOf("=", itemStart) + 1;
    var end = cuki.indexOf(";", start);
    if (end == -1) {
      end = cuki.length;
    }
    var value = unescape(cuki.substring(start,end)); 
    return value;
  }
}

resizeVoteSwf = function(width, height, voteid)
{
  //alert("resizeVoteSwf " + width + " " + height);
  $("#" + voteid).attr("width",width);
  $("#" + voteid).attr("height",height);
}
setVoteCookie = function(name,value)
{
  var time_s = 30 * 24 * 3600 * 1000;
  var exp = new Date();
  exp.setTime(exp.getTime() + time_s);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
getVoteCookie = function(name)
{
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg)) return unescape(arr[2]);
  else return null;
}

getCookie = function(name) {
   return $.cookie(name); 
}
setCookie = function(name, value, options) {
   var options =  options || {};
   $.cookie(name, value, options); 
}

Drupal.behaviors.hiddenUrl = function(context) {
  var checkEnable = function () {
    if ($('#edit-field-use-url-value').attr("checked") == true) {
      $('#edit-field-url-0-url').removeClass('input_bg_disable').removeAttr('disabled');
      Drupal.CMS.hiddenTiaoLianFields();
    }
    else {
      Drupal.CMS.showTiaoLianFields();
      $('#edit-field-url-0-url').addClass('input_bg_disable').attr('disabled', true);
    }
  }
  $('#edit-field-use-url-value').click(function() {
      checkEnable();
  });
  if ($('#edit-field-use-url-value').length == 1) {
    checkEnable();
  };
}

Drupal.CMS.vboTrigger = function (selector, trigger) {
  var nid = $(trigger).attr("nid"); 
  var name = "objects[" + nid + "]";
  var checkbutton = $("input[name='" + name + "']");
  if (checkbutton.length != 0) {
    checkbutton.attr("defaultChecked", true);
    checkbutton.attr("checked", true);
  }
  $(selector).click();
}

//显示跳链被选择时的被隐藏的字段
Drupal.CMS.showTiaoLianFields = function() {
  $(".body-field-wrapper").css('margin-top','0');
  $('#edit-field-url-0-url').parents('form').children().find('input, select').not('input[@type=hidden], input[@type=submit], input[@type=file]').each(function(){
    if ($(this).parents('div.box_bg').length > 0 || ($(this).parents('div.w_topic').length > 0) || ($(this).parents('div.w_news_vote').length > 0)
        ||($(this).parents('div.edit-field-relevant-report-0-value-wrapper').length > 0)
        ||($(this).parents('div.edit-field-is-exclusive-value-wrapper').length > 0)) { //一些被不同class包含的字段
      $(this).parents('.box_bg').css('display', 'block');
      $(this).parents('.w_topic').css('display', 'block');
      $(this).parents('.w_news_vote').css('display', 'block');
      $(this).parents('div.edit-field-relevant-report-0-value-wrapper').css('display', 'block');
      $(this).parents('div.edit-field-is-exclusive-value-wrapper').css('display', 'block');

    }
    else if ($(this).attr('type') == 'radio') { //处理新闻类型时候。
      //$(this).parents('.w_form_item').css('display', 'block');
    } 
    else {
      $(this).parent('div').css('display', 'block');
    }
  });
}

//隐藏跳链不需要的字段
Drupal.CMS.hiddenTiaoLianFields = function() {
  var element_ids =  new Array();
  element_ids[0] = 'edit-title';
  element_ids[1] = 'edit-field-reference-title-0-value';
  element_ids[2] = 'edit-field-use-url-value';
  element_ids[3] = 'edit-field-url-0-url';
  element_ids[4] = 'edit-field-media-from-0-value';
  element_ids[5] = 'edit-field-news-from-0-value';
  element_ids[6] = 'edit-field-input-time-0-value-date';
  element_ids[7] = 'edit-field-publish-time-0-value-date';
  element_ids[8] = 'edit-field-cms-user-0-nid-nid';
  element_ids[9] = 'edit-field-media-author-0-value';
  element_ids[10] = 'edit-field-news-author-0-value';
  element_ids[11] = 'edit-field-picture-0-filefield-remove';
  element_ids[12] = 'edit-field-picture-0-upload';
  element_ids[13] = 'edit-field-picture-0-filefield-upload';
  element_ids[14] = 'edit-field-teaser-0-value';
  $(".body-field-wrapper").css('margin-top','20px');
  $('#edit-field-url-0-url').parents('form').children().find('input, select').not('input[@type=hidden], input[@type=submit], input[@type=file]').each(function(){
    for(var key in element_ids) {
      if (typeof($(this).attr('id')) != 'undefined' && ($(this).attr('id') == element_ids[key])) { //找到字段
        element_ids.splice(key, 1);
        break;
      }
      else if (key == (element_ids.length -1)){
        //$(this).parent().addClass('input_bg_disable').attr('disabled', true);
        if ($(this).parents('div.box_bg').length > 0 || ($(this).parents('div.w_topic').length > 0) || ($(this).parents('div.w_news_vote').length > 0)
            ||($(this).parents('div.edit-field-relevant-report-0-value-wrapper').length > 0)) {
          $(this).parents('.box_bg').css('display', 'none');
          //$(this).parents('.w_topic').css('display', 'none');
          $(this).parents('.w_news_vote').css('display', 'none');
          $(this).parents('div.edit-field-relevant-report-0-value-wrapper').css('display', 'none');
        }
        else if ($(this).attr('type') == 'radio') {
          //$(this).parents('.w_form_item').css('display', 'none');
        }
        else if ($(this).parents('div.w_d_first').length > 0) {
          //nothing
        }
        else if ($(this).parent().parent('.collapsible').length> 0) {
          //nothing
        }
        else {
          $(this).parent('div').css('display', 'none');
          $(this).parent('#edit-field-weight-0-value-wrapper').css('display', 'block');
        }
      }
    }
  });
  if($('#edit-field-special-keyword-0-value-wrapper'))
  $('#edit-field-special-keyword-0-value-wrapper').show();
}

Drupal.CMS.cut_media = function(video_entry_id, status) {
  var params = {"kaltura_entryId": video_entry_id, "kstatus": status};
  Drupal.CMS.sendAjax('/cms/ajax/video/cut', $.param(params));
}

Drupal.CMS.convertNodeReferenceField = function (textfield) {
  var value = $(textfield).val();
  var matches = value.match(/\[[^\d]*(\d+)\]/);
  if (matches) {
    $(textfield).val(matches[1]);
    $("#page-wrapper").data($(textfield).attr("name"), value);
  }
  else {
    $("#page-wrapper").removeData($(textfield).attr("name"));
    $(textfield).val("All");
  }
}

Drupal.CMS.convertTime = function(textfield) {
  var value = $(textfield).val();
  var matches = value.match(/(\d+):(\d+):?(\d*)/);
  if (matches) {
    var hours   = matches[1] ? parseInt(matches[1]) : 0;
    var minutes = matches[2] ? parseInt(matches[2]) : 0;
    var seconds = matches[3] ? parseInt(matches[3]) : 0;
    timestamp = hours * 3600 + minutes * 60 + seconds;
    $(textfield).val(timestamp);
    $("#page-wrapper").data($(textfield).attr("name"), value);
  }
  else {
    $("#page-wrapper").removeData($(textfield).attr("name"));
    $(textfield).val("");
  }
}

Drupal.CMS.showWords = function(obj, container) {
  var number = $(obj).val().length;
  $(obj).filter(":not(.showwords-processed)").addClass("showwords-processed")
        .change(function(){Drupal.CMS.showWords($(this), $(container));})
        .keyup(function(){Drupal.CMS.showWords($(this), $(container));})
        .keydown(function(){Drupal.CMS.showWords($(this), $(container));});

  if ($(container).find('div.w_word_total').length > 0)
    $(container).find('div.w_word_total').html('共：' + number + '字');
  else
    $(container).append('<div class="w_word_total">共：' + number + '字</div>');
}

Drupal.CMS.datepicker = function (obj) {
  var inputField = $(obj);
  var datePopup = Drupal.settings.datePopup['.datepicker'];
  
  inputField.not(".date-picker-processed")
              .addClass('date-popup-init')
              .datepicker(datePopup.settings)
};/* $Id: img_assist.js,v 1.6.4.2 2008/07/22 23:08:13 sun Exp $ */

Drupal.behaviors.img_assist = function(context) {
  $('textarea.img_assist:not(.img_assist-processed)', context).each(function() {
    // Drupal's teaser behavior is a destructive one and needs to be run first.
    if ($(this).is('textarea.teaser:not(.teaser-processed)')) {
      Drupal.behaviors.teaser(context);  
    }
    $(this).addClass('img_assist-processed').parent().append(Drupal.theme('img_assist_link', this));
  });
}

Drupal.theme.prototype.img_assist_link = function(el) {
  var html = '<div class="img_assist-button">', link = Drupal.t('Add image');
  if (Drupal.settings.img_assist.link == 'icon') {
    link = '<img src="'+ Drupal.settings.basePath + Drupal.settings.img_assist.icon +'" alt="'+ link +'" title="'+ link +'" />';
  }
  html += '<a href="'+ Drupal.settings.basePath +'index.php?q=img_assist/load/textarea&textarea='+ el.name +'" class="img_assist-link" id="img_assist-link-'+ el.id +'" title="'+ Drupal.t('Click here to add images') +'" onclick="window.open(this.href, \'img_assist_link\', \'width=600,height=350,scrollbars=yes,status=yes,resizable=yes,toolbar=no,menubar=no\'); return false;">'+ link +'</a>';
  html += '</div>';
  return html;
}

function launch_popup(nid, mw, mh) {
  var ox = mw;
  var oy = mh;
  if((ox>=screen.width) || (oy>=screen.height)) {
    var ox = screen.width-150;
    var oy = screen.height-150;
    var winx = (screen.width / 2)-(ox / 2);
    var winy = (screen.height / 2)-(oy / 2);
    var use_scrollbars = 1;
  }
  else {
    var winx = (screen.width / 2)-(ox / 2);
    var winy = (screen.height / 2)-(oy / 2);
    var use_scrollbars = 0;
  }
  var win = window.open(Drupal.settings.basePath + 'index.php?q=img_assist/popup/' + nid, 'imagev', 'height='+oy+'-10,width='+ox+',top='+winy+',left='+winx+',scrollbars='+use_scrollbars+',resizable');
}

;// $Id: jquerymenu.js,v 1.5 2009/02/04 21:54:54 aaronhawkins Exp $
Drupal.behaviors.jquerymenu = function(context) {
  $('ul.jquerymenu:not(.jquerymenu-processed)', context).addClass('jquerymenu-processed').each(function(){
    $(this).find("li.parent span.parent").click(function(){
      momma = $(this).parent();
	  //g_momma = $(this).find('li.open');//add by Willardlin 20091231
      if ($(momma).hasClass('closed')){
        $($(this).siblings('ul').children()).hide().fadeIn('3000');
        $(momma).children('ul').slideDown('700');
        $(momma).removeClass('closed').addClass('open');
        $(this).removeClass('closed').addClass('open');
		//$(g_momma).children('ul').slideUp('700');//add by Willardlin 20091231
		//$(g_momma).removeClass('open').addClass('closed');//add by Willardlin 20091231
		//$(g_momma).children('span').removeClass('open').addClass('closed');//add by Willardlin 20091231
      }
      else{
        $(momma).children('ul').slideUp('700');
        $($(this).siblings('ul').children()).fadeOut('3000');
        $(momma).removeClass('open').addClass('closed');
        $(this).removeClass('open').addClass('closed');
      }
    });
  });
};/**
 * @file nodereference_explorer_plugin_cck_link.js
 * Each Nodereference Explorer plugin has a client side implemenentation. It is about the saving
 * the selected value from the dialog to the underlying widget.
 */


/**
 * Save the value to the parent widget
 * @param widget
 *   parent widget
 * @param
 *   value to be saved, format: NODE_TITLE [nid: NID], e. g. Page [nid: 234]
 */
nodereference_explorer_plugin_cck_link_setValue = function(widget, value) {
  //TODO: split string with regular expression
  $(widget).val(value).blur(); //trigger change event for depending actions  
  var del1 = value.indexOf('[');
  var del2 = value.indexOf(':');
  var del3 = value.indexOf(']');
  title = value.substring(0, del1);
  nid = value.substring(del2+1, del3);
  $(widget+'-url').val('node/' +nid);
  $(widget+'-title').val(title);
}

/**
 * Removes the value from the parent widget and clears the preview
 * @param widget
 *   parent widget
 */
nodereference_explorer_plugin_cck_link_removeValue = function(widget) {
  $(widget).val('').blur();
  $(widget+'-url').val('');
  $(widget+'-title').val('');
};/**
 * @file nodereference_explorer_plugin_cck_nodereference.js
 * Each Nodereference Explorer plugin has a client side implemenentation. It is about the saving
 * the selected value from the dialog to the underlying widget.
 */

/**
 * Save the value to the parent widget
 * @param widget
 *   parent widget
 * @param
 *   value to be saved, format: NODE_TITLE [nid: NID], e. g. Page [nid: 234]
 */
nodereference_explorer_plugin_cck_nodereference_setValue = function(widget, value) {
  $(widget).val(value).blur(); //trigger change event for depending actions
  $(widget).trigger('change');
}

/**
 * Removes the value from the parent widget and clears the preview
 * @param widget
 *   parent widget
 */
nodereference_explorer_plugin_cck_nodereference_removeValue = function(widget) {
  $(widget).val('').blur();
}
  ;/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);;/**implement the function when the page load the html code*/

jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options = $.extend({}, options); // clone object since it's unexpected behavior if the expired property were changed
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // NOTE Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
//同乐坊请求数据开始点
var happyStart = 1;
//同乐坊请求数据数量
var happyLength = 10;

// 首页--人物翻页循环ID
var person_interval_id = '';

$(document).ready(
	function () {
		try {
			//首页时间显示
			//showtime();

			//其他加载项
			onReady();

		}
		catch (e) {

		}
	}
);

//执行搜索栏动态取数据。
function getSearchTip() {
	$("#search").autocomplete("/proxy.php", {
		"minChars": 1,
		"delay": 100,
		"autoFill": false,
		"scrollHeight": 200,
		"mustMatch": false,
		"selectFirst": false,
		"width": 220,
		"matchContains": false,
		"parse": parse_callback,
		"formatItem": format_callback
	}).result(function(event, item){
         if (item.indexValue) {
            $("#documentType").val(item.indexValue - 1);
        }
    });
}

/**
 * 搜索框使用js :parse_callback, format_callback.
 */
function parse_callback(data) {
 var obj = '';
    try {
        obj = eval('('+ data +')');
    } catch (e) {
        return [];
    }
    var rows = [];
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].type == 'suggestion') {
            rows[rows.length] = {
                'data': obj[i],
                'value': obj[i].name,
                'result': obj[i].name
            };
        } else {
            rows[rows.length] = {
                'data': obj[i],
                'value': obj[i].name,
				'result': obj[i].name
            };
        }
    }
    return rows;
}
function format_callback(item, position, length) {
    var str;
    if (item.type == 'suggestion') {
        str = '<span style="font-weight:bold"><span style="float:left">'+item.name+'</span>'
          +'<span style="float:right">'+item.category+'</span></span>';
    } else if (item.type == 'stock') {
        str = '<span>'+item.abbreviation+'</span>'
          +'<span style="position: absolute; left: 50px;">'+item.code+'</span>'
          +'<span style="position: absolute; left: 110px;">'+item.name+'</span>'
          +'<span style="position: absolute; right: 5px;">'+item.category+'</span>';
    }
    return str;
}

/**
 * 获取cookie
 */
 function getLoginUser() {
	var userId = $.cookie('userId');

	if (("" != userId) && (null != userId)) {
		return userId;
	}
	else {
		return 0;
	}
}

/**
 * 获取用户名
 */
function getUserName() {
	var username = $.cookie('username');

	if (username) {
		return username;
	}
	else {
		return '匿名';
	}
}


/**
 * 获取cookie中key的value
 */
function getcookievalue(name) {
var cookie_start = document.cookie.indexOf(name);
var cookie_end = document.cookie.indexOf(";", cookie_start);
return cookie_start == -1 ? '' : unescape(document.cookie.substring(cookie_start + name.length + 1, (cookie_end > cookie_start ? cookie_end : document.cookie.length)));
}
 
/**
 * 登出
 */

function userLogout() {
	var userid = getcookievalue('userId');
	//fetchContent(apiUrl, 'requestType=userLogout' + '&key=api_key' + '&userid=' + userid );
	$.cookie("username", null, {path: '/', domain:cookieDomain});
	$.cookie("userId", null, {path: '/', domain: cookieDomain});
	$.cookie("uchome_auth", null, {path: '/', domain: cookieDomain});
	$("#user-name-label").fadeOut();
	$("#user-name").html('');
	$("#user-name").fadeOut();
	$("#comment-logout").fadeOut();
	$("#comment-register").fadeIn();
	$("#comment-logon").fadeIn();
	
	$("#logonRegister").fadeIn();
	$("#personId").html('');
	$("#personInfo").fadeOut();
    if (null != $("#videoUserContent")) {
        $("#videoUserContent .videoAudioInputVal").hide();
        $("#videoUserContent .videoAudioInput").show();
        $("#video-user-name").html('');
    }
	$('.indexLoginTop,.indexLoginTop2').html('<h2><img src="/sites/all/themes/shark/images/header/index0_17.jpg" alt=""><a href="http://t.yicai.com/pub/" class="white" target="_blank">进入同乐坊</a>          </h2><p class="clubunreg"><a href="http://t.yicai.com/reg/" class="white" target="_blank">3秒注册</a></p>');
	//通知排社区行榜刷新用户信息
	updateCommunityUserInfo();
	
	//修改页面上用户关注状态
	if (null != $(".cms-person").html()) {
		$(".cms-person a img").each(function() {
			$(this).show();
		});
	}
}

function updateCommunityUserInfo()
{
	try
	{
		document.getElementById("rank_communtyRank").reloadRank();
	}
	catch(e)
	{
		//alert("updateCommunityUserInfo errror");
	}
}
 
//加载执行语句放在里面。
function onReady() {
    initquotesmallpic();
	$(".wireless .left li").click(function(){
	$(".wireless .left li").removeClass("wirelessTabAction");
	$(".wireless .left li").addClass("wirelessTabNormal");
	$(this).removeClass("wirelessTabNormal");
	$(this).addClass("wirelessTabAction");
	$(".wirelessRightCont").hide();
    $(".wireless"+($(".wireless .left li").index(this)+1)).show(); 
});
	
    //首页财经风云人物
    if (getWidth("#block-views-rev_block_list3-block_14 .item-list ul")) {
		$("#block-views-rev_block_list3-block_14").Scroll({line:1, speed:500,timer:0,left: "fpeopleRight",right:"fpeopleLeft"});
	}

	//首页最新闻
	$("#block-views-homepage_news-block_2 .item-list").Scroll({line:1, speed:500,timer:3000, up:"lastNewsDown", down:"lastNewsUp"});

	//首页编辑精选
	if (getWidth("#block-views-homepage_news-block_9 .item-list ul")) {
		$("#block-views-homepage_news-block_9").Scroll({line:1, speed:500,timer:0,left: "editorChosenRight",right:"editorChosenLeft"});
	}

	//最新点播
	if (getWidth("#block-views-homepage_news-block_16 .item-list ul")) {
		$("#block-views-homepage_news-block_16").Scroll({line:1, speed:500,timer:0, left: "newestVideoDown",right:"newestVideoUp"});
	}

	//视频新闻
	if (getWidth(".aggregatVideoNews .item-list ul")) {
		$(".aggregatVideoNews").Scroll({line:1, speed:500,timer:0, left: "videoNewsDown",right:"videoNewsUp"});
	}

	//首页人物，添加style，以便于js的操作应用。
	$("#block-views-homepage_news-block_1 .item-list ul li:first").addClass("person-active");
	$("#block-views-homepage_news-block_1 .item-list ul li a").attr("title", "");//去掉乱七八糟的提示信息
    personAutoSlideSwitch(); // 每3秒换一个人物
    ControlPersonAutoSlideSwitch(); // 鼠标在上面时停止轮转，移出开始

	//内容页：最新闻效果
	$("#block-views-content_page-block_2 .item-list").Scroll({line:1, speed:500,timer:3000, up:"contentLastNewsDown", down:"contentLastNewsUp"});

	//Email 订阅: 获取焦点的时候清除数据
	$("#emailAddress").focus(function() {$("#emailAddress").val('');});

	//搜索栏：获取焦点清除数据
	//$("#search").focus(function(){$(this).val('');});
	$("#search").click(function(){
		$(this).val('');
	});

	//今日推荐top
	if (getWidth("#block-views-content_page-block_1 .item-list ul")) {
		$("#block-views-content_page-block_1").Scroll({line:1, speed:500,timer:0,left:"recommend-right",right:"recommend-left"});
	}
	//今日推荐right
	$(".today-recommend-right .item-list").Scroll({line:1,speed:500,timer:0,up:"todayRecommendDown",down:"todayRecommendTop"});
    //世界杯推荐
    $(".world-recommend-right .item-list").Scroll({line:1,speed:500,timer:0,up:"worldRecommendDown",down:"worldRecommendTop"});
	//同乐坊
	//if (checkScrollHeight(".TLFDetail")) {
		//$("#block-block-8 .TLFDetail").Scroll({line:1,speed:500,timer:2000, up:"tlfdown",down:"tlfup"});
	//}

	//观点社论
	if (getWidth("#comment-views ul")) {
		$("#comment-views").Scroll({line:1, speed:500,timer:0, left: "mceItemright",right:"mceItemLeft"});
	}

	//作家专栏
	if (getWidth("#index-authur ul")) {
		$("#index-authur").Scroll({line:1, speed:500,timer:0, left: "index-authur-right-button",right:"index-authur-left-button"});
	}

	//市场页iframe自适应高度
	suitHeight("#marketRollData");
	
	//人物在线状态
	setUserState();
	
	//添加关注, 注意，这个地方不能处理评论的关注，评论的关注在node-news.tpl.php 和 node-kaltura_entry.tpl.php
	$(".cms-person a img").each(function() {
		$(this).click(function() {
			setFollowUser(this);
		})
		.mouseover(function() {
			var tip = "<p style='width: 60px; text-align:center; position: absolute;left: 0px;top: 26px;background:#FFFFE1;border:solid 1px;'>加为关注</p>";
			$(this).after(tip);
		})
		.mouseout(function() {
			$(this).next().remove();
		});
	});

	//搜索栏动态数据
	getSearchTip();
}

//添加人物关注
function setFollowUser(obj) {
	var user = $(obj).attr("class").split("-");
	var userId = user[1];
	
	$("#followId").val(userId);

  
  var currentUserId = getLoginUser();
  //不能关注自己
  if (currentUserId == userId) {
     return;
  }
	
	if ("" == userId || null == userId) {
		alert("关注失败");
	}
	
	if (0 == currentUserId) {
		window.open("http://t.yicai.com/do.php?ac=0e3ca7cf738c8a8cc8dfa6f9a0dbedc0");
		return;
	}
	
    var callback = function(msg) {
		var msgObj = eval("(" + msg + ")");
		if ("1" == msgObj.ack) {
			//alert("关注成功");
			$(".contact-" + $("#followId").val()).each(function() {$(this).hide();});
			//$(obj).remove();
		}
		else {
			alert("关注失败");
		}
	}
	
	postContent(apiUrl, 'key=api_key&requestType=followOtherUser&userId=' + currentUserId + "&personId=" + userId, callback);
}

//设置任务当前状态
function setUserState() {
    var users = new Array();
	var userIds = "";
	
	//获取当前用户
	$(".cms-person").each(function() {
		var imgObj = $("img:first", $(this));
		var userContainer = imgObj.attr("class").split("-");
		
		var sign = false;
		if (0 < users.length){
			for (i in users) {
			    sign = false;
				if (users[i] == userContainer[1] || "" == userContainer[1]) {
				    sign = true;
					break;
				}
			}
		}
		
		//当数组中没有该值的时候，加入该值
		if (!sign) {
			users.push(userContainer[1]);
			if ("" == userIds) {
				userIds = userContainer[1];
			}
			else {
				userIds = userIds + "," + userContainer[1];
			}
		}
	});
	
	//根据返回的数据信息，修改状态值
	var callback = function(msg) {
		var msgObj = eval("(" + msg + ")");
		//当返回错误数据时，清除状态图标

		if (1 != msgObj.ack) {
		    $(".cms-person").hide();
			return;
		}
		
		//根据状态修嘎当前图标
		var usersInfo = msgObj.result;
		for (i in usersInfo) {
			if ("0" == usersInfo[i].isonline) {
				$(".state-" + usersInfo[i].uid).attr("src", "/sites/default/files/page/offline.png");
			}
			
			//关注状态
			var currentUser = getLoginUser();
			if ("1" == usersInfo[i].isFollowed) {
				$(".contact-" + usersInfo[i].uid).hide();
			}
			if (usersInfo[i].uid == currentUser) {
				$(".contact-" + usersInfo[i].uid).hide();
			}
		}
	}
	
	var loginid = (0 != getLoginUser()) ? getLoginUser() : 0;
	//调用接口，返回用户个人信息
	if ("" != userIds) {
		fetchContent(apiUrl + '?key=api_key&requestType=userinfo&userIds=' + userIds + '&loginid=' + loginid + "&", "1=1", callback);
	}
	
}

/**
 * iframe自适应高度
 */
function suitHeight(frame){
	var bobo = $("#marketRollData");
	if (document.getElementById){
		if (bobo && !window.opera){
			if (bobo.contentDocument && bobo.contentDocument.body.offsetHeight){
				bobo.height = bobo.contentDocument.body.offsetHeight;
			}else if(bobo.Document && bobo.Document.body.scrollHeight){
				bobo.height = bobo.Document.body.scrollHeight;
			}
		}
	}
}

/**
改变ul宽度，让所有的子元素li都显示在一行，以便于移动。
ul调用这个方法，如：getWidth("ul");
*/

function getWidth(objString){
	var ulObj = $(objString);
	var obj = $(objString + " li");//obj是关于li的对象
	var number = obj.length;
	var first = $(objString + " li:first");//得到li的第一个对象
	var width = first.width();
	var maxW = width * number;
	var ulCurrentWidth = ulObj.width();
	var restW = 50;//冗余宽度
	if (maxW > ulCurrentWidth) {
		ulObj.width(maxW + restW);

		return true;
	}
	else {
		return false;
	}


}

/**
 * 判断容器里面的li item总高度是否超过了容器的高度，没有超过则不需要滚动
 * 参数：容器对象,包含了这个ul的，并且有确定高度值得容器,如果容器高度自适应，则不可以使用。/
*/
function checkScrollHeight(obj) {
	var containerHeight = $(obj).height();
	var liObj = $(obj + " li");
	var num = obj.length;
	var first = $(obj + " li:first");
	var itemHeight = first.height();
	if (containerHeight > (num * itemHeight + itemHeight / 2)) { //多加itemHeight/2为冗余高度

		return false;
	}
	else {

		return true;
	}
}

//改变字体大小，不具有通用性。
function changeFontSize(obj, size, sign) {
	var obj = $(obj);
	if (size == 'big') {
		obj.css({'font-size' : '16px', 'line-height' : '26px'});
	}
	else if (size == 'middle') {
		obj.css({'font-size' : '14px', 'line-height' : '24px'});
	}
	else if (size == 'small') {
		obj.css({'font-size' : '12px', 'line-height' : '22px'});
	}
	for (var i = 1; i <= 3;i++) {
		$("#font-" + i).parent('div.articleSizeAction').removeClass('articleSizeAction');
		$("#font-" + i).parent('div').addClass('articleSizeNormal');
	}
	$(sign).parent('div').addClass('articleSizeAction');
}

/**
 * 打开弹出框
 */
function openDialog() {
  var _div = $("#dialog");
  var _dialogDiv = $("#logonContainer");
  var _shadow = $("#shadow");

  var _width = document.body.clientWidth;
  var _height = document.documentElement.scrollHeight;
  var _top = (document.documentElement != null) ? document.documentElement.scrollTop : document.body.scrollTop;
  var _left = (document.documentElement != null) ? document.documentElement.scrollLeft : document.body.scrollLeft;

  _div.width(_width)
      //.height(_height)
	  .scrollTop(_top)
	  .scrollLeft(_left);
  
  $("#div-player-id").css('visibility', 'hidden');
  $("#player-window").css('visibility', 'hidden');
  $("#playerswfcontainer").css('visibility', 'hidden');
  _shadow.height(_height);
  _shadow.animate({opacity:0.4},100, function () {_div.fadeIn(100);});
  
  //登陆对话框的位置
  _dialogDiv.css({left:(_width/2-175) + "px",top:$(document).scrollTop() + $(window).height() / 3 + "px"});
  
  //初始化数据，尤其是checkbox的数据。
  $("#status").attr("checked",false);
  $("#username").focus();
}

function closeDialog() {
  $("#div-player-id").css('visibility', 'visible');
  $("#player-window").css('visibility', 'visible');
  $("#playerswfcontainer").css('visibility', 'visible');
  $("#dialog").css({display: "none"});
  
  //还原checkbox的数据。
  $("#statusLabel").attr("class", "statusUnchecked");
  $("#status").attr("checked", false);
  $("#password").val("");
}

function logonSubmit() {
	if (!validateLogon()) {
		return false;
	}
	else {
		var username = $("#username").val();
		var password = $("#password").val();
		var url = '/proxy/trans_tlf.php?datatype=TLFLogin&username=' + username + '&password=' + password + '&rnd=' + Math.random();
		url = encodeURI(url);
		$.post(url, logonCallback);
		//postContent(apiUrl, 'requestType=userLogin' + '&username=' + username + '&password=' + password + "&key=api_key", logonCallback);
	}
}

function logonCallback(msg) {
	var msgObj = eval('(' + msg + ')');
	var status = $("#status").attr("checked");
	var username = msgObj.result.username;
	if ('1' != msgObj.ack) {
	    if('69' == msgObj.errinfo) {
			$("#logonTip").html("用户名或者密码错误");
		}
		else {
			$("#logonTip").html("登陆失败，请等会儿再试");
		}
	}
	else {
	    //$("#dialog").fadeOut();
		closeDialog();
		$("#logonRegister").fadeOut();
		$("#personId").html(username);
		$("#personInfo").fadeIn();
		if($("#nodereg")){
		    $("#nodereg").hide();
		    }
        if (null != $("#videoUserContent")) {
            $("#videoUserContent .videoAudioInput").hide();
            $("#videoUserContent .videoAudioInputVal").show();
            $("#video-user-name").html(username);
       }
		if ($("#logonSign").val() == 0) {
		    cancelDisplayLimit();
		}
		
		//登陆显示内容
		//cancelDisplayLimit();
		
		//下面处理是否有评论发表的form,如果有，需要对那儿的登陆，用户名等进行处理
	    if (null != $(".comment-user-info-container")){
			$("#comment-register").fadeOut();
		    $("#comment-logon").fadeOut();

		    $("#user-name-label").fadeIn();
		    $("#user-name").html(username);
		    $("#user-name").fadeIn();
		    $("#comment-logout").fadeIn();
		}
/*
		if (status) {
			$.cookie('userId', escape(msgObj.result.userId), {expires: 7, path: '/', domain: cookieDomain});
			$.cookie('username', username, {expires: 7, path: '/', domain: cookieDomain});
			
		}
		else {
			$.cookie('userId', escape(msgObj.result.userId), {expires: 1/(24), path: '/', domain: cookieDomain});
			$.cookie('username', username, {expires: 1/(24), path: '/', domain: cookieDomain});
		}*/
		
		//登录时修改当前作者的状态
		setUserState();
		
		updateCommunityUserInfo();
		$('.indexLoginTop').html('你好，<a style="color: #A9CDE2;" href="http://t.yicai.com/" target="_blank">' + username + '</a>');
		$("#personId").wrap("<a></a>");
		$("#personId").parent().attr("href","http://t.yicai.com/");
		$("#personId").parent().attr("target","_blank");
	}
}

/**
 * 验证值value是否为空
 * 如果是，返回true,否则返回false.
 */
function isNull(value) {
	var preg = /^[ ]*$/;

	return preg.test(value);
}

function validateLogon() {
    var sign = 0;
	var tipInfo = "";
	if (isNull($("#username").val())) {
		$("#username").addClass("border-red");
		sign = 1;
		tipInfo += "用户名";
	}

	if (isNull($("#password").val())) {
		$("#password").addClass("border-red");
		sign += 1;
		if (sign == 2) {
			tipInfo +="和密码不能为空";
		}
		else {
			tipInfo += "密码不能为空"
		}
	}
	else {
		if (sign == 1) {
			tipInfo += "不能为空";
		}
	}
	if (0 == sign) {
		return true;
	}
	else {
		$("#logonTip").html(tipInfo)
		return false;
	}
}

/**
 *  获取同乐坊数据
 */
function getHappyAction() {
    fetchContent(apiUrl + "?requestType=dynamicList&pageIndex=" + happyStart + "&pageLength=" + happyLength + "&key=api_key&" , '1=1', getHappyData);
}

function getHappyData(msg) {
    //msg = "{'ack':'1','errorInfo':'','result':[{'personName':'周小明','isOnline':'1','title':'炒股成了千万富豪','linkUrl':'http://xxxxxxxxxxxxxxxxxxx'},{'personName':'周小明','isOnline':'1','title':'炒股成了千万富豪','linkUrl':'http://xxxxxxxxxxxxxxxxxxx'},{'personName':'周小明','isOnline':'1','title':'炒股成了千万富豪','linkUrl':'http://xxxxxxxxxxxxxxxxxxx'},{'personName':'周小明','isOnline':'1','title':'炒股成了千万富豪','linkUrl':'http://xxxxxxxxxxxxxxxxxxx'},{'personName':'周小明','isOnline':'1','title':'炒股成了千万富豪','linkUrl':'http://xxxxxxxxxxxxxxxxxxx'},{'personName':'周小明','isOnline':'1','title':'炒股成了千万富豪','linkUrl':'http://xxxxxxxxxxxxxxxxxxx'},{'personName':'周小明','isOnline':'1','title':'炒股成了千万富豪','linkUrl':'http://xxxxxxxxxxxxxxxxxxx'},]}";
	var msgObj = eval('(' + msg + ')');

	if (msgObj.ack != 1) {
		$("#TLFUL").html(msgObj.errorInfo);
	}
	else {
		var content="";
		var list = msgObj.result;
		if ('object' != typeof(list)) {
			$("#TLFUL").html("<span style='color:#75B9E0'>没有同乐坊数据</span>");
			return;
		}
		for (var i=0; i<list.length; i++) {
			content += "<li><div class='TLFItem'><div class='TLFName'><span class='white'>"+ list[i]["personName"] +"："+"</span></div>";
			//if (1 == list[i]["isOnline"]) {
			//	content += "<div class='TLFstate'><img src='/sites/default/files/page/state2.gif' /></div>";
			//}
			//else {
			//	content += "<div class='TLFstate'><img src='/sites/default/files/page/state2.gif' /></div>"; //需要换成灰色图片
			//}

			//content += "<div  class='mceItem'><img border='0' src='/sites/default/files/page/follow1.jpg'/></div>";
			//content += "<div class='TLFTitle'><a class='f12blue' href=''>" + list[i]["title"] + "</a></div>";

			content += "<div class='TLFTitle'><a class='f12blue' target='_blank' href='" + list[i]["linkUrl"] + "'>" + list[i]["title"] + "</a></div>";
			content += "</div></li>";
		}

		$("#TLFUL").html(content);
	}
	$("#block-block-8 .TLFDetail").Scroll({line:1,speed:500,timer:0, up:"tlfup",down:"tlfdown"});
}

/*
* 每3秒钟换一个人物
*/
function personAutoSlideSwitch() {
    if (person_interval_id != '') {
        clearInterval(person_interval_id);
    }
    
    person_interval_id = setInterval("slideSwitch(1, true)", 6000);
}

function ControlPersonAutoSlideSwitch() {
    $("#block-views-homepage_news-block_1").mouseover(function() {
        if (person_interval_id != '') {
            clearInterval(person_interval_id);
        }
    });
    
    $("#block-views-homepage_news-block_1").mouseout(function() {
        personAutoSlideSwitch();
    });
}




/**
淡入淡出效果--不具有通用性
*/
function slideSwitch(sign, is_auto) {
    var $active = $("#block-views-homepage_news-block_1 .item-list li.person-active");
    //var $activeImg = $("#block-views-homepage_news-block_1 .item-list li.person-active .peopleDetailImg");

    if ( $active.length == 0 ) {
	    $active = $("#block-views-homepage_news-block_1 .item-list li:last");
		//$activeImg = $("#block-views-homepage_news-block_1 .item-list li:last .peopleDetailImg");
	}

	//var $activeImg = $active.find("div.peopleDetailImg");
	//var $activeText = $active.find("div.people");
    // use this to pull the images in the order they appear in the markup
	if (sign) {
		var $next =  $active.next().length ? $active.next() : $("#block-views-homepage_news-block_1 .item-list li:first");
	}
	else {
		var $next = $active.prev().length ? $active.prev() : $("#block-views-homepage_news-block_1 .item-list li:last");
	}

	//var $nextImg = $next.find("div.peopleDetailImg");
	//var $nextText = $next.find("div.people");
	//alert($nextImg.val());
    //$active.addClass("last-active")
    /*
	$active.fadeOut(500,function() {
			$active.addClass("person-last-active");//$activeImg.fadeOut(500);
		});


	$next.fadeIn(500, function() {
			$next.addClass('person-active');
            $active.removeClass("person-active person-last-active");//$nextImg.fadeIn(500);
        })
*/
    $active.hide();
    $next.show();
    $active.addClass("person-last-active");
    $next.addClass('person-active');
    $active.removeClass("person-active person-last-active");
    // 手动点击换人后重新开始循环
    if (!is_auto) {
        personAutoSlideSwitch();
    }
    
	/*
	$active.css({opacity: 1.0})
	   .animate({opacity: 0.0}, 500, function() {
			$active.addClass("person-last-active");
		});

    $next.css({opacity: 0.0})
        .addClass('person-active')
        .animate({opacity: 1.0}, 500, function() {
            $active.removeClass("person-active person-last-active");
        });
	*/
}


function setElementDisabled(sign, obj) {
    if (sign) {
        $(obj).attr("disabled", 'true');
    }
    else {
        $(obj).attr("disabled", "");
    }
}

/**display the time automatically.*/
function showtime () {
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	var timeValue = ((hours >= 12) ? " 下午" : " 上午" );
	timeValue += ((hours >12) ? hours -12 :hours);
	timeValue += ((minutes < 10) ? ":0" : ":") + minutes;

	$("#miniTime").html(timeValue);
	setTimeout("showtime()",1000);
}

function saveEmail() {
	var email = $("#emailAddress").val();
	//email = trim(email);
	var info = '';

	if (!doEmailValidation(email)){
		emailEffect(1, 1)
		return;
	}
	else {
	    //$("#saveEmailButton").attr("disabled", true);
		$.ajax({
			url: '/cms/ajax/email',
			type: 'GET',
			data: 'title=' + email,
			error: function() {
			    emailEffect(1, 2);
			},
			success: function(msg){
				var value = eval('(' + msg + ')');
				var isSuc = value.error;

				if ('2' == isSuc) {
					emailEffect(1, 3);
				}
				else if ('1' == isSuc) {
					emailEffect(1, 2);
				}
				else {
					emailEffect(0, 0);
				}

			}
		});

		//infoHidden();
	}

}

/**
 * 处理订阅email的提示信息
 * sign, 表示成功或者失败， 0表示成功，1表示失败。
 * errorTag, 表示信息类型，1表示格式错误，2表示订阅失败
 */
function emailEffect(sign, errorTag) {
    var container = $("#emailTipsInfo");
	//var emailContainer = $("#emailAddress");
	var information = new Array("订阅成功","格式错误","订阅失败","不能重复订阅");
	container.slideUp(500);
	if (0 == sign) {
		container.removeClass("border-red bg-red")
		         .addClass("border-green bg-green")
				 .html(information[0]);
		//emailContainer.removeClass("border-red")
		//			  .addClass("border-green");
	}
	else if (1 == sign) {
		//emailContainer.removeClass("border-green")
		//			  .addClass("border-red");
		container.removeClass("border-green bg-green")
				 .addClass("border-red bg-red");
		if (1 == errorTag) {
			container.html(information[1]);
		}
		else if (2 == errorTag) {
			container.html(information[2]);
		}
		else if (3 == errorTag) {
			container.html(information[3]);
		}
	}

	container.slideDown(500, function(){infoHidden();});
}

//显示提示信息并且去掉
function emailTipsInfo (info) {
	var obj = $("#emailTipsInfo");
	obj.text(info);
	obj.fadeIn(500);
}

function infoHidden() {
	var obj = $("#emailTipsInfo");
	//var inputObj = $("#emailAddress");
	obj.slideUp(1500);
	//inputObj.removeClass("border-red border-green");
}

//验证email地址
function doEmailValidation (email) {
	var preg = /^[a-z0-9]+[-_\.]?[a-z0-9]+@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$/i;

	return preg.test(email)
}

function showHeaderTitle(title) {
	$("#block-block-21 span").text(title);
}

function changeStatus(){
	var objLabel = $("#statusLabel");
	objLabel.toggleClass("statusChecked");
}

/**
淡入淡出效果--不具有通用性
if "sign = 1", scroll up, "sign = 0", scroll down
*/
/**
function showFade(sign) {
    var index = $("#peopleIndex").val();
    index = parseInt(index);
    sign = parseInt(sign);

    //check wether is the top item.
    //If top item, return.
    if ((1 == index) && (1 == sign)) {
        return;
    }

    if (0 == sign) {
        next = index + 1;
    }
    else if (1 == sign) {
        next = index - 1;
    }

    var obj = $("#block-views-homepage_news-block_1 li.views-row-" + index);
    var objNext = $("#block-views-homepage_news-block_1 li.views-row-" + next);
    if (!objNext[0]) {
        next = 1;
        objNext = $("#block-views-homepage_news-block_1 li.views-row-" + next);
    }

    $("#peopleIndex").val(next);
    obj.fadeOut(500);

    objNext.fadeIn(500);
}
*/

/**
Click Scroll function--通用函数
*/
(function ($) {
    $.fn.extend({
        Scroll: function (opt, callback) {
            //参数初始化
            if (!opt) var opt = {};
            var _btnUp = $('#' + opt.up); //Shawphy:向上按钮
            var _btnDown = $('#' + opt.down); //Shawphy:向下按钮
            var _btnLeft = $('#' + opt.left); //Shawphy:向左按钮
            var _btnRight = $('#' + opt.right); //Shawphy:向右按钮
            var timerID;
            var _this = this.eq(0).find('ul:first');
            var lineH = _this.find('li:first').height(); //获取行高
            var line = opt.line ? parseInt(opt.line, 10) : parseInt(this.height() / lineH, 10); //每次滚动的行数，默认为一屏，即父容器高度
            var speed = opt.speed ? parseInt(opt.speed, 10) : 500; //卷动速度，数值越大，速度越慢（毫秒）
            var timer = opt.timer //?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
            var lineW = _this.find('li:first').width();
            var column = opt.line ? parseInt(opt.line, 10) : parseInt(this.width() / lineW, 10);
            if (line == 0) line = 1;
            var upHeight = 0 - line * lineH;
            if (column == 0) column = 1;
            var leftWidth = 0 - column * lineW;
            var loop = opt.loop; //是否循环滚动
            var page = opt.page; //每屏行数
            var currentIndex = 0; //当前处于第一行的索引
            var totalNum = _this.find('li').length; //总行数
            var direction = opt.direction;
            //滚动函数
            var scrollUp = function () {
                _btnUp.unbind('click', scrollUp); //Shawphy:取消向上按钮的函数绑定
                //向上滚动到显示出最后一行时不可以再向上滚动
                if (!loop && currentIndex == totalNum - page) {
                    _btnUp.bind('click', scrollUp);
                    return;
                }
                currentIndex = currentIndex + line;
                _this.animate({
                    marginTop: upHeight
                }, speed, function () {
                    for (i = 1; i <= line; i++) {
                        _this.find('li:first').appendTo(_this);
                    }
                    _this.css({ marginTop: 0 });
                    _btnUp.bind('click', scrollUp); //Shawphy:绑定向上按钮的点击事件
                });
            }
            //Shawphy:向下翻页函数
            var scrollDown = function () {
                _btnDown.unbind('click', scrollDown);
                //向下滚动到显示出第一行时不可以再向下滚动
                if (!loop && currentIndex <= 0) {
                    _btnDown.bind('click', scrollDown);
                    return;
                }
                currentIndex = currentIndex - line;
                for (i = 1; i <= line; i++) {
                    _this.find('li:last').show().prependTo(_this);
                }
                _this.css({ marginTop: upHeight });
                _this.animate({
                    marginTop: 0
                }, speed, function () {
                    _btnDown.bind('click', scrollDown);
                });
            }
            //向左滚动
            var scrollLeft = function () {
                _btnLeft.unbind('click', scrollLeft);
                _this.animate(
				    { marginLeft: leftWidth },
				    speed,
				    function () {
				        for (i = 1; i <= column; i++) {
				            _this.find('li:first').appendTo(_this);
				        }
				        _this.css({ marginLeft: 0 });
				        _btnLeft.bind('click', scrollLeft);
				    }
			    );
            }
            //向右滚动
            var scrollRight = function () {
                _btnRight.unbind('click', scrollRight);
                for (i = 1; i <= column; i++) {
                    _this.find('li:last').show().prependTo(_this);
                }
                _this.css({ marginLeft: leftWidth });
                _this.animate(
				    { marginLeft: 0 },
				    speed,
				    function () {
				        _btnRight.bind('click', scrollRight);
				    }
			    );
            }
            //Shawphy:自动播放
            var autoPlay = function () {
                if (direction) {
                    if (timer) {
                        switch (direction) {
                            case 'left':
                                timerID = window.setInterval(scrollLeft, timer);
                                break;
                            case 'right':
                                timerID = window.setInterval(scrollRight, timer);
                                break;
                            case 'up':
                                timerID = window.setInterval(scrollUp, timer);
                                break;
                            case 'down':
                                timerID = window.setInterval(scrollDown, timer);
                                break;
							default :
							    timerID = window.setInterval(scrollUp, timer);
								break;
                        }
                    }
                }
            };
            var autoStop = function () {
                if (direction && timer) window.clearInterval(timerID);
            };
            //鼠标事件绑定
            _this.hover(autoStop, autoPlay).mouseout();
            _btnUp.css('cursor', 'pointer').click(scrollUp).hover(autoStop, autoPlay); //Shawphy:向上向下鼠标事件绑定
//            _btnUp.attr('title', '向上滚动');
            _btnDown.css('cursor', 'pointer').click(scrollDown).hover(autoStop, autoPlay);
//            _btnDown.attr('title', '向下滚动');
            _btnLeft.css('cursor', 'pointer').click(scrollLeft).hover(autoStop, autoPlay);
//            _btnLeft.attr('title', '向左滚动');
            _btnRight.css('cursor', 'pointer').click(scrollRight).hover(autoStop, autoPlay);
//            _btnRight.attr('title', '向右滚动');
        }
    })
})(jQuery);


//IE6搜索提示框问题fix方法
function format_callback(item, position, length) {
    var str;
    if (item.type == 'suggestion') {
        str = '<span style="font-weight:bold"><span>'+item.name+'</span>'
          +'<span style="position: absolute; right: 5px;">'+item.category+'</span></span>';
    } else if (item.type == 'stock') {
        str = '<span>'+item.abbreviation+'</span>'
          +'<span style="position: absolute; left: 60px;">'+item.code+'</span>'
          +'<span style="position: absolute; left: 140px;">'+item.name+'</span>'
          +'<span style="position: absolute; right: 5px;">'+item.category+'</span>';
    }
    return str;
}

Drupal.CMS = Drupal.CMS || {};
Drupal.CMS.Comment = Drupal.CMS.Comment || {};
Drupal.CMS.Comment.settings = Drupal.CMS.Comment.settings || {};
Drupal.CMS.Comment.settings.pager = false;


Drupal.CMS.Pager = Drupal.CMS.Pager || {};
Drupal.CMS.Pager.settings = {};
Drupal.CMS.Pager.settings.element = 0;
Drupal.CMS.Pager.settings.current = 0;
Drupal.CMS.Pager.settings.quantity = 5;
Drupal.CMS.Pager.settings.limit = 5;
Drupal.CMS.Pager.settings.pageTotal = 0;
Drupal.CMS.Pager.settings.nextText = "下一页";
Drupal.CMS.Pager.settings.prevText = "上一页";
Drupal.CMS.Pager.settings.firstText = "首页";
Drupal.CMS.Pager.settings.lastText = "末页";
Drupal.CMS.Pager.settings.link = 'getDefaultPagerLink';

Drupal.CMS.Pager.getPager = function () {

    var parameters    = {};
    var element       = this.settings.element;
    var quantity      = parseInt(this.settings.quantity);
    var pager_current = parseInt(this.settings.current);
    var limit         = parseInt(this.settings.limit);
    this.settings.pageTotal = parseInt(this.settings.pageTotal);
    var pager_middle  = Math.ceil(quantity/2);
    
    var pager_first   = pager_current - pager_middle + 1;
    var pager_last    = pager_current + quantity - pager_middle;
    var pager_max     = this.settings.pageTotal - 1;
    var i             = pager_first;

   if (pager_last > pager_max) {
     // Adjust "center" if at end of query.
     i = i - (pager_last - pager_max);
     pager_last = pager_max;
   }
   if (i <= 0) {
     // Adjust "center" if at start of query.
     pager_last = pager_last - i;
     i = 0;
   }
  var output         = '<ul>';

  var li_first       = this.getPagerFirst(this.settings.firstText);
  var li_previous    = this.getPagerPrev(this.settings.prevText);
  var li_next        = this.getPagerNext(this.settings.nextText);
  var li_last        = this.getPagerLast(this.settings.lastText);

  var items = [];

  //if ('' != li_first) items.push({'class':"pagesNormal", 'data': li_first});  
  if ('' != li_previous) items.push({'class':"pagesNormal", 'data': li_previous});

  if (i != pager_max) {

    if (i > 0) {
      items.push({
        'class': 'pager-ellipsis',
        'data' : '…'
      });
    }

    // Now generate the actual pager piece.
    for (; i <= pager_last && i <= pager_max; i++) {
      if (i < pager_current) {
        items.push({
          'class' : 'pagesNormal',
          'data'  : this.getPagerPrev(i + 1, (pager_current - i), parameters)
        });
      }
      if (i == pager_current) {
        items.push({
          'class' : 'pagesAction',
          'data'  : i + 1
        });
      }
      if (i > pager_current) {
        items.push({
          'class' : 'pagesNormal',
          'data'  : this.getPagerNext(i + 1, (i - pager_current), parameters)
        });
      }
    }

    if (i <= pager_max) {
      items.push({
        'class' : 'pager-ellipsis',
        'data' : '…'
      });
    }

  }
  
  if ('' != li_next) items.push({'class':"pagesNormal", 'data': li_next});
  //if ('' != li_last) items.push({'class':"pagesNormal", 'data': li_last});
  var count = items.length;
  for(var i = 0; i < count; i++) {
     output += "<li class='" + items[i]["class"] + "'>" + items[i]["data"] + "</li>";
  }

  output += "</ul>";

  return output;
}

Drupal.CMS.Pager.getPagerFirst = function (text, parameters) {
  var output = '';
  var parameters = parameters || {};
  parameters.title = "到" + this.settings.firstText;
  parameters.page = 0;

  // If we are anywhere but the first page
  if (this.settings.current > Math.ceil(this.settings.quantity/2)) {
    output = this.getPagerLink(text, parameters);
  }

  return output;
}

Drupal.CMS.Pager.getPagerLast = function (text, parameters) {
  var output = '';
  var parameters = parameters || {};
  parameters.title = "到" + this.settings.lastText;
  parameters.page = this.settings.pageTotal - 1;
  
  if (this.settings.current < this.settings.pageTotal - Math.floor(this.settings.quantity/2) - 1) {
    output = this.getPagerLink(text, parameters);
  }

  return output;
}

Drupal.CMS.Pager.getPagerNext = function (text, interval, parameters) {
  var output     = '';
  var interval   = interval || 1;
  var newCurpage = parseInt(this.settings.current) + parseInt(interval);
  var parameters = parameters || {};
  var tip = newCurpage + 1;
  parameters.title = "到第" + tip + "页";
  parameters.page = newCurpage;

  // If we are anywhere but the last page
  if (newCurpage < this.settings.pageTotal) {
    output = this.getPagerLink(text, parameters);
  }

  return output;
}

Drupal.CMS.Pager.getPagerPrev = function (text, interval, parameters) {
  var output = '';
  var interval   = interval || 1;
  var newCurpage = parseInt(this.settings.current) - parseInt(interval);
  var parameters = parameters || {};
  var tip = newCurpage + 1;
  parameters.title = "到第" + tip + "页";
  parameters.page = newCurpage;
  
  // If we are anywhere but the first page
  if (newCurpage >= 0) {
    output = this.getPagerLink(text, parameters);
  }

  return output;
}

Drupal.CMS.Pager.getPagerLink = function (text, parameters) {
  return this[this.settings.link](text, parameters);
}

Drupal.CMS.Pager.getDefaultPagerLink = function (text, parameters) {
  text = '<a href="javascript:void(0)" class="white" title="' + parameters.title + '" page="' + parameters.page + '">' + text + '</a>';
  return text;
}

Drupal.CMS.Pager.getPagerLinkOfView = function (text, parameters) {

}

var currentUserId = getLoginUser();
var photoStr = "http://myauthentication.yicai.com/images/noavatar_middle.gif";
//tab切换
function changeTab(obj){
    var cur = $(obj);
    var tab = $(obj).siblings('li');
    tab.removeClass('selectedAction'); 
    cur.addClass('selectedAction');
}
//标题截超长（参数elli为超过后缀） 
function subStr(str,len,elli){
    if(!str || !len) { return ''; } 
    var a = 0; //预期计数：中文2字节，英文1字节 
    var i = 0; //循环计数 
    var temp = ''; //临时字串 
    for (i=0;i<str.length;i++){
       if (str.charCodeAt(i)>255){
           a+=2; 
        }
        else{
           a++; 
        }
        if(a > len) { return temp+elli; }//如果增加计数后长度大于限定长度，就直接返回临时字符串 
        temp += str.charAt(i); //将当前内容加到临时字符串 
    } 
    return str; //如果全部是单字节字符，就直接返回源字符串 
}
//标题截断（参数str2为截断判定字符，用于资讯排行标题）
function subVTitle(str1,str2){
    if(!str1) { return ''; }
    if(!str1.indexOf(str2)) {return str1;}
    else {
        str1 = str1.substr(0,str1.indexOf(str2));
        return str1;
    }    
}
//多媒体Icon判断
function setMediaIcon(mTypeNum) {
    switch(mTypeNum){
        case "1":
            return "/sites/all/themes/shark/images/index/index2012_10.jpg";
            break;
        case "5":
            return "/sites/all/themes/shark/images/index/index2012_10audio.gif";
            break;
        default:
            return "/sites/all/themes/shark/images/index/index2012_10.jpg";        
    }        
}

function getRankAction(RankType) {
   if ("blogRank" == RankType) {
        $.get("/cms/ajax/ranks/blog/0", getRankInfo);
   }
   else if ("forumRank" == RankType) {
        $.get("/cms/ajax/ranks/forum/0", getRankInfo);
   }
 }

 function getPersonRankAction() {
    $.get("/cms/ajax/ranks/person/0", getPersonInfo);
 }

function getRankInfo(msg) {
    $("#TLFload").show();
    var msgObj = eval('(' + msg + ')');
    if (msgObj.ack != 1) {
        //alert(msgObj.errorInfo);
    }
    else {
        var content1="";
        var content2="";
        var list = msgObj.result.blogRankList;
        if ('object' != typeof(list)) {
            $("#"+RankType).html("<span style='color:#75B9E0'>没有同乐坊数据</span>");
            return;
        }
        for (var i=0; i<list.length; i++) {
            if(i<3) {
                content2 += "<li><h3>"+ eval(i+1) +"</h3><h2><a href='"+ list[i]["linkUrl"] +"' target='_blank'>"+ subStr(list[i]["title"],36,"...") +"</a></h2></li>";
//                content2 += "<li><h3>"+ eval(i+1) +"</h3><h2 style='width:156px'><a href='"+ list[i]["linkUrl"] +"' target='_blank'>"+ subStr(list[i]["title"],36,"...") +"</a></h2>"+"<h2 style='width:48px;float:right'><a href='http://t.yicai.com/" + list[i]["personId"] +"' target='_blank'>"+ subStr(list[i]["name"],6,"") +"</a></h2></li>";
            }
            else {
                content2 += "<li><h4>"+ eval(i+1) +"</h4><h2><a href='"+ list[i]["linkUrl"] +"' target='_blank'>"+ subStr(list[i]["title"],36,"...") +"</a></h2></li>";
//                content2 += "<li><h4>"+ eval(i+1) +"</h4><h2 style='width:156px'><a href='"+ list[i]["linkUrl"] +"' target='_blank'>"+ subStr(list[i]["title"],36,"...") +"</a></h2>"+"<h2 style='width:48px;float:right'><a href='http://t.yicai.com/"+ list[i]["personId"] +"' target='_blank'>"+ subStr(list[i]["name"],6,"") +"</a></h2></li>";
            }
        }
        }
        $(".homeblogmost").append(content1+content2);
    }
 
function getPersonInfo(msg) {
    $("#TLFload").show();
    var msgObj = eval('('+msg+')');
    if (msgObj.ack != 1) {
        $("#personRankInfo").html(msgObj.errorInfo);
    }
    else {
        var content="";
        var list = msgObj.result.personRankList;
        if ('object' != typeof(list)) {
            $("#personRankInfo").html("<span style='color:#75B9E0'>没有同乐坊数据</span>");
            return;
        }
        for (var i=0;i<8;i++) {
            content+="<li><div class='famousPeopleRangeImg'><a href='"+ list[i]["linkUrl"] +"' target='_blank'><img src='"+ list[i]["photo"] +"' onerror=javascript:this.src='"+ photoStr +"' alt='"+ list[i]["name"] +"' /></a></div>";
            content+="<div class='famousPeopleRangeText'>";
            if(i<9)
                content+="<h1>0"+ eval(i+1) +"</h1>";
            else
                content+="<h1>"+ eval(i+1) +"</h1>";
            content+="<h2 class='cms-person'><a href='"+ list[i]["linkUrl"] +"' target='_blank'>"+ subStr(list[i]["name"],8,"") +"</a>";
            // if(list[i]["isOnline"] == "1" )
            //    content+="<img src='/sites/all/themes/shark/images/state.jpg' />";
            //if(list[i]["isFollowed"] != "1" )
            //    content+="<a><img src='/sites/all/themes/shark/images/follow.jpg' class='contact-" + list[i]["personId"] + "' /></a>"
            content+="</h2>";
            content+="<p>粉丝："+ list[i]["backer"] +"</p>";
            content+="</div><div class='clear'></div>";
            content+="</li>";
        }
        $("#personRankInfo").html(content);
        $(".cms-person a img").each(function() {
            $(this).click(function() {
                setFollowUser(this);
            });
        });
        $("#personRank").attr("isload","1");
        $("#TLFload").hide();
    }
}

function getCommentNewsRank() {
    //fetchContent(apiUrl, 'key=api_key&requestType=commentRank&top=10&type=news', getNRankInfo);
    $.get("/cms/ajax/ranks/newscomment", getNRankInfo);
}
//获取资讯日点击函数
function getVisitNewsRank() {
    //fetchContent(apiVUrl, 'requestType=infoDailyVisitRank&top=10', getNRankInfo);
    $.get("/cms/ajax/ranks/newsvisit", getNVRankInfo);
}

function getVisithomeNewsRank() {
    //fetchContent(apiVUrl, 'requestType=infoDailyVisitRank&top=10', getNRankInfo);
    $.get("/cms/ajax/ranks/newsvisit", gethomeNVRankInfo);
}

//获取资讯排行回调函数
function getNVRankInfo(msg) {
    $("#newsload").show();
    msgObj = eval('(' + msg + ')')
    if (msgObj.ack !=1) {
        //alert(msgObj.errorInfo);
    }
    else {
        var content1="";
        var content2="";
		list = msgObj.result.infoDailyVisitRank;
        if ('object' != typeof(list)) {
								alert("eer");	
            $("#msg").html("<span style='color:#75B9E0'>没有同乐坊数据</span>");
            //return;
        }
        else {
        for (var i=0; i<list.length; i++) {
            if (i<3) {
               content1 += "<li><h3>"+eval(i+1)+"</h3>"+"<h2><a href='http://"+list[i]["linkUrl"]+"' target='_blank'>"+subStr(subVTitle(unescape(list[i]["title"]),"_"),34,"...")+"</a></h2></li>";}
        else {
               content2 += "<li><h4>"+eval(i+1)+"</h4><h2><a href='http://"+list[i]["linkUrl"]+"' target='_blank'>"+subStr(subVTitle(unescape(list[i]["title"]),"_"),34,"...")+"</a></h2></li>";}
            $("#newsInfo1").append("<div class='clear'></div>");
            $("#newsInfo2").append("<div class='clear'></div>");
       }
        }
        $(".NVmost").append(content1+content2);
    }
}

function gethomeNVRankInfo(msg) {
    $("#newsload").show();
    msgObj = eval('(' + msg + ')')
    if (msgObj.ack !=1) {
        //alert(msgObj.errorInfo);
    }
    else {
        var content1="";
        var content2="";
		list = msgObj.result.infoDailyVisitRank;
        if ('object' != typeof(list)) {
								alert("eer");	
            $("#msg").html("<span style='color:#75B9E0'>没有同乐坊数据</span>");
            //return;
        }
        else {
        for (var i=0; i<list.length; i++) {
            if (i<3) {
               content1 += "<li><h3>"+eval(i+1)+"</h3>"+"<h2><a href='http://"+list[i]["linkUrl"]+"' target='_blank'>"+subStr(subVTitle(unescape(list[i]["title"]),"_"),34,"...")+"</a></h2></li>";}
        else {
               content2 += "<li><h4>"+eval(i+1)+"</h4><h2><a href='http://"+list[i]["linkUrl"]+"' target='_blank'>"+subStr(subVTitle(unescape(list[i]["title"]),"_"),34,"...")+"</a></h2></li>";}
            $("#newsInfo1").append("<div class='clear'></div>");
            $("#newsInfo2").append("<div class='clear'></div>");
       }
        }
        $(".homeNVmost").append(content1+content2);
    }
}

//获取资讯排行回调函数
function getNRankInfo(msg) {
    $("#newsload").show();
    msgObj = eval('(' + msg + ')')
    if (msgObj.ack !=1) {
        //alert(msgObj.errorInfo);
    }
    else {
        var content1="";
        var content2="";
		list = msgObj.result;

        if ('object' != typeof(list)) {
								alert("eer");	
            $("#msg").html("<span style='color:#75B9E0'>没有同乐坊数据</span>");
            //return;
        }
        else {
              for (var i=0; i<list.length; i++) {
                  if (i<3) {
                     content1 += "<li><h3>"+eval(i+1)+"</h3>"+"<h2><a href='"+list[i]["linkUrl"]+"' target='_blank'>"+subStr(list[i]["title"],36,"...")+"</a></h2></li>";
                     }
                  else {
                     content2 += "<li><h4>"+eval(i+1)+"</h4><h2><a href='"+list[i]["linkUrl"]+"' target='_blank'>"+subStr(list[i]["title"],36,"...")+"</a></h2></li>";
                  }
                    $("#newsInfo1").append("<div class='clear'></div>");
                    $("#newsInfo2").append("<div class='clear'></div>");
                }
        }
        $(".NRmost").append(content1+content2);
    }
}

//根据ID获取被评论资讯内容函数
function getNewsContentInfo(nIdsTr) {
    fetchContent('http://www.yicai.com/cms/ajax/ranks/getranksinfo','requestType=infoDailyCommentContent&id=' + nIdsTr, getNDetailinfo)
}

//根据ID获取被评论资讯内容回调函数
function getNDetailinfo(msg) {
    var msgObj = eval('('+msg+')');
        var content1 = "";
        var content2 = "";
        var list = msgObj.result;
        for (var i=0;i<list.length;i++) {
            if (i<4) {
                content1 = "<li><div class='viewDetailRangeImg02'>0"+eval(i+1)+"</div>";
                content1 += "<div class='viewDetailRangeText02'>";
                content1 +="<h3><a href='"+list[i]["linkUrl"]+"' target='_blank'>"+subStr(list[i]["title"],34,"...")+"</a></h3></div>";
                content1 += "<div class='clear'></div></li>";
                $("#newscommentInfo1").append(content1);
            }
            else {
                content2 = "<li><h1>"+eval(i+1)+"</h1><h4><a href='"+list[i]["linkUrl"]+"' target='_blank'>"+subStr(list[i]["title"],50,"...")+"</a></h4></li>";
                $("#newscommentInfo2").append(content2);
            }
        }
        $("#newscommentInfo1").append("<div class='clear'></div>");
        $("#newscommentInfo2").append("<div class='clear'></div>");
    //}
}


function getCommentMediaRank() {
    //fetchContent(apiUrl, 'key=api_key&requestType=commentRank&top=10&type=media', getVRankInfo);
    $.get("/cms/ajax/ranks/mediacomment",get2012_VRankInfo);
}

function get2012_VRankInfo(msg) {
var msgObj = eval('(' + msg + ')')
if (msgObj.ack !=1) {
        alert(msgObj.errorInfo);
    }
    else {
        getMDetailinfo(msg);
        $("#mediaload").hide();
    }
}

//获取多媒体日点击函数
function getVisitMediaRank() {
    //fetchContent(apiVUrl,'requestType=mediaDailyVisitRank&top=10',getVRankInfo);
    $.get("/cms/ajax/ranks/mediavisit",getVRankInfo);
}
//获取多媒体排行回调函数
function getVRankInfo(msg) {
    var msgObj = eval('(' + msg + ')');

    if (msgObj.ack !=1) {
    }
    else {
        var content1="";
        var content2="";
        var list = msgObj.result;
        for (var i=0;i<list.length;i++) {
            var myTitle = list[i]["title"];
            var myUrl = list[i]["linkUrl"];
            var myType = setMediaIcon(list[i]["mediaType"]);
            if (i<3) {
                content1 += "<li><h3>"+eval(i+1)+"</h3><h2><a href='"+myUrl+"' target='_blank'>"+subStr(myTitle,30,"...")+"</a> <img src='"+myType+"' border='0' /></h2></li>";
            }
            else {
                content2 += "<li><h4>"+eval(i+1)+"</h4><h2><a href='"+myUrl+"' target='_blank'>" + subStr(myTitle,50,"...") +"</a> <img src='"+myType+"' border='0' /></h2></li>";
            }
        }
        $(".homeMVmost").append(content1+content2);
    }
}
//根据ID获取被评论多媒体内容函数
function getMediaContentInfo(vIdsTr) {
    fetchContent('http://www.yicai.com/cms/ajax/ranks/getranksinfo','requestType=mediaDailyCommentContent&mediaId=' + vIdsTr, getMDetailinfo)
}
//根据ID获取被评论多媒体内容回调函数
function getMDetailinfo(msg){
    var msgObj = eval('('+msg+')'); 
    /*       
    if (msgObj.ack !=1) {
        //alert(msgObj.errorInfo);
        return;
    }
    else {
    */
        var content1="";
        var content2="";
        var list = msgObj.result;
        for (var i=0;i<list.length;i++) {
            var myTitle = list[i]["title"];
            var myUrl = list[i]["linkUrl"];
            var myType = setMediaIcon(list[i]["mediaType"]);
            if (i<3) {
                content1 += "<li><h3>"+eval(i+1)+"</h3><h2><a href='"+myUrl+"' target='_blank'>"+subStr(myTitle,30,"...")+"</a> <img src='"+myType+"' border='0' /></h2></li>";
            }
            else {
                content2 += "<li><h4>"+eval(i+1)+"</h4><h2><a href='"+myUrl+"' target='_blank'>" + subStr(myTitle,50,"...") +"</a> <img src='"+myType+"' border='0' /></h2></li>";
            }
        }

        $(".RankingList").append(content1+content2);
    //}
}


/*************************演播室******************************/
//编辑框字数计算与比较*/
function checkCommentLength(location,exlocation,wordlength,controlobject) {
    var curr = 0;
    if (controlobject.value.length <= wordlength) {
        curr = 0 - (controlobject.value.length - wordlength);
        location.html('还可以输入<span>'+curr+'</span>个字');
    }
    else {
        curr = controlobject.value.length - wordlength;
        exlocation.html("已超出<span>"+curr+"</span>个字");
    }
}

function addZeroBehind(i) {
    if (parseInt(i)<10) {
        return '0'+i;
    }
    else {
        return i;
    }
}

//接口返回时间转化为24小时制，防止浏览器兼容问题出现，自定义时间显示格式*/
function getLocTime(nS) {
    //return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " "); 
    timeMod = new Date(parseInt(nS)*1000);
    realTime = timeMod.getFullYear() + "-";
    realTime += timeMod.getMonth() + 1 + "-";
    realTime += timeMod.getDate()+" ";
    realTime += addZeroBehind(timeMod.getHours())+":";
    realTime += addZeroBehind(timeMod.getMinutes())+":";
    realTime += addZeroBehind(timeMod.getSeconds());
    return realTime;
}

//字符串分析匹配函数*/
function getTopicComment(strMode) {
    var wordMode = /#(.*)#/;
    var first = strMode.search(wordMode);
    if (first == -1) {
        return strMode;
    }
    else {
        var strBuffer = strMode.substring(first+1);
        var endIndex = strBuffer.indexOf("#") + first + 1;
        replacePart = "<a href='http://t.yicai.com/space.php?searchkey="+strMode.substring(first+1, endIndex).replace(/,/g,'~')+"&do=search&view=doing&time=all&orderby=dateline' target='_blank' style='color: rgb(164, 59, 37);'> "+strMode.substring(first, endIndex+1)+"</a>";
        return strMode.replace(strMode.substring(first, endIndex+1), replacePart);
    }
}

//话题回调函数*/
function getCommentVideoBack(callBack) {
    var callBackObj = eval('('+callBack+')');
    if (callBackObj.ack != 1) {

    }
    else {
        $(".videoAudioWebInteractive #topicLoad").hide();
        var list = callBackObj.result;
        if ('object' != typeof(list)) {
            $(".videoAudioIframeStyle .videoAudioIframe").html("<span style='color:#75B9E0'>没有同乐坊数据</span>");
            return;
        }
        var content = "<ul>";
        for (var i=0; i<list.length; i++) {
            linkUrl = "<a target='_blank' href='http://t.yicai.com/space.php?uid="+list[i]["uid"]+"'>";
            content += "<li class='comment"+i+"'>";
            content += "<div class='videoAudioTx'>" +linkUrl + list[i]["avatorUrl"] + "</a></div>";
            content += "<div class='videoAudioWebContent'>";
            //replaceParam = "<a target='_blank' class='orange' href='http://t.yicai.com/space.php?uid="+list[i]["uid"]+"'>"+"...>> "+"</a>";不截字
            content += "<div class='arrow'></div><div class='c-top'><span class='left-corner'></span><span class='mid-bg'></span><span class='right-corner'></span></div>";
            content += "<div class='words-content'>" + linkUrl + list[i]["username"] + "</a>" + getTopicComment(list[i]["message"]);
            content += "<span class='f12gray'>"+jsDateDiff(list[i]["dateline"])+"</span></div>";
            content += "<div class='c-bottom'><span class='left-corner'></span><span class='mid-bg'></span><span class='right-corner'></span></div>";
            content += "</div></li>";
        }
        content += "</ul>";
        $(".videoAudioIframeStyle .videoAudioIframe").html(content);
        $(".videoAudioIframeStyle .videoAudioIframe li .videoAudioTx img").attr("style","width:43px; height:43px;");
        $(".videoAudioIframe ul").scroll(function(){
            if ($(".videoAudioIframe ul").attr("scrollTop") >= 2464) {
                $(".videoAudioIframeStyle .videoAudioMore").show();
            }
            else {
                $(".videoAudioIframeStyle .videoAudioMore").hide();
            }
        });
    }
}
//获取话题的ajax请求*/
function getCommentContent(searchTopic) {
    if (searchTopic) {
        var searchTopic = encodeURI(searchTopic);
        fetchContent(apiUrl + '?requestType=getTopicContent&key=api_key&searchkey='+searchTopic+'&length=50&'+new Date()+'&', "1=1",getCommentVideoBack);
    }
    else {
        return;
    }
}

//div滚动条位置自动调整*/
function setScrollPosition(scrollheight) {
    height = $(".videoAudioIframe ul").attr("scrollTop");
    $(".videoAudioIframe ul").attr("scrollTop",height+scrollheight);
}

//直播页社区登陆*/
function videosLogoVal() {
    var userId = getLoginUser();
    if (0 == userId) {
        $("#videoUserContent .videoAudioInputVal").hide();
        $("#videoUserContent .videoAudioInput").show();
    }
    else {
        $("#videoUserContent .videoAudioInput").hide();
        $("#videoUserContent .videoAudioInputVal").show();
        $("#video-user-name").html(getUserName());
    }
}

//重发ajax请求*/
function noRefresh(){
    getCommentContent($("#views-information-show .view-display-id-block_1 .views-field-field-video-topic-value .field-content a").html());
}

//直播页评论发表
function postVideoComment() {
       if ("" == $("#video-textarea").val()) {
       alert('评论内容不能为空');
       return;
   }
 
   callback = function (data) {
      data = eval('('+data+')');
      if ("0" == data.ack){
          alert(data.errinfo);
          return;
      }
      else {
          $(".videocallback").html("成功发表了一条微博！");
          setTimeout("noRefresh()",1000);
      }
   }
   var userId = getLoginUser();
   var userName = getUserName();
   var sendMessage = $("#video-textarea").val();
   if ($("#video-textarea").val().search(/#(.*)#/) == -1) {
       sendMessage = "#" + $(".videoAudioInputVal .commentVideoTopic a.topicComment0").html() + "#" + $("#video-textarea").val();
   }
   postContent(apiUrl,"requestType=doingForTopic&content=" + sendMessage + "&userid=" + userId + "&username=" + userName + "&key=api_key",
     callback);
   $("#video-textarea").val(""); //防止重复提交
   $('.videoAudioInputVal h1.attention').html('还可以输入<span>140</span>个字');//字数提示返回
}

//将字符串用匹配的符号截断为数组*/
function getDiffTopic(str) {
    if (str) {
        var diffTopic = str.toString();
        var diffTopics = new Array();
        var diffTopics = diffTopic.split(",");
        var bufferOutput = "";
        for (i=0; i<diffTopics.length; i++) {
            bufferOutput += '<a class="topicComment topicComment'+i+'">'+diffTopics[i]+'</a>';
        }
        return bufferOutput;
    }
    else {
        $(".videoAudioWebInteractive #topicLoad").hide();
        $(".videoAudioIframeStyle .videoAudioIframe").html("<span style='color:#75B9E0'>没有同乐坊数据</span>");
        return;
    }
}

//时间与当前时间对比的显示方式
function jsDateDiff(publishTime){
    var d_minutes,d_hours,d_days;       
    var timeNow = parseInt(new Date().getTime()/1000);       
    var d;       
    d = timeNow - publishTime;       
    d_days = parseInt(d/86400);       
    d_hours = parseInt(d/3600);       
    d_minutes = parseInt(d/60); 
    if (d>=0 && d<60) {

        return d+"秒前";
    }
    else if (d_days>0 && d_days<4) {
        return d_days+"天前";
    }
    else if (d_days<=0 && d_hours>0) {
        return d_hours+"小时前";       
    }
    else if (d_hours<=0 && d_minutes>0) {
        return d_minutes+"分钟前";
    }
    else{
        return getLocTime(publishTime);
    }       
}

function changeTabOfDateCenter(obj) {
    var cur = $(obj);
    var tab = $(obj).siblings('li');
    tab.removeClass('selectedAction'); 
    tab.children("a").addClass('white');
    tab.children("a").removeClass('blue04');
    cur.addClass('selectedAction');    
}

//股票-行情中心
var dataCenter_china;
var dataCenter_china_has_data = 0;
function getDateCenterOfChina() {
	if(!dataCenter_china_has_data){
		$.get("/cms/ajax/dataCenter/China", function(msg){
			dataCenter_china_has_data = 1;
			dataCenter_china = msg;
			getDateCenterMode1Info(dataCenter_china);
		});		
	}else{
		getDateCenterMode1Info(dataCenter_china);
	}   
}
var dataCenter_cbn;
var dataCenter_cbn_has_data = 0;
function getDateCenterOfCBN() {
	if(!dataCenter_cbn_has_data){
    	$.get("/cms/ajax/dataCenter/CBN", function(msg){
			dataCenter_cbn_has_data = 1;
			dataCenter_cbn = msg;
			getDateCenterMode1Info(dataCenter_cbn);
		});
	}else{
		getDateCenterMode1Info(dataCenter_cbn);
	}
}
function getDateCenterMode1Info(msg) {	
    var msgObj = eval('(' + msg + ')');
    if (msgObj.ack !=1) {
        $("#block-block-95 .dateCenter .dataCenterContent").html("暂时没有数据");
    }
    else {
		$("#block-block-95 .dateCenter .dataCenterContent").html("");
        var list = msgObj.list;
        var riseColor = msgObj.rise;
        var img = msgObj.image;
        var content = "<div class='dateCenterDetail'><div class='dateCenterDetailLeft'><ul>";
        for (var i=0; i<list.length; i++) {
			var colorClass = list[i]['chg'] > 0 ? 'red' : 'green02';
			content += "<li imgsrc=\"" + list[i]['img']  + "&d=" + Math.random() + "\"><h1><a target='_blank' class=\"blue04\" href=\""+list[i]['url']+"\">"+list[i]['name']+"</a></h1><p class='" + colorClass + "'><strong>"+list[i]['chg']+"%</strong></p><h2 class='" + colorClass + "'><strong>"+list[i]['close']+"</strong></h2></li>";
        }
		
        content += "</ul><div class='clear'></div></div><div class='dateCenterDetailRight'><a target='_blank' class=\"blue04\" href=\""+list[0]['url']+"\"><img id=\"imgDateCenterDetailRight\" alt='' src='"+list[0]['img']  + "&d=" + Math.random() + "'></a></div><div class='clear'></div>";
        $("#block-block-95 .dateCenter .dataCenterContent").html(content);
    }
    $("#block-block-95 .dateCenter .dataCenterContent").show();
    $("#block-block-95 .dateCenter .wait").hide();
	
	$(".dateCenterDetailLeft li").mouseover(function(){
		$(".dateCenterDetailLeft li.mdTableTdBg").removeClass('mdTableTdBg');
		$(this).addClass('mdTableTdBg');
		$('#imgDateCenterDetailRight').attr('src', $(this).attr('imgsrc'));
		$('.dateCenterDetailRight a').attr('href', $(this).find("a").attr('href'));
	}).mouseout(function(){
		$(this).removeClass('mdTableTdBg');
		$.each($(".dateCenterDetailLeft li"), function(i,n){
			if($(this).attr('imgsrc') == $('#imgDateCenterDetailRight').attr('src')){
				$(n).addClass('mdTableTdBg');				
			}
		});
	});
}
var dataCenter_asia;
var dataCenter_asia_has_data = 0;
function getDateCenterOfAsia() {
	if(!dataCenter_asia_has_data){
		$.get('/cms/ajax/dataCenter/Asia', function(msg){
			dataCenter_asia_has_data = 1;
			dataCenter_asia = msg;
			getDateCenterMode2Info(dataCenter_asia);
		});
	}else{
		getDateCenterMode2Info(dataCenter_asia);
	}
}
var dataCenter_america;
var dataCenter_america_has_data = 0;
function getDateCenterOfAmerica() {
	if(!dataCenter_america_has_data){
    	$.get('/cms/ajax/dataCenter/America', function(msg){
			dataCenter_america_has_data = 1;
			dataCenter_america = msg;
			getDateCenterMode2Info(dataCenter_america);
		});
	}else{
		getDateCenterMode2Info(dataCenter_america);
	}
}
var dataCenter_europe;
var dataCenter_europe_has_data = 0;
function getDateCenterOfEurope() {
	if(!dataCenter_europe_has_data){
    	$.get('/cms/ajax/dataCenter/Europe', function(msg){
			dataCenter_europe_has_data = 1;
			dataCenter_europe = msg;
			getDateCenterMode2Info(dataCenter_europe);
		});
	}else{
		getDateCenterMode2Info(dataCenter_europe);
	}
}
function getDateCenterMode2Info(msg) {
    var msgObj = eval('(' + msg + ')');
    if (msgObj.ack !=1) {
        $("#block-block-95 .dateCenter .dataCenterContent").html("暂时没有数据");
    }
    else {
        var list = msgObj.list;
        var riseColor = msgObj.rise;
        var rowClass = 'mdTableTdBg';
        var riseClass = 'red';
        var downClass = 'green02';
        if (riseColor == 'green') {riseClass = 'green02'; downClass = 'red';}
        var content = "<div class='mdTable05'><table width='100%' cellspacing='0' cellpadding='0' border='0'><tr>"+
                      "<td width='32%' class='tdBorder2' nowrap>指数名称</td>"+
                      "<td align='center' width='17%' class='tdBorder2' nowrap>最新价</td>"+
                      "<td align='center' width='15%' class='tdBorder2' nowrap>涨跌额</td>"+
                      "<td align='center' width='16%' class='tdBorder2' nowrap>涨跌幅%</td>"+
                      "<td align='center' width='20%' class='tdBorder2' nowrap>行情时间</td>";
        for (var i=0; i<list.length; i++) {
            if (i%2) rowClass = 'mdTableTdBg2';
            else rowClass = 'mdTableTdBg';
            if (list[i]['camount'] > 0) {
                content += "<tr><td class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='http://quote.yicai.com/quote.htm?rkid=120'>"+list[i]['name']+"</a></td>"+
                      "<td align='center' class='"+rowClass+" "+riseClass+"' nowrap>"+list[i]['close']+"</td>"+
                      "<td align='center' class='"+rowClass+" "+riseClass+"' nowrap>"+list[i]['camount']+"</td>"+
                      "<td align='center' class='"+rowClass+" "+riseClass+"' nowrap>"+list[i]['price']+"</td>"+
                      "<td align='center' class='"+rowClass+"' nowrap>"+list[i]['date']+"</td></tr>";
            }
            else if (list[i]['camount'] == '') {
                content += "<tr><td class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='http://quote.yicai.com/quote.htm?rkid=120'>"+list[i]['name']+"</a></td>"+
                      "<td align='center' class='"+rowClass+" "+downClass+"' nowrap>无数据</td>"+
                      "<td align='center' class='"+rowClass+" "+downClass+"' nowrap>无数据</td>"+
                      "<td align='center' class='"+rowClass+" "+downClass+"' nowrap>无数据</td>"+
                      "<td align='center' class='"+rowClass+"' nowrap>无数据</td></tr>";
            }
            else {
                content += "<tr><td class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='http://quote.yicai.com/quote.htm?rkid=120'>"+list[i]['name']+"</a></td>"+
                      "<td align='center' class='"+rowClass+" "+downClass+"' nowrap>"+list[i]['close']+"</td>"+
                      "<td align='center' class='"+rowClass+" "+downClass+"' nowrap>"+list[i]['camount']+"</td>"+
                      "<td align='center' class='"+rowClass+" "+downClass+"' nowrap>"+list[i]['price']+"</td>"+
                      "<td align='center' class='"+rowClass+"' nowrap>"+list[i]['date']+"</td></tr>";
            }
        }
        content += "</table></div>";
        $("#block-block-95 .dateCenter .dataCenterContent").html(content);
    }
    $("#block-block-95 .dateCenter .dataCenterContent").show();
    $("#block-block-95 .dateCenter .wait").hide();
}

//股票-主力监控
function getStockOfZljkRise() {
    $.get('/cms/ajax/stock/zljk_rise', getStockZljkInfo);
}
function getStockOfZljkDown() {
    $.get('/cms/ajax/stock/zljk_down', getStockZljkInfo);
}
function getStockZljkInfo(msg) {
    var msgObj = eval('(' + msg + ')');
    if (msgObj.ack !=1 || msgObj.list.length<=0) {
        $("#block-block-97 .PriceDetail").html("当日无此类数据");
    }
    else {
		$(".zljk_date").html(msgObj.endate);
        var list = msgObj.list;
        var rowClass = 'mdTableTdBg';
        var content = "<div class='mdTable02'><table width='100%' cellspacing='0' cellpadding='0' border='0'><tr>"+
                      "<td align='center' width='15%' class='tdBorder2' nowrap>代码</td>"+
                      "<td align='center' width='18%' class='tdBorder2' nowrap>名称</td>"+
                      "<td align='center' width='17%' class='tdBorder2' nowrap>涨跌幅%</td>"+
                      "<td align='center' width='23%' class='tdBorder2' nowrap>总成交量(手)</td>"+
                      "<td align='center' width='27%' class='tdBorder2' nowrap>总成交额(万元)</td>";
        for (var i=0; i<list.length; i++) {
            if (i%2) rowClass = 'mdTableTdBg2';
            else rowClass = 'mdTableTdBg';
            if (list[i]['chg'] > 0) {
                content += "<tr><td align='center' class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='" + list[i]['url'] + "'>"+list[i]['code']+"</a></td>"+
                      "<td align='center' class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='" + list[i]['url'] + "'>"+list[i]['name']+"</a></td>"+
                      "<td align='center' class='"+rowClass+" red' nowrap>"+list[i]['chg']+"</td>"+
                      "<td align='center' class='"+rowClass+"' nowrap>"+list[i]['volume']+"</td>"+
                      "<td align='center' class='"+rowClass+"' nowrap>"+list[i]['turnover']+"</td></tr>";
            }
            else {
                content += "<tr><td align='center' class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='" + list[i]['url'] + "'>"+list[i]['code']+"</a></td>"+
                      "<td align='center' class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='" + list[i]['url'] + "'>"+list[i]['name']+"</a></td>"+
                      "<td align='center' class='"+rowClass+" green02' nowrap>"+list[i]['chg']+"</td>"+
                      "<td align='center' class='"+rowClass+"' nowrap>"+list[i]['volume']+"</td>"+
                      "<td align='center' class='"+rowClass+"' nowrap>"+list[i]['turnover']+"</td></tr>";
            }
        }
        content += "</table></div>";
        $("#block-block-97 .PriceDetail").html(content);
    }
    $("#block-block-97 .PriceDetail").show();
    $("#block-block-97 .wait").hide();
}
function getdatatitle(dataclass,linenum,type){
	$.getJSON('/cms/ajax/titledata/zhishu', function(data) {
			 var items = [];
			 var flag=0;
			 var h4green = new Array('<h4 class="green">','<h4 class="red">');
			 var h5green = new Array('<h5 class="green">','<h5 class="red">');
			 var h4red = new Array('<h4 class="red">','<h4 class="green">');
			 var h5red = new Array('<h5 class="red">','<h5 class="green">');
			 var up = new Array('<p><img src="/sites/all/themes/shark/images/rise.gif" /></p>','<p><img src="/sites/all/themes/shark/images/rise-1.gif" /></p>');
			 var down = new Array('<p><img src="/sites/all/themes/shark/images/down.gif" /></p>','<p><img src="/sites/all/themes/shark/images/down-1.gif" /></p>');
			 items.push('<ul>');
			 var data1 =data.Result;
			 $.each(data1,function(key,val){
			 if(key>5){flag=1;}
			 if(val.updownper>0){
			 items.push('<li><h3><a href="http://quote.yicai.com" target="_blank">' + val.StockName + '</a></h3>' + h4red[flag] + (val.close).toFixed(0).replace('+','').replace('-','') + '</h4>' + h5red[flag] +val.updownper.toFixed(2) + '%</h5>'+ up[flag] + '</li>');}
			 else
			 {items.push('<li><h3><a href="http://quote.yicai.com" target="_blank">' + val.StockName + '</a></h3>' + h4green[flag]+ (val.close).toFixed(0) + '</h4>  ' + h5green[flag] +val.updownper.toFixed(2).replace('+','').replace('-','') + '%</h5>' + down[flag] + '</li>');}
			 });
			 items.push('</ul>');
			 $(items.join('')).appendTo('.'+dataclass);
			 if(type==1)
			 {if (getWidth("."+dataclass+" ul")) {
		     $('.'+dataclass).Scroll({line:linenum, speed:10,timer:3000,left:"cant",right:"cantto",direction:"up"});
	         }}
			 else
			 {$('.'+dataclass).Scroll({line:linenum, speed:10,timer:3000, up:"cant", down:"cantto",direction:"up"});}
             });
}
			 
//港股前8
function getHKTopStock() {
    $.get('/cms/ajax/stock/ggzfb', getHKStockInfo);
}

//港股后8
function getHKLowStock() {
    $.get('/cms/ajax/stock/ggdfb', getHKStockInfo);
}
function getHKStockInfo(msg) {
    var msgObj = eval('(' + msg + ')');
    if (msgObj.ack !=1) {
        $("#block-block-120 .PriceDetail").html("暂时没有数据");
    }
    else {
        var list = msgObj.list;
        var rowClass = 'mdTableTdBg';
        var content = "<div class='mdTable02'><table width='100%' cellspacing='0' cellpadding='0' border='0'><tr>"+
                      "<td align='center' width='19%' class='tdBorder2' nowrap>港股代码</td>"+
                      "<td align='center' width='19%' class='tdBorder2' nowrap>港股名称</td>"+
                      "<td align='center' width='21%' class='tdBorder2' nowrap>现价(HKD)</td>"+
                      "<td align='center' width='24%' class='tdBorder2' nowrap>涨跌额(HKD)</td>"+
                      "<td align='center' width='17%' class='tdBorder2' nowrap>涨跌幅</td>";
        for (var i=0; i<list.length; i++) {
            if (i%2) rowClass = 'mdTableTdBg2';
            else rowClass = 'mdTableTdBg';
            if (list[i]['chg'] > 0) {
                content += "<tr><td align='center' class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='" + list[i]['url'] +"'>"+list[i]['code']+"</a></td>"+
                      "<td align='center' title='" + list[i]['name'] + "' class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='" + list[i]['url'] +"'>"+list[i]['name'].substr(0,4)+"</a></td>"+
                      "<td align='center' class='"+rowClass+" green02' nowrap>"+list[i]['close']+"</td>"+
                      "<td align='center' class='"+rowClass+" green02' nowrap>"+list[i]['change']+"</td>"+
                      "<td align='center' class='"+rowClass+" green02' nowrap>"+list[i]['chg']+"%</td></tr>";
            }
            else {
                content += "<tr><td align='center' class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='" + list[i]['url'] +"'>"+list[i]['code']+"</a></td>"+
                      "<td align='center' title='" + list[i]['name'] + "' class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='" + list[i]['url'] +"'>"+list[i]['name'].substr(0,4)+"</a></td>"+
                      "<td align='center' class='"+rowClass+" red' nowrap>"+list[i]['close']+"</td>"+
                      "<td align='center' class='"+rowClass+" red' nowrap>"+list[i]['change']+"</td>"+
                      "<td align='center' class='"+rowClass+" red' nowrap>"+list[i]['chg']+"%</td></tr>";
            }
        }
        content += "</table></div>";
        $("#block-block-120 .PriceDetail .content").html(content);
    }
    $("#block-block-120 .PriceDetail .content").show();
    $("#block-block-120 .PriceDetail .wait").hide();
}

//沪B前8
function getSHBTopStock() {
    $.get('/cms/ajax/stock/shbzfb', getBStockInfo);
}

//沪B后8
function getSHBLowStock() {
    $.get('/cms/ajax/stock/shbdfb', getBStockInfo);
}

//深B前8
function getSZBTopStock() {
    $.get('/cms/ajax/stock/szbzfb', getBStockInfo);
}

//深B后8
function getSZBLowStock() {
    $.get('/cms/ajax/stock/szbdfb', getBStockInfo);
}

function getBStockInfo(msg) {
    var msgObj = eval('(' + msg + ')');
    if (msgObj.ack !=1) {
        $("#block-block-127 .PriceDetail").html("暂时没有数据");
    }
    else {
        var list = msgObj.list;
        var rowClass = 'mdTableTdBg';
        var content = "<div class='mdTable02'><table width='100%' cellspacing='0' cellpadding='0' border='0'><tr>"+
                      "<td align='center' width='19%' class='tdBorder2' nowrap>B股代码</td>"+
                      "<td align='center' width='19%' class='tdBorder2' nowrap>B股名称</td>"+
                      "<td align='center' width='21%' class='tdBorder2' nowrap>现价(USD)</td>"+
                      "<td align='center' width='24%' class='tdBorder2' nowrap>涨跌额(USD)</td>"+
                      "<td align='center' width='17%' class='tdBorder2' nowrap>涨跌幅</td>";
        for (var i=0; i<list.length; i++) {
            if (i%2) rowClass = 'mdTableTdBg2';
            else rowClass = 'mdTableTdBg';
            if (list[i]['chg'] > 0) {
                content += "<tr><td align='center' class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='" + list[i]['url']  +"'>"+list[i]['code']+"</a></td>"+
                      "<td align='center' class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='" + list[i]['url']  +"'>"+list[i]['name']+"</a></td>"+
                      "<td align='center' class='"+rowClass+" red' nowrap>"+list[i]['close']+"</td>"+
                      "<td align='center' class='"+rowClass+" red' nowrap>"+list[i]['change']+"</td>"+
                      "<td align='center' class='"+rowClass+" red' nowrap>"+list[i]['chg']+"%</td></tr>";
            }
            else {
                content += "<tr><td align='center' class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='" + list[i]['url']  +"'>"+list[i]['code']+"</a></td>"+
                      "<td align='center' class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='" + list[i]['url']  +"'>"+list[i]['name']+"</a></td>"+
                      "<td align='center' class='"+rowClass+" green02' nowrap>"+list[i]['close']+"</td>"+
                      "<td align='center' class='"+rowClass+" green02' nowrap>"+list[i]['change']+"</td>"+
                      "<td align='center' class='"+rowClass+" green02' nowrap>"+list[i]['chg']+"%</td></tr>";
            }
        }
        content += "</table></div>";
        $("#block-block-127 .PriceDetail .content").html(content);
    }
    $("#block-block-127 .PriceDetail .content").show();
    $("#block-block-127 .PriceDetail .wait").hide();
}

/*
 * B 股指数
 * Added By Heran At 2011-4-9 20:42:21
 */
function getStockBIndex(){	
	$.getJSON('/cms/ajax/stock/bindex', getStockBIndexInfo);	
}
function getStockBIndexInfo(msgObj){
	var block_id = "block-block-132";
	
	
		
    if (msgObj.ack !=1) {
        $("#" + block_id + " .dateCenter .dateCenterDetail").html("暂时没有数据");
        $("#" + block_id + " .wait").hide();
        return;
    }
    
    var result = msgObj.result;
    var index_hu = $("<div class= \"" + block_id + "_hu\"></div>");
    var index_shen = $("<div class= \"" + block_id + "_shen\"></div>");
    
    $("#" + block_id + " .dateCenter").append("<div class=\"dateCenterDetail\"></div>");
    $("#" + block_id + " .dateCenter .dateCenterDetail").append($(index_hu)).append($(index_shen));
    
    $(index_hu).append(
    			"<div class=\"dateCenterDetailLeft02\">"+
    				"<h1><strong class=\"" + (result.hu.updown > 0 ? "red" : "green02") +"\">" + result.hu.close + "</strong></h1>"+
    				"<ul>" +
    					"<li><p>涨跌额</p><h2 class=\"" + (result.hu.updown > 0 ? "red" : "green02") + "\"><strong>" + result.hu.updown + "</strong></h2></li>"+
    					"<li><p>涨跌幅</p><h2 class=\"" + (result.hu.updown > 0 ? "red" : "green02") + "\"><strong>" + result.hu.updownper + "</strong></h2></li>" +
    					"<li><p>最高价</p><h2 class=\"" + ((result.hu.high - result.hu.preclose) > 0 ? "red" : "green02") +"\"><strong>" + result.hu.high + "</strong></h2></li>" +
    					"<li><p>最低价</p><h2 class=\"" + ((result.hu.low - result.hu.preclose) > 0 ? "red" : "green02") +"\"><strong>" + result.hu.low + "</strong></h2></li>" +
    					"<li><p>成交量</p><h2 class=\"\"><strong>" + result.hu.volume + "</strong></h2></li>" +
    				"</ul>" +
    				"<div class=\"clear\"></div>" + 
    			"</div>" +
    			"<div class=\"dateCenterDetailRight\"><a target='_blank' href=\"" + result.hu.url + "\" target=\"_blank\"><img alt=\"\" src=\"" + result.hu.pic  + "&d=" + Math.random() + "\"></a></div>" +
    			"<div class=\"clear\"></div>");
    
    $(index_shen).append(
    			"<div class=\"dateCenterDetailLeft02\">"+
    				"<h1><strong class=\"" + (result.shen.updown > 0 ? "red" : "green02") +"\">" + result.shen.close + "</strong></h1>"+
    				"<ul>" +
    					"<li><p>涨跌额</p><h2 class=\"" + (result.shen.updown > 0 ? "red" : "green02") + "\"><strong>" + result.shen.updown + "</strong></h2></li>"+
    					"<li><p>涨跌幅</p><h2 class=\"" + (result.shen.updown > 0 ? "red" : "green02") + "\"><strong>" + result.shen.updownper + "</strong></h2></li>" +
    					"<li><p>最高价</p><h2 class=\"" + ((result.shen.high - result.shen.preclose) > 0 ? "red" : "green02") +"\"><strong>" + result.shen.high + "</strong></h2></li>" +
    					"<li><p>最低价</p><h2 class=\"" + ((result.shen.low - result.shen.preclose) > 0 ? "red" : "green02") +"\"><strong>" + result.shen.low + "</strong></h2></li>" +
    					"<li><p>成交量</p><h2 class=\"\"><strong>" + result.shen.volume + "</strong></h2></li>" +
    				"</ul>" +
    				"<div class=\"clear\"></div>" + 
    			"</div>" +
    			"<div class=\"dateCenterDetailRight\"><a target='_blank' href=\"" + result.shen.url + "\" target=\"_blank\"><img alt=\"\" src=\"" + result.shen.pic  + "&d=" + Math.random() + "\"></a></div>" +
    			"<div class=\"clear\"></div>");
    $('.' + block_id + '_hu').hide();
    $('.' + block_id + '_shen').hide();
    $(index_hu).show();
    $("#" + block_id + " .wait").hide();
}
// B 股指数End

/*
 * 基金分红
 * Added By Heran At 2011-4-10 14:39:57
 */
function getFundBonus(){
	$.getJSON('/cms/ajax/fund/fh', getFundBonusInfo);
}
function getFundBonusInfo(msgObj){
	var FundBonusBox = $(".FundBonus");
	
	if (msgObj.ack !=1) {
        $(FundBonusBox).html("暂时没有数据");
        return;
    }
	
	var content = "<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>" +
          			"<tr>" +
          				"<td width=\"22%\" align=\"center\" class=\"tdBorder2\">基金代码</td>"+
          				"<td width=\"34%\" align=\"center\" class=\"tdBorder2\">基金名称</td>"+
          				"<td width=\"22%\" align=\"center\" class=\"tdBorder2\">最新除息日</td>"+
          				"<td width=\"22%\" align=\"center\" class=\"tdBorder2\">最新派息日</td>"+
          			"</tr>";
	$.each(msgObj.list,function(i,n){
		if (i%2) rowClass = 'mdTableTdBg2';
        else rowClass = 'mdTableTdBg';
		content += 	"<tr>" +
        				"<td align=\"center\" class='"+rowClass+"' nowrap>" + n.code + "</td>"+
        				"<td align=\"center\" class='"+rowClass+"' nowrap>" + n.name + "</td>"+
        				"<td align=\"center\" class='"+rowClass+"' nowrap>" + n.declare_date + "</td>"+
        				"<td align=\"center\" class='"+rowClass+"' nowrap>" + n.dividend_date + "</td>"+
        			"</tr>";		
	});
	content += "</tbody></table>";
	
	$(FundBonusBox).html(content);	
}
// 基金分红End

/*
 * 新基金
 * Added By Jacky_Zhan At 2011-4-12
 */
function getNewFund(){
	$.getJSON('/cms/ajax/fund/new', getNewFundInfo);
}
function getNewFundInfo(msgObj){
	var NewFundBox = $(".NewFund");
	
	if (msgObj.ack !=1) {
        $(NewFundBox).html("暂时没有数据");
        return;
    }
	
	var content = "<table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tbody>" +
          			"<tr>" +
          				"<td width=\"30%\" align=\"center\" class=\"tdBorder2\">基金名称</td>"+
          				"<td width=\"40%\" align=\"center\" class=\"tdBorder2\">认购时间</td>"+
          				"<td width=\"30%\" align=\"center\" class=\"tdBorder2\">投资类型</td>"+
          			"</tr>";
	$.each(msgObj.list,function(i,n){
		if (i%2) rowClass = 'mdTableTdBg2';
        else rowClass = 'mdTableTdBg';
		content += 	"<tr>" +
        				"<td align=\"center\" class='"+rowClass+"' nowrap>" + n.name + "</td>"+
        				"<td align=\"center\" class='"+rowClass+"' nowrap>" + n.duration + "</td>"+
        				"<td align=\"center\" class='"+rowClass+"' nowrap>" + n.type + "</td>"+
        			"</tr>";		
	});
	content += "</tbody></table>";
	
	$(NewFundBox).html(content);	
}

//A/H溢价
function getStockOfAHYJ() {
    $.get('/cms/ajax/stock/ahyj', function(msg) {
        var msgObj = eval('(' + msg + ')');
        if (msgObj.ack !=1) {
            $(".ahyj").html("暂时没有数据");
        }
        else {
			$(".ahyj_hl").html((msgObj.AHCompareValue/100).toFixed(4));
            var list = msgObj.listRise;
            var rowClass = 'mdTableTdBg';
            var content = "<table width='100%' cellspacing='0' cellpadding='0' border='0'><tr>"+
                      "<td align='center' width='25%' class='tdBorder2' nowrap>名称</td>"+
                      "<td align='center' width='26%' class='tdBorder2' nowrap>A股(RMB)</td>"+
                      "<td align='center' width='27%' class='tdBorder2' nowrap>H股(HKD)</td>"+
                      "<td align='center' width='22%' class='tdBorder2' nowrap>溢价<img alt='' src='/sites/all/themes/shark/images/revision/images/20110311/gupiao_31.jpg'></td>";
            for (var i=0; i<list.length; i++) {
                if (i%2) rowClass = 'mdTableTdBg2';
                else rowClass = 'mdTableTdBg';
                content += "<tr><td align='center' class='"+rowClass+"' nowrap><a class='blue04' href='" + list[i]['url'] + "' target=\"_blank\">"+list[i]['name']+"</a></td>"+
                    "<td align='center' class='"+rowClass+"' nowrap>"+list[i]['rmb']+"</td>"+
                    "<td align='center' class='"+rowClass+"' nowrap>"+list[i]['hkd']+"</td>"+
                    "<td align='center' class='"+rowClass+"' nowrap>"+list[i]['change']+"%</td></tr>";
            }
            content += "</table>";
            $(".ahyj").html(content);
        }
        $(".ahyj").show();
    });    
}

//AB 溢价2
function getStockOfAByj2(){
	$.getJSON('/cms/ajax/stock/abyj', function(msgObj) {
		if (msgObj.ack !=1 || (msgObj.sh.length <=0 && msgObj.sz.length <=0)) {
            $(".abyj").html("暂时没有数据");
			return;
        }
		$(".abyj_sh_hl").html('1美元兑'+ (msgObj.US/100).toFixed(4) +'人民币');
		$(".abyj_sz_hl").html('1港元兑'+ (msgObj.HK/100).toFixed(4) +'人民币');
		var sh = msgObj.sh;
		var sz = msgObj.sz;
		var content =
  '<ul class="abyj_sh">'+
  '<li>'+
	'<h1>B股简称</h1>'+
	'<h2>B股价格/美元</h2>'+
	'<h5>价格比<img alt="" src="/sites/all/themes/shark/images/revision/images/20110311/gupiao_31.jpg"></h5>'+
	'<h4>A股价格</h4>'+
	'<h3>A股简称</h3>'+
  '</li>';
  		
		var bgcolor = "dataListBlueBg";
		$.each(sh,function(i,n){
			var color = n.updown > 0 ? "red" : "green02";
			var bcolor = n.bupdown > 0 ? "red" : "green02";
			content +=
	'<li class="' + bgcolor + '">'+
	  '<h1><a class="blue04" target="_blank" href="' + (n.burl) + '">' + n.b_name + '</a></h1>'+
      '<h2><span class="' + (n.bupdown > 0 ? "red" : "green02") + '">' + n.b_price + '</span></h2>'+
      '<h5><span class="">' + n.ab + '%</span></h5>'+
      '<h4><span class="' + (n.updown > 0 ? "red" : "green02") + '">' + n.a_price + '</span></h4>'+
      '<h3><a class="blue04" target="_blank" href="' + (n.url) + '">' + n.a_name + '</a></h3>'+

    '</li>';
			bgcolor = bgcolor == "dataListBlueBg" ? "dataListBlueBg02" : "dataListBlueBg";
		});		
		content +=
'</ul>'+		
'<ul class="abyj_sz">'+
  '<li>'+
	'<h1>B股简称</h1>'+
	'<h2>B股价格/港元</h2>'+
	'<h5>价格比<img alt="" src="/sites/all/themes/shark/images/revision/images/20110311/gupiao_31.jpg"></h5>'+
	'<h4>A股价格</h4>'+
	'<h3>A股简称</h3>'+
  '</li>';
		
		var bgcolor = "dataListBlueBg";
		$.each(sz,function(i,n){
			var color = n.updown > 0 ? "red" : "green02";
			var bcolor = n.bupdown > 0 ? "red" : "green02";

			content +=
	'<li class="' + bgcolor + '">'+
	  '<h1><a class="blue04" target="_blank" href="' + (n.burl) + '">' + n.b_name + '</a></h1>'+
      '<h2><span class="' + (n.bupdown > 0 ? "red" : "green02") + '">' + n.b_price + '</span></h2>'+
      '<h5><span class="">' + n.ab + '%</span></h5>'+
      '<h4><span class="' + (n.updown > 0 ? "red" : "green02") + '">' + n.a_price + '</span></h4>'+
      '<h3><a class="blue04" target="_blank" href="' + (n.url) + '">' + n.a_name + '</a></h3>'+
    '</li>';
			bgcolor = bgcolor == "dataListBlueBg" ? "dataListBlueBg02" : "dataListBlueBg";
		});
		$(".abyj").append(content);
		$(".abyj_sz").hide();
	});
}

//AB 溢价
function getStockOfAByj(){
	$.getJSON('/cms/ajax/stock/abyj', function(msgObj) {
		if (msgObj.ack !=1 || (msgObj.sh.length <=0 && msgObj.sz.length <=0)) {
            $(".abyj").html("暂时没有数据");
			return;
        }
		$(".abyj_sh_hl").html('1美元兑'+ (msgObj.US/100).toFixed(4) +'人民币');
		$(".abyj_sz_hl").html('1港元兑'+ (msgObj.HK/100).toFixed(4) +'人民币');
		var sh = msgObj.sh;
		var sz = msgObj.sz;
		var content =
'<table class="abyj_sh" width="100%" cellspacing="0" cellpadding="0" border="0">'+
  '<tbody><tr>'+
    '<td width="25%" class="tdBorder2">A股简称</td>'+
    '<td width="23%" class="tdBorder2">B股价格</td>'+
    '<td width="26%" class="tdBorder2">A股价格</td>'+
    '<td width="26%" class="tdBorder2">价格比<img alt="" src="/sites/all/themes/shark/images/revision/images/20110311/gupiao_31.jpg"></td>'+
    '</tr>';
		
		var bgcolor = "mdTableTdBg";
		$.each(sh,function(i,n){
			var color = n.updown > 0 ? "red" : "green02";
			var bcolor = n.bupdown > 0 ? "red" : "green02";
			content +=
	'<tr class="' + bgcolor + '">'+
	  '<td><a target="_blank" class="blue04" href="' + n.url + '">' + n.a_name + '</a></td>'+
	  '<td align="center" class="' + color + '">' + n.b_price + '</td>'+
	  '<td class="' + bcolor + '">' + n.a_price + '</td>'+
	  '<td class="' + bgcolor + '">' + n.ab + '%</td>'+
    '</tr>';
			bgcolor = bgcolor == "mdTableTdBg" ? "mdTableTdBg02" : "mdTableTdBg";
		});
		
		content +=
'</tbody></table>'+		
'<table class="abyj_sz" width="100%" cellspacing="0" cellpadding="0" border="0">'+
  '<tbody><tr>'+
    '<td width="25%" class="tdBorder2">A股简称</td>'+
    '<td width="26%" class="tdBorder2">B股价格</td>'+
    '<td width="23%" class="tdBorder2">A股价格</td>'+
    '<td width="26%" class="tdBorder2">价格比<img alt="" src="/sites/all/themes/shark/images/revision/images/20110311/gupiao_31.jpg"></td>'+
    '</tr>';
		
		var bgcolor = "mdTableTdBg";
		$.each(sz,function(i,n){
			var color = n.updown > 0 ? "red" : "green02";
			var bcolor = n.bupdown > 0 ? "red" : "green02";

			content +=
	'<tr class="' + bgcolor + '">'+
	  '<td><a target="_blank" class="blue04" href="' + n.url + '">' + n.a_name + '</a></td>'+
	  '<td align="center" class="' + color + '">' + n.b_price + '</td>'+
	  '<td class="' + bcolor + '">' + n.a_price + '</td>'+
	  '<td class="">' + n.ab + '%</td>'+
    '</tr>';
			bgcolor = bgcolor == "mdTableTdBg" ? "mdTableTdBg02" : "mdTableTdBg";
		});
		$(".abyj").append(content);
		$(".abyj_sz").hide();
	});
}


//新股申购
function getStockOfXgsg() {
    $.get('/cms/ajax/stock/xgsg', function(msg) {
        var msgObj = eval('(' + msg + ')');
        if (msgObj.ack !=1) {
            $("#block-block-94 .right .xgsg").html("暂时没有数据");
        }
        else {
            var list = msgObj.list;
            var rowClass = 'mdTableTdBg';
            var content = "<table width='100%' cellspacing='0' cellpadding='0' border='0'><tr>"+
                      "<td align='center' width='25%' class='tdBorder2' nowrap>名称</td>"+
                      "<td align='center' width='19%' class='tdBorder2' nowrap>发行价</td>"+
                      "<td align='center' width='24%' class='tdBorder2' nowrap>收盘价</td>"+
                      "<td align='center' width='32%' class='tdBorder2' nowrap>上市日期</td>";
            for (var i=0; i<list.length; i++) {
                if (i%2) rowClass = 'mdTableTdBg2';
                else rowClass = 'mdTableTdBg';
                content += "<tr><td align='center' class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='" + list[i]['url'] + "'>"+list[i]['name']+"</a></td>"+
                "<td align='center' class='"+rowClass+"' nowrap>"+list[i]['issue']+"</td>"+
                "<td align='center' class='"+rowClass+"' nowrap>"+list[i]['price']+"</td>"+
                "<td align='center' class='"+rowClass+"' nowrap>"+list[i]['date']+"</td></tr>";
            }
            content += "</table>";
            $("#block-block-94 .right .xgsg").html(content);
        }
        $("#block-block-94 .right .xgsg").show();
    });
}

//新股挂牌
function getStockOfXgsgRight(){
	 $.getJSON('/cms/ajax/stock/xgsg', function(msgObj) {
		 
        if (msgObj.ack !=1) {
            $("#block-block-128 .xgsg").html("暂时没有数据");
			return;
        }
		
		var list = msgObj.list;
		var rowClass = 'mdTableTdBg';
		var content = "<table width='100%' cellspacing='0' cellpadding='0' border='0'>"+
						"<tr>"+
				  		"<td align='center' width='19%' class='tdBorder2' nowrap>股票代码</td>"+
						"<td align='center' width='19%' class='tdBorder2' nowrap>股票名称</td>"+
						"<td align='center' width='18%' class='tdBorder2' nowrap>发行价</td>"+
						"<td align='center' width='19%' class='tdBorder2' nowrap>上市日期</td>"+
						"<td align='center' width='25%' class='tdBorder2' nowrap>中签率</td>"+
						"</tr>";
		for (var i=0; i<list.length; i++) {
			if (i%2)
				rowClass = 'mdTableTdBg2';
			else
				rowClass = 'mdTableTdBg';
			content += "<tr><td align='center' class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='" + list[i]['url'] + "'>"+list[i]['code']+"</a></td>"+
			"<td align='center' class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='" + list[i]['url'] + "'>"+list[i]['name']+"</a></td>"+
			"<td align='center' class='"+rowClass+"' nowrap>"+list[i]['price']+"</td>"+
			"<td align='center' class='"+rowClass+"' nowrap>"+list[i]['date']+"</td>"+
			"<td align='center' class='"+rowClass+"' nowrap>"+list[i]['zql']+"</td></tr>";
		}
		content += "</table>";
		$("#block-block-128 .xgsg .mdTable05").html(content);
		$("#block-block-128 .xgsg .wait").hide();
        $("#block-block-128 .xgsg .mdTable05").show();
		 
	 });
}

//新股挂牌
/*
function getStockOfXggp() {
    $.get('/cms/ajax/stock/xggp', function(msg) {
        var msgObj = eval('(' + msg + ')');
        if (msgObj.ack !=1) {
            $("#block-block-128 .xggp").html("暂时没有数据");
        }
        else {
            var list = msgObj.list;
            var rowClass = 'mdTableTdBg';
            var content = "<table width='100%' cellspacing='0' cellpadding='0' border='0'><tr>"+
                      "<td align='center' width='19%' class='tdBorder2' nowrap>股票代码</td>"+
                      "<td align='center' width='19%' class='tdBorder2' nowrap>股票名称</td>"+
                      "<td align='center' width='18%' class='tdBorder2' nowrap>发行价</td>"+
                      "<td align='center' width='19%' class='tdBorder2' nowrap>最新价</td>"+
                      "<td align='center' width='25%' class='tdBorder2' nowrap>上市日期</td></tr>";
            for (var i=0; i<list.length; i++) {
                if (i%2) rowClass = 'mdTableTdBg2';
                else rowClass = 'mdTableTdBg';
                content += "<tr><td align='center' class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='#'>"+list[i]['code']+"</a></td>"+
                "<td align='center' class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='#'>"+list[i]['name']+"</a></td>"+
                "<td align='center' class='"+rowClass+" red' nowrap>"+list[i]['issue_price']+"</td>"+
                "<td align='center' class='"+rowClass+" red' nowrap>"+list[i]['last_trade']+"</td>"+
                "<td align='center' class='"+rowClass+"' nowrap>"+list[i]['date']+"</td></tr>";
            }
            content += "</table>";
            $("#block-block-128 .xggp .mdTable05").html(content);
			$("#block-block-128 .xggp .wait").hide();
			$("#block-block-128 .xggp .mdTable05").show();
        }
    });
}

//新股挂牌
function getStockOfXggp(){
	 $.getJSON('/cms/ajax/stock/xggp', function(msgObj) {
		 
        if (msgObj.ack !=1) {
            $("#block-block-128 .xggp").html("暂时没有数据");
			return;
        }
		
		var list = msgObj.list;
		var rowClass = 'mdTableTdBg';
		var content = "<table width='100%' cellspacing='0' cellpadding='0' border='0'>"+
						"<tr>"+
				  		"<td align='center' width='19%' class='tdBorder2' nowrap>申购代码</td>"+
						"<td align='center' width='19%' class='tdBorder2' nowrap>股票名称</td>"+
						"<td align='center' width='18%' class='tdBorder2' nowrap>发行价</td>"+
						"<td align='center' width='19%' class='tdBorder2' nowrap>申购日期</td>"+
						"<td align='center' width='25%' class='tdBorder2' nowrap>发行市盈率</td>"+
						"</tr>";
		for (var i=0; i<list.length; i++) {
			if (i%2)
				rowClass = 'mdTableTdBg2';
			else
				rowClass = 'mdTableTdBg';
			content += "<tr><td align='center' class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='#'>"+list[i]['code']+"</a></td>"+
			"<td align='center' class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='#'>"+list[i]['name']+"</a></td>"+
			"<td align='center' class='"+rowClass+" red' nowrap>"+list[i]['price']+"</td>"+
			"<td align='center' class='"+rowClass+" red' nowrap>"+list[i]['date']+"</td>"+
			"<td align='center' class='"+rowClass+"' nowrap>"+list[i]['PE_ratio']+"</td></tr>";
		}
		content += "</table>";
		$("#block-block-128 .xggp .mdTable05").html(content);
		$("#block-block-128 .xggp .wait").hide();
    $("#block-block-128 .xggp .mdTable05").show();
		 
	 });
}
*/
//新股审核
function getStockOfXgsh(){
	 $.getJSON('/cms/ajax/stock/xgsh', function(msgObj) {
		 
        if (msgObj.ack !=1) {
            $("#block-block-128 .xgsh").html("暂时没有数据");
			return;
        }
		
		var list = msgObj.list;
		var rowClass = 'mdTableTdBg';
		var content = "<table width='100%' cellspacing='0' cellpadding='0' border='0'>"+
						"<tr>"+
				  		"<td align='center' width='19%' class='tdBorder2' nowrap>公司名称</td>"+
						"<td align='center' width='19%' class='tdBorder2' nowrap>公告日</td>"+
						"<td align='center' width='18%' class='tdBorder2' nowrap>审核内容</td>"+
						"<td align='center' width='19%' class='tdBorder2' nowrap>审核结果</td>"+
						"<td align='center' width='25%' class='tdBorder2' nowrap>审核日期</td>"+
						"</tr>";
		for (var i=0; i<list.length; i++) {
			if (i%2)
				rowClass = 'mdTableTdBg2';
			else
				rowClass = 'mdTableTdBg';
			content += "<tr><td align='center'  title='" + list[i]['company'] + "' class='"+rowClass+"' nowrap>" + list[i]['company'].substr(0,4) + "</td>"+
			"<td align='center' class='"+rowClass+"' nowrap>"+list[i]['announce_date']+"</td>"+
			"<td align='center' class='"+rowClass+"' nowrap>"+list[i]['content']+"</td>"+
			"<td align='center' class='"+rowClass+"' nowrap>"+list[i]['result']+"</td>"+
			"<td align='center' class='"+rowClass+"' nowrap>"+list[i]['verify_date']+"</td></tr>";
		}
		content += "</table>";
		$("#block-block-128 .xgsh .mdTable05").html(content);
		$("#block-block-128 .xgsh .wait").hide();
        $("#block-block-128 .xgsh .mdTable05").show();
		 
	 });
}

//热股排行
function getHotStockRank() {
    $.get('/cms/ajax/stock/hot_rank', function(msg) {
        var msgObj = eval('(' + msg + ')');
        if (msgObj.ack !=1) {
            $("#block-block-107 .mdTable05").html("暂时没有数据");
        }
        else {
            var list = msgObj.list;
            var rowClass = 'mdTableTdBg';
            var color = 'red';
            var content = "<table width='100%' cellspacing='0' cellpadding='0' border='0'><tr>"+
                      "<td width='10%' align='center' class='tdBorder2' nowrap>排名</td>"+
                      "<td width='30%' align='center' class='tdBorder2' nowrap>名称</td>"+
                      "<td width='30%' align='center' class='tdBorder2' nowrap>最新价 </td>"+
                      "<td width='30%' align='center' class='tdBorder2' nowrap>涨跌幅% </td>";
            for (var i=0; i<list.length; i++) {
                if (i%2) rowClass = 'mdTableTdBg2';
                else rowClass = 'mdTableTdBg';
                if (list[i]['chg'] > 0) color = 'red';
                else color = 'green02';
                content += "<tr><td align='center' class='"+rowClass+"' nowrap>"+(i+1)+"</td>"+
                    "<td align='center' class='"+rowClass+"' nowrap><a target='_blank' class='blue04' href='"+list[i]['url']+"'>"+list[i]['name']+"</a></td>"+
                    "<td align='center' class='"+rowClass+" "+color+"' nowrap>"+list[i]['value']+"</td>"+
                    "<td align='center' class='"+rowClass+" "+color+"' nowrap>"+list[i]['chg']+"</td>";                
            }
            content += "</table>";
            $("#block-block-107 .mdTable05").html(content);
            $("#block-block-107 .mdTable05").show();
        }
    });
}

//A股行情
function getAStockRank() {
    $.get('/cms/ajax/stock/AStockRank', function(msg) {
        var msgObj = eval('(' + msg + ')');
        if (msgObj.ack != 1) {
            $("#block-block-122 .PriceDetail .haz").html('暂时没有数据');
            $("#block-block-122 .PriceDetail .had").html('暂时没有数据');
            $("#block-block-122 .PriceDetail .saz").html('暂时没有数据');
            $("#block-block-122 .PriceDetail .sad").html('暂时没有数据');
        }
        else {
            var list = msgObj.listSHRise;
            var rowClass = 'mdTableTdBg';
            var content = '';
            var head = "<table width='100%' cellspacing='0' cellpadding='0' border='0'><tr>"+
                       "<td width='20%' align='center' class='tdBorder2' nowrap>A股代码</td>"+
                       "<td width='20%' align='center' class='tdBorder2' nowrap>A股名称</td>"+
                       "<td width='20%' align='center' class='tdBorder2' nowrap>最新价 </td>"+
                       "<td width='23%' align='center' class='tdBorder2' nowrap>涨跌额</td>"+
                       "<td width='17%' align='center' class='tdBorder2' nowrap>涨跌幅</td></tr>";
            var tail = "</table>"
            for (var i=0; i<8; i++) {
                if (i%2) rowClass = 'mdTableTdBg2';
                else rowClass = 'mdTableTdBg';
                content += "<tr><td align='center' class='"+rowClass+"'><a target='_blank' class='blue04' href='"+list[i]['url']+"'>"+list[i]['code']+"</a></td>"+
                          "<td align='center' class='"+rowClass+"'><a target='_blank' class='blue04' href='"+list[i]['url']+"'>"+list[i]['name']+"</a></td>"+
                          "<td align='center' class='"+rowClass+" " + (list[i]['close'] > 0 ? "red" : "green02") +"'>"+list[i]['close']+"</td>"+
                          "<td align='center' class='"+rowClass+" " + (list[i]['change'] > 0 ? "red" : "green02") +"'>"+list[i]['change']+"</td>"+
                          "<td align='center' class='"+rowClass+" " + (list[i]['chg'] > 0 ? "red" : "green02") +"'>"+list[i]['chg']+"%</td></tr>";
            }
            $("#block-block-122 .PriceDetail .haz").html(head+content+tail);
            content = '';
            list = msgObj.listSHDown;
            for (var i=0; i<8; i++) {
                if (i%2) rowClass = 'mdTableTdBg2';
                else rowClass = 'mdTableTdBg';
                content += "<tr><td align='center' class='"+rowClass+"'><a target='_blank' class='blue04' href='"+list[i]['url']+"'>"+list[i]['code']+"</a></td>"+
                          "<td align='center' class='"+rowClass+"'><a target='_blank' class='blue04' href='"+list[i]['url']+"'>"+list[i]['name']+"</a></td>"+
                          "<td align='center' class='"+rowClass+" " + (list[i]['close'] > 0 ? "red" : "green02") +"'>"+list[i]['close']+"</td>"+
                          "<td align='center' class='"+rowClass+" " + (list[i]['change'] > 0 ? "red" : "green02") +"'>"+list[i]['change']+"</td>"+
                          "<td align='center' class='"+rowClass+" " + (list[i]['chg'] > 0 ? "red" : "green02") +"'>"+list[i]['chg']+"%</td></tr>";
            }
            $("#block-block-122 .PriceDetail .had").html(head+content+tail);
            content = '';
            list = msgObj.listSZRise;
            for (var i=0; i<8; i++) {
                if (i%2) rowClass = 'mdTableTdBg2';
                else rowClass = 'mdTableTdBg';
                content += "<tr><td align='center' class='"+rowClass+"'><a target='_blank' class='blue04' href='"+list[i]['url']+"'>"+list[i]['code']+"</a></td>"+
                          "<td align='center' class='"+rowClass+"'><a target='_blank' class='blue04' href='"+list[i]['url']+"'>"+list[i]['name']+"</a></td>"+
                          "<td align='center' class='"+rowClass+" " + (list[i]['close'] > 0 ? "red" : "green02") +"'>"+list[i]['close']+"</td>"+
                          "<td align='center' class='"+rowClass+" " + (list[i]['change'] > 0 ? "red" : "green02") +"'>"+list[i]['change']+"</td>"+
                          "<td align='center' class='"+rowClass+" " + (list[i]['chg'] > 0 ? "red" : "green02") +"'>"+list[i]['chg']+"%</td></tr>";
            }
            $("#block-block-122 .PriceDetail .saz").html(head+content+tail);
            content = '';
            list = msgObj.listSZDown;
            for (var i=0; i<8; i++) {
                if (i%2) rowClass = 'mdTableTdBg2';
                else rowClass = 'mdTableTdBg';
                content += "<tr><td align='center' class='"+rowClass+"'><a target='_blank' class='blue04' href='"+list[i]['url']+"'>"+list[i]['code']+"</a></td>"+
                          "<td align='center' class='"+rowClass+"'><a target='_blank' class='blue04' href='"+list[i]['url']+"'>"+list[i]['name']+"</a></td>"+
                          "<td align='center' class='"+rowClass+" " + (list[i]['close'] > 0 ? "red" : "green02") +"'>"+list[i]['close']+"</td>"+
                          "<td align='center' class='"+rowClass+" " + (list[i]['change'] > 0 ? "red" : "green02") +"'>"+list[i]['change']+"</td>"+
                          "<td align='center' class='"+rowClass+" " + (list[i]['chg'] > 0 ? "red" : "green02") +"'>"+list[i]['chg']+"%</td></tr>";
            }
            $("#block-block-122 .PriceDetail .sad").html(head+content+tail);            
        }
        $("#block-block-122 .wait").hide();
        $("#block-block-122 .PriceDetail .haz").siblings().hide();
        $("#block-block-122 .PriceDetail .haz").show();
    });
}

//基金净值
function getFundJz(){
	 $.getJSON('/cms/ajax/fund/jz', function(msgObj) {
		 
        if (msgObj.ack !=1) {
            $("#block-block-118 .fundjz").html("暂时没有数据");
			return;
        }
		
		var list = msgObj.list;
		$(".fundjz_date").html(msgObj.enddate);
		for(var i = 0; i < list.length; i++){
			var content = "";
			content = 
		'<table class="fundjz' + i + '" width="100%" cellspacing="0" cellpadding="0" border="0">'+
          '<tbody>'+
            '<tr>'+
              '<td width="10%" align="center" class="tdBorder2">基金代码</td>'+
              '<td width="20%" align="center" class="tdBorder2">基金简称</td>'+
              '<td width="12%" align="center" class="tdBorder2">上期单位<br>净值(元)</td>'+
              '<td width="11%" align="center" class="tdBorder2">单位净值<br>(元)</td>'+
              '<td width="12%" align="center" class="tdBorder2">累计净值<br>(元)</td>'+
              '<td width="10%" align="center" class="tdBorder2">涨跌额<br>(元)</td>'+
              '<td width="13%" align="center" class="tdBorder2">净值增长率<br>(%)</td>'+
              '<td width="12%" align="center" class="tdBorder2">最新规模<br>(亿份)</td>'+
            '</tr>';
			for(var j = 0; j < list[i].length; j++){				
				content += 
            '<tr>'+
              '<td align="center">' + list[i][j]['code'] + '</td>'+
              '<td align="center" title="' + list[i][j]['name'] +'">' + list[i][j]['name'].substr(0,9) + '</td>'+
              '<td align="center" class="">' + list[i][j]['sqdw'] + '</td>'+
              ' <td align="center" class="' + (list[i][j]['dwjz'] > list[i][j]['sqdw'] ? "red" : "green02") +'">' + list[i][j]['dwjz'] + '</td>'+
              '<td align="center" class="">' + list[i][j]['ljjz'] + '</td>'+
              '<td align="center" class="' + (list[i][j]['change'] > 0 ? "red" : "green02") + '">' + list[i][j]['change'] + '</td>'+
              '<td align="center" class="' + (list[i][j]['chg'] > 0 ? "red" : "green02") + '">' + list[i][j]['chg'] + '</td>'+
              '<td align="center">' + list[i][j]['size'] + '</td>'+
            '</tr>';
			}
			content += 
          '</tbody>'+
        '</table>';
			$("#block-block-118 .fundjz").append(content);
			$(".fundjz" + i).hide();			
		}
		$(".fundjz .wait").hide();
		$(".fundjz0").show();	
		$('#block-block-118 .fundjz tr:odd').css("background-color", "#E5F3F7");
	 });
}

//封基折价率排行
function getFundZjl(){
	$.getJSON('/cms/ajax/fund/zjl', function(msgObj) {

        if (msgObj.ack !=1) {
            $("#block-block-118 .fundzjl").html("暂时没有数据");
			return;
        }
		$(".fundzjl_date").html(msgObj.date);
		var list = msgObj.list;
		
		var content = 
		'<table width="100%" cellspacing="0" cellpadding="0" border="0">'+
        '<tbody>'+
          '<tr>'+
            '<td width="10%" align="center" class="tdBorder2">基金代码</td>'+
            '<td width="18%" align="center" class="tdBorder2">基金简称</td>'+
            '<td width="8%" align="center" class="tdBorder2">最新价</td>'+
            '<td width="12%" align="center" class="tdBorder2">单位净值</td>'+
            '<td width="12%" align="center" class="tdBorder2">净值增长率</td>'+
            '<td width="10%" align="center" class="tdBorder2">折价率<br>(%)</td>'+
            '<td width="11%" align="center" class="tdBorder2">基金规模<br>(万份)</td>'+
          '</tr>';
		  for(var i = 0; i < list.length; i++){
			  content +=
          '<tr>'+
            '<td align="center">' + list[i]['fund_code'] + '</td>'+
            '<td align="center" title="' + list[i]['fund_name'] +'">' + list[i]['fund_name'].substr(0,9) + '</td>'+
            '<td align="center" class="' + (list[i]['unit_net'] > list[i]['lcose'] ? "red" : "green02") + '">' + list[i]['unit_net'] + '</td>'+
            '<td align="center" class="red">' + list[i]['val'] + '</td>'+
            '<td align="center" class="' + (list[i]['chng_pct'] > 0 ? "red" : "green02") + '">' + list[i]['chng_pct'] + '</td>'+
            '<td align="center">' + list[i]['split_transl'] + '</td>'+
            '<td align="center">' + list[i]['fnd_size'] + '</td>'+
          '</tr>';
		  }
		content +=
		'</tbody>'+
		'</table>';
		$(".fundzjl .wait").hide();
		$("#block-block-118 .fundzjl").append(content);
		$('#block-block-118 .fundzjl tr:odd').css("background-color", "#E5F3F7");
	});
}

function getRMBPJ() {
    $.get('/cms/ajax/fexchange/rmb', function(msg) {
        var msgObj = eval('(' + msg + ')');
        if (msgObj.ack != 1) {
            $("#block-block-134 .rmbpj .mdTable02").html('暂时没有数据');
        }
        else {
            var rowClass = 'mdTableTdBg';
            var list = msgObj.list;
            var content = "<table width='100%' cellspacing='0' cellpadding='0' border='0'>"+
                          "<tr><td width='63' class='tdBorder2'>交易币种</td>"+
                          "<td width='84' align='center' class='tdBorder2'>卖出价</td>"+
                          "<td width='79' align='center' class='tdBorder2'>现汇买入价</td>"+
                          "<td width='77' align='center' class='tdBorder2'>现钞买入价</td></tr>";
            for (var i=0; i<list.length; i++) {
                if (i%2) rowClass = 'mdTableTdBg2';
                else rowClass = 'mdTableTdBg';
                content += "<tr><td align='center' class='"+rowClass+"'>"+list[i]['bz']+"</td>"+
                           "<td align='center' class='"+rowClass+"'>"+list[i]['mcj']+"</td>"+
                           "<td align='center' class='"+rowClass+"'>"+list[i]['xhmrj']+"</td>"+
                           "<td align='center' class='"+rowClass+"'>"+list[i]['xcmrj']+"</td></tr>";
            }
            content += '</table>';
            $("#block-block-134 .rmbpj .mdTable02").html(content);
        }
        $("#block-block-134 .rmbpj .wait").hide();
        $("#block-block-134 .rmbpj .mdTable02").show();
    })
}

function getZPBJ() {
    $.get('/cms/ajax/fexchange/zp', function(msg) {
        var msgObj = eval('(' + msg + ')');
        if (msgObj.ack != 1) {
            $("#block-block-134 .zp .mdTable02").html('暂时没有数据');
        }
        else {
            var rowClass = 'mdTableTdBg';
            var list = msgObj.list;
            var content = "<table width='100%' cellspacing='0' cellpadding='0' border='0'>"+
                          "<td width='19%' align='center' class='tdBorder2'>币种</td>"+
                          "<td width='21%' align='center' class='tdBorder2'>收盘价</td>"+
                          "<td width='20%' align='center' class='tdBorder2'>最高</td>"+
                          "<td width='19%' align='center' class='tdBorder2'>最低</td>"+
                          "<td width='21%' align='center' class='tdBorder2'>涨跌幅</td>";
            for (var i=0; i<list.length; i++) {
                if (i%2) rowClass = 'mdTableTdBg2';
                else rowClass = 'mdTableTdBg';
                content += "<tr><td align='center' class='"+rowClass+"'>"+list[i]['bz']+"</td>"+
                           "<td align='center' class='"+rowClass+"'>"+list[i]['price']+"</td>"+
                           "<td align='center' class='"+rowClass+"'>"+list[i]['hign']+"</td>"+
                           "<td align='center' class='"+rowClass+"'>"+list[i]['low']+"</td>"+
                           "<td align='center' class='"+rowClass+"'>"+list[i]['chg']+"</td></tr>";
            }
            content += '</table>';
            $("#block-block-134 .zp .mdTable02").html(content);
        }
        $("#block-block-134 .zp .wait").hide();
        $("#block-block-134 .zp .mdTable02").show();
    })
}

function getJCPBJ() {
    $.get('/cms/ajax/fexchange/jcp', function(msg) {
        var msgObj = eval('(' + msg + ')');
        if (msgObj.ack != 1) {
            $("#block-block-134 .jcp .mdTable02").html('暂时没有数据');
        }
        else {
            var rowClass = 'mdTableTdBg';
            var list = msgObj.list;
            var content = "<table width='100%' cellspacing='0' cellpadding='0' border='0'>"+
                          "<td width='19%' align='center' class='tdBorder2'>币种</td>"+
                          "<td width='21%' align='center' class='tdBorder2'>收盘价</td>"+
                          "<td width='20%' align='center' class='tdBorder2'>最高</td>"+
                          "<td width='19%' align='center' class='tdBorder2'>最低</td>"+
                          "<td width='21%' align='center' class='tdBorder2'>涨跌幅</td>";
            for (var i=0; i<list.length; i++) {
                if (i%2) rowClass = 'mdTableTdBg2';
                else rowClass = 'mdTableTdBg';
                content += "<tr><td align='center' class='"+rowClass+"'>"+list[i]['bz']+"</td>"+
                           "<td align='center' class='"+rowClass+"'>"+list[i]['price']+"</td>"+
                           "<td align='center' class='"+rowClass+"'>"+list[i]['hign']+"</td>"+
                           "<td align='center' class='"+rowClass+"'>"+list[i]['low']+"</td>"+
                           "<td align='center' class='"+rowClass+"'>"+list[i]['chg']+"</td></tr>";
            }
            content += '</table>';
            $("#block-block-134 .jcp .mdTable02").html(content);
        }
        $("#block-block-134 .jcp .wait").hide();
        $("#block-block-134 .jcp .mdTable02").show();
    })
}

function getZJS() {
    $.get('/cms/ajax/future/zjs', function(msg) {
        var msgObj = eval('(' + msg + ')');
        if (msgObj.ack != 1) {
            $("#block-block-130 .zjs .mdTable02").html('暂时没有数据');
        }
        else {
            var rowClass = 'mdTableTdBg';
            var list = msgObj.list;
            var content = "<table width='100%' cellspacing='0' cellpadding='0' border='0'>"+
                          "<tr><td width='19%' align='center' class='tdBorder2'>币种</td>"+
                          "<td width='41%' align='center' class='tdBorder2'>收盘价</td>"+
                          "<td width='40%' align='center' class='tdBorder2'>涨跌幅</td></tr>";
            for (var i=0; i<list.length; i++) {
                if (i%2) rowClass = 'mdTableTdBg2';
                else rowClass = 'mdTableTdBg';
                content += "<tr><td align='center' class='"+rowClass+"'>"+list[i]['name']+"</td>"+
                           "<td align='center' class='"+rowClass+"'>"+list[i]['last_trade']+"</td>"+
                           "<td align='center' class='"+rowClass+"'>"+list[i]['updown']+"%</td></tr>";
            }
            content += '</table>';
            $("#block-block-130 .zjs .mdTable02").html(content);
        }
        $("#block-block-130 .wait").hide();
        $("#block-block-130 .zjs .mdTable02").show();
    })
}

//封基排行
function getFJRank() {
    $.get('/cms/ajax/fund/fj', function(msg) {
        var msgObj = eval('(' + msg + ')');
        if (msgObj.ack != 1) {
            $("#block-block-138 .mdTable02").html('暂时没有数据');
        }
        else {
            var rowClass = 'mdTableTdBg';
            var head = "<table width='100%' cellspacing='0' cellpadding='0' border='0'>"+
                       "<tr><td width='20%' align='center' class='tdBorder2'>代码</td>"+
                       "<td width='40%' align='center' class='tdBorder2'>名称</td>"+
                       "<td width='20%' align='center' class='tdBorder2'>最新价</td>"+
                       "<td width='20%' align='center' class='tdBorder2'>涨跌幅</td></tr>";
            var content = head;
            var list = msgObj.listRise;
            for (var i=0; i<list.length; i++) {
                if (i%2) rowClass = 'mdTableTdBg2';
                else rowClass = 'mdTableTdBg';
                content += "<tr><td align='center' class='"+rowClass+" '>"+list[i]['code']+"</td>"+
                           "<td align='center' class='"+rowClass+" '>"+list[i]['name']+"</td>"+
                           "<td align='center' class='"+rowClass+" red'>"+list[i]['close']+" </td>"+
                           "<td align='center' class='"+rowClass+" red'>"+list[i]['chg']+"%</td></tr>";                           
            }
            content += '</table>';
			if(list.length == 0)content = "该日无数据";
            $("#block-block-138 .rise").html(content);
            content = head;
            list = msgObj.listDown;
            for (var i=0; i<list.length; i++) {
                if (i%2) rowClass = 'mdTableTdBg2';
                else rowClass = 'mdTableTdBg';
                content += "<tr><td align='center' class='"+rowClass+" '>"+list[i]['code']+"</td>"+
                           "<td align='center' class='"+rowClass+" '>"+list[i]['name']+"</td>"+
                           "<td align='center' class='"+rowClass+" green02'>"+list[i]['close']+" </td>"+
                           "<td align='center' class='"+rowClass+" green02'>"+list[i]['chg']+"%</td></tr>";                           
            }
            content += '</table>';
			if(list.length == 0)content = "该日无数据";
            $("#block-block-138 .down").html(content);
            $("#block-block-138 .rise").show();
            $("#block-block-138 .down").hide();
            $("#block-block-138 .wait").hide();
        }
    })
}

//基金行情
function getFundHQ() {
    $.get('/cms/ajax/fund/index', function(msg) {
        var msgObj = eval('(' + msg + ')');
        if (msgObj.ack != 1) {
            $("#block-block-135 .dateCenterDetail").html('暂时没有数据');
        }
        else {
            var list = msgObj.list;
            var content = '';
            for (var i=0; i<list.length; i++) {
                content = "<div class='dateCenterDetailLeft02'>"+
                          "<h1><strong class='" + (list[i]['updown'] > 0 ? "red" : "green02") +"'>"+list[i]['close']+"</strong></h1><ul>"+
                          "<li><p>涨跌额</p><h2 class='" + (list[i]['chg'] > 0 ? "red" : "green02") + "'><strong>"+list[i]['chg']+"</strong></h2></li>"+
                          "<li><p>涨跌幅</p><h2 class='" + (list[i]['change'] > 0 ? "red" : "green02") + "'><strong>"+list[i]['change']+"</strong></h2></li>"+
                          "<li><p>最高价</p><h2 class='" + (list[i]['high'] > list[i]['preclose']  ? "red" : "green02") + "''><strong>"+list[i]['high']+"</strong></h2></li>"+
                          "<li><p>最低价</p><h2 class='" + (list[i]['low'] > list[i]['preclose']  ? "red" : "green02") + "'><strong>"+list[i]['low']+"</strong></h2></li>"+
                          "<li><p>成交量</p><h2 class=''><strong>"+list[i]['cjl']+"</strong></h2></li></ul>"+
                          "<div class='clear'></div></div>"+
                          "<div class='dateCenterDetailRight'><a href='" + list[i]['url'] + "' target='_blank'><img src='"+list[i]['img'] + "&d=" + Math.random() + "' alt=''></a></div>"+
                          "<div class='clear'></div>";
                $("#block-block-135 .hq_"+i).html(content);
            }
            $("#block-block-135 .dateCenterDetail").append("<div class='clear'></div></div>");
        }
        $("#block-block-135 .hq_0").show();
        $("#block-block-135 .hq_0").siblings().hide();
    });
}

//正在直播
function getVideoActive() {
    yctv = "第一财经正在直播 - ";
    nxtv = "宁夏卫视正在直播 - ";
    fetchContent("http://api.yicai.com/api/getEPGByChannel/601/1", "1=1", function(msg) {
        var msgObj = eval('(' + msg + ')');
        if (msgObj.result[0].name) yctv = yctv + msgObj.result[0].name.replace('\u76f4\u64ad\uff1a', '');
        else yctv = yctv + '精彩节目';
        $("#block-block-109 .yctv").html(yctv+";");
    });
    fetchContent("http://api.yicai.com/api/getEPGByChannel/603/1", '1=1', function(msg) {
        var msgObj = eval('(' + msg + ')');
        if (msgObj.result[0].name) nxtv += msgObj.result[0].name.replace('\u76f4\u64ad\uff1a', '');
        else nxtv += '精彩节目';
        $("#block-block-109 .nxtv").html(nxtv);
    });   
}

//一财快讯
function getYCKX() {
    $.get('/cms/ajax/interface/yckx', function(msg) {
        var msgObj = eval('(' + msg + ')');
        var content = '';
        if (msgObj.ack != 1) {
            content = "<li>暂无一财快讯</li>";
        }
        else {
            list = msgObj.list;
            for (var i=0; i<list.length; i++) {
                content += "<li><a href='"+list[i].url+"' calss='white' style='color:#ffffff' target=\"_blank\">"+list[i].title+"</a></li>";
            }
        }
        $("#block-block-109 .informationDetail ul").append(content);
        $("#block-block-109 #divCbnFinaceInfo").Scroll({line:1, speed:500,timer:3000, up:"lastNewsUp", down:"lastNewsDown"});
    });
}

//广告服务
function getADvert(ad_id, page, position){
     $.getJSON('/cms/ajax/advert/get/' + page + '/' + position, function(msgObj) {
        if(msgObj.ack == 1){
            $("#" + ad_id).html(msgObj.result);
		}
     });
}

//站外调用行情小图
var candivremove = false;
var quoteurl = "http://quote.yicai.com";
var quote_userAgent = navigator.userAgent.toLowerCase();
var quote_is_opera = quote_userAgent.indexOf('opera') != -1 && opera.version();
var quote_is_ie = (quote_userAgent.indexOf('msie') != -1 && !quote_is_opera) && quote_userAgent.substr(quote_userAgent.indexOf('msie') + 5, 3);
var quote_returnurl = "";

function initquotesmallpic() {


    var sp_index = 0;
    $("span").each(function () {

        try {
            ///添加事件
            var code = $(this).attr("code");
            var id = "span_" + code + sp_index;
            var mk = 1;
            mk = ($(this).attr("mk") == "sh") ? '1' : '2';
            sp_index++;


            if (typeof (code) != 'undefined') {

                $(this).attr("id", id);
                $("#" + id).bind("mouseover", function () {

                    showpic(this, code, mk);

                });
                $("#" + id).bind("mouseleave", function () {

                    hidepic()

                });
                $("#" + id).bind("click", function () {

                    var openurl = quoteurl + "/stock/" + $(this).attr("mk") + code + ".htm";
                    window.open(openurl)

                });
                ///添加属性
                $(this).css({
                    "text-decoration": "underline",
                    "color": "#de7902",
                    "cursor": "pointer"
                });
                //修改字的样式
                try {

                    var mtext = $(this).html();
                    $(this).html(mtext + '(' + $(this).attr("mk") + code + ')');

                } catch (err) {

                }
            }


        } catch (err) {

        }
    });

}

function showpic(e, stockcode, markettype) {

    candivremove = false;

    var temp = $("#div_mystockpic");
    if (temp.length == 0) {
        quote_returnurl = encodeURIComponent(window.location.href);
        var frameurl = quoteurl + "/QuoteSmallPic.htm?code=" + stockcode + "&markettype=" + markettype + "&returnurl=" + quote_returnurl + "&d=123sada";
        try {
            if (quote_is_ie) {
                $("<div onmouseover=\"notremovediv()\" onmouseout=\"removediv()\" class=\"mystockpic\" id=\"div_mystockpic\" style=\"display:none;width:200px;height:228px\"> <iframe width=\"200px\" height=\"228px\"  scrolling=\"no\"  frameborder=\"0\" style=\"width: 100%; background:#f6F6F6\" allowtransparency=\"true\" src=\"" + frameurl + "\" ></iframe><\/div>").insertAfter(e);

            }
            else {
                $("<div onmouseover=\"notremovediv()\" onmouseout=\"removediv()\" class=\"mystockpic\" id=\"div_mystockpic\" style=\"display:none;width:200px;height:238px\"> <iframe width=\"200px\" height=\"238px\"  scrolling=\"no\"  frameborder=\"0\" style=\"width: 100%; background:#f6F6F6\" allowtransparency=\"true\" src=\"" + frameurl + "\" ></iframe><\/div>").insertAfter(e);

            }
        } catch (err) {

        }

        var x = $(e).offset();
        $("#div_mystockpic").show();
        //修改下拉框的位置
        if (quote_is_ie) {
            $("#div_mystockpic").css({
                "left": x.left,
                "top": x.top + 18,
                "position": "absolute",
                "z-index": 1002,
                "border": "solid 1px #81b5cf",
                "background": "#e2eef4"
            });
        } else {
            $("#div_mystockpic").css({
                "left": x.left,
                "top": x.top + 21,
                "position": "absolute",
                "z-index": 1002,
                "border": "solid 1px #81b5cf",
                "background": "#e2eef4"
            });
        }
    }
    else {
        var x = $(e).offset();
        $("#div_mystockpic").show();
        //修改下拉框的位置
        if (quote_is_ie) {
            $("#div_mystockpic").css({
                "left": x.left,
                "top": x.top + 18,
                "position": "absolute",
                "z-index": 1002,
                "border": "solid 1px #81b5cf",
                "background": "#e2eef4"
            });
        } else {
            $("#div_mystockpic").css({
                "left": x.left,
                "top": x.top + 21,
                "position": "absolute",
                "z-index": 1002,
                "border": "solid 1px #81b5cf",
                "background": "#e2eef4"
            });
        }
        var frameurl = quoteurl + "/QuoteSmallPic.htm?code=" + stockcode + "&markettype=" + markettype + "&returnurl=" + quote_returnurl + "&d=" + getTimeStamp();
        temp.children("iframe").attr("src", frameurl);
        temp.show();

    }

}


function hidepic() {
    candivremove = true;
    setTimeout("removepic()", 3000);
}

function removepic() {

    if (candivremove) {
        $("#div_mystockpic").hide();
        candivremove = false;
    }
}

function notremovediv() {
    candivremove = false;

}

function removediv() {
    candivremove = true;
    $("#div_mystockpic").hide();
}

function getTimeStamp() {
    var b = new Date();
    var d = b.getHours();
    var a = b.getMinutes();
    var c = b.getSeconds();
    if (d <= 9) {
        d = "0" + d
    }
    if (a <= 9) {
        a = "0" + a
    }
    if (c <= 9) {
        c = "0" + c
    }

    return d + "" + a + "" + c
}

function newgetCommentMediaRank() {
    $.get("/cms/ajax/ranks/mediacomment",newget2012_VRankInfo);
}

function newget2012_VRankInfo(msg) {
var msgObj = eval('(' + msg + ')')
if (msgObj.ack !=1) {
        alert(msgObj.errorInfo);
    }
    else {
        newgetMDetailinfo(msg);
    }
}

function newgetMDetailinfo(msg){
    var msgObj = eval('('+msg+')'); 
        var content1="";
        var content2="";
        var list = msgObj.result;
        for (var i=0;i<list.length;i++) {
            var myTitle = list[i]["title"];
            var myUrl = list[i]["linkUrl"];
            var myType = setMediaIcon(list[i]["mediaType"]);
            if (i<3) {
                content1 += "<li><h3>"+eval(i+1)+"</h3><h2><a href='"+myUrl+"' target='_blank'>"+subStr(myTitle,30,"...")+"</a> <img src='"+myType+"' border='0' /></h2></li>";
            }
            else {
                content2 += "<li><h4>"+eval(i+1)+"</h4><h2><a href='"+myUrl+"' target='_blank'>" + subStr(myTitle,50,"...") +"</a> <img src='"+myType+"' border='0' /></h2></li>";
            }
        }

        $(".homeMVmost").append(content1+content2);
    //}
}
					  
				function newgetVisithomeNewsRank() {
    $.get("/cms/ajax/ranks/newscomment", newgethomeNVRankInfo);
}

function newgethomeNVRankInfo(msg) {
    msgObj = eval('(' + msg + ')')
    if (msgObj.ack !=1) {
    }
    else {
        var content1="";
        var content2="";
		list = msgObj.result;

        if ('object' != typeof(list)) {
								alert("eer");	
            $("#msg").html("<span style='color:#75B9E0'>没有同乐坊数据</span>");
            }
        else {
              for (var i=0; i<list.length; i++) {
                  if (i<3) {
                     content1 += "<li><h3>"+eval(i+1)+"</h3>"+"<h2><a href='"+list[i]["linkUrl"]+"' target='_blank'>"+subStr(list[i]["title"],36,"...")+"</a></h2></li>";
                     }
                  else {
                     content2 += "<li><h4>"+eval(i+1)+"</h4><h2><a href='"+list[i]["linkUrl"]+"' target='_blank'>"+subStr(list[i]["title"],36,"...")+"</a></h2></li>";
                  }
                    $("#newsInfo1").append("<div class='clear'></div>");
                    $("#newsInfo2").append("<div class='clear'></div>");
                }
        }
        $(".homeNVmost").append(content1+content2);
    }
}
;/*
 * jQuery Autocomplete plugin 1.1
 *
 * Copyright (c) 2009 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.autocomplete.js 15 2009-08-22 10:30:27Z joern.zaefferer $
 * 
 * Modified by SMG team on 2009.12
 */

;(function($) {
	
$.fn.extend({
	autocomplete: function(urlOrData, options) {
		var isUrl = typeof urlOrData == "string";
		options = $.extend({}, $.Autocompleter.defaults, {
			url: isUrl ? urlOrData : null,
			data: isUrl ? null : urlOrData,
			delay: isUrl ? $.Autocompleter.defaults.delay : 10,
			max: options && !options.scroll ? 10 : 150
		}, options);
		
		// if highlight is set to false, replace it with a do-nothing function
		options.highlight = options.highlight || function(value) { return value; };
		
		// if the formatMatch option is not specified, then use formatItem for backwards compatibility
		options.formatMatch = options.formatMatch || options.formatItem;
		
		return this.each(function() {
			new $.Autocompleter(this, options);
		});
	},
	result: function(handler) {
		return this.bind("result", handler);
	},
	search: function(handler) {
		return this.trigger("search", [handler]);
	},
	flushCache: function() {
		return this.trigger("flushCache");
	},
	setOptions: function(options){
		return this.trigger("setOptions", [options]);
	},
	unautocomplete: function() {
		return this.trigger("unautocomplete");
	}
});

$.Autocompleter = function(input, options) {

	var KEY = {
		UP: 38,
		DOWN: 40,
		DEL: 46,
		TAB: 9,
		RETURN: 13,
		ESC: 27,
		COMMA: 188,
		PAGEUP: 33,
		PAGEDOWN: 34,
		BACKSPACE: 8
	};

	// Create $ object for input element
	var $input = $(input).attr("autocomplete", "off").addClass(options.inputClass);

	var timeout;
	var previousValue = "";
	var cache = $.Autocompleter.Cache(options);
	var hasFocus = 0;
	var lastKeyPressCode;
	var config = {
		mouseDownOnSelect: false
	};
	var select = $.Autocompleter.Select(options, input, selectCurrent, config);
	
	var blockSubmit;
	
	// prevent form submit in opera when selecting with return key
	$.browser.opera && $(input.form).bind("submit.autocomplete", function() {
		if (blockSubmit) {
			blockSubmit = false;
			return false;
		}
	});
	
	// only opera doesn't trigger keydown multiple times while pressed, others don't work with keypress at all
	$input.bind(($.browser.opera ? "keypress" : "keydown") + ".autocomplete", function(event) {
		// a keypress means the input has focus
		// avoids issue where input had focus before the autocomplete was applied
		hasFocus = 1;
		// track last key pressed
		lastKeyPressCode = event.keyCode;
		switch(event.keyCode) {
		
			case KEY.UP:
				event.preventDefault();
				if ( select.visible() ) {
					select.prev();
					fillCurrent();
				} else {
					onChange(0, true);
				}
				break;
				
			case KEY.DOWN:
				event.preventDefault();
				if ( select.visible() ) {
					select.next();
					fillCurrent();
				} else {
					onChange(0, true);
				}
				break;
			
			// matches also semicolon
			case options.multiple && $.trim(options.multipleSeparator) == "," && KEY.COMMA:
			case KEY.TAB:
				if( selectCurrent() ) {
					// stop default to prevent a form submit, Opera needs special handling
					event.preventDefault();
					blockSubmit = true;
					return false;
				}
				break;
			case KEY.RETURN:
                if ($input.val()) {
                    $('#searchForm').submit();
                }
                break;
			case KEY.ESC:
				select.hide();
				break;
				
			default:
				clearTimeout(timeout);
				timeout = setTimeout(onChange, options.delay);
				break;
		}
	}).focus(function(){
		// track whether the field has focus, we shouldn't process any
		// results if the field no longer has focus
		hasFocus++;
	}).blur(function() {
		hasFocus = 0;
		if (!config.mouseDownOnSelect) {
			hideResults();
		}
	}).click(function() {
		// show select when clicking in a focused field
		if ( hasFocus++ > 1 && !select.visible() ) {
			onChange(0, true);
		}
	}).bind("search", function() {
		// TODO why not just specifying both arguments?
		var fn = (arguments.length > 1) ? arguments[1] : null;
		function findValueCallback(q, data) {
			var result;
			if( data && data.length ) {
				for (var i=0; i < data.length; i++) {
					if( data[i].result.toLowerCase() == q.toLowerCase() ) {
						result = data[i];
						break;
					}
				}
			}
			if( typeof fn == "function" ) fn(result);
			else $input.trigger("result", result && [result.data, result.value]);
		}
		$.each(trimWords($input.val()), function(i, value) {
			request(value, findValueCallback, findValueCallback);
		});
	}).bind("flushCache", function() {
		cache.flush();
	}).bind("setOptions", function() {
		$.extend(options, arguments[1]);
		// if we've updated the data, repopulate
		if ( "data" in arguments[1] )
			cache.populate();
	}).bind("unautocomplete", function() {
		select.unbind();
		$input.unbind();
		$(input.form).unbind(".autocomplete");
	}).bind("input", function() {
        // @hack for entering Chinese characters in firefox
        onChange(0, true);
    });
	
    /**
     * 将上下按键选择的内容填入搜索框，并相应的改变搜索类型的下拉框
     */
	function fillCurrent() {
		var selected = select.getSelectedData();
		if (!selected)
			return false;
		$input.val(selected.result);
	}
	
	function selectCurrent() {
		var selected = select.selected();
		if( !selected )
			return false;
		
		var v = selected.result;
		previousValue = v;
		
		if ( options.multiple ) {
			var words = trimWords($input.val());
			if ( words.length > 1 ) {
				var seperator = options.multipleSeparator.length;
				var cursorAt = $(input).selection().start;
				var wordAt, progress = 0;
				$.each(words, function(i, word) {
					progress += word.length;
					if (cursorAt <= progress) {
						wordAt = i;
						return false;
					}
					progress += seperator;
				});
				words[wordAt] = v;
				// TODO this should set the cursor to the right position, but it gets overriden somewhere
				//$.Autocompleter.Selection(input, progress + seperator, progress + seperator);
				v = words.join( options.multipleSeparator );
			}
			v += options.multipleSeparator;
		}
		
		$input.val(v);
		hideResultsNow();
		$input.trigger("result", [selected.data, selected.value]);
		return true;
	}
	
	function onChange(crap, skipPrevCheck) {
		if( lastKeyPressCode == KEY.DEL ) {
			select.hide();
			return;
		}
		
		var currentValue = $input.val();
		
		if ( !skipPrevCheck && currentValue == previousValue )
			return;
		
		previousValue = currentValue;
		
		currentValue = lastWord(currentValue);
		if ( currentValue.length >= options.minChars) {
			$input.addClass(options.loadingClass);
			if (!options.matchCase)
				currentValue = currentValue.toLowerCase();
			request(currentValue, receiveData, hideResultsNow);
		} else {
			stopLoading();
			select.hide();
		}
	};
	
	function trimWords(value) {
		if (!value)
			return [""];
		if (!options.multiple)
			return [$.trim(value)];
		return $.map(value.split(options.multipleSeparator), function(word) {
			return $.trim(value).length ? $.trim(word) : null;
		});
	}
	
	function lastWord(value) {
		if ( !options.multiple )
			return value;
		var words = trimWords(value);
		if (words.length == 1) 
			return words[0];
		var cursorAt = $(input).selection().start;
		if (cursorAt == value.length) {
			words = trimWords(value);
		} else {
			words = trimWords(value.replace(value.substring(cursorAt), ""));
		}
		return words[words.length - 1];
	}
	
	// fills in the input box w/the first match (assumed to be the best match)
	// q: the term entered
	// sValue: the first matching result
	function autoFill(q, sValue){
		// autofill in the complete box w/the first match as long as the user hasn't entered in more data
		// if the last user key pressed was backspace, don't autofill
		if( options.autoFill && (lastWord($input.val()).toLowerCase() == q.toLowerCase()) && lastKeyPressCode != KEY.BACKSPACE ) {
			// fill in the value (keep the case the user has typed)
			$input.val($input.val() + sValue.substring(lastWord(previousValue).length));
			// select the portion of the value not typed by the user (so the next character will erase)
			$(input).selection(previousValue.length, previousValue.length + sValue.length);
		}
	};

	function hideResults() {
		clearTimeout(timeout);
		timeout = setTimeout(hideResultsNow, 200);
	};

	function hideResultsNow() {
		var wasVisible = select.visible();
		select.hide();
		clearTimeout(timeout);
		stopLoading();
		if (options.mustMatch) {
			// call search and run callback
			$input.search(
				function (result){
					// if no value found, clear the input box
					if( !result ) {
						if (options.multiple) {
							var words = trimWords($input.val()).slice(0, -1);
							$input.val( words.join(options.multipleSeparator) + (words.length ? options.multipleSeparator : "") );
						}
						else {
							$input.val( "" );
							$input.trigger("result", null);
						}
					}
				}
			);
		}
	};

	function receiveData(q, data) {
		if ( data && data.length && hasFocus ) {
			stopLoading();
			select.display(data, q);
			autoFill(q, data[0].value);
			select.show();
		} else {
			hideResultsNow();
		}
	};

	function request(term, success, failure) {
		if (!options.matchCase)
			term = term.toLowerCase();
		var data = cache.load(term);
		// recieve the cached data
		if (data && data.length) {
			success(term, data);
		// if an AJAX url has been supplied, try loading the data now
		} else if( (typeof options.url == "string") && (options.url.length > 0) ){
			
			var extraParams = {
				timestamp: +new Date()
			};
			$.each(options.extraParams, function(key, param) {
				extraParams[key] = typeof param == "function" ? param() : param;
			});
			
			$.ajax({
				// try to leverage ajaxQueue plugin to abort previous requests
				mode: "abort",
				// limit abortion to this input
				port: "autocomplete" + input.name,
				dataType: options.dataType,
				url: options.url,
				data: $.extend({
					q: lastWord(term),
					limit: options.max
				}, extraParams),
				success: function(data) {
					var parsed = options.parse && options.parse(data) || parse(data);
					cache.add(term, parsed);
					success(term, parsed);
				}
			});
		} else {
			// if we have a failure, we need to empty the list -- this prevents the the [TAB] key from selecting the last successful match
			select.emptyList();
			failure(term);
		}
	};
	
	function parse(data) {
		var parsed = [];
		var rows = data.split("\n");
		for (var i=0; i < rows.length; i++) {
			var row = $.trim(rows[i]);
			if (row) {
				row = row.split("|");
				parsed[parsed.length] = {
					data: row,
					value: row[0],
					result: options.formatResult && options.formatResult(row, row[0]) || row[0]
				};
			}
		}
		return parsed;
	};

	function stopLoading() {
		$input.removeClass(options.loadingClass);
	};

};

$.Autocompleter.defaults = {
	inputClass: "ac_input",
	resultsClass: "ac_results",
	loadingClass: "ac_loading",
	minChars: 1,
	delay: 400,
	matchCase: false,
	matchSubset: true,
	matchContains: false,
	cacheLength: 10,
	max: 100,
	mustMatch: false,
	extraParams: {},
	selectFirst: true,
	formatItem: function(row) { return row[0]; },
	formatMatch: null,
	autoFill: false,
	width: 0,
	multiple: false,
	multipleSeparator: ", ",
	highlight: function(value, term) {
		return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
	},
    scroll: true,
    scrollHeight: 180
};

$.Autocompleter.Cache = function(options) {

	var data = {};
	var length = 0;
	
	function matchSubset(s, sub) {
		if (!options.matchCase) 
			s = s.toLowerCase();
		var i = s.indexOf(sub);
		if (options.matchContains == "word"){
			i = s.toLowerCase().search("\\b" + sub.toLowerCase());
		}
		if (i == -1) return false;
		return i == 0 || options.matchContains;
	};
	
	function add(q, value) {
		if (length > options.cacheLength){
			flush();
		}
		if (!data[q]){ 
			length++;
		}
		data[q] = value;
	}
	
	function populate(){
		if( !options.data ) return false;
		// track the matches
		var stMatchSets = {},
			nullData = 0;

		// no url was specified, we need to adjust the cache length to make sure it fits the local data store
		if( !options.url ) options.cacheLength = 1;
		
		// track all options for minChars = 0
		stMatchSets[""] = [];
		
		// loop through the array and create a lookup structure
		for ( var i = 0, ol = options.data.length; i < ol; i++ ) {
			var rawValue = options.data[i];
			// if rawValue is a string, make an array otherwise just reference the array
			rawValue = (typeof rawValue == "string") ? [rawValue] : rawValue;
			
			var value = options.formatMatch(rawValue, i+1, options.data.length);
			if ( value === false )
				continue;
				
			var firstChar = value.charAt(0).toLowerCase();
			// if no lookup array for this character exists, look it up now
			if( !stMatchSets[firstChar] ) 
				stMatchSets[firstChar] = [];

			// if the match is a string
			var row = {
				value: value,
				data: rawValue,
				result: options.formatResult && options.formatResult(rawValue) || value
			};
			
			// push the current match into the set list
			stMatchSets[firstChar].push(row);

			// keep track of minChars zero items
			if ( nullData++ < options.max ) {
				stMatchSets[""].push(row);
			}
		};

		// add the data items to the cache
		$.each(stMatchSets, function(i, value) {
			// increase the cache size
			options.cacheLength++;
			// add to the cache
			add(i, value);
		});
	}
	
	// populate any existing data
	setTimeout(populate, 25);
	
	function flush(){
		data = {};
		length = 0;
	}
	
	return {
		flush: flush,
		add: add,
		populate: populate,
		load: function(q) {
			if (!options.cacheLength || !length)
				return null;
			/* 
			 * if dealing w/local data and matchContains than we must make sure
			 * to loop through all the data collections looking for matches
			 */
			if( !options.url && options.matchContains ){
				// track all matches
				var csub = [];
				// loop through all the data grids for matches
				for( var k in data ){
					// don't search through the stMatchSets[""] (minChars: 0) cache
					// this prevents duplicates
					if( k.length > 0 ){
						var c = data[k];
						$.each(c, function(i, x) {
							// if we've got a match, add it to the array
							if (matchSubset(x.value, q)) {
								csub.push(x);
							}
						});
					}
				}				
				return csub;
			} else 
			// if the exact item exists, use it
			if (data[q]){
				return data[q];
			} else
			if (options.matchSubset) {
				for (var i = q.length - 1; i >= options.minChars; i--) {
					var c = data[q.substr(0, i)];
					if (c) {
						var csub = [];
						$.each(c, function(i, x) {
							if (matchSubset(x.value, q)) {
								csub[csub.length] = x;
							}
						});
						return csub;
					}
				}
			}
			return null;
		}
	};
};

$.Autocompleter.Select = function (options, input, select, config) {
	var CLASSES = {
		ACTIVE: "ac_over"
	};
	
	var listItems,
		active = -1,
		data,
		term = "",
		needsInit = true,
		element,
		list;
	
	// Create results
	function init() {
		if (!needsInit)
			return;
		element = $("<div/>")
		.hide()
		.addClass(options.resultsClass)
		.css("position", "absolute")
		.appendTo(document.body);
	
		list = $("<ul/>").appendTo(element).mouseover( function(event) {
			if(target(event).nodeName && target(event).nodeName.toUpperCase() == 'LI') {
	            active = $("li", list).removeClass(CLASSES.ACTIVE).index(target(event));
			    $(target(event)).addClass(CLASSES.ACTIVE);            
	        }
		}).click(function(event) {
			$(target(event)).addClass(CLASSES.ACTIVE);
			select();
			// TODO provide option to avoid setting focus again after selection? useful for cleanup-on-focus
			input.focus();
			return false;
		}).mousedown(function() {
			config.mouseDownOnSelect = true;
		}).mouseup(function() {
			config.mouseDownOnSelect = false;
		});
		
		if( options.width > 0 )
			element.css("width", options.width);
			
		needsInit = false;
	} 
	
	function target(event) {
		var element = event.target;
		while(element && element.tagName != "LI")
			element = element.parentNode;
		// more fun with IE, sometimes event.target is empty, just ignore it then
		if(!element)
			return [];
		return element;
	}

	function moveSelect(step) {
		listItems.slice(active, active + 1).removeClass(CLASSES.ACTIVE);
		movePosition(step);
        var activeItem = listItems.slice(active, active + 1).addClass(CLASSES.ACTIVE);
        if(options.scroll) {
            var offset = 0;
            listItems.slice(0, active).each(function() {
				offset += this.offsetHeight;
			});
            if((offset + activeItem[0].offsetHeight - list.scrollTop()) > list[0].clientHeight) {
                list.scrollTop(offset + activeItem[0].offsetHeight - list.innerHeight());
            } else if(offset < list.scrollTop()) {
                list.scrollTop(offset);
            }
        }
	};
	
	function movePosition(step) {
		active += step;
		if (active < 0) {
			active = listItems.size() - 1;
		} else if (active >= listItems.size()) {
			active = 0;
		}
	}
	
	function limitNumberOfItems(available) {
		return options.max && options.max < available
			? options.max
			: available;
	}
	
	function fillList() {
		list.empty();
		var max = limitNumberOfItems(data.length);
		for (var i=0; i < max; i++) {
			if (!data[i])
				continue;
			var formatted = options.formatItem(data[i].data, i+1, max, data[i].value, term);
			if ( formatted === false )
				continue;
			var li = $("<li/>").html( options.highlight(formatted, term) ).addClass(i%2 == 0 ? "ac_even" : "ac_odd").appendTo(list)[0];
			$.data(li, "ac_data", data[i]);
		}
		listItems = list.find("li");
		if ( options.selectFirst ) {
			listItems.slice(0, 1).addClass(CLASSES.ACTIVE);
			active = 0;
		}
		// apply bgiframe if available
		if ( $.fn.bgiframe )
			list.bgiframe();
	}
	
	return {
		display: function(d, q) {
			init();
			data = d;
			term = q;
			fillList();
		},
		next: function() {
			moveSelect(1);
		},
		prev: function() {
			moveSelect(-1);
		},
		pageUp: function() {
			if (active != 0 && active - 8 < 0) {
				moveSelect( -active );
			} else {
				moveSelect(-8);
			}
		},
		pageDown: function() {
			if (active != listItems.size() - 1 && active + 8 > listItems.size()) {
				moveSelect( listItems.size() - 1 - active );
			} else {
				moveSelect(8);
			}
		},
		hide: function() {
			element && element.hide();
			listItems && listItems.removeClass(CLASSES.ACTIVE);
			active = -1;
		},
		visible : function() {
			return element && element.is(":visible");
		},
		current: function() {
			return this.visible() && (listItems.filter("." + CLASSES.ACTIVE)[0] || options.selectFirst && listItems[0]);
		},
		show: function() {
			var offset = $(input).offset();
			element.css({
				width: typeof options.width == "string" || options.width > 0 ? options.width : $(input).width(),
				top: offset.top + input.offsetHeight,
				left: offset.left
			}).show();
            if(options.scroll) {
                list.scrollTop(0);
                list.css({
					maxHeight: options.scrollHeight,
					overflow: 'auto'
				});
				
                if($.browser.msie && typeof document.body.style.maxHeight === "undefined") {
					var listHeight = 0;
					listItems.each(function() {
						listHeight += this.offsetHeight;
					});
					var scrollbarsVisible = listHeight > options.scrollHeight;
                    list.css('height', scrollbarsVisible ? options.scrollHeight : listHeight );
					if (!scrollbarsVisible) {
						// IE doesn't recalculate width when scrollbar disappears
						listItems.width( list.width() - parseInt(listItems.css("padding-left")) - parseInt(listItems.css("padding-right")) );
					}
                }
                
            }
		},
		selected: function() {
			var selected = listItems && listItems.filter("." + CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);
			return selected && selected.length && $.data(selected[0], "ac_data");
		},
        getSelectedData: function() {
            var selected = listItems && listItems.filter("." + CLASSES.ACTIVE);
            return selected && selected.length && $.data(selected[0], "ac_data");
        }, 
		emptyList: function (){
			list && list.empty();
		},
		unbind: function() {
			element && element.remove();
		}
	};
};

$.fn.selection = function(start, end) {
	if (start !== undefined) {
		return this.each(function() {
			if( this.createTextRange ){
				var selRange = this.createTextRange();
				if (end === undefined || start == end) {
					selRange.move("character", start);
					selRange.select();
				} else {
					selRange.collapse(true);
					selRange.moveStart("character", start);
					selRange.moveEnd("character", end);
					selRange.select();
				}
			} else if( this.setSelectionRange ){
				this.setSelectionRange(start, end);
			} else if( this.selectionStart ){
				this.selectionStart = start;
				this.selectionEnd = end;
			}
		});
	}
	var field = this[0];
	if ( field.createTextRange ) {
		var range = document.selection.createRange(),
			orig = field.value,
			teststring = "<->",
			textLength = range.text.length;
		range.text = teststring;
		var caretAt = field.value.indexOf(teststring);
		field.value = orig;
		this.selection(caretAt, caretAt + textLength);
		return {
			start: caretAt,
			end: caretAt + textLength
		}
	} else if( field.selectionStart !== undefined ){
		return {
			start: field.selectionStart,
			end: field.selectionEnd
		}
	}
};

})(jQuery);;