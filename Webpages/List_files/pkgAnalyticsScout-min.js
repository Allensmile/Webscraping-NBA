(function(e,c,a,f){if(!a[e]){a[e]={};}if(!a[e][c]){a[e][c]={};}if(!a[e].namespaceTools){a[e].namespaceTools=a._nbaNamespaceTools=(function b(g,l,k){var i={},h="NamespaceTools";i.safeCreate=function j(p){if(p){if(p instanceof Array){var o=p;}else{if(p.indexOf(".")!=-1){var o=p.split(".");}}if(o){var m=o.length,d=g;for(var n=0;n<m;n++){if(!d[o[n]]){d=d[o[n]]={};}else{d=d[o[n]];}}d=g;}else{if(!g[p]){g[p]={};}}}};return i;}(a,f));}}("_nba","settings",window,document));(function(g,f,a,c,e,b,i){e.safeCreate([g,f,a]);if(!b[g][f][a][c]){b[g][f][a][c]={name:"pkgAnalyticsScout",nonsecure:"z.cdn.",source:"http://z.cdn.turner.com/nba/tmpl_asset/static/nba-cms3-base/466/js/pkgAnalytics-min.js",secure:"s.cdn."};var h=b[g][f][a][c];i.write(unescape('%3Cscript src="'+(h.source.replace("http:","").replace(h.nonsecure,(i.location.protocol=="http:"?h.nonsecure:h.secure)))+'" %3E%3C/script%3E'));}}("_nba","settings","scout","analytics",window._nbaNamespaceTools,window,document));