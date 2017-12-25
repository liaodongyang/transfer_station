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
            try{
                var img = "<img src='http://192.168.2.1/dispimage/nodata/Loading.png'>";
                //divObj.innerHTML = img;
                var url = 'http://192.168.2.1/dispimage/' + channel1 + '/' + method + '/' + results + '/field1.png';
                img = '<img src="'+url+'" >';
                divObj.innerHTML = img;
                //url = 'http://192.168.2.1/dispimage/' + channel1 + '/field1.png';
                //img = '<img src="'+url+'" >';
                //divObj.innerHTML = img;
            }catch(err){
                document.writeln("Exception caught, No image");
            }
            /*
            if(field_new1 == 1 && method && results){

                try{
                    var img = "<img src='http://192.168.2.1/dispimage/nodata/Loading.png'>";
                    //divObj.innerHTML = img;
                    var url = 'http://192.168.2.1/dispimage/' + channel1 + '/' + method + '/' + results + '/field1.png';
                    img = '<img src="'+url+'" >';
                    divObj.innerHTML = img;
                    url = 'http://192.168.2.1/dispimage/' + channel1 + '/field1.png';
                    img = '<img src="'+url+'" >';
                    divObj.innerHTML = img;
                }catch(err){
                    document.writeln("Exception caught, No image");
                }
            }
            if(field_new1 == 2){
                try{

                    var url = 'http://192.168.2.1/dispimage/' + channel1 + '/field2.png';
                    var img = '<img src="'+url+'" >';
                    divObj.innerHTML = img;
                }catch(err){
                    document.writeln("Exception caught, No image");
                }
            }
            if(field_new1 == 3){
                try{
                    var url = 'http://192.168.2.1/dispimage/' + channel1 + '/field3.png';
                    var img = '<img src="'+url+'" >';
                    divObj.innerHTML = img;
                }catch(err){
                    document.writeln("Exception caught, No image");
                }
            }
            if(field_new1 == 4){
                try{
                    var url = 'http://192.168.2.1/dispimage/' + channel1+ '/field4.png';
                    var img = '<img src="'+url+'" >';
                    divObj.innerHTML = img;
                }catch(err){
                    document.writeln("Exception caught, No image");
                }
            }
            if(field_new1 == 5){
                try{
                    var url = 'http://192.168.2.1/dispimage/' + channel1 + '/field5.png';
                    var img = '<img src="'+url+'" >';
                    divObj.innerHTML = img;
                }catch(err){
                    document.writeln("Exception caught, No image");
                }
            }
            if(field_new1 == 6){
                try{
                    var url = 'http://192.168.2.1/dispimage/' + channel1 + '/field6.png';
                    var img = '<img src="'+url+'" >';
                    divObj.innerHTML = img;
                }catch(err){
                    document.writeln("Exception caught, No image");
                }
            }
            if(field_new1 == 7){
                try{
                    var url = 'http://192.168.2.1/dispimage/' + channel1 + '/field7.png';
                    var img = '<img src="'+url+'" >';
                    divObj.innerHTML = img;
                }catch(err){
                    document.writeln("Exception caught, No image");
                }
            }
            if(field_new1 == 8){
                try{
                    var url = 'http://192.168.2.1/dispimage/' + channel1 + '/field8.png';
                    var img = '<img src="'+url+'" >';
                    divObj.innerHTML = img;
                }catch(err){
                    document.writeln("Exception caught, No image");
                }
            }
            */
        }

        // load the data
        function loadData() {

            var field_new = document.getElementById("fieldA").value;
            var channel = document.getElementById("Channel").value;
            var divObj = document.getElementById("img");
            var method = document.getElementById("method").value;
            var results = document.getElementById("results").value;

            var Url ='http://192.168.2.1/msghttpget.php?channel=' + channel + '&field=' + field_new + '&method='+method+'&results='+results+'';
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
                        /*
                    if(field_new == 1){
                        try{
                            var img = "<img src='http://192.168.2.1/dispimage/nodata/Loading.png'>";
                            divObj.innerHTML = img;
                            //sleep(500);
                            var url = 'http://192.168.2.1/dispimage/' + channel + '/field1.png';
                            //var img = "<img src='http://192.168.2.1/dispimage/field1.png'>"
                            var img = '<img src="'+url+'" >';
                            //document.write(channel);
                            divObj.innerHTML = img;
                        }catch(err){
                            document.writeln("Exception caught, No image");
                        }
                    }
                    if(field_new == 2){
                        try{
                            var img = "<img src='http://192.168.2.1/dispimage/nodata/Loading.png'>";
                            divObj.innerHTML = img;

                            var url = 'http://192.168.2.1/dispimage/' + channel + '/field2.png';
                            //var img = "<img src='http://192.168.2.1/dispimage/field1.png'>"
                            var img = '<img src="'+url+'" >';
                            //document.write(channel);
                            divObj.innerHTML = img;
                        }catch(err){
                            document.writeln("Exception caught, No image");
                        }
                    }
                    if(field_new == 3){
                        try{
                            var img = "<img src='http://192.168.2.1/dispimage/nodata/Loading.png'>";
                            divObj.innerHTML = img;
                            var url = 'http://192.168.2.1/dispimage/' + channel + '/field3.png';
                            //var img = "<img src='http://192.168.2.1/dispimage/field1.png'>"
                            var img = '<img src="'+url+'" >';
                            //document.write(channel);
                            divObj.innerHTML = img;
                        }catch(err){
                            document.writeln("Exception caught, No image");
                        }
                    }
                    if(field_new == 4){
                        try{
                            var img = "<img src='http://192.168.2.1/dispimage/nodata/Loading.png'>";
                            divObj.innerHTML = img;
                            var url = 'http://192.168.2.1/dispimage/' + channel + '/field4.png';
                            //var img = "<img src='http://192.168.2.1/dispimage/field1.png'>"
                            var img = '<img src="'+url+'" >';
                            //document.write(channel);
                            divObj.innerHTML = img;
                        }catch(err){
                            document.writeln("Exception caught, No image");
                        }
                    }
                    if(field_new == 5){
                        try{
                            var img = "<img src='http://192.168.2.1/dispimage/nodata/Loading.png'>";
                            divObj.innerHTML = img;
                            var url = 'http://192.168.2.1/dispimage/' + channel + '/field5.png';
                            //var img = "<img src='http://192.168.2.1/dispimage/field1.png'>"
                            var img = '<img src="'+url+'" >';
                            //document.write(channel);
                            divObj.innerHTML = img;
                        }catch(err){
                            document.writeln("Exception caught, No image");
                        }
                    }
                    if(field_new == 6){
                        try{
                            var img = "<img src='http://192.168.2.1/dispimage/nodata/Loading.png'>";
                            divObj.innerHTML = img;
                            var url = 'http://192.168.2.1/dispimage/' + channel + '/field6.png';
                            //var img = "<img src='http://192.168.2.1/dispimage/field1.png'>"
                            var img = '<img src="'+url+'" >';
                            //document.write(channel);
                            divObj.innerHTML = img;
                        }catch(err){
                            document.writeln("Exception caught, No image");
                        }
                    }
                    if(field_new == 7){
                        try{
                            var img = "<img src='http://192.168.2.1/dispimage/nodata/Loading.png'>";
                            divObj.innerHTML = img;
                            var url = 'http://192.168.2.1/dispimage/' + channel + '/field7.png';
                            //var img = "<img src='http://192.168.2.1/dispimage/field1.png'>"
                            var img = '<img src="'+url+'" >';
                            //document.write(channel);
                            divObj.innerHTML = img;
                        }catch(err){
                            document.writeln("Exception caught, No image");
                        }
                    }
                    if(field_new == 8){
                        try{
                            var img = "<img src='http://192.168.2.1/dispimage/nodata/Loading.png'>";
                            divObj.innerHTML = img;
                            var url = 'http://192.168.2.1/dispimage/' + channel + '/field8.png';
                            //var img = "<img src='http://192.168.2.1/dispimage/field1.png'>"
                            var img = '<img src="'+url+'" >';
                            //document.write(channel);
                            divObj.innerHTML = img;
                        }catch(err){
                            document.writeln("Exception caught, No image");
                        }
                    }
                    */
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

