<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'></script>
    <script type='text/javascript' src='https://www.google.com/jsapi'></script>
    <script type='text/javascript'>


        // load the google gauge visualization
        google.load('visualization', '1', {packages:['gauge']});
        google.setOnLoadCallback(initChart);


        function bF(){
            var field_new1 = document.getElementById("fieldA").value;
            var channel1 = document.getElementById("Channel").value;
            var divObj = document.getElementById("img");
            var method = document.getElementById("method").value;
            var results = document.getElementById("results").value;
          　var channel2 = document.getElementById("Channel2").value;
          　var field2 = document.getElementById("field2").value;
            try{
                var img = "<img src='http://192.168.2.1/dispimage/nodata/Loading.png'>";
                //divObj.innerHTML = img;
                var url = 'http://192.168.2.1/dispimage/' + channel1 +'X'+channel2+ '/' + method + '/' + results + '/'+field_new1+'X'+field2+'.png';
                img = '<img src="'+url+'" >';
                divObj.innerHTML = img;
                //url = 'http://192.168.2.1/dispimage/' + channel1 + '/field1.png';
                //img = '<img src="'+url+'" >';
                //divObj.innerHTML = img;
            }catch(err){
                document.writeln("Exception caught, No image");
            }

        }

        // load the data
        function loadData() {

            var field_new = document.getElementById("fieldA").value;
            var channel = document.getElementById("Channel").value;
            var field2 = document.getElementById("field2").value;
            var channel2 = document.getElementById("Channel2").value;
            var divObj = document.getElementById("img");
            var method = document.getElementById("method").value;
            var results = document.getElementById("results").value;

            var Url ='http://192.168.2.1/msghttpget2.php?channel=' + channel + '&field=' + field_new + '&method='+method+'&results='+results+'&channel2='+channel2+'&field2='+field2+'';
            var xhr = new XMLHttpRequest();
            xhr.open("GET", Url, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send();

            var xmlHttp = new XMLHttpRequest();
            var CheckUrl = 'http://192.168.2.1:3000/channels/' + channel + '/fields/' + field_new + '/last.json';
            xmlHttp.open( "GET", CheckUrl, false );
            xmlHttp.send( null );
            if(xmlHttp.status == 200){
                //document.write(xmlHttp.responseText);
                var Checkres = xmlHttp.responseText;
                var Checkresult = JSON.parse(Checkres);

                if(Checkresult == "-1"){
                    try{
                        var img = "<img src='http://192.168.2.1/dispimage/nodata/NoData.png'>";
                        divObj.innerHTML = img;
                    }catch(err){
                        document.writeln("Exception caught, No image");
                    }
                }else{ 
                    bF();
                }
            }else{
                try{
                    var img = "<img src='http://192.168.2.1/dispimage/nodata/NoData.png'>";
                    divObj.innerHTML = img;
                }catch(err){
                    document.writeln("Exception caught, No image");
                }
            }
        }

        // initialize the chart
        function initChart() {


            loadData();

            // load new data every 15 seconds
            setInterval('loadData()', 5000);
            //var img = "<img src='http://192.168.2.1/dispimage/field1.png'>";
            //document.write(img);
        }

    </script>