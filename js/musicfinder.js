$.ajax({
    url:"http://www.devcodecampmusiclibrary.com/api/music",
    dataType: "json",
    type:"get",

    success: function(data, testStatus, jqxhr){

        //do something with data (dataparameters)
    },
    error: function(jqxhr,testStatus,errorThrown){
        //if request fails, the errorthrown parameter will contain details of error

        console.log(errorThrown);
    },
    //
});