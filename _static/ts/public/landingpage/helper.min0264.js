var Hireahelper;!function(p){!function(e){var n,i,l,a,s,t;function r(e,o){var a;this.paddingForScroll=10,this.currentPage=e,this.pageCount=o,bowser.msie||(location.hash&&(window.scrollTo(0,0),setTimeout(function(){window.scrollTo(0,0)},1)),a=(a=window.location.hash).replace("#",""),$(window).on("load",function(){var e;!a||0<(e=$("#"+a)).length&&globalSitewide.scrollToAnchor(e[0])})),this.refreshPagingContainer()}e=e.LandingPage||(e.LandingPage={}),a=l=!(i={mapPoints:null,workerId:null,googleMapsApiKey:null}),s=[],t=[],r.init=function(e,o,a){i=$.extend(i,e),r.current=new r(o,a),globalSitewide.initHahTips(),Hahconsole.info("mapPoints",i.mapPoints),null===i.mapPoints||0===i.mapPoints.length?$("#singleLocationInfo,.coverageMapItem").hide():enterView({selector:".js-helperCoverageMap",enter:function(e){Hahconsole.log("enterView - started looking at coverage map"),l||(Hahconsole.log("Loading Helper Service Area Map (dynamically)"),r.current.initMap())},exit:function(e){Hahconsole.log("enterView - stopping looking at coverage map")},progress:function(e,o){Hahconsole.log("enterView coverage map Progress",e,o)},offset:0,once:!0}),$("#lightboxModal").on("show.bs.modal",function(e){var o=$(e.relatedTarget),a=o.data("imgsrc"),t=o.data("imgalt"),r=o.data("imgdesc"),e=o.data("imgdate"),o=$(this);o.find("#lightboxModalImgDescription").text(r),o.find("#lightboxModalImgDate").text(e),o.find(".modal-body img").attr("src",a).attr("alt",t)})},r.prototype.refreshPagingContainer=function(){var e=this;$("a.first","#helper-reviews-container").click(function(){return e.gotoPage(0)}),$("a.prev","#helper-reviews-container").click(function(){return e.gotoPage(e.currentPage-1)}),$("a.next","#helper-reviews-container").click(function(){return e.gotoPage(e.currentPage+1)}),$("a.last","#helper-reviews-container").click(function(){return e.gotoPage(e.pageCount-1)})},r.prototype.gotoPage=function(o){var a=this;if(o<0)return!1;if(o>=this.pageCount)return!1;var t=this;return globalSitewide.scrollToAnchor($("#helper-reviews-container")[0]),$("#helper-reviews-container").addClass("processing"),p.Global.Utils.performAjaxGetWithJsonResult("/publicapi/helpers-reviews-page/",{helperId:i.workerId,reviewpage:o+1},function(e){e.success&&($("#helper-reviews-container").html(e.view),t.currentPage=o,a.updateUrl(),t.refreshPagingContainer(),$("#helper-reviews-container").removeClass("processing"))}),!1},r.prototype.updateUrl=function(){var e=p.Global.Utils.parseUrl(location.href),o=e.protocol+"//"+e.hostname+e.pathname,a=queryString.parse(e.search);a.reviewpage=this.currentPage+1,0===this.currentPage?delete a.reviewpage:o+="?";var t,r=0;for(t in a)a.hasOwnProperty(t)&&(0<r&&(o+="&"),o+=t+"="+encodeURI(a[t]),r++);p.Global.Utils.changeUrl(document.title,o,!1)},r.cachedScript=function(e,o){return o=$.extend(o||{},{dataType:"script",cache:!0,url:e}),jQuery.ajax(o)},r.loadMarkerWithLabel=function(){Hahconsole.log("loadMarkerWithLabel()"),r.cachedScript("/_static/js/libs/markerwithlabel.js?v=20190605").done(function(e,o){Hahconsole.log("markerwithlabel is loaded, calling initMap()"),a=!0,r.current.initMap()})},r.prototype.drawCircle=function(e,o,a){a=new google.maps.Circle({strokeColor:"#FFFFFF",strokeOpacity:.8,strokeWeight:2,fillColor:"#16FF00",fillOpacity:.35,map:e,center:o,radius:1609.344*a});t.push(a)},r.prototype.isSecure=function(){return"https:"===location.protocol},r.prototype.initMap=function(){var t=this;Hahconsole.log("initMap()");var e=document.getElementById("gMapDiv");if(null!==i.mapPoints&&0!==i.mapPoints.length&&e)if(a){if(l)return Hahconsole.log("_gmapLoaded was already true, so calling resizeMap() and then exiting initMap()"),void this.resizeMap();var o={zoom:4,scrollwheel:!(l=!0),navigationControl:!1,center:new google.maps.LatLng(37.160317,-94.921875),panControl:!1,zoomControl:!0,zoomControlOptions:{style:google.maps.ZoomControlStyle.SMALL},mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,overviewMapControl:!1,mapTypeId:google.maps.MapTypeId.ROADMAP};n=new google.maps.Map(e,o),this.resizeMap();var r=!1;i.mapPoints.forEach(function(e){var o=new google.maps.LatLng(e.Lat,e.Long);r||(n.setCenter(o,7),r=!0);var a=t.CreateMarker(n,o,e.MarkerName);a.setMap(n),s.push(a),t.drawCircle(n,o,e.Radius)}),this.resizeMap()}else"object"==typeof google&&"object"==typeof google.maps||(this.isSecure?$.getScript("https://maps-api-ssl.google.com/maps/api/js?v=3&callback=Hireahelper.Public.LandingPage.Helper.loadMarkerWithLabel&key="+i.googleMapsApiKey,function(){}):$.getScript("http://maps.google.com/maps/api/js?v=3&callback=Hireahelper.Public.LandingPage.Helper.loadMarkerWithLabel&key="+i.googleMapsApiKey,function(){}))},r.prototype.resizeMap=function(){Hahconsole.log("resizeMap()"),google.maps.event.trigger(n,"resize");var o=new google.maps.LatLngBounds;t.forEach(function(e){o.union(e.getBounds())}),n.fitBounds(o)},r.prototype.CreateMarker=function(e,o,a){return Hahconsole.log("CreateMarker()"),a=25<i.mapPoints.length?new google.maps.Marker({position:o,map:e,title:a}):new MarkerWithLabel({position:o,draggable:!1,raiseOnDrag:!1,map:e,labelContent:a,labelAnchor:new google.maps.Point(50,0),labelClass:"mapLabel",labelStyle:{opacity:.75}}),google.maps.event.addListener(a,"click",function(){n.setCenter(o,7)}),a},e.Helper=r}(p.Public||(p.Public={}))}(Hireahelper=Hireahelper||{});