//<![CDATA[
 var tryCount = 0;
 var minimalUserResponseInMiliseconds = 200;
 function check() {
before = new Date().getTime();
debugger;
after = new Date().getTime();
if (after - before > minimalUserResponseInMiliseconds) {
document.write(" Alert!! Close Developer Tools Now... ");
self.location.replace(window.location.protocol + window.location.href.substring(window.location.protocol.length));
}else{
before = null;
after = null;
delete before;
delete after;
}
setTimeout(check, 100);
 }
 check();

//]]>
