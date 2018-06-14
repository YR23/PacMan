            var context = document.getElementById("canvas222").getContext("2d");
            var foodRemain;
            var shape;
            var shapeToEat;
            var ghost_red;
            var ghost_orange;
            var ghost_pink;
            var ghost_cyan;
            var board;
            var score;
            var pac_color;
            var start_time;
            var time_elapsed;    
            var interval, interval2, interval3, interval4, interval5, interval6,interval7,interval8,interval9;
            var users =["a"];
            var password = ["a"];
            var LastKey = "r";
            var life = 3;
            var audio = new Audio('CrazyFrog.mp3');
            var ifEaten = false,ifEaten1 = false;
            var wasFoodBefore1 = false,wasFoodBefore11 = false , wasFoodBefore111 = false;
            var wasFoodBefore2 = false,wasFoodBefore22 = false , wasFoodBefore222 = false; 
            var wasFoodBefore3 = false,wasFoodBefore33 = false , wasFoodBefore333 = false;		
            var wasFoodBefore4 = false,wasFoodBefore44 = false , wasFoodBefore444 = false;		
            var GhostNum;		
            var TotalTime;		
            var context = document.getElementById("canvas222").getContext("2d");
            var foodRemain;
            var shape;
            var shapeToEat;
            var clock;
            var ghost_red;
            var ghost_orange;
            var ghost_pink;
            var color5,color15,color25;
            var lastColor = "y";
            var foodForPrecent,food_remain;
            
            //alert(password[users.indexOf("a")]);
            var modal = document.getElementById('myModal');
            var modal1 = document.getElementById('WinModal');
            var modal2 = document.getElementById('GOModal');
            
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];
            var span1 = document.getElementsByClassName("close")[1];
            var span2 = document.getElementsByClassName("close")[2];
            // When the user clicks on the button, open the modal
            
            // When the user clicks on <span> (x), close the modal
            span.onclick = function(){
                modal.style.display = "none";
            }

            span1.onclick = function(){
                modal1.style.display = "none";
            }
            span2.onclick = function(){
                 modal2.style.display = "none";
            }
            
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event){
                if (event.target == modal) {
                    modal.style.display = "none";
                }
                if (event.target == modal1) {
                    modal1.style.display = "none";
                }
            } 
                        
            function OpenModal(){
                modal.style.display = "block"
            }

            function OpenWinModal(){
                modal1.style.display = "block"
            }

            function OpenGOModal(){
                modal2.style.display = "block"
            }
            
            function CheckLogin(user,pass){
                var pos = users.indexOf(user);
                var res = password[pos];

                if (res == pass)
                    return true;
                else
                    return false;
            }

            function Login(){
                $('#WelcomeBack').html("Welcome Back ");
                var UserName = $('#UsernameL').val();
                var Password = $('#passwordL').val();
                
                var bool = CheckLogin(UserName,Password);
                if (bool)
                {
                    document.getElementById("WelcomeBack").innerHTML += UserName;
                    $('#WelcomeBack').show();
                    NewGame();
                    $("#logoutButton").show();
                    $('#NewGameButton').show();
                    $("#LogButton").hide();
                    $("#RegButton").hide();
                }             
            }

            function CheckRegister(){
             var FirstName = $('#FirstName').val();
             var LastName = $('#LastName').val();
             var Password = $('#password').val();
             var email = $('#email').val();
             document.getElementById("demo").innerHTML = "";
             document.getElementById("demo").innerHTML = checkThereAreNoEmpty();
             document.getElementById("demo").innerHTML += isEmail(email);
             document.getElementById("demo").innerHTML += OnlyLetters(FirstName,"First Name");
             document.getElementById("demo").innerHTML += OnlyLetters(LastName,"Last Name");
             document.getElementById("demo").innerHTML += OnlyLetters(LastName,"Last Name");
             document.getElementById("demo").innerHTML += CheckPassowrdWrapper(Password);

             if(document.getElementById("demo").innerHTML == "")
             {
                console.log("Register was successfull");
                users.push($("#Username").val());
                password.push($("#password").val());
                $("#UsernameL").val($("#Username").val());
                $("#passwordL").val($("#password").val());
                ShowSection('login');

               


                }
                
            }

            function CheckPassowrdWrapper(pass)
            {
                if (checkPassword(pass) == true)
                    return ""
                else
                    return "Unvalid Password <br>"
            }
            
            function checkPassword(pass){
                var Regex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
                return Regex.test(pass);
            }

            function isEmail(email) {
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                if (regex.test(email))
                    return "";
                else
                    return "Email is not good <br>";
              }
            
              function checkThereAreNoEmpty(){
             var flag = true;
             $("#registerform").find(":input").each(function() {
                    if ($(this).val() == "")
                        flag = false;
                });

                if(flag)
                    return "";
                else
                return ("There are empty fields <br> " );

            }

            function OnlyLetters(word,what) {
                var Regex=/^([^0-9]*)$/;
                if (Regex.test(word))
                    return "";
                else
                    return ("Please Enter valid " + what + " <br> " );
              }


            
              function PageLoaded(){
                $("#logoutButton").hide();
                $('#NewGameButton').hide();
                ShowSection('welcome');
                //Start();
            
            }

            function logout(){
                $("#logoutButton").hide();
                $("#RegButton").show();
                $("#LogButton").show();
                $('#WelcomeBack').html("Welcome Back ");
                $('#WelcomeBack').hide();
                $('#NewGameButton').hide();
                console.log("The user has logged out")
            }

            function NewGame(){
                ShowSection('NewGame');
                console.log("New game")
            }

            function NewGame1(){
                foodRemain = $('#food_NG').val();
                GhostNum = $('#ghost_NG').val();
                TotalTime = $('#time_NG').val();
                color5 = $('#color5').val();
                color15 = $('#color15').val();
                color25 = $('#color25').val();

                ShowSection('section1');
                Start();
                console.log("New game")
            }
       
            function ShowSection(id){
                    console.log("Section was changed to " + id);
                    $("section").hide();
                    $("#" + id).show();
                    $("#registerform").trigger("reset");
                    ChangeLables("Hide");

                    if(id == "section1")
                    {
                        ChangeStyleByChoise(color5,color15,color25);
                        ChangeLables("Show");
                    }
                            

            }

            function Start(){

                if (life>0)
                {
                shape=new Object();
                shapeToEat=new Object();
                clock = new Object();
                ghost_red = new Object;
                ghost_orange = new Object;
                ghost_pink = new Object;
                ghost_cyan = new Object;
                audio.play();
                board = new Array();
                score = 0;
                pac_color="yellow";
                foodForPrecent = $('#food_NG').val();
                food_remain = $('#food_NG').val();
                foodRemain = food_remain;
                var cnt = 400;
                var pacman_remain = 1;
                var eat_food = 1;
                start_time= new Date();
                clock.i = 999;
                shapeToEat.i = 1000;
                shape.i = 1000;
                for (var i = 0; i < 20; i++) {
                    board[i] = new Array();
                    //put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
                    for (var j = 0; j < 20; j++) {
                    	if((i==3 && j==3)||(i==3 && j==4)||(i==3 && j==5)||(i==6 && j==1)||(i==6 && j==2))
                    	{
                    		board[i][j] = 4;
                    	}
                    	else{
                    	var randomNum = Math.random();
                        if (randomNum <= 1.0 * food_remain / cnt) {
                            //food_remain--;
                            board[i][j] = 0;
                        }
                        else if (randomNum < 1.0 * (eat_food + food_remain) / cnt) {
                                eat_food--;
                                shapeToEat.i = i;
                                shapeToEat.j = j;
                                board[i][j] = 5;
                        }
                        else if (randomNum < 1.0 * (eat_food + food_remain) / cnt) {
                            eat_food--;
                            clock.i = i;
                            clock.j = j;
                            board[i][j] = 12;
                    }
                          else {
                            board[i][j] = 0;
                        }
                        cnt--;
                    	}
                    }
                }

                if(shapeToEat.i == 1000){
                    var empty_cell = findRandomEmptyCell(board)
                    shapeToEat.i = empty_cell[0];
                    shapeToEat.j = empty_cell[1];
                    board[shapeToEat.i][shapeToEat.j] = 5;
                }

                if(clock.i == 999){
                    var empty_cell = findRandomEmptyCell(board)
                    clock.i = empty_cell[0];
                    clock.j = empty_cell[1];
                    board[clock.i][clock.j] = 12;
                }
                
                InitGhosts();
                InitShape();
                InitWasFoodBefore()
                InitFoodsByPercentages(board);    
                               
                keysDown = {};
                addEventListener("keydown", function (e) {
                    keysDown[e.keyCode] = true;
                }, false);
                addEventListener("keyup", function (e) {
                    keysDown[e.keyCode] = false;
                }, false);

                ClearIntervals(window)
                SetIntervals()

                }
                else
                {
                alert ("You have lost 3 times in a row, GAME OVER");
                ClearIntervals(window)
                OpenGOModal();

                }
            }
            
            function ChangeLables(ShowOrHide){
                if(ShowOrHide == "Hide"){
                    $("#lblTime").hide();
                    $("#lblScore").hide();
                    $("#Score").hide();
                    $("#Time").hide();
                    $("#C5").hide();
                    $("#C15").hide();
                    $("#C25").hide();
                    $("#t5").hide();
                    $("#t15").hide();
                    $("#t25").hide();
                }
                else{
                    $("#lblTime").show();
                    $("#lblScore").show();
                    $("#Score").show();
                    $("#Time").show();
                    $("#C5").show();
                    $("#C15").show();
                    $("#C25").show();
                    $("#t5").show();
                    $("#t15").show();
                    $("#t25").show();

                }
            }

            function ChangeStyleByChoise(color5,color15,color25){
                document.getElementById("C5").style.background = color5;
                document.getElementById("C15").style.background = color15;
                document.getElementById("C25").style.background = color25;
            }

            function ClearIntervals(window){
                window.clearInterval(interval);
                window.clearInterval(interval2);
                window.clearInterval(interval3);
                window.clearInterval(interval4);
                window.clearInterval(interval6);
                window.clearInterval(interval7);
                window.clearInterval(interval8);
                window.clearInterval(interval9);

            }

            function SetIntervals(){
                interval=setInterval(UpdatePosition, 80);
                interval2=setInterval(UpdatePositionbanana, 150);
                interval3=setInterval(UpdatePositionRedGhost, 500);

                if (GhostNum == "2" || GhostNum == "3")
                    interval6=setInterval(UpdatePositionPinkGhost, 500);
                if (GhostNum == "3")
                interval4=setInterval(UpdatePositionOrangeGhost, 500);
                interval7=setInterval(CheckForTime, 1000);
                interval8=setInterval(UpdatePositionClock, 150);
                interval9=setInterval(CheckForHalfScore, 500);
                interval9=setInterval(CheckForLifes,1000);

                

            }

            function InitWasFoodBefore(){
                wasFoodBefore1 = false;
                wasFoodBefore2 = false;
                wasFoodBefore3 = false;
                wasFoodBefore11 = false;
                wasFoodBefore22 = false;
                wasFoodBefore33 = false;
                wasFoodBefore111 = false;
                wasFoodBefore222 = false;
                wasFoodBefore333 = false;
            }

            function InitShape(){
                shape.i =10;
                shape.j =10;
            }

            function InitGhosts(){
                board[0][0] = 6; //red
                ghost_red.i = 0;
                ghost_red.j = 0;

                if (GhostNum == "2" || GhostNum == "3" )
                {
                board[19][19] = 9; //pink
                ghost_pink.i = 19;
                ghost_pink.j = 19;
                }
                if (GhostNum == "3" ) 
                {
                board[0][19] = 7; //orange
                ghost_orange.i = 0;
                ghost_orange.j = 19;
                }
            }

            function InitFoodsByPercentages(board){
                //60 - 1
               var count60=0;
               //30 - 10
               var count30=0;
               //10 - 11
               var count10=0;

               var counter = 0;
               var flag = false;
                while(food_remain>0)
                {
                    console.log("food remain "+food_remain);

                    flag = false;
                    var emptyCell = findRandomEmptyCell(board);
                    if (count60 < foodForPrecent*0.6)
                    {
                    board[emptyCell[0]][emptyCell[1]] = 1;
                    count60++;
                    flag = true;
                    }
                    else if (count30 < foodForPrecent*0.3)
                    {
                    board[emptyCell[0]][emptyCell[1]] = 10;
                    count30++;
                    flag = true;

                    }
                    else if (count10 < foodForPrecent*0.1)
                    {
                    board[emptyCell[0]][emptyCell[1]] = 11;
                    count10++;
                    flag = true;

                    }
                    if (flag == true)
                    {
                    food_remain--;
                    counter++;
                    }
                    
                }
                console.log("counter is "+counter);
                console.log("counter 60 is "+ count60 + "sepose to be "+ foodForPrecent*0.6);
                console.log("counter 30 is "+ count30 + "sepose to be "+ foodForPrecent*0.3);
                console.log("counter 10 is "+ count10 + "sepose to be "+ foodForPrecent*0.1);
            }

            function findRandomEmptyCell(board){
             	var i = Math.floor((Math.random() * 19) + 1);
             	var j = Math.floor((Math.random() * 19) + 1);
    			while(board[i][j]!=0)
    			{
             		i = Math.floor((Math.random() * 19) + 1);
             		j = Math.floor((Math.random() * 19) + 1);
    			}
                return [i,j];             
            }

            function GetKeyPressed(){
                if (keysDown[38]) {
                    LastKey = "u";
                    return 1;
                    
                }
                if (keysDown[40]) { 
                    LastKey = "d";

                    return 2;
                }
                if (keysDown[37]) { 
                    LastKey = "l";

                    return 3; // left
                }
                if (keysDown[39]) { 
                    LastKey = "r";

                    return 4; // right
                }
            }

            function Draw(){
                canvas = document.getElementById("canvas222");
                canvas.width=canvas.width; //clean board
                CheckForLifes();
                lblScore.value = score;
                lblTime.value = time_elapsed;
                for (var i = 0; i < 20; i++) {
                    for (var j = 0; j < 20; j++) {
                        var center = new Object();
                        center.x = i * 30 + 15;
                        center.y = j * 30 + 15;
                        if (board[i][j] == 2) {
                            if (LastKey == "r")
                            {
                            //body
                            context.beginPath();
                            context.arc(center.x, center.y, 15, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
                            context.lineTo(center.x, center.y);
                            context.fillStyle = pac_color; //color 
                            context.fill();

                            //eye
                            context.beginPath();
                            context.arc(center.x + 2.5, center.y - 7.5, 2.5, 0, 2 * Math.PI); // circle
                            context.fillStyle = "black"; //color 
                            context.fill();
                            }
                            if (LastKey == "l")
                            {
                            //body
                            context.beginPath();
                            context.arc(center.x, center.y, 15, 0.85 * Math.PI, 1.15 * Math.PI,true); // half circle
                            context.lineTo(center.x, center.y);
                            context.fillStyle = pac_color; //color 
                            context.fill();

                            //eye
                            context.beginPath();
                            context.arc(center.x - 2.5, center.y - 7.5, 2.5, 0, 2 * Math.PI); // circle
                            context.fillStyle = "black"; //color 
                            context.fill();
                            }
                            if (LastKey == "u")
                            {
                            //body
                            context.beginPath();
                            context.arc(center.x, center.y, 15, 1.35 * Math.PI, 1.65 * Math.PI,true); // half circle
                            context.lineTo(center.x, center.y);
                            context.fillStyle = pac_color; //color 
                            context.fill();

                            //eye
                            context.beginPath();
                            context.arc(center.x - 7.5, center.y - 2.5, 2.5, 0, 2 * Math.PI); // circle
                            context.fillStyle = "black"; //color 
                            context.fill();
                            }
                            if (LastKey == "d")
                            {
                            //body
                            context.beginPath();
                            context.arc(center.x, center.y, 15, 0.35 * Math.PI, 0.65 * Math.PI,true); // half circle
                            context.lineTo(center.x, center.y);
                            context.fillStyle = pac_color; //color 
                            context.fill();

                            //eye
                            context.beginPath();
                            context.arc(center.x + 7.5, center.y + 2.5, 2.5, 0, 2 * Math.PI); // circle
                            context.fillStyle = "black"; //color 
                            context.fill();
                            }
                        } else if (board[i][j] == 1) {
                            context.beginPath();
                            context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
                            context.fillStyle = color5; //color 
                            context.fill();
                        }
                        else if (board[i][j] == 4) {
                            context.beginPath();
                            context.rect(center.x-15, center.y-15, 30, 30);
                            context.fillStyle = "blue"; //color 
                            context.fill();
                        }
                        if (board[i][j] == 5) {
                            var img=document.getElementById("banana");
                            context.drawImage(img,center.x-15, center.y-15, 30, 30);
                        }
                        if (board[i][j] == 6) {
                            var img1=document.getElementById("ghost_yr");
                            context.drawImage(img1,center.x-15, center.y-15, 30, 30);
                        }
                        if (board[i][j] == 7) {
                            var img1=document.getElementById("ghost_noam");
                            context.drawImage(img1,center.x-15, center.y-15, 30, 30);
                        }
                        if (board[i][j] == 8) {
                            var img1=document.getElementById("ghost_nir");
                            context.drawImage(img1,center.x-15, center.y-15, 30, 30);
                        }
                        if (board[i][j] == 9) {
                            var img1=document.getElementById("ghost_nadav");
                            context.drawImage(img1,center.x-15, center.y-15, 30, 30);
                        }
                        if (board[i][j] == 10) {
                            context.beginPath();
                            context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
                            context.fillStyle = color15; //color 
                            context.fill();
                        }
                        if (board[i][j] == 11) {
                            context.beginPath();
                            context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
                            context.fillStyle = color25; //color 
                            context.fill();
                        }
                        if (board[i][j] == 12) {
                            var img=document.getElementById("clock");
                            context.drawImage(img,center.x-15, center.y-15, 40, 40);
                        }


                    }
                   
                }

               
            }

            function UpdatePositionRedGhost(){
                if (wasFoodBefore1)
                board[ghost_red.i][ghost_red.j]=1;
                else if (wasFoodBefore11)
                board[ghost_red.i][ghost_red.j]=10;
                else if (wasFoodBefore111)
                board[ghost_red.i][ghost_red.j]=11;
                else
                board[ghost_red.i][ghost_red.j]=0;
                var disi = shape.i - ghost_red.i;
                var disj = shape.j - ghost_red.j;
                if ((Math.abs(disi)+Math.abs(disj) <= 1))
                {
                alert ("game over man "+life);
                life--;
                Start();
                }
                else
                {
                if (Math.abs(disi)>Math.abs(disj))
                {
                    if (shape.i<ghost_red.i){

                    if (board[ghost_red.i-1][ghost_red.j]== 0 || board[ghost_red.i-1][ghost_red.j]== 1 || board[ghost_red.i-1][ghost_red.j]== 2 || board[ghost_red.i-1][ghost_red.j]== 3 || board[ghost_red.i-1][ghost_red.j]== 10 || board[ghost_red.i-1][ghost_red.j]== 11)
                    {
                    if (board[ghost_red.i-1][ghost_red.j]== 1)
                    wasFoodBefore1=true;
                    else
                    wasFoodBefore1=false;
                    if (board[ghost_red.i-1][ghost_red.j]== 10)
                    wasFoodBefore11 = true;
                    else
                    wasFoodBefore11=false;
                    if (board[ghost_red.i-1][ghost_red.j]== 11)
                    wasFoodBefore111 = true;
                    else
                    wasFoodBefore111=false;
                    ghost_red.i--;
                    }
                    }
                    else
                    {
                        if (board[ghost_red.i+1][ghost_red.j]== 0 || board[ghost_red.i+1][ghost_red.j]== 1 || board[ghost_red.i+1][ghost_red.j]== 2 || board[ghost_red.i+1][ghost_red.j]== 3 || board[ghost_red.i+1][ghost_red.j]== 10 || board[ghost_red.i+1][ghost_red.j]== 11)
                        {
                        if (board[ghost_red.i+1][ghost_red.j]== 1)
                        wasFoodBefore1=true;
                        else
                        wasFoodBefore1=false;
                        if (board[ghost_red.i+1][ghost_red.j]== 10)
                        wasFoodBefore11 = true;
                        else
                        wasFoodBefore11=false;
                        if (board[ghost_red.i+1][ghost_red.j]== 11)
                        wasFoodBefore111 = true;
                        else
                        wasFoodBefore111=false;
                        ghost_red.i++;
                        }
                    }

                }
                else
                {
                    if (shape.j<ghost_red.j)
                    {
                    if (board[ghost_red.i][ghost_red.j-1]== 0 ||board[ghost_red.i][ghost_red.j-1]== 1 || board[ghost_red.i][ghost_red.j-1]== 2 || board[ghost_red.i][ghost_red.j-1] == 3 || board[ghost_red.i][ghost_red.j-1] == 10 || board[ghost_red.i][ghost_red.j-1] == 11   )
                    {
                    if (board[ghost_red.i][ghost_red.j-1]== 1)
                    wasFoodBefore1=true;
                    else
                    wasFoodBefore1=false;
                    if (board[ghost_red.i][ghost_red.j-1]== 10)
                    wasFoodBefore11=true;
                    else
                    wasFoodBefore11=false;
                    if (board[ghost_red.i][ghost_red.j-1]== 11)
                    wasFoodBefore111=true;
                    else
                    wasFoodBefore111=false;
                    ghost_red.j--;
                    }
                    }
                    else
                    {
                    if (board[ghost_red.i][ghost_red.j+1]== 0 ||board[ghost_red.i][ghost_red.j+1]== 1 || board[ghost_red.i][ghost_red.j+1]== 2 || board[ghost_red.i][ghost_red.j+1] == 3 || board[ghost_red.i][ghost_red.j+1] == 10 || board[ghost_red.i][ghost_red.j+1] == 11 )
                    {
                    if (board[ghost_red.i][ghost_red.j+1]== 1)
                    wasFoodBefore1=true;
                    else
                    wasFoodBefore1=false;
                    if (board[ghost_red.i][ghost_red.j+1]== 10)
                    wasFoodBefore11=true;
                    else
                    wasFoodBefore11=false;
                    if (board[ghost_red.i][ghost_red.j+1]== 11)
                    wasFoodBefore111=true;
                    else
                    wasFoodBefore111=false;
                    ghost_red.j++;
                    }
                    }
                }
                board[ghost_red.i][ghost_red.j]=6;
                }
            }

            function UpdatePositionOrangeGhost(){
                if (wasFoodBefore2)
                board[ghost_orange.i][ghost_orange.j]=1;
                else if (wasFoodBefore22)
                board[ghost_orange.i][ghost_orange.j]=10;
                else if (wasFoodBefore222)
                board[ghost_orange.i][ghost_orange.j]=11;
                else
                board[ghost_orange.i][ghost_orange.j]=0;
                var disi = shape.i - ghost_orange.i;
                var disj = shape.j - ghost_orange.j;
                if ((Math.abs(disi)+Math.abs(disj) <= 1))
                {
                alert ("game over man "+life);
                life--;
                Start();
                }
                else
                {
                if (Math.abs(disi)>Math.abs(disj))
                {
                    if (shape.i<ghost_orange.i){

                    if (board[ghost_orange.i-1][ghost_orange.j]== 0 || board[ghost_orange.i-1][ghost_orange.j]== 1 || board[ghost_orange.i-1][ghost_orange.j]== 2 || board[ghost_orange.i-1][ghost_orange.j]== 3 || board[ghost_orange.i-1][ghost_orange.j]== 10 || board[ghost_orange.i-1][ghost_orange.j]== 11)
                    {
                    if (board[ghost_orange.i-1][ghost_orange.j]== 1)
                    wasFoodBefore2=true;
                    else
                    wasFoodBefore2=false;
                    if (board[ghost_orange.i-1][ghost_orange.j]== 10)
                    wasFoodBefore22 = true;
                    else
                    wasFoodBefore22=false;
                    if (board[ghost_orange.i-1][ghost_orange.j]== 11)
                    wasFoodBefore222 = true;
                    else
                    wasFoodBefore222=false;
                    ghost_orange.i--;
                    }
                    }
                    else
                    {
                        if (board[ghost_orange.i+1][ghost_orange.j]== 0 || board[ghost_orange.i+1][ghost_orange.j]== 1 || board[ghost_orange.i+1][ghost_orange.j]== 2 || board[ghost_orange.i+1][ghost_orange.j]== 3 || board[ghost_orange.i+1][ghost_orange.j]== 10 || board[ghost_orange.i+1][ghost_orange.j]== 11)
                        {
                        if (board[ghost_orange.i+1][ghost_orange.j]== 1)
                        wasFoodBefore2=true;
                        else
                        wasFoodBefore2=false;
                        if (board[ghost_orange.i+1][ghost_orange.j]== 10)
                        wasFoodBefore22 = true;
                        else
                        wasFoodBefore22=false;
                        if (board[ghost_orange.i+1][ghost_orange.j]== 11)
                        wasFoodBefore222 = true;
                        else
                        wasFoodBefore222=false;
                        ghost_orange.i++;
                        }
                    }

                }
                else
                {
                    if (shape.j<ghost_orange.j)
                    {
                    if (board[ghost_orange.i][ghost_orange.j-1]== 0 ||board[ghost_orange.i][ghost_orange.j-1]== 1 || board[ghost_orange.i][ghost_orange.j-1]== 2 || board[ghost_orange.i][ghost_orange.j-1] == 3 || board[ghost_orange.i][ghost_orange.j-1] == 10 || board[ghost_orange.i][ghost_orange.j-1] == 11   )
                    {
                    if (board[ghost_orange.i][ghost_orange.j-1]== 1)
                    wasFoodBefore2=true;
                    else
                    wasFoodBefore2=false;
                    if (board[ghost_orange.i][ghost_orange.j-1]== 10)
                    wasFoodBefore22=true;
                    else
                    wasFoodBefore22=false;
                    if (board[ghost_orange.i][ghost_orange.j-1]== 11)
                    wasFoodBefore222=true;
                    else
                    wasFoodBefore222=false;
                    ghost_orange.j--;
                    }
                    }
                    else
                    {
                    if (board[ghost_orange.i][ghost_orange.j+1]== 0 ||board[ghost_orange.i][ghost_orange.j+1]== 1 || board[ghost_orange.i][ghost_orange.j+1]== 2 || board[ghost_orange.i][ghost_orange.j+1] == 3 || board[ghost_orange.i][ghost_orange.j+1] == 10 || board[ghost_orange.i][ghost_orange.j+1] == 11 )
                    {
                    if (board[ghost_orange.i][ghost_orange.j+1]== 1)
                    wasFoodBefore2=true;
                    else
                    wasFoodBefore2=false;
                    if (board[ghost_orange.i][ghost_orange.j+1]== 10)
                    wasFoodBefore22=true;
                    else
                    wasFoodBefore22=false;
                    if (board[ghost_orange.i][ghost_orange.j+1]== 11)
                    wasFoodBefore222=true;
                    else
                    wasFoodBefore222=false;
                    ghost_orange.j++;
                    }
                    }
                }
                board[ghost_orange.i][ghost_orange.j]=7;
                }
            }

            function UpdatePositionPinkGhost(){
                if (wasFoodBefore3)
                board[ghost_pink.i][ghost_pink.j]=1;
                else if (wasFoodBefore33)
                board[ghost_pink.i][ghost_pink.j]=10;
                else if (wasFoodBefore333)
                board[ghost_pink.i][ghost_pink.j]=11;
                else
                board[ghost_pink.i][ghost_pink.j]=0;
                var disi = shape.i - ghost_pink.i;
                var disj = shape.j - ghost_pink.j;
                if ((Math.abs(disi)+Math.abs(disj) <= 1))
                {
                alert ("game over man "+life);
                life--;
                Start();
                }
                else
                {
                if (Math.abs(disi)>Math.abs(disj))
                {
                    if (shape.i<ghost_pink.i){

                    if (board[ghost_pink.i-1][ghost_pink.j]== 0 || board[ghost_pink.i-1][ghost_pink.j]== 1 || board[ghost_pink.i-1][ghost_pink.j]== 2 || board[ghost_pink.i-1][ghost_pink.j]== 3 || board[ghost_pink.i-1][ghost_pink.j]== 10 || board[ghost_pink.i-1][ghost_pink.j]== 11)
                    {
                    if (board[ghost_pink.i-1][ghost_pink.j]== 1)
                    wasFoodBefore3=true;
                    else
                    wasFoodBefore3=false;
                    if (board[ghost_pink.i-1][ghost_pink.j]== 10)
                    wasFoodBefore33 = true;
                    else
                    wasFoodBefore33=false;
                    if (board[ghost_pink.i-1][ghost_pink.j]== 11)
                    wasFoodBefore333 = true;
                    else
                    wasFoodBefore333=false;
                    ghost_pink.i--;
                    }
                    }
                    else
                    {
                        if (board[ghost_pink.i+1][ghost_pink.j]== 0 || board[ghost_pink.i+1][ghost_pink.j]== 1 || board[ghost_pink.i+1][ghost_pink.j]== 2 || board[ghost_pink.i+1][ghost_pink.j]== 3 || board[ghost_pink.i+1][ghost_pink.j]== 10 || board[ghost_pink.i+1][ghost_pink.j]== 11)
                        {
                        if (board[ghost_pink.i+1][ghost_pink.j]== 1)
                        wasFoodBefore3=true;
                        else
                        wasFoodBefore3=false;
                        if (board[ghost_pink.i+1][ghost_pink.j]== 10)
                        wasFoodBefore33 = true;
                        else
                        wasFoodBefore33=false;
                        if (board[ghost_pink.i+1][ghost_pink.j]== 11)
                        wasFoodBefore333 = true;
                        else
                        wasFoodBefore333=false;
                        ghost_pink.i++;
                        }
                    }

                }
                else
                {
                    if (shape.j<ghost_pink.j)
                    {
                    if (board[ghost_pink.i][ghost_pink.j-1]== 0 ||board[ghost_pink.i][ghost_pink.j-1]== 1 || board[ghost_pink.i][ghost_pink.j-1]== 2 || board[ghost_pink.i][ghost_pink.j-1] == 3 || board[ghost_pink.i][ghost_pink.j-1] == 10 || board[ghost_pink.i][ghost_pink.j-1] == 11   )
                    {
                    if (board[ghost_pink.i][ghost_pink.j-1]== 1)
                    wasFoodBefore3=true;
                    else
                    wasFoodBefore3=false;
                    if (board[ghost_pink.i][ghost_pink.j-1]== 10)
                    wasFoodBefore33=true;
                    else
                    wasFoodBefore33=false;
                    if (board[ghost_pink.i][ghost_pink.j-1]== 11)
                    wasFoodBefore333=true;
                    else
                    wasFoodBefore333=false;
                    ghost_pink.j--;
                    }
                    }
                    else
                    {
                    if (board[ghost_pink.i][ghost_pink.j+1]== 0 ||board[ghost_pink.i][ghost_pink.j+1]== 1 || board[ghost_pink.i][ghost_pink.j+1]== 2 || board[ghost_pink.i][ghost_pink.j+1] == 3 || board[ghost_pink.i][ghost_pink.j+1] == 10 || board[ghost_pink.i][ghost_pink.j+1] == 11 )
                    {
                    if (board[ghost_pink.i][ghost_pink.j+1]== 1)
                    wasFoodBefore3=true;
                    else
                    wasFoodBefore3=false;
                    if (board[ghost_pink.i][ghost_pink.j+1]== 10)
                    wasFoodBefore33=true;
                    else
                    wasFoodBefore33=false;
                    if (board[ghost_pink.i][ghost_pink.j+1]== 11)
                    wasFoodBefore333=true;
                    else
                    wasFoodBefore333=false;
                    ghost_pink.j++;
                    }
                    }
                }
                board[ghost_pink.i][ghost_pink.j]=9;
                }
            }

            function UpdatePositionbanana(){
            
                if(ifEaten)
                {
                    board[shapeToEat.i][shapeToEat.j]=1;
                    ifEaten = false;
                }
                else
                    board[shapeToEat.i][shapeToEat.j]=0;
                
                var iForNow,jForNow;
                iForNow = shapeToEat.i;
                jForNow = shapeToEat.j;
                var rand = Math.floor(Math.random() * 4) + 1
                if(rand == 1)
                    if(shapeToEat.j>0) {
                        if(board[shapeToEat.i][shapeToEat.j-1]==0)
                            jForNow = shapeToEat.j-1;
                        if(board[shapeToEat.i][shapeToEat.j-1]==1){
                            jForNow = shapeToEat.j-1;
                            ifEaten = true;
                    }}
                if(rand == 2)
                    if(shapeToEat.j<19){
                        if(board[shapeToEat.i][shapeToEat.j+1]==0)
                            jForNow = shapeToEat.j+1;
                        if(board[shapeToEat.i][shapeToEat.j+1]==1){
                            jForNow = shapeToEat.j+1;
                            ifEaten = true;
                    }}
                if(rand == 3)
                    if(shapeToEat.i>0){
                        if(board[shapeToEat.i-1][shapeToEat.j]==0)
                            iForNow = shapeToEat.i-1;
                        if(board[shapeToEat.i-1][shapeToEat.j]==1){
                            iForNow = shapeToEat.i-1;
                            ifEaten = true;
                    }}
                if(rand == 4)
                    if(shapeToEat.i<19){
                        if(board[shapeToEat.i+1][shapeToEat.j]==0)
                            iForNow = shapeToEat.i+1;
                        if(board[shapeToEat.i+1][shapeToEat.j]==1){
                            iForNow = shapeToEat.i+1;
                            ifEaten = true;
                        }}
                
                shapeToEat.i = iForNow;
                shapeToEat.j = jForNow;
                board[shapeToEat.i][shapeToEat.j]=5;

            }

            function UpdatePositionClock(){
            
                if(ifEaten1)
                {
                    board[clock.i][clock.j]=1;
                    ifEaten1 = false;
                }
                else
                    board[clock.i][clock.j]=0;
                
                var iForNow,jForNow;
                iForNow = clock.i;
                jForNow = clock.j;
                var rand = Math.floor(Math.random() * 4) + 1
                if(rand == 1)
                    if(clock.j>0) {
                        if(board[clock.i][clock.j-1]==0)
                            jForNow = clock.j-1;
                        if(board[clock.i][clock.j-1]==1){
                            jForNow = clock.j-1;
                            ifEaten1 = true;
                    }}
                if(rand == 2)
                    if(clock.j<19){
                        if(board[clock.i][clock.j+1]==0)
                            jForNow = clock.j+1;
                        if(board[clock.i][clock.j+1]==1){
                            jForNow = clock.j+1;
                            ifEaten1 = true;
                    }}
                if(rand == 3)
                    if(clock.i>0){
                        if(board[clock.i-1][clock.j]==0)
                            iForNow = clock.i-1;
                        if(board[clock.i-1][clock.j]==1){
                            iForNow = clock.i-1;
                            ifEaten1 = true;
                    }}
                if(rand == 4)
                    if(clock.i<19){
                        if(board[clock.i+1][clock.j]==0)
                            iForNow = clock.i+1;
                        if(board[clock.i+1][clock.j]==1){
                            iForNow = clock.i+1;
                            ifEaten1 = true;
                        }}
                
                clock.i = iForNow;
                clock.j = jForNow;
                board[clock.i][clock.j]=12;

            }

            function UpdatePosition(){
                board[shape.i][shape.j]=0;           
                var x = GetKeyPressed()
                if(x==1)
                {
                	if(shape.j>0 && board[shape.i][shape.j-1]!=4)
                	{
                		shape.j--;
                	}
                }
                if(x==2)
                {
                	if(shape.j<19 && board[shape.i][shape.j+1]!=4)
                	{
                		shape.j++;
                	}
                }
                if(x==3)
                {
                	if(shape.i>0 && board[shape.i-1][shape.j]!=4)
                	{
                		shape.i--;
                	}
                }
                if(x==4)
                {
                	if(shape.i<19 && board[shape.i+1][shape.j]!=4)
                	{
                		shape.i++;
                	}
                }
                if(board[shape.i][shape.j]==1)
                {
                    foodRemain--;
                	score+=5;
                }
                
                if(board[shape.i][shape.j]==5)
                {
                    
                    window.clearInterval(interval2);
                    score+=50;
                }
                if(board[shape.i][shape.j]==10)
                {
                    
                    foodRemain--;
                	score+=15;
                }
                if(board[shape.i][shape.j]==11)
                {
                    
                    foodRemain--;
                	score+=25;
                }
                
                if(board[shape.i][shape.j]==12)
                {
                    
                    TotalTime = parseInt(TotalTime) + 10;
                    console.log("The clock has been eaten, now total time is "+TotalTime);
                    window.clearInterval(interval8);
                }

                

                
                board[shape.i][shape.j]=2;
                
                
                var currentTime=new Date();
                console.log("total time1 is " + TotalTime + "curr - start is "+ (currentTime-start_time)/1000);

                time_elapsed=(TotalTime-(currentTime-start_time)/1000);
                console.log("total time1 is " + time_elapsed);
                console.log("food remain is " + foodRemain);
            	if(foodRemain==0){
                    ClearIntervals(window);
                    audio.pause();
            		OpenWinModal();
            	}
            	else
            		Draw();

            }

            function CheckForTime(){
                var currentTime=new Date();
                time_elapsed=(TotalTime-(currentTime-start_time)/1000);
                console.log("total time1 is " + time_elapsed);
                if (time_elapsed <= 0){
                    life--;
                    alert ("Your Time Is Over!")
                    Start();
                }
            }

            function CheckForHalfScore(){

                if (foodRemain < foodForPrecent*0.5)
                {
                    if (lastColor == "y")
                    {
                    pac_color = "red";
                    lastColor = "r";
                    }
                    else
                    {
                    pac_color = "yellow";
                        lastColor = "y";
                }
                }
            }

            function CheckForLifes(){

                $("#life1").show();
                $("#life2").show();
                $("#life3").show();
               
                if (life == 2)
                {
                    $("#life3").hide();
                }
                if (life == 1)
                {
                    $("#life3").hide();
                    $("#life2").hide();
                }
                if (life == 0)
                {

                }
                
            }
