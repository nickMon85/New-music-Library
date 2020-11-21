function findMusic(){
    $.ajax({
        url:"http://www.devcodecampmusiclibrary.com/api/music",
        dataType: "json",
        type:"get",

        success: function(data, testStatus, jqxhr){
        //Api needs to run successfully
        //do something with data (dataparameters)
                console.log(data);
                $("#tableBody").html("");
                for(let i =0;i,data.length;i++){
                $("#tableBody").append("<tr>"
                    +"<td>"+ data[i].title+ "</td>"
                    +"<td>"+ data[i].album +"</td>"
                    +"<td>"+ data[i].artist+"</td>"
                    +"<td>"+ data[i].genre+ "</td>"
                    +"<td>"+ data[i].releaseDate+ "</td>"
                +"</tr>");
            $("#musicTitles").append("<tr><td>"+ data[i].title+"</tr></td>");
            $("#musicAlbums").append("<tr><td>"+ data[i].album+"</tr></td>");
            $("#musicArtist").append("<tr><td>"+ data[i].artist+"</tr></td>");
            $("#musicGenre").append("<tr><td>"+ data[i].genre+"</tr></td>");
            $("#musicReleaseDate").append("<tr><td>"+ data[i].releaseDate+"</tr></td>");
            }
        },
        error: function(jqxhr,testStatus,errorThrown){
        //if request fails, the errorthrown parameter will contain details of error

            console.log(errorThrown);
        },
    
    });
};
findMusic();

