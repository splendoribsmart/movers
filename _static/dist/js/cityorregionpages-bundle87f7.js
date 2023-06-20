var Hireahelper;function initChartJs(e,t){void 0===t&&(t="en");var a=document.getElementById("busyTimes"),n=document.createElement("script");n.type="text/javascript",n.src="/_static/node_modules/chart.js/dist/Chart.js",n.async=!0,n.id="busyTimesScript",n.onload=function(){Hahconsole.log("init BusyTimes"),Hireahelper.Public.LandingPage.CityOrRegion.BusyTimes.initCharts(e,t)};var r=new IntersectionObserver(function(e,t){e.forEach(function(e){(e.isVisible||e.isIntersecting)&&(document.body.appendChild(n),Hahconsole.log("Chart.js script added successfully"),t.disconnect())})},{root:null,rootMargin:"0px",threshold:[0]});a&&r.observe(a)}function initApexCharts(e,t){void 0===t&&(t="en");var a=document.getElementById("bestTimeGraphs"),n=document.createElement("script");n.type="text/javascript",n.src="/_static/node_modules/apexcharts/dist/apexcharts.js",n.async=!0,n.id="bestTimesGraphScript",n.onload=function(){Hahconsole.log("init BestTimesGraph"),Hireahelper.Public.LandingPage.CityOrRegion.BestTimeGraphs.initCharts(e,t)};var r=new IntersectionObserver(function(e,t){e.forEach(function(e){(e.isVisible||e.isIntersecting)&&(document.body.appendChild(n),Hahconsole.log("apexcharts.js script added successfully"),t.disconnect())})},{root:null,rootMargin:"0px",threshold:[0]});a&&r.observe(a)}!function(a){var e,n,i,o,r,s;function u(e,t,a,n,r,i){var o,s={};i&&(r?(o=[{x:i,borderColor:"#000",label:{borderWidth:0,orientation:"horizontal",text:"Average Move Cost $".concat(i)}}],s.xaxis=o):i&&(i=[{y:i,borderColor:"#000",label:{borderWidth:0,orientation:"horizontal",text:"Average Move Cost $".concat(i)}}],s.yaxis=i));t={tooltip:{enabled:!1},chart:{type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:r,dataLabels:{position:"top"}}},dataLabels:{enabled:r,formatter:function(e){return"$".concat(e)},offsetX:30,style:{colors:["#333"]}},series:[{data:t.map(function(e){return{x:a(e.DatePart),y:e.Count,fillColor:e.Highlight?"#5cb85c":"#5B7694"}})}],annotations:s,yaxis:{labels:{show:!0,formatter:n}},xaxis:{categories:t.map(function(e){return a(e.DatePart)})}};new ApexCharts(document.getElementById(e),t).render()}function c(e){var t=e.reduce(function(e,t){return e.Count<t.Count?e:t}).Count,a=e.reduce(function(e,t){return e.Count>t.Count?e:t}).Count,n=e.reduce(function(e,t){return e+t.Count},0);return{min:t,max:a,mid:Math.round((t+a)/2),mean:Math.round(n/e.length)}}e=(e=(e=(e=a.Public||(a.Public={})).LandingPage||(e.LandingPage={})).CityOrRegion||(e.CityOrRegion={})).BestTimeGraphs||(e.BestTimeGraphs={}),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=["12:00 AM","1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM","6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM"],r=["Loading Only","Unloading Only","Loading + Unloading","Moving On-Site Only"],s=["Sub 2 hours","2-3 hours","3-4 hours","4-5 hours","5-6 hours","6-7 hours","7 hours +"],e.initCharts=function(e,t){a.Global.Utils.performAjaxGetWithJsonResult("/publicapi/best-time-graphs/"+e+"/",{},function(e){var t=Math.round(c(e.YearData).mean),a=Math.round(c(e.TypeOfHelpData).mean);$(".graph-spinner").hide(),u("busyTimesYear",e.YearData,function(e){return n[e-1]},function(e){return"$".concat(e)},!1,t),function(e,t,a,n,r){void 0===n&&(n=!1);void 0===r&&(r=!1);a={tooltip:{enabled:!1},chart:{type:"heatmap",toolbar:{show:!1}},plotOptions:{heatmap:{colorScale:{ranges:function(e){var t=c(e.filter(function(e){return 6<e.TimePart&&e.TimePart<19})),a=t.mid,n=(a-t.min)/2+t.min,e=a+n-t.min;return[{from:t.min,to:n,color:"#5cb85c",name:"Least busy"},{from:n,to:a,color:"#c6cfda",name:"Somewhat busier"},{from:a,to:e,color:"#90a2b6",name:"Busier"},{from:e,to:t.max,color:"#5B7694",name:"Busiest"}]}(t)},enableShades:!1}},dataLabels:{enabled:!1},series:function(a,n){for(var r=[],e=18;6<e;e--)!function(t){var e=a.filter(function(e){return e.TimePart===t}),e={name:o[t],data:e.map(function(e){return{x:n(e.DatePart),y:e.Count}})};r.push(e)}(e);return r}(t,a),yaxis:{labels:{show:!0}},xaxis:{categories:i}};new ApexCharts(document.getElementById(e),a).render()}("busyTimesWeek",e.WeekData,function(e){return i[e-1]}),u("busyTimesMonth",e.TypeOfHelpData,function(e){return r[e-1]},function(e){return"".concat(e)},!0,a),u("busyTimesDay",e.MoveLengthData,function(e){return s[e-1]},function(e){return"".concat(e,"%")},!1,void 0)})}}(Hireahelper=Hireahelper||{}),function(t){var e,i,o,s,u,c,l,h;function p(e,t,a){e=e.getContext("2d"),t={type:"bar",data:{labels:t.map(function(e){return a(e.DatePart)}),datasets:[{data:t.map(function(e){return e.Count}),backgroundColor:t.map(function(e){return e.Highlight?"#5cb85c":"#5B7694"})}]},options:{hover:{mode:null},tooltips:{enabled:!1},legend:{display:!1},animation:{duration:0},responsiveAnimationDuration:0,scales:{yAxes:[{ticks:{display:!1,min:0}}]}}};return new Chart(e,t)}e=(e=(e=(e=t.Public||(t.Public={})).LandingPage||(e.LandingPage={})).CityOrRegion||(e.CityOrRegion={})).BusyTimes||(e.BusyTimes={}),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=["January","February","March","April","May","June","July","August","September","October","November","December"],s=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],u=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],c=["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"],l=["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],h=["12am","1am","2am","3am","4am","5am","6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm","11pm"],e.initCharts=function(e,r){t.Global.Utils.performAjaxGetWithJsonResult("/publicapi/get-busy-times/"+e+"/",{},function(e){p(document.getElementById("busyTimesYear"),e.YearData,function(e){return i[e-1]}),p(document.getElementById("busyTimesMonth"),e.MonthData,function(e){return e.toString()}),p(document.getElementById("busyTimesWeek"),e.WeekData,function(e){return u[e-1]}),p(document.getElementById("busyTimesDay"),e.DayData,function(e){return h[e]});var t=e.MonthData.firstOrDefault(function(e){return e.Highlight}).DatePart,a="es"==r?s:o,n="es"==r?l:c,t="es"==r?t:function(e){var t,a=parseInt(e,10);if(0===a)return e;if(0<=[11,12,13].indexOf(a%100))return"".concat(a,"th");switch(a%10){case 1:t="st";break;case 2:t="nd";break;case 3:t="rd";break;default:t="th"}return"".concat(a).concat(t)}(t);$("#busy-times-year-summary").text(a[e.YearData.firstOrDefault(function(e){return e.Highlight}).DatePart-1]),$("#busy-times-month-summary").text(t),$("#busy-times-week-summary").text(n[e.WeekData.firstOrDefault(function(e){return e.Highlight}).DatePart-1]),$("#busy-times-day-summary").text(h[e.DayData.firstOrDefault(function(e){return e.Highlight}).DatePart]),$(".js-busy-times-chart-summary").show()})}}(Hireahelper=Hireahelper||{}),function(s){var e;(function(e){function o(e,t,a,n,r){this.currentPage=e,this.pageCount=t,this.fallbackSearch=n,this.skip=a,this.language=r,this.refreshHelperCardsContainer()}e=e.CityOrRegion||(e.CityOrRegion={}),o.init=function(e,t,a,n,r,i){new o(t,a,n,r,i=void 0===i?"en":i);0<$("#busyTimes").length&&initChartJs(e,i),0<$("#bestTimeGraphs").length&&initApexCharts(e,i);r=s.Global.Utils.parseUrl(location.href);"es"==i&&(r.pathname=r.pathname.replace("es/","")),0<$("#related-cities--container").length?s.Global.Utils.performAjaxGetWithJsonResult("/publicapi/related-cities"+r.pathname,{language:i},function(e){$("#related-cities--container").html(e.view)}):Hahconsole.warn("Related Cities container element was not found"),0<$("#local-tips--container").length?s.Global.Utils.performAjaxGetWithJsonResult("/publicapi/local-tips/"+e+"/",{language:i},function(e){$("#local-tips--container").html(e.view)}):Hahconsole.warn("Local Tips container element was not found")},o.prototype.refreshHelperCardsContainer=function(){var t=this;$("a.first",".helper-cards-container").click(function(e){return t.gotoPage(0,e.target)}),$("a.prev",".helper-cards-container").click(function(e){return t.gotoPage(t.currentPage-1,e.target)}),$("a.next",".helper-cards-container").click(function(e){return t.gotoPage(t.currentPage+1,e.target)}),$("a.last",".helper-cards-container").click(function(e){return t.gotoPage(t.pageCount-1,e.target)})},o.prototype.gotoPage=function(e,t){var a=this;if(e<0)return!1;if(e>=this.pageCount)return!1;var n=this,r=$(t).closest(".helper-cards-container");globalSitewide.ScrollToElementInContainer(r[0],window),$(r).addClass("processing");t=s.Global.Utils.parseUrl(location.href);"es"==this.language&&(t.pathname=t.pathname.replace("es/",""));e="?helperPage="+(e+1);return this.fallbackSearch&&(e+="&fallback=true"),this.skip&&(e+="&skip="+this.skip),s.Global.Utils.performAjaxGetWithJsonResult("/publicapi/helpers-page"+t.pathname+e,{language:this.language},function(e){$(r).html(e.view),n.currentPage=e.currentPage,a.updateUrl(),n.refreshHelperCardsContainer(),$(r).removeClass("processing")}),!1},o.prototype.updateUrl=function(){var e=s.Global.Utils.parseUrl(location.href),t=e.protocol+"//"+e.hostname+e.pathname,a=queryString.parse(e.search);a.helperPage=this.currentPage+1,0===this.currentPage&&delete a.helperPage,this.skip&&(a.skip=this.skip),this.fallbackSearch&&(a.fallback="true");var n,r=0;for(n in a)a.hasOwnProperty(n)&&(t+=0<r?"&":"?",t+=n+"="+encodeURI(a[n]),r++);s.Global.Utils.changeUrl(document.title,t,!1)},e.StateCity=o})((e=s.Public||(s.Public={})).LandingPage||(e.LandingPage={}))}(Hireahelper=Hireahelper||{});