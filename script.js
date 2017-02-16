var currentdate;
var datetime;


function get_time(){
    currentdate = new Date();
    datetime = "Last Sync: " + currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/"
                    + currentdate.getFullYear() + " @ "
                    + currentdate.getHours() + ":"
                    + currentdate.getMinutes() + ":"
                    + currentdate.getSeconds();
}

function set_time(){
    get_time();
    document.getElementById('time').textContent=datetime;
}


function delete_alarm(elemToDelt){
    elemToDelt.remove();

}


function add_alarm(){
            var alamrmElem = document.createElement("div");

            var cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.className = 'active';
            cb.checked = false;
            var num = document.createElement('input');
            num.type = 'number';
            num.className = 'h';
            var num2 = document.createElement('input');
            num2.type = 'number';
            var txt = document.createElement('input');
            txt.type = 'text';
            var sel = document.createElement('select');
            var but = document.createElement('button');

            but.textContent = "delete";

            but.addEventListener("click", function() {delete_alarm(alamrmElem);});



            alamrmElem.appendChild(cb);
            alamrmElem.appendChild(num);
            alamrmElem.appendChild(num2);
            alamrmElem.appendChild(txt);
            alamrmElem.appendChild(sel);
            alamrmElem.appendChild(but);


            document.getElementById('alarmDiv').appendChild(alamrmElem);
 }


function parcourElem() {

    var ancestor = document.getElementById('alarmDiv');
    var descendents = ancestor.getElementsByTagName('*');
    var e;
    //console.log(descendents);

    for (i = 0; i < descendents.length; ++i) {

        e = descendents[i];
        //console.log(e);
        console.log("***********************************");
        //console.log(e.getElementsByClassName('active'));
        
        //console.log(e.getElementsByClassName('active').checked);
        
        console.log(e.getElementsByClassName('h').value);
        console.log(e.getElementsByClassName('h'));
        
        
        if (e.getElementsByClassName('active').checked){
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        }

        i++;

    }




}


// ******** PAGE LOAD *******

function load_page() {

    set_time();

    document.getElementById('addAlarmButton').addEventListener("click",add_alarm);


}
window.addEventListener("load", load_page);


// ******** REFRESH *******

setInterval(
    function () {
        set_time();

        parcourElem();

    }
    ,1000);
