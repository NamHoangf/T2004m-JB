var today = new date();
var hournow = today.getHours();
var greeting;

if(hournow>18){
    greeting = 'good evening';
}
else (hournow>12){
    greeting = 'good afternoon!';
}
else(hournow > 0){
    greeting = 'good morning';
}
else{
    greeting = 'welcome';
}
document.write('<h3>' + greeting + '/h3');
