function loginForm(){
    $.ajax({
        url: 'http://192.168.1.80:3200/api/v1/auth/sign_in',
        //url:'http://demo-ivey.herokuapp.com/api/v1/auth/sign_in',
        type:'POST',
        data:$('#myForm').serialize(),
        success:function(data, status, xhr){
            alert("Authentication Success");
            window.location = "#settlements-list"

            window.headers = window.headers || {};
            headers['Access-Token'] = xhr.getResponseHeader('Access-Token');
            headers['Uid']          = xhr.getResponseHeader('Uid');
            headers['Client']       = xhr.getResponseHeader('Client');
        },
        error: function(result){
          alert("Authentication Error");
          //console.log("Authentication Error");
        }
    });
}

$(".thisIsSparta").one('click', function() {
    $.ajax({
     type: 'GET',
     url: "http://192.168.1.80:3200/api/v1/settlements",
     headers: window.headers,
     success: function(data, status, xhr){
       alert("List of Settlements: " + JSON.stringify(data));
       //console.log("List of Settlements: " + JSON.stringify(data));
       headers['Access-Token'] = xhr.getResponseHeader('Access-Token');
       var token = headers['Access-Token'];
       alert(token);

       $.each(data, function( index, value ) {
         var row = $("<tr><td>" + value.owner_name + "</td></tr>");
         $("#myData").append(row);
       });
     },
     error: function(result){
       alert("Request Failed, Please Login again");
       //console.log("Request Failed");
       window.location = "/"
     }
    });
});
