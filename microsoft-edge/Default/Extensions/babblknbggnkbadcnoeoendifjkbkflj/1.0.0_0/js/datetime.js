class Clock{constructor(a){this.settings={displaySecond:!0,displayType:"datetime",theme:"default"};Object.assign(this.settings,a)}start(){this.update();"date"!==this.settings.displayType&&(this.settings.displaySecond||this.settings.flashSeparator)?this.interval=setInterval(()=>this.updateBySecond(),500):this.updateByMinute()}updateBySecond(){let a=(new Date).getSeconds();this.lastSecond&&this.lastSecond==a||(this.update(),this.lastSecond=a)}updateByMinute(){this.update();let a=1E3*(60-(new Date).getSeconds()),
b=this.updateByMinute.bind(this);this.interval=setTimeout(b,a)}stop(){clearInterval(this.interval)}}
class AnalogClock extends Clock{constructor(a){super(a);this.settings.displayType="time";this.settings.timezone&&(this.timeFormat=new Intl.DateTimeFormat("en-US",{timeZone:this.settings.timezone,hour:"numeric",minute:"numeric",second:"numeric",hour12:!1}))}static rotate(a,b,c,d){a.setAttribute("transform",`rotate(${b} ${c} ${d})`)}getCurrentTime(){const a=new Date;return this.timeFormat?this.timeFormat.format(a).split(":").map(b=>parseInt(b,10)):[a.getHours(),a.getMinutes(),a.getSeconds()]}update(){let a=
this.getCurrentTime();AnalogClock.rotate(this.sec,6*a[2],this.cx,this.cy);AnalogClock.rotate(this.min,6*a[1],this.cx,this.cy);AnalogClock.rotate(this.hour,a[0]%12*30+a[1]/2,this.cx,this.cy)}}
class DefaultAnalogClock extends AnalogClock{constructor(a){super(a);a=document.importNode(document.getElementById("analog-clock-tp").content,!0);this.body=a.querySelector("svg");this.hour=a.querySelector(".default-clock-hour");this.min=a.querySelector(".default-clock-min");this.sec=a.querySelector(".default-clock-sec");this.cy=this.cx=50;this.settings.displaySecond||(this.sec.style.display="none")}};
