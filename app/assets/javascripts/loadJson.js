    $(document).ready(function() {
 
            $('#button').click(function(){

                //start ajax request
                $.ajax({
                    url: "welcome/data.json",
                    dataType: "text",
                    success: function(data) {

                        var json = $.parseJSON(data);
                        $('table').append("<tr><th>City</th><th>Latitude</th><th>Longitude</th></tr>");
                        var tr;
                for (var i = 0; i < json.length; i++) {
                    tr = $('<tr/>');
                    tr.append("<td>" + json[i].city + "</td>");
                    tr.append("<td>" + json[i].Latitude + "</td>");
                    tr.append("<td>" + json[i].Longitude + "</td>");
                    $('table').append(tr);
                }

                      initialize(json)

                    }
                });
            });
        });


function initialize(result)
{
  //alert(result[5].Latitude);
var bounds = new google.maps.LatLngBounds();
var mapProp = {
  center: new google.maps.LatLng(result[0].Latitude,result[0].Longitude),
  zoom:4,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };
var marker;
var map=new google.maps.Map(document.getElementById("map"),mapProp);
var i,pos;
for(i=0;i<result.length;i++)
{ 
 // alert(result[0].name1);
  pos = new google.maps.LatLng(result[i].Latitude,result[i].Longitude);
  
  bounds.extend(pos);
  marker = new google.maps.Marker({
  position: pos,
  map: map
  });
  //alert(marker);
   // map.setCenter(marker.getPosition());  
}

}
