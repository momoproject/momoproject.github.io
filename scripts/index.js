
var game = [

]

// HTML Updates //

var rank = c_pk.slice(0, 12); c_pk.sort(function(a,b) { return a[0]-b[0] });

document.getElementById('featured').innerHTML =
	"<div class=\"card norm\">" +
  	"<img src=\"" 										 + rank[0][2] + "\" width=\"300px\" height=\"225px\">" +
  	"<h2>" 														 + rank[0][1] + "</h2>" +
  	"<p>"  														 + rank[0][4] + "</p>"  +
  	"<hr>" +
  	"<a class=\"bt-n act v2\" href=\"" + rank[0][3] + "\">READ MORE</a> " +
		"<div class=\"fix\">" +
			"<svg class=\"bt-i lite\"><use xlink:href=\"assets/icons.svg#heart\"></use></svg>" +
  		"<b>" 													 + rank[0][0] + "</b>" +
		"</div>" +
	"</div>"+

	"<div class=\"card norm\">" +
  	"<img src=\"" 										 + rank[1][2] + "\" width=\"300px\" height=\"225px\">" +
  	"<h2>" 														 + rank[1][1] + "</h2>" +
  	"<p>"  														 + rank[1][4] + "</p>"  +
  	"<hr>" +
  	"<a class=\"bt-n act v2\" href=\"" + rank[1][3] + "\">READ MORE</a> " +
		"<div class=\"fix\">" +
			"<svg class=\"bt-i lite\"><use xlink:href=\"assets/icons.svg#heart\"></use></svg>" +
  		"<b>" 													 + rank[1][0] + "</b>" +
		"</div>" +
	"</div>" +

	"<div class=\"card norm\">" +
  	"<img src=\"" 										 + rank[2][2] + "\" width=\"300px\" height=\"225px\">" +
  	"<h2>" 														 + rank[2][1] + "</h2>" +
  	"<p>"  														 + rank[2][4] + "</p>"  +
  	"<hr>" +
  	"<a class=\"bt-n act v2\" href=\"" + rank[2][3] + "\">READ MORE</a> " +
		"<div class=\"fix\">" +
			"<svg class=\"bt-i lite\"><use xlink:href=\"assets/icons.svg#heart\"></use></svg>" +
  		"<b>" 													 + rank[2][0] + "</b>" +
		"</div>" +
	"</div>" +

	"<div class=\"card norm\">" +
  	"<img src=\"" 										 + rank[3][2] + "\" width=\"300px\" height=\"225px\">" +
  	"<h2>" 														 + rank[3][1] + "</h2>" +
  	"<p>"  														 + rank[3][4] + "</p>"  +
  	"<hr>" +
  	"<a class=\"bt-n act v2\" href=\"" + rank[3][3] + "\">READ MORE</a> " +
		"<div class=\"fix\">" +
			"<svg class=\"bt-i lite\"><use xlink:href=\"assets/icons.svg#heart\"></use></svg>" +
  		"<b>" 													 + rank[3][0] + "</b>" +
		"</div>" +
	"</div>" +

	"<div class=\"card norm\">" +
  	"<img src=\"" 										 + rank[4][2] + "\" width=\"300px\" height=\"225px\">" +
  	"<h2>" 														 + rank[4][1] + "</h2>" +
  	"<p>"  														 + rank[4][4] + "</p>"  +
  	"<hr>" +
  	"<a class=\"bt-n act v2\" href=\"" + rank[4][3] + "\">READ MORE</a> " +
		"<div class=\"fix\">" +
			"<svg class=\"bt-i lite\"><use xlink:href=\"assets/icons.svg#heart\"></use></svg>" +
  		"<b>" 													 + rank[4][0] + "</b>" +
		"</div>" +
	"</div>"+

	"<div class=\"card norm\">" +
  	"<img src=\"" 										 + rank[5][2] + "\" width=\"300px\" height=\"225px\">" +
  	"<h2>" 														 + rank[5][1] + "</h2>" +
  	"<p>"  														 + rank[5][4] + "</p>"  +
  	"<hr>" +
  	"<a class=\"bt-n act v2\" href=\"" + rank[5][3] + "\">READ MORE</a> " +
		"<div class=\"fix\">" +
			"<svg class=\"bt-i lite\"><use xlink:href=\"assets/icons.svg#heart\"></use></svg>" +
  		"<b>" 													 + rank[5][0] + "</b>" +
		"</div>" +
	"</div>" +

	"<div class=\"card norm dt\">" +
  	"<img src=\"" 										 + rank[6][2] + "\" width=\"300px\" height=\"225px\">" +
  	"<h2>" 														 + rank[6][1] + "</h2>" +
  	"<p>"  														 + rank[6][4] + "</p>"  +
  	"<hr>" +
  	"<a class=\"bt-n act v2\" href=\"" + rank[6][3] + "\">READ MORE</a> " +
		"<div class=\"fix\">" +
			"<svg class=\"bt-i lite\"><use xlink:href=\"assets/icons.svg#heart\"></use></svg>" +
  		"<b>" 													 + rank[6][0] + "</b>" +
		"</div>" +
	"</div>" +

	"<div class=\"card norm dt\">" +
  	"<img src=\"" 										 + rank[7][2] + "\" width=\"300px\" height=\"225px\">" +
  	"<h2>" 														 + rank[7][1] + "</h2>" +
  	"<p>"  														 + rank[7][4] + "</p>"  +
  	"<hr>" +
  	"<a class=\"bt-n act v2\" href=\"" + rank[7][3] + "\">READ MORE</a> " +
		"<div class=\"fix\">" +
			"<svg class=\"bt-i lite\"><use xlink:href=\"assets/icons.svg#heart\"></use></svg>" +
  		"<b>" 													 + rank[7][0] + "</b>" +
		"</div>" +
	"</div>" +

	"<div class=\"card norm dt\">" +
  	"<img src=\"" 										 + rank[8][2] + "\" width=\"300px\" height=\"225px\">" +
  	"<h2>" 														 + rank[8][1] + "</h2>" +
  	"<p>"  														 + rank[8][4] + "</p>"  +
  	"<hr>" +
  	"<a class=\"bt-n act v2\" href=\"" + rank[8][3] + "\">READ MORE</a> " +
		"<div class=\"fix\">" +
			"<svg class=\"bt-i lite\"><use xlink:href=\"assets/icons.svg#heart\"></use></svg>" +
  		"<b>" 													 + rank[8][0] + "</b>" +
		"</div>" +
	"</div>"+

	"<div class=\"card norm dt\">" +
  	"<img src=\"" 										 + rank[9][2] + "\" width=\"300px\" height=\"225px\">" +
  	"<h2>" 														 + rank[9][1] + "</h2>" +
  	"<p>"  														 + rank[9][4] + "</p>"  +
  	"<hr>" +
  	"<a class=\"bt-n act v2\" href=\"" + rank[9][3] + "\">READ MORE</a> " +
		"<div class=\"fix\">" +
			"<svg class=\"bt-i lite\"><use xlink:href=\"assets/icons.svg#heart\"></use></svg>" +
  		"<b>" 													 + rank[9][0] + "</b>" +
		"</div>" +
	"</div>" +

	"<div class=\"card norm dt\">" +
  	"<img src=\"" 										 + rank[10][2] + "\" width=\"300px\" height=\"225px\">" +
  	"<h2>" 														 + rank[10][1] + "</h2>" +
  	"<p>"  														 + rank[10][4] + "</p>"  +
  	"<hr>" +
  	"<a class=\"bt-n act v2\" href=\"" + rank[10][3] + "\">READ MORE</a> " +
		"<div class=\"fix\">" +
			"<svg class=\"bt-i lite\"><use xlink:href=\"assets/icons.svg#heart\"></use></svg>" +
  		"<b>" 													 + rank[10][0] + "</b>" +
		"</div>" +
	"</div>" +

	"<div class=\"card norm dt\">" +
  	"<img src=\"" 										 + rank[11][2] + "\" width=\"300px\" height=\"225px\">" +
  	"<h2>" 														 + rank[11][1] + "</h2>" +
  	"<p>"  														 + rank[11][4] + "</p>"  +
  	"<hr>" +
  	"<a class=\"bt-n act v2\" href=\"" + rank[11][3] + "\">READ MORE</a> " +
		"<div class=\"fix\">" +
			"<svg class=\"bt-i lite\"><use xlink:href=\"assets/icons.svg#heart\"></use></svg>" +
  		"<b>" 													 + rank[11][0] + "</b>" +
		"</div>" +
	"</div>"



// var total = c_pk.reduce(function(a, b) { return a + b; }, 0); var munny = total/1000;

// var exp = updt[0]/updt[1]*100 + '%';



// var year = new Date().getUTCFullYear();

//document.getElementById('cu-y').innerHTML = year;

// SVG 4 Everybody //



!function(a,b){'function'==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):'object'==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute('viewBox')&&c.getAttribute('viewBox');e&&b.setAttribute('viewBox',e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(''),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i),k=h.getAttribute('xlink:href')||h.getAttribute('href');if(!k&&g.attributeName&&(k=h.getAttribute(g.attributeName)),j&&k){if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split('#'),q=l.shift(),r=l.join('#');if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open('GET',q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,j,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f='polyfill'in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName('use'),p=0;f&&e()}function d(a){for(var b=a;'svg'!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});