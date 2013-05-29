DieRoles = {};

DieRoles.render = function(){

  var elements = $();

  // HINT: change this to get the roles from the server somehow.
  var roles = $('ol').attr('data-number').split('');

  roles.forEach(function(role){
    elements = elements.add($('<li>').text(role));
  });

  return elements;
};

$(function(){
  $('.die-roles').html(DieRoles.render());
});
