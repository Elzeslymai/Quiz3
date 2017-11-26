axios.get('http://localhost:3000/users') 
.then(function (response) {
  console.log(response.data.length);
  for(i=0; i<response.data.length; i++){
    $('#data').append(
      '<tr><th scope="row" id="num">'+ response.data[i].id +'</th>'+
      '<td id="firstname">'+ response.data[i].first_name +'</td>'+
      '<td id="lastname">'+ response.data[i].last_name +'</td>'+
      '<td id="expired">'+ response.data[i].expired +'</td>'+
      '<td id="role">'+ response.data[i].role +'</td></tr>'
    );
  }
})
.catch(function (error) {
  console.log(error);
});