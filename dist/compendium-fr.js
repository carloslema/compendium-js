!function(e){"use strict";function n(e,n){var t;for(t in n)n.hasOwnProperty(t)&&(e[t]=n[t])}function t(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var i={},r={},o={},s={},a={},l={},u={},f={},c=Array.isArray,p={profile:{negative_threshold:-.3,positive_threshold:.3,amplitude_threshold:.3,polite_threshold:.2,dirty_threshold:.3}},d="foreign",g="interrogative",m="exclamatory",h="headline",v="imperative",y="approval",x="refusal";e.detect=a,e.dependencies=l,e.inflector=u,e.compendium=i,e.lexer=r,e.factory=o,e.pos=f,e.config=p,!function(){var t=["tuna","trout","spacecraft","salmon","halibut","aircraft","equipment","information","rice","money","species","series","fish","sheep","moose","deer","news","asbestos"],i=[[/^index$/gi,"indices"],[/^criterion$/gi,"criteria"],[/dix$/gi,"dices"],[/(a|o)ch$/gi,"$1chs"],[/(m)an$/gi,"$1en"],[/(pe)rson$/gi,"$1ople"],[/(child)$/gi,"$1ren"],[/^(ox)$/gi,"$1en"],[/(ax|test)is$/gi,"$1es"],[/(octop|vir)us$/gi,"$1i"],[/(alias|status)$/gi,"$1es"],[/(bu)s$/gi,"$1ses"],[/(buffal|tomat|potat|her)o$/gi,"$1oes"],[/([ti])um$/gi,"$1a"],[/sis$/gi,"ses"],[/(?:([^f])fe|([lr])f)$/gi,"$1$2ves"],[/(hive)$/gi,"$1s"],[/([^aeiouy]|qu)y$/gi,"$1ies"],[/(x|ch|ss|sh)$/gi,"$1es"],[/(matr|vert|ind)ix|ex$/gi,"$1ices"],[/([m|l])ouse$/gi,"$1ice"],[/(quiz)$/gi,"$1zes"],[/^gas$/gi,"gases"],[/s$/gi,"s"],[/$/gi,"s"]],r=[[/(m)en$/gi,"$1an"],[/(pe)ople$/gi,"$1rson"],[/(child)ren$/gi,"$1"],[/([ti])a$/gi,"$1um"],[/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses/gi,"$1$2sis"],[/(hive)s$/gi,"$1"],[/(tive)s$/gi,"$1"],[/(curve)s$/gi,"$1"],[/([lr])ves$/gi,"$1f"],[/([^fo])ves$/gi,"$1fe"],[/([^aeiouy]|qu)ies$/gi,"$1y"],[/(s)eries$/gi,"$1eries"],[/(m)ovies$/gi,"$1ovie"],[/(x|ch|ss|sh)es$/gi,"$1"],[/([m|l])ice$/gi,"$1ouse"],[/(bus)es$/gi,"$1"],[/(o)es$/gi,"$1"],[/(shoe)s$/gi,"$1"],[/(cris|ax|test)es$/gi,"$1is"],[/(octop|vir)i$/gi,"$1us"],[/(alias|status)es$/gi,"$1"],[/^(ox)en/gi,"$1"],[/(vert|ind)ices$/gi,"$1ex"],[/(matr)ices$/gi,"$1ix"],[/(quiz)zes$/gi,"$1"],[/s$/gi,""]],o=function(e,n,i){var r,o;if(t.indexOf(e.toLowerCase())>-1)return e;for(r=0,o=n.length;o>r;r++)if(e.match(n[r][0])){e=e.replace(n[r][0],n[r][1]);break}return e},s=function(e,n){var i,r;if(t.indexOf(e.toLowerCase())>-1)return!1;for(i=0,r=n.length;r>i;i++)if(e.match(n[i][0]))return!0;return!1},a="VBZ",l="VBG",f="VBN",c=function(e,n){return n===a?e+"s":n===l?e+"ing":n===f?e+"ed":e},p=function(e,n){return n===a?e+"s":n===l?e+e[e.length-1]+"ing":n===f?e+e[e.length-1]+"ed":e},d=function(e,n){var t=e.slice(0,e.length-1);return n===a?e+"s":n===l?t+"ing":n===f?t+"ed":e},g=function(e,n){var t=e.slice(0,e.length-1);return n===a?t+"ies":n===l?e+"ing":n===f?t+"ied":e},m=function(e,n){return n===a?e+"s":n===l?e+"ing":n===f?e+"d":e},h=function(e,n){return n===a?e+"s":n===l?e.slice(0,e.length-1)+"ing":n===f?e+"d":e},v=function(e,n){return n===a?e+"s":n===l?e.slice(0,e.length-2)+"ying":n===f?e+"d":e},y=function(e,n){return n===a?e+"es":n===l?e+"ing":n===f?e+"ed":e};n(u,{isSingular:function(e){return u.isUncountable(e)||s(e,i)},isPlural:function(e){return e.match(/([saui]s|[^i]a)$/gi)?!1:s(e,r)},isUncountable:function(e){return t.indexOf(e)>-1},singularize:function(e){return u.isPlural(e)?o(e,r):e},pluralize:function(e){return u.isSingular(e)?o(e,i):e},conjugate:function(e,n){e[e.length-1];return e.match(/[^aeiou]y$/gi)?g(e,n):e.match(/[^aeiouy]e$/gi)?d(e,n):e.match(/([aeiuo][ptlgnm]|ir|cur|[^aeiuo][oua][db])$/gi)?p(e,n):e.match(/([ieao]ss|[aeiouy]zz|[aeiouy]ch|nch|rch|[aeiouy]sh|[iae]tch|ax)$/gi)?y(e,n):e.match(/(ee)$/gi)?m(e,n):e.match(/(ie)$/gi)?v(e,n):e.match(/(ue)$/gi)?h(e,n):e.match(/([uao]m[pb]|[oa]wn|ey|elp|[ei]gn|ilm|o[uo]r|[oa]ugh|igh|ki|ff|oubt|ount|awl|o[alo]d|[iu]rl|upt|[oa]y|ight|oid|empt|act|aud|e[ea]d|ound|[aeiou][srcln]t|ept|dd|[eia]n[dk]|[ioa][xk]|[oa]rm|[ue]rn|[ao]ng|uin|eam|ai[mr]|[oea]w|[eaoui][rscl]k|[oa]r[nd]|ear|er|it|ll)$/gi)?c(e,n):null},toPast:function(e){return u.conjugate(e,f)},toGerund:function(e){return u.conjugate(e,l)},toPresents:function(e){return u.conjugate(e,a)},infinitive:function(n){var t=e.lexicon[n];return t&&t.hasOwnProperty("infinitive")?t.infinitive:"are"===n||"am"===n||"'s"===n?"be":null}}),e.inflector=u}(),!function(){function n(e){throw new RangeError(B[e])}function t(e,n){for(var t=e.length,i=[];t--;)i[t]=n(e[t]);return i}function i(e,n){var i=e.split("@"),r="";i.length>1&&(r=i[0]+"@",e=i[1]),e=e.replace(O,".");var o=e.split("."),s=t(o,n).join(".");return r+s}function r(e){for(var n,t,i=[],r=0,o=e.length;o>r;)n=e.charCodeAt(r++),n>=55296&&56319>=n&&o>r?(t=e.charCodeAt(r++),56320==(64512&t)?i.push(((1023&n)<<10)+(1023&t)+65536):(i.push(n),r--)):i.push(n);return i}function o(e){return t(e,function(e){var n="";return e>65535&&(e-=65536,n+=j(e>>>10&1023|55296),e=56320|1023&e),n+=j(e)}).join("")}function s(e){return 10>e-48?e-22:26>e-65?e-65:26>e-97?e-97:m}function a(e,n){return e+22+75*(26>e)-((0!=n)<<5)}function l(e,n,t){var i=0;for(e=t?V(e/x):e>>1,e+=V(e/n);e>P*v>>1;i+=m)e=V(e/P);return V(i+(P+1)*e/(e+y))}function u(e){var t,i,r,a,u,f,c,p,d,y,x=[],N=e.length,k=0,O=$,B=b;for(i=e.lastIndexOf(w),0>i&&(i=0),r=0;i>r;++r)e.charCodeAt(r)>=128&&n("not-basic"),x.push(e.charCodeAt(r));for(a=i>0?i+1:0;N>a;){for(u=k,f=1,c=m;a>=N&&n("invalid-input"),p=s(e.charCodeAt(a++)),(p>=m||p>V((g-k)/f))&&n("overflow"),k+=p*f,d=B>=c?h:c>=B+v?v:c-B,!(d>p);c+=m)y=m-d,f>V(g/y)&&n("overflow"),f*=y;t=x.length+1,B=l(k-u,t,0==u),V(k/t)>g-O&&n("overflow"),O+=V(k/t),k%=t,x.splice(k++,0,O)}return o(x)}function f(e){var t,i,o,s,u,f,c,p,d,y,x,N,k,O,B,P=[];for(e=r(e),N=e.length,t=$,i=0,u=b,f=0;N>f;++f)x=e[f],128>x&&P.push(j(x));for(o=s=P.length,s&&P.push(w);N>o;){for(c=g,f=0;N>f;++f)x=e[f],x>=t&&c>x&&(c=x);for(k=o+1,c-t>V((g-i)/k)&&n("overflow"),i+=(c-t)*k,t=c,f=0;N>f;++f)if(x=e[f],t>x&&++i>g&&n("overflow"),x==t){for(p=i,d=m;y=u>=d?h:d>=u+v?v:d-u,!(y>p);d+=m)B=p-y,O=m-y,P.push(j(a(y+B%O,0))),p=V(B/O);P.push(j(a(p,0))),u=l(i,k,o==s),i=0,++o}++i,++t}return P.join("")}function c(e){return i(e,function(e){return N.test(e)?u(e.slice(4).toLowerCase()):e})}function p(e){return i(e,function(e){return k.test(e)?"xn--"+f(e):e})}var d,g=2147483647,m=36,h=1,v=26,y=38,x=700,b=72,$=128,w="-",N=/^xn--/,k=/[^\x20-\x7E]/,O=/[\x2E\u3002\uFF0E\uFF61]/g,B={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},P=m-h,V=Math.floor,j=String.fromCharCode;d={version:"1.3.2",ucs2:{decode:r,encode:o},decode:u,encode:f,toASCII:p,toUnicode:c},e.punycode=d}(),!function(){var n={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},t={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},i="[^aeiou]",r="[aeiouy]",o=i+"[^aeiouy]*",s=r+"[aeiou]*",a="^("+o+")?"+s+o,l="^("+o+")?"+s+o+"("+s+")?$",u="^("+o+")?"+s+o+s+o,f="^("+o+")?"+r,c=function(e){var i,s,c,p,d,g,m,h;return e.length<3?e:(c=e.substr(0,1),"y"==c&&(e=c.toUpperCase()+e.substr(1)),d=/^(.+?)(ss|i)es$/,g=/^(.+?)([^s])s$/,d.test(e)?e=e.replace(d,"$1$2"):g.test(e)&&(e=e.replace(g,"$1$2")),d=/^(.+?)eed$/,g=/^(.+?)(ed|ing)$/,d.test(e)?(p=d.exec(e),d=new RegExp(a),d.test(p[1])&&(d=/.$/,e=e.replace(d,""))):g.test(e)&&(p=g.exec(e),i=p[1],g=new RegExp(f),g.test(i)&&(e=i,g=/(at|bl|iz)$/,m=new RegExp("([^aeiouylsz])\\1$"),h=new RegExp("^"+o+r+"[^aeiouwxy]$"),g.test(e)?e+="e":m.test(e)?(d=/.$/,e=e.replace(d,"")):h.test(e)&&(e+="e"))),d=/^(.+?)y$/,d.test(e)&&(p=d.exec(e),i=p[1],d=new RegExp(f),d.test(i)&&(e=i+"i")),d=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,d.test(e)&&(p=d.exec(e),i=p[1],s=p[2],d=new RegExp(a),d.test(i)&&(e=i+n[s])),d=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,d.test(e)&&(p=d.exec(e),i=p[1],s=p[2],d=new RegExp(a),d.test(i)&&(e=i+t[s])),d=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,g=/^(.+?)(s|t)(ion)$/,d.test(e)?(p=d.exec(e),i=p[1],d=new RegExp(u),d.test(i)&&(e=i)):g.test(e)&&(p=g.exec(e),i=p[1]+p[2],g=new RegExp(u),g.test(i)&&(e=i)),d=/^(.+?)e$/,d.test(e)&&(p=d.exec(e),i=p[1],d=new RegExp(u),g=new RegExp(l),m=new RegExp("^"+o+r+"[^aeiouwxy]$"),(d.test(i)||g.test(i)&&!m.test(i))&&(e=i)),d=/ll$/,g=new RegExp(u),d.test(e)&&g.test(e)&&(d=/.$/,e=e.replace(d,"")),"y"==c&&(e=c.toLowerCase()+e.substr(1)),e)};e.stemmer=c}(),!function(){var e=function(){this.t_={}};e.prototype.add=function(e,n){throw new Error("Not implmented")},e.prototype.isset=function(e){return null!==this.get(e)},e.prototype.get=function(e){throw new Error("Not implmented")}}(),!function(){var n=["en","fr"];s.toObject=function(e,n){},s.applyPOS=function(n,t){var i,r,s,a;for(a=e.lexer.tokens(n.raw,t),s=e.tag(a,t),n.tags=s.tags,n.stats.confidence=s.confidence,i=0,r=a.length;r>i;i++)n.tokens.push(o.token(a[i],s.norms[i],s.tags[i]));return n.length=r,n},s.analyse=function(n,t){var i,r,u,f,c,p,d=[],g=n.length;for(i=0;g>i;i++){for(r=Date.now(),u=o.sentence(n[i],t),s.applyPOS(u,t),e.stat(u),c=a.context(),f=0,p=u.tokens.length;p>f;f++)a.apply("t",!0,u.tokens[f],f,u,c);for(a.apply("s",!0,u,i,d,c),l.parse(u),f=0,p=u.tokens.length;p>f;f++)a.apply("t",!1,u.tokens[f],f,u,c);d.push(u),a.apply("s",!1,u,i,d,c),u.time=Date.now()-r}return d},e.analyse=function(t,i){var r=null;if("string"==typeof t&&(t=e.lex(e.decode(t),i,!0)),!c(t))throw new Error("Compendium requires a string or an array of strings as argument.");if(i=i||"en",-1===n.indexOf(i))throw new Error("Compendium supports only the following languages: "+n.join(", "));return r=s.analyse(t,i),a.apply("p",!1,r),r}}(),!function(){n(i,{verbs:"".split(" "),irregular:"".split("	").map(function(e){return e.split(" ")}),ing_excpt:[],ing_test:[],emphasis:[],abbrs:["jr","junior","mr","mister","mrs","missus","ms","miss","dr","doctor","prof","professor","pr","professor","sr","senior","sen","senator","sens","senators","corp","corporation","rep","","gov","","atty","attorney","supt","superintendent","det","detective","rev","","col","colonel","gen","general","lt","lieutenant","cmdr","commander","adm","administrative","capt","captain","sgt","sergent","cpl","caporal","maj","","esq","esquire","phd","","adj","adjective","adv","adverb","asst","assistant","bldg","building","brig","brigade","hon","","messrs","messeurs","mlle","mademoiselle","mme","madame","op","","ord","order","pvt","private","reps","","res","","sens","","sfc","","surg","surgeon","ph","","ds","","arc","","al","","ave","avenue","blvd","boulevard","cl","","ct","","cres","","exp","","rd","road","st","street","dist","","mt","mount","ft","","fy","","hwy","highway","la","","pd","","pl","","plz","","tce","","vs","","etc","","esp","","llb","","md","","bl","","ma","","ba","","lit","","fl","","ex","example","eg","","ala","alabama","ariz","arizona","ark","arkansas","cal","california","calif","california","col","coloradoa","colo","colorado","conn","connecticut","del","delaware","fed","federal","fla","florida","ga","georgia","ida","idaho","id","idaho","ill","illinois","ind","indiana","ia","iowa","kan","kansas","kans","kansas","ken","kentuky","ky","kentuky","la","","me","","md","","mass","massachussets","mich","michigan","minn","minnesota","miss","mississippi","mo","missouri","mont","montana","neb","nebraska","nebr","nebraska","nev","nevada","mex","mexico","okla","oklahoma","ok","oklahoma","ore","oregon","penna","pennsylvania","penn","pennsylvania","pa","pennsylvania","dak","dakota","tenn","tennessee","tex","texas","ut","utah","vt","vermont","va","virginia","wash","washington","wis","wisconsin","wisc","wisconsin","wy","wyoming","wyo","wyoming","alta","alberta","ont","ontario","que","quebec","sask","saskatchewan","yuk","yukon","jan","january","feb","february","mar","march","apr","april","jun","june","jul","july","aug","august","sep","september","oct","october","nov","november","dec","december","sept","september","dept","department","univ","university","assn","association","bros","brothers","inc","incorported","ltd","limited","co",""],synonyms:"",abbrs_rplt:[],exclamations:["yahoo","joomla","jeopardy"],rules:"",suffixes:"",emots:[],floatChar:",",thousandChar:".",multipliers:["cent","mille","million","milliard","billion"],numbers:{zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19,ninteen:19,twenty:20,thirty:30,forty:40,fourty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90,hundred:100,thousand:1e3,million:1e6,billion:1e9,trillion:1e12},nationalities:"",neg:{},neg_neg:{},refusal:{},approval:{},approval_verbs:[],breakpoints:{},citations:{'"':'"',"'":'"',"`":'"'},p:{},months:{},days:{},indicators:{},dirty:"".split(" "),polite:"".split(" ")})}(),!function(){var n=e.inflector,t=function(t){var r,o,s,a,l,u,f,p,d,g=(Date.now(),t.split("	")),m={},h=[];for(r=0,s=g.length;s>r;r++)d=g[r].split(" "),p=d.length-1,l=p>0?d[1].trim():"",u=0,f=null,d[p].match(/^[A-Z]{2,}\/[0-9\-]+$/g)?(f=d[p].split("/")[0],u=d[p].split("/")[1]):(d[p].match(/^[0-9\-]+$/g)||d[p].match(/^\-{0,1}[0-4]\.[0-9]$/g))&&(u=d[p].indexOf(".")>0?parseFloat(d[p]):parseInt(d[p],10)),"EM"===l&&e.punycode.ucs2.decode(d[0]).length>1&&h.push(d[0]),m[d[0]]={pos:"-"===l?"NN":l,sentiment:u,condition:f};for(r in i)if(i.hasOwnProperty(r)&&"object"==typeof i[r]&&!c(i[r])){d=i[r];for(s in d)d.hasOwnProperty(s)&&(u=0,"string"==typeof d[s]?(m.hasOwnProperty(s)&&(u=m[s].sentiment),m[s]={pos:d[s],sentiment:u,condition:null}):"number"==typeof d[s]&&(m[s]={pos:"CD",sentiment:u,value:d[s],condition:null}))}for(r=0,s=i.verbs.length;s>r;r++,u=0)d=i.verbs[r],a=n.conjugate(d,"VBZ"),a&&(m.hasOwnProperty(d)&&(u=m[d].sentiment),m[a]={pos:"VBZ",sentiment:u,condition:null,infinitive:d},a=n.conjugate(d,"VBN"),m.hasOwnProperty(a)?m[a].infinitive=d:m[a]={pos:"VBN",sentiment:u,condition:null,infinitive:d},a=n.conjugate(d,"VBG"),m.hasOwnProperty(a)?m[a].infinitive=d:m[a]={pos:"VBG",sentiment:u,condition:null,infinitive:d});for(r=0,s=i.irregular.length;s>r;r++,u=0)for(d=i.irregular[r],m.hasOwnProperty(d)&&(u=m[d].sentiment),p=d[0],o=0;5>o;o++)d[o].split("/").map(function(e){m.hasOwnProperty(e)?m[e].infinitive||(m[e].infinitive=p,m[e].sentiment=u):m[e]={pos:0===o?"VB":1===o?"VBD":2===o?"VBN":3===o?"VBZ":"VBG",sentiment:u,condition:null,infinitive:p}});return i.emots=h,m},r=function(e){e=e.split("	");var n,t,r=[],o=e.length;for(t=0;o>t;t++)n=e[t].split(" "),r.push({from:n[0],to:n[1],type:parseInt(n[2],10),c1:n[3],c2:n[4]});i.rules=r},o=function(e){e=e.split("	");var n,t,r=e.length,o=[];for(n=0;r>n;n++)t=e[n].split(" "),o.push({regexp:new RegExp("^.{1,}"+t[0].trim()+"$","gi"),pos:t[1]});i.suffixes=o},s=function(e){var t,i=e.length;for(t=0;i>t;t++)e.push(n.pluralize(e[t]))},a=function(e){var n,t=e.length,r=[],o=[];for(n=0;t>n;n++)n%2===0?r.push(e[n]):o.push(e[n]);i.abbrs=r,i.abbrs_rplt=o},l=function(e){var n,t,r={};for(e=e.split(" "),n=0,t=e.length;t>n;n++)r[e[n]]="JJ";i.nationalities=r},u=function(e){e=e.split("	");var n,t=e.length,r=[];for(n=0;t>n;n++)r.push(e[n].split(" "));i.synonyms=r};r(i.rules),o(i.suffixes),a(i.abbrs),s(i.dirty),u(i.synonyms),l(i.nationalities),e.lexicon=t("")}(),!function(){var n={'"':/(&quot;|\u201C|\u201D)/gi,"&":/&amp;/gi,"'":/(&#x27;|\u2018|\u2019)/gi,"<":/&lt;/gi,">":/&gt;/gi,"`":/&#x60/gi,shit:/(s\&\^t|sh\*t)/gi,fuck:/(f\*ck)/gi,"just kidding":"j/k",without:/w\/[to]/g,"with":"w/"," out of ":/\soutta\s/gi};e.decode=function(e){var t;for(t in n)n.hasOwnProperty(t)&&(e=e.replace(n[t],t));return e}}(),!function(){var e=[["VBZ","VBP","VBD","VBG"],["MD","VB"],["NNP","NNPS","NN","NNS"],["WP","WRB"],["UH"]],t="unknown",i=[["NNP","NNP","compound"],["PRP","VBZ","subj"],["PRP","VBP","subj"],["PRP","VBD","subj"],["DT","VBZ","subj"],["DT","VBP","subj"],["DT","VBD","subj"],["WRB","VBP","attr"],["WRB","VBZ","attr"],["WRB","VBD","attr"],["VBG","VBP"],["TO","VB"],["TO","NN"],["TO","NNS"],["DT","NN","det"],["DT","NNP","det"],["PRP$","NN","poss"],["RB","JJ","advmod"],["JJ","NN","amod"],["JJ","NNS","amod"],["JJ","NNP","amod"],["VBG","JJ"],["NN","VBZ","subj"],["NN","VBP","subj"],["NN","VBD","subj"],["NN","VB","subj"],["NNP","VBZ","subj"],["NNP","VBP","subj"],["NNP","VBD","subj"],["NNP","VB","subj"]],r=[["PRP","VBZ","obj"],["PRP","VBP","obj"],["PRP","VBD","obj"],["NN","IN","obj"],["IN","VBZ"],["IN","VBP"],["IN","VBD"],["IN","VBG"],["JJ","VBD","acomp"],["JJ","VBP","acomp"],["JJ","VBZ","acomp"],["IN","VB"],["CC","JJ"],["NNP","VB","obj"],["NN","VB","obj"],["VB","VB","xcomp"]],o=20;n(l,{expand:function(e,n){var s,a,l,u,f,c,p=e.length,d=i.length,g=0,m=!1;for(s=0;p-n>s;s++,g=0)if(c=e.tokens[s],"number"!=typeof c.deps.master&&(u=e.tokens[s+n],c.deps.master!==u.deps.master&&"number"==typeof u.deps.master))for(;(f=e.tokens[u.deps.master])&&u!==f&&u.deps.master&&c.deps.master!==u.deps.master&&(g++,!(g>o));){for(l=c.pos,a=0;d>a;a++)if(l===i[a][0]&&f.pos===i[a][1]){c.deps.master=u.deps.master,c.deps.type=i[a][2]||t,m=!0;break}if(m)break;u=f}for(s=p-1,d=r.length;s>n;s--)if(c=e.tokens[s],"number"!=typeof c.deps.master&&(u=e.tokens[s-n],"number"==typeof u.deps.master&&c.deps.master!==u.deps.master))for(f=e.tokens[u.deps.master],l=c.pos,a=0;d>a;a++)if(l===r[a][0]&&f.pos===r[a][1]){c.deps.master=u.deps.master,c.deps.type=r[a][2]||t,m=!0;break}return m},parse:function(n){var s,a,l,u,f,c=n.length,p=i.length,d=0,g=!0,m=null,h=null,v=0,y=0;if(1===c)return f=n.tokens[0],f.deps.governor=!0,void(n.governor=0);for(s=0;c-1>s;s++)if(f=n.tokens[s],u=n.tags[s+1],l=f.pos,e[v].indexOf(l)>-1)null===m?(m=s,h=s):f.deps.master=m;else for(a=0;p>a;a++)if(l===i[a][0]&&u===i[a][1]){f.deps.master=s+1,f.deps.type=i[a][2]||t;break}for(s=c-1;s>=0;s--)f=n.tokens[s],u=n.tokens[s+1],s!==m&&("compound"===f.deps.type||"det"===f.deps.type?(null!==m&&s>m&&"number"!=typeof u.deps.master&&(u.deps.master=m,u.deps.type="obj"),y+=1,y>1&&(f.deps.master=u.deps.master)):y=0);for(s=c-1,p=r.length;s>0;s--)if(f=n.tokens[s],"number"!=typeof f.deps.master)for(u=n.tags[s-1],l=f.pos,a=0;p>a;a++)if(l===r[a][0]&&u===r[a][1]){f.deps.master=s-1,f.deps.type=r[a][2]||t;break}for(;g&&o>d;){for(g=!1,s=1;5>s;s+=1)g=this.expand(n,s)||g;d+=1}for(p=e.length-1;null===m&&p>v;)for(v++,s=0;c>s;s++)if(e[v].indexOf(n.tags[s])>-1){m=s;break}for(null!==m&&(n.governor=m,n.tokens[m].deps.governor=!0),this.reconnect(n),s=0;c>s;s++)f=n.tokens[s],s!==m&&((null===f.deps.master||f.deps.master===s)&&(f.deps.master=m),null!==f.deps.master&&n.tokens[f.deps.master].deps.dependencies.push(s),"subj"===f.deps.type?n.deps.subjects.push(s):"obj"===f.deps.type&&n.deps.objects.push(s))},reconnect:function(e){var n,i,o,s,a,l,u,f=e.length,c=r.length;for(n=f-1;n>=0;n--)if(u=e.tokens[n],u.deps.governor!==!0&&"number"!=typeof u.deps.master){for(o=n,l=n;l===n&&(o--,-1!==o);)l=e.tokens[o].deps.master;if(-1!==o)for(a=e.tags[o],s=u.pos,i=0;c>i;i++)if(s===r[i][0]&&a===r[i][1]){u.deps.master=o,u.deps.type=r[i][2]||t;break}}}})}(),!function(){var e={t:[],s:[]},n={t:[],s:[],p:[]},t=[];a.init=function(e){t.push(e)},a.context=function(){var e,n={},i=t.length;for(e=0;i>e;e+=1)t[e](n);return n},a.before=function(n,t){e.hasOwnProperty(n)?e[n].push(t):console.warn("No detector with type "+n)},a.add=function(e,n){return console.warn("compendium.detectors.add is a deprecated function - please use compendium.detectors.after"),a.after(e,n)},a.after=function(e,t){n.hasOwnProperty(e)?n[e].push(t):console.warn("No detector with type "+e)},a.apply=function(t,i){var r,o,s=Array.prototype.slice.call(arguments).slice(2),a=i?e:n;if(a.hasOwnProperty(t))for(r=0,o=a[t].length;o>r;r++)a[t][r].apply(null,s)}}(),!function(){var e=function(e,n){if(n>=e.length)return!1;var t=e.tags[n+1];return"NNP"===t||"NNPS"==t},n=function(e,n){return"&"===e||"TO"===e||"CC"===e&&"or"!==n};a.before("s",function(t,i,r){var s,a,l,u,f,c,p=t.length,d=t.stats;if(!(d.p_upper>75||d.p_cap>85))for(s=0;p>s;s++)a=t.tags[s],l=t.tokens[s],u=l.norm,l.attr.entity>-1?c=null:"NN"===a?c=null:"NNP"===a||"NNPS"===a||c&&n(a,u)&&e(t,s)?c?(c.raw+=" "+l.raw,c.norm+=" "+l.norm,c.toIndex=s,l.attr.entity=f):(c=o.entity(l,s),f=l.attr.entity=t.entities.push(c)-1):c=null})}(),!function(){var e=Object.keys(i.neg).concat(Object.keys(i.refusal)),n=Object.keys(i.neg_neg),t=[["but","to"]];a.after("s",function(i,r,o){var s,a,l,u,f,c=i.length,p=t.length,d=!1,g=0,m=0;for(s=0;c>s;s++){if(f=i.tokens[s],u=i.tokens[s+1],f.profile.breakpoint||f.attr.is_punc)g=0,d=!1;else if(e.indexOf(f.norm)>-1)d?d=!1:(l=i.tokens[s-1],"RB"===f.pos&&l&&(l.attr.is_verb||"MD"===l.pos)&&(l.profile.negated=!0),m++,d=!0);else if(d&&n.indexOf(f.norm)>-1&&0===g)i.tokens[s-1].profile.negated=!1,m--,d=!1;else if(d){for(a=0;p>a&&c-1>s;a+=1)if(f.norm===t[a][0]&&u.norm===t[a][1]){d=!1;break}d&&(m++,g++)}f.profile.negated=d}i.profile.negated=m>0})}(),!function(){var e=["WP","WP$","WRB"];a.after("s",function(n,t){var i,r,o,s,a=n.length,l=n.stats,u=n.governor,f=n.profile.types,c=n.tokens[0],p=n.tokens[a-1];if(a>2&&(l.p_foreign>=10&&l.confidence<.5||l.confidence<=.2)&&f.push(d),l.p_cap>75&&l.p_upper<50&&a>10&&f.push(h),"!"===p.norm)f.push(m);else if("?"===p.norm||e.indexOf(c.pos)>-1&&0===l.breakpoints)f.push(g);else if(u>-1)if(i=n.tags[u],e.indexOf(i)>-1)f.push(g);else if("."!==p.pos&&0===i.indexOf("VB"))for(r=n.tokens[u].deps.dependencies,o=0,s=r.length;s>o;o++)e.indexOf(n.tags[r[o]])>-1&&(n.tags[r[o]-1]||"").indexOf("VB")<0&&f.push(g);u>-1&&-1===f.indexOf(g)&&"VB"===n.tags[u]&&f.push(v)})}(),!function(){var e=i.dirty,n=i.polite,t=i.emphasis,r=["wo","'ll","will"],o=function(e,n){var t,i,r=n.deps.dependencies,s=r.length,a=0;if(0!==s){for(t=0;s>t;t+=1)i=e.tokens[r[t]],o(e,i),a+=i.profile.sentiment;n.profile.sentiment+=parseInt(a/s*100)/100}};a.after("s",function(i,s,a){var l,u,f,c,d,m,h,v=i.length,y=0,x=1,b=0,$=0,w=0,N=0,k=0,O=0,B=0,P=i.governor,V=i.profile;for(l=0;v>l;l++)u=i.tokens[l].profile,c=i.tokens[l].pos,d=i.tokens[l].norm,h=e.indexOf(d)>-1,m=n.indexOf(d)>-1,h?k++:m&&N++,u.negated&&"."!==c&&"EM"!==c&&(u.sentiment=h?u.sentiment/2:-u.sentiment/2);for(P>-1&&(f=i.tokens[P],o(i,f),c=f.pos,f.attr.is_verb?V.main_tense="VBD"===c?"past":"present":"MD"===c&&r.indexOf(f.norm)>-1&&(V.main_tense="future")),i.stats.p_upper>70&&(x=1.2),l=0;v>l;l++)u=i.tokens[l].profile,c=i.tokens[l].pos,d=i.tokens[l].norm,x*=u.emphasis,("JJS"===c||"RB"===c&&t.indexOf(d)>-1)&&(w+=u.negated?2:5),b=u.sentiment*(1+w/10),y+=b,b>B?B=b:O>b&&(O=b),u.emphasis*=1+w/10,w>0&&-1===["DT","POS","IN"].indexOf(c)&&w--;5>v?v*=2:v>10&&(v/=2),$=(B+-O)/v,y*=x,y/=v,V.types.indexOf(g)>-1&&(y/=2),V.sentiment=y,V.emphasis=x,V.amplitude=$,V.dirtiness=k/v,V.politeness=N/v,Math.abs($)>.5&&Math.abs(y)<.5&&Math.abs($)>Math.abs(y)?V.label="mixed":y<=p.profile.negative_threshold?V.label="negative":y>=p.profile.positive_threshold?V.label="positive":$>=p.profile.amplitude_threshold&&(V.label="mixed")})}(),!function(){var e=Object.keys(i.approval),n=Object.keys(i.refusal);a.after("s",function(t,r){var o,s,a,l=t.tokens[0],u=t.profile,f=t.governor>-1?t.tokens[t.governor]:null,c=f?f.deps.dependencies:null,p=t.stats.words,d=u.types;if(!(d.indexOf(g)>-1)){if(n.indexOf(l.norm)>-1)d.push(x);else if(1===p&&"JJ"===l.pos&&u.sentiment<0)d.push(x);else if(f)if(n.indexOf(f.norm)>-1)d.push(x);else if(d.indexOf(v)>-1&&i.approval_verbs.indexOf(f.norm)>-1&&f.profile.negated)d.push(x);else if("UH"===f.pos)for(s=0,a=c.length;a>s;s+=1)o=t.tokens[c[s]],("UH"===o.pos||"RB"===o.pos)&&n.indexOf(o.norm)>-1&&d.push(x);if(!(d.indexOf(x)>-1))if(e.indexOf(l.norm)>-1)d.push(y);else if(1===p&&"JJ"===l.pos&&u.sentiment>0)d.push(y);else if(f&&3>=p)if(e.indexOf(f.norm)>-1)d.push(y);else if(d.indexOf(v)>-1&&i.approval_verbs.indexOf(f.norm)>-1)d.push(y);else if("UH"===f.pos)for(s=0;a>s;s+=1)o=t.tokens[c[s]],"UH"===o.pos&&e.indexOf(o.norm)>-1&&d.push(y)}})}(),!function(){var e=i.floatChar,n=i.thousandChar,t=/[0-9]/,r=/^[0-9]+$/,o=new RegExp("^[0-9]*\\"+e+"[0-9]+$"),s=new RegExp("^-?[0-9]+([\\"+n+"][0-9]+){1,}$"),l=new RegExp("^-?[0-9]+([\\"+n+"][0-9]+){1,}(\\"+e+"[0-9]+)$"),u=new RegExp("\\"+n,"g"),f=i.numbers,c=i.multipliers,p=function(e){var n=e.norm;if(n.match(t)){if(n.match(r))return parseInt(n,10);if(n.match(o))return parseFloat(n);if(n.match(l))return parseFloat(n.replace(u,""));if(n.match(s))return parseInt(n.replace(u,""),10)}return n=e.attr.singular,f.hasOwnProperty(n)?f[n]:null},d=function(e,n){var t,i,r,o=n[2],s=n[1],a=0;if(1===n[1])return t=o[0],p(t);for(i=0;s>i;i+=1){if(t=o[i],r=p(t),null===r)return null;c.indexOf(t.attr.singular)>-1?a*=r:a+=r}return a},g=function(e,n){var t,i=e[2],r=i.length;for(t=0;r>t;t+=1)i[t].attr.value=n};a.before("s",function(e,n,t,i){for(var r,o,s=i.numericSections,a=s.length,r=0;a>r;r+=1)o=d(e,s[r]),null!==o&&g(s[r],o)})}(),!function(){var n=e.lexicon;a.before("t",function(t,r,o){var s,a,l,f,c=t.raw,p=t.norm,d=t.stem,g=t.pos,m=0,h=1;a=c.toLowerCase(),l=a.length,l>1&&c.indexOf(".")===l-1&&(f=i.abbrs.indexOf(a.slice(0,l-1)))>-1?(t.attr.abbr=!0,p=i.abbrs_rplt[f]):c.match(/^([a-z]{1}\.)+/gi)?t.attr.acronym=!0:p=e.synonym(p),"."===g?(f=c[0],"!"===f||"?"===f?(h=c.length>1?2:"?"===f?1:1.5,c.length>1&&(p=c[0])):"."===f&&"."===c[1]&&(h=1.2,p="...")):"EM"===g?h=1.2:"UH"===g?h=1.1:0===g.indexOf("VB")?t.attr.infinitive=u.infinitive(p):"NNS"===g||"CD"===g?(s=u.singularize(p),t.attr.singular=s):"NN"===g&&(t.attr.singular=p),"NNP"!==g&&"NNPS"!==g&&"IN"!==g&&(n.hasOwnProperty(p)?(f=n[p],f.condition&&t.pos!==f.condition||(m=f.sentiment)):"NNS"===g&&n.hasOwnProperty(s)?(f=n[s],f.condition&&g!==f.condition||(m=f.sentiment/2)):n.hasOwnProperty(d)?(f=n[d],f.condition&&g!==f.condition||(m=f.sentiment/2)):i.dirty.indexOf(p)>-1?m=-2:i.polite.indexOf(p)>-1&&(m=1)),t.profile.sentiment=m,t.profile.emphasis=h,t.norm=p})}(),!function(){var e=[",",":",";","("],n=["-","—","/"];a.before("t",function(t,i,r){var o=t.raw,s=t.pos;(e.indexOf(s)>-1||n.indexOf(o)>-1)&&(t.profile.breakpoint=!0,r.stats.breakpoints++)})}(),!function(){a.before("t",function(n,t,r){var s,a,l,u,f,c=e.lexer.regexps,p=" "+n.norm+" ";for(s in c)c.hasOwnProperty(s)&&p.match(c[s])&&(a=o.entity(n,t,s),n.attr.entity=r.entities.push(a)-1,("username"===a.type||"composite"===s)&&(n.pos="NNP",r.tags[t]="NNP"),r.stats.confidence+=1/r.length,"pl"===s&&(a.type="political_affiliation",l=n.norm.split("-"),f=l[1].length,a.meta.party="d"===l[0]?"democrat":"republican","."===l[1][f-1]&&(u=i.abbrs.indexOf(l[1].slice(0,f-1)),u>-1&&(l[1]=i.abbrs_rplt[u])),n.norm=a.meta.party+", "+l[1]))})}(),!function(){var e=i.numbers;a.init(function(e){e.numericSections=[],e.inNumericSection=!1}),a.before("t",function(n,t,i,r){var o=n.pos,s=r.numericSections;"CD"===o||"NNS"===o&&e.hasOwnProperty(n.attr.singular)?r.inNumericSection?(s[s.length-1][1]+=1,s[s.length-1][2].push(n)):(r.numericSections.push([t,1,[n]]),r.inNumericSection=!0):r.inNumericSection&&(r.inNumericSection=!1)})}(),!function(){var t=[",",".",":",'"',"(",")"];n(o,{entity:function(e,n,t){return{raw:e.raw,norm:e.norm,fromIndex:n,toIndex:n,type:t||null,meta:{}}},sentence:function(e,n){return{language:n,time:0,length:0,governor:-1,raw:e,stats:{words:0,confidence:0,p_foreign:0,p_upper:0,p_cap:0,avg_length:0,breakpoints:0},profile:{label:"neutral",sentiment:0,emphasis:1,amplitude:0,politeness:0,dirtiness:0,types:[],main_tense:"present"},has_negation:!1,entities:[],deps:{subjects:[],objects:[]},tokens:[],tags:[]}},token:function(n,i,r){var o=null,s=0===r.indexOf("VB");return i=i.toLowerCase(),o="VBD"===r||"VBN"===r?"past":"VBG"===r?"gerund":"present",{raw:n,norm:i,stem:e.stemmer(i),pos:r||"",profile:{sentiment:0,emphasis:1,negated:!1,breakpoint:!1},attr:{value:null,acronym:!1,abbr:!1,is_verb:s,tense:o,infinitive:null,is_noun:0===r.indexOf("NN"),plural:null,singular:null,entity:-1,is_punc:t.indexOf(r)>-1},deps:{master:null,governor:!1,type:"unknown",dependencies:[]}}},tag:function(e,n,t){return{tag:e||"NN",norm:t,confidence:n||0}}})}(),!function(){var o,s,a=i.abbrs,l=/(\S.+?[….\?!\n])(?=\s+|$|")/g,u=new RegExp("(^| |\\(|\\[|{)("+a.join("|")+")[.!?] ?$","i"),f=" !?()[]{}\"'`%•.…:;,$€£¥\\/+=*_–",c=e.punycode.ucs2,p=i.floatChar,d=i.thousandChar,g=/^-?[0-9]+$/,m=/^[0-9]+$/,h=new RegExp("^-?[0-9]+[.,]$"),v={complexFloat:"\\s(-?[0-9]+([\\"+d+"][0-9]+){1,}(\\"+p+"[0-9]+))"},y={},x=i.emots.length,b=function(e,n,t){var i,r,o,s;for(i in t)if(t.hasOwnProperty(i))for(o=new RegExp(t[i],"gi");null!==(s=o.exec(e));)r=s[0].length,n[s.index]={content:s[1],type:i,length:r-(r-s[1].length)}};for(o=0;2*x>o;o+=2)s=i.emots[o/2],y["em_"+o]="\\s("+t(s)+"+)[^a-z]",y["em_"+(o+1)]="[a-z0-9]("+t(s)+"+)[^a-z]";n(e.lexer,{regexps:{email:"\\s([^\\s]+@[^\\s]+.[a-z]+)",composite:"\\s([a-z]&[a-z])",username:"\\s(@[a-z0-9_]+)",html_char:"\\s(&[a-z0-9]{2,4};)",hashtag:"\\s(#[a-z0-9_]+)",url:"\\s((https?|ftp)://[-a-z0-9+&@#/%?=~_|!:,.;]*[-a-z0-9+&@#/%=~_|])",ip:"\\s(([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5]))\\s",pl:"\\s([rd]-([a-z]+\\.{0,1})+)"},sentences:function(e){var n,t,i=e.split(l),r=i.length,o=[];for(n=0;r>n;n++)t=i[n].trim(),t.match(u)||t.match(/[ |\.][A-Za-z]\.?$/)?r-1>n&&!i[n+1].match(/^[A-Za-z]\s/)?i[n+1]=t+" "+i[n+1].trim():o.push(t):t&&o.push(t);return o},splitTokens:function(e){var n,t,i,o=e.length,s=[],a=" "+e+" ",l={},u=function(e){if(e){i=c.decode(e);var n,t=i.length,r="";for(n=0;t>n;n++)i[n]>=128511?(r&&s.push(r),s.push(c.encode([i[n]])),r=""):r+=c.encode([i[n]]);r&&s.push(r)}},p=function(e,n){u(e),u(n),t=""};for(b(a,l,r.regexps),b(a,l,y),b(a,l,v),t="",n=0;o>n;n++)l.hasOwnProperty(n)?(p(t,l[n].content),n+=l[n].length-1):f.indexOf(e[n])>-1?p(t,e[n]):t+=e[n];return p(t),s},tokens:function(e,n){var t,i,o=r.splitTokens(e),s=o.length,l=!1,u=[],f="",c="",p=0;for(t=0;s>t;t++)if(i=o[t].trim())if(f=p>0?u[p-1]:"",c=s-1>t?o[t+1]:"",("."===i||","===i)&&f.match(g)&&c.match(m)||i.match(g)&&f.match(h))l=!1,u[p-1]+=i;else if("."===i&&s-1>t&&p>0&&a.indexOf(f.toLowerCase())>-1)l=!1,u[p-1]+=i;else if(l&&s-1>t&&1===i.length)u[p-1]+=i;else{if(i.match(/^\W+$/gi)){if(l=!1,i===f[f.length-1]){u[p-1]+=i;continue}}else i.match(/^[A-Za-z]{1}$/g)&&s-1>t&&"."===c&&(l=!0);i&&(u.push(i),p++)}else l=!1;return r.postprocess(u)},lex:function(e,n,t){var i,o=r.sentences(e),s=o.length;if(t)return o;for(i=0;s>i;i++)o[i]=r.tokens(o[i],n);return o}}),e.lex=r.lex}(),!function(){var t=["'","’","ʼ"];n(e.lexer,{postprocess:function(e){var n,i,r=e.length,o=[];for(n=0;r>n;n+=1)i=e[n],t.indexOf(i)>-1?o[o.length-1]+="'":o.push(i);return o}})}(),!function(){var t=e.inflector.isPlural,r=0,s=1,a=2,l=3,u=4,c=41,p=5,d=51,g=6,m=8,h=81,v=9,y=11,x=12,b=121,$=13,w=14,N=15,k=16,O=17,B=171,P=18,V=19,j=21,_=e.lexicon,C=i.emots,z=i.rules,R=z.length,D=i.suffixes,J=D.length,E=new RegExp("^-?[0-9]+([\\"+i.thousandChar+"][0-9]+){1,}(\\"+i.floatChar+"[0-9]+)$"),S=function(n){var t=n.replace(/(.)\1{2,}/g,"$1$1");return e.lexicon.hasOwnProperty(t)?t:(t=n.replace(/(.)\1{1,}/g,"$1"),e.lexicon.hasOwnProperty(t)?t:null)},Z=function(e){return e.match(/^[A-Z][a-z\.]+$/g)||e.match(/^[A-Z]+[0-9]+$/g)||e.match(/^[A-Z][a-z]+[A-Z][a-z]+$/g)};n(f,{applyRule:function(e,n,t,i,o,f){if(e.from!==t)return 0;var _,C,z=e.type;{if(z!==r){if(n=n.toLowerCase(),z===a){if(i>0&&f[i-1]===e.c1)return void(f[i]=e.to)}else if(z===d){if(_=o[i-1]||"",f[i-1]===e.c2&&_.toLowerCase()===e.c1)return void(f[i]=e.to)}else if(z===l){if(f[i+1]===e.c1)return void(f[i]=e.to)}else if(z===u){if(f[i+2]===e.c1)return void(f[i]=e.to)}else if(z===c){if(f[i-2]===e.c1)return void(f[i]=e.to)}else if(z===s){if(f[i-1]===e.c1||f[i-2]===e.c1)return void(f[i]=e.to)}else if(z===p){if(_=o[i-1]||"",_.toLowerCase()===e.c1)return void(f[i]=e.to)}else if(z===g){if(n===e.c1)return void(f[i]=e.to)}else if(z===m){if(n===e.c2&&f[i-1]===e.c1)return void(f[i]=e.to)}else if(z===h){if(_=o[i-1]||"",n===e.c2&&_.toLowerCase()===e.c1)return void(f[i]=e.to)}else if(z===v){if(f[i+1]===e.c1||f[i+2]===e.c1||f[i+3]===e.c1)return void(f[i]=e.to)}else if(z===y){if(_=o[i+2]||"",_.toLowerCase()===e.c1)return void(f[i]=e.to)}else if(z===b){if(_=o[i+1]||"",
n===e.c1&&_.toLowerCase()===e.c2)return void(f[i]=e.to)}else if(z===x){if(n===e.c1&&f[i+1]===e.c2)return void(f[i]=e.to)}else if(z===$){if(f[i-1]===e.c1||f[i-2]===e.c1||f[i-3]===e.c1)return void(f[i]=e.to)}else if(z===w){if(f[i-1]===e.c1&&f[i+1]===e.c2)return void(f[i]=e.to)}else if(z===N){if(_=o[i+1]||"",_.toLowerCase()===e.c1)return void(f[i]=e.to)}else if(z===k){if(f[i+1]===e.c1||f[i+2]===e.c1)return void(f[i]=e.to)}else if(z===O){if(f[i-2]===e.c1&&f[i-1]===e.c2)return void(f[i]=e.to)}else if(z===B){if(f[i+1]===e.c1&&f[i+2]===e.c2)return void(f[i]=e.to)}else if(z===P){if(_=o[i+1]||"",C=o[i+2]||"",_.toLowerCase()===e.c1||C.toLowerCase()===e.c1)return void(f[i]=e.to)}else if(z===V){if(C=o[i-2]||"",C.toLowerCase()===e.c1)return void(f[i]=e.to)}else if(z===j){if(_=o[i-1]||"",C=o[i-2]||"",_.toLowerCase()===e.c1||C.toLowerCase()===e.c1)return void(f[i]=e.to)}else if(z===s&&(_=f[i-1]||"",C=f[i-2]||"",_===e.c1||C===e.c1))return void(f[i]=e.to);return 0}if(0===i&&n===e.c1)return void(f[i]=e.to)}},applyRules:function(e,n,t,i){var r;for(r=0;R>r;r++)f.applyRule(z[r],e,i[n],n,t,i)},apply:function(e,n){var t,i=e.length;for(t=0;i>t;t++)this.applyRules(e[t],t,e,n);return n},testSuffixes:function(e){var n;for(n=0;J>n;n++)if(e.match(D[n].regexp))return D[n].pos;return null},getTag:function(n){var t,i,r,s,a,l=o.tag();if(l.norm=n,n.length>1)for(t=null,i=0,r=C.length;r>i;i++)if(0===n.indexOf(C[i]))return l.tag="EM",l.confidence=1,l;return t=e.lexicon[n],t&&"-"!==t?(l.tag=t,l.confidence=1,l):(s=n.toLowerCase(),"string"==typeof n&&n.match(/[A-Z]/g)&&(t=e.lexicon[s],t&&"-"!==t)?(l.tag=t,l.confidence=.8,l):s.match(/(\w)\1+/g)&&(a=S(s))?(l.norm=a,t=e.lexicon[a],l.tag=t,l.confidence=.7,l):(a=e.synonym(s),a!==s&&(t=e.lexicon[a])?(l.tag=t,l.confidence=.5,l):(t=f.testSuffixes(n),t?(l.tag=t,l.confidence=.25,l):n.indexOf("-")>-1?(l.tag=n.match(/^[A-Z]/g)?"NNP":"JJ",l.confidence/=2,l):l)))},tag:function(e){var n,r,o,s,a,l,u,c=[],p=[],d=e.length,g=!1,m=0,h=function(e,n){e="object"==typeof e?e.pos:e,c.push("-"===e?"NN":e),m+=n};for(o=0;d>o;o++)n=e[o],p[o]=n,n.match(/^[%\+\-\/@]$/g)?h("SYM",1):n.match(/^(\?|\!|\.){1,}$/g)?h(".",1):n.match(/^-?[0-9]+([\.,][0-9]+)?$/g)||n.match(E)||n.match(/^([0-9]{2}|[0-9]{4})s$/g)||n.match(/^[0-9]{2,4}-[0-9]{2,4}$/g)?h("CD",1):(l=f.getTag(e[o]),h(l.tag,l.confidence),p[o]=l.norm);for(o=0;d>o;o++)if(r=c[o],"SYM"!==r&&"."!==r){if(n=e[o],a=n.toLowerCase(),s=n.length,u=0===o?"":c[o-1],0===o){if("that"===a){c[o]="DT",m++;continue}if("NN"===r&&i.verbs.indexOf(a)>-1){c[o]="VB",m++;continue}}!(s>3&&n.match(/[^e]ed$/gi)&&0===r.indexOf("N"))||0!==o&&n.match(/^[A-Z][a-z]+/g)?!(s>4&&n.lastIndexOf("ing")===s-3&&-1===i.ing_excpt.indexOf(a))||0!==r.indexOf("N")&&"MD"!==r||0!==o&&n.match(/^[A-Z][a-z]+/g)||"NN"===u||"JJ"===u||"DT"===u||"VBG"===u?s>4&&a.lastIndexOf("in")===s-2&&"NN"===r&&(0===o||!n.match(/^[A-Z][a-z]+/g))&&"NN"!==u&&"JJ"!==u&&"DT"!==u&&"VBG"!==u&&(l=_[a+"g"],l&&"VBG"===l.pos)?c[o]="VBG":(i.verbs.indexOf(a)>-1&&"TO"===u&&(r="VB"),"DT"!==u&&n.match(/^[IVXLCDM]+$/g)&&"I"!==n&&(r="CD"),"NN"===r||"VB"===r||"JJ"===r&&i.nationalities.hasOwnProperty(a)===!1?n.match(/^[A-Z]+$/g)||n.match(/^([a-z]{1}\.)+/gi)?(r="NNP",g=!0):o>0&&Z(n)?(r="NNP",g=!0,l=e[o-1],1!==o||"NN"!==u&&"NNS"!==u&&"JJ"!==u&&"VB"!==u||!Z(l)||(c[o-1]="NNP")):g=!1:g&&("CD"===r&&n.match(/^[IVXLCDM]+$/g)||"I"===n)?r="NNP":g=!1,"NN"===r&&t(n)&&(r="NNS"),c[o]=r):c[o]="VBG":c[o]="VBN"}for(f.apply(e,c),o=0;d>o;o++)n=e[o],r=c[o],u=c[o-1]||"",n.match(/ed$/g)&&("JJ"!==r||"VBZ"!==u&&"VBP"!==u||"TO"!==c[o+1]||(c[o]="VBN"));return{tags:c,norms:p,confidence:m/d}}}),e.tag=f.tag}(),!function(){var n=["#","SYM","CR","EM"];e.stat=function(e){var t,i,r,o,s=e.length,a=s,l=e.stats,u=0,f=0,c=0,p=0,d=0;for(t=0;s>t;t++)i=e.tokens[t],r=i.raw,u+=r.length,o=e.tags[t],i.attr.is_punc||n.indexOf(o)>-1?a--:(p+=1,r.match(/^[A-Z][a-zA-Z]+$/g)&&d++,r.match(/[A-Z]+/)&&!r.match(/[a-z]/)&&c++,"FW"===o&&f++);0===a&&(a=1),l.words=p,l.p_foreign=100*f/a,l.p_upper=100*c/a,l.p_cap=100*d/a,l.avg_length=u/a}}(),!function(){var n=i.synonyms,t=n.length;e.synonym=function(e){var i;for(i=0;t>i;i++)if(n[i].indexOf(e)>0)return n[i][0];return e}}()}("undefined"==typeof exports?this.compendium={}:exports);