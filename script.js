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


setInterval(
    function () {
        get_time();
        document.getElementById('time').textContent=datetime;

    }
    ,1000);



// ******** PAGE LOAD *******

function load_page() {

    set_time()

    // Button add alarm
    document.getElementById('addAlarmButton').addEventListener("click",
        function() {
            console.log("click");
            var alamrmElem = document.createElement("div");
            
            var cb = document.createElement('input');
            cb.type = 'checkbox';
            var num = document.createElement('input');
            num.type = 'number';
            var txt = document.createElement('input');
            txt.type = 'text';
            var sel = document.createElement('select');
            var but = document.createElement('button');
            but.textContent = "-";
            
            
            alamrmElem.appendChild(cb);
            alamrmElem.appendChild(num);
            alamrmElem.appendChild(num);
            alamrmElem.appendChild(txt);
            alamrmElem.appendChild(sel);
            alamrmElem.appendChild(but);
            
                    
                    
            document.getElementById('alarmDiv').appendChild(alamrmElem);
            }
          );


}

window.addEventListener("load", load_page);
