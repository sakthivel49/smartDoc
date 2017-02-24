var moleculesList = [{
  id: 1,
  name: "Basic Authentication",
  description: "Login, Logout, Forget password, Change password, JWT"
},{
  id: 2,
  name: "oAuth Authentication",
  description: "Facebook, Google, Github"
},{
  id: 3,
  name: "User Management",
  description: "Create user, Update user, Delete user, Create roles, Assign roles, Assighn permissions"
},{
  id: 4,
  name: "Push Notification",
  description: "Send push notification to iOS and andriod devices"
},{
  id: 5,
  name: "Email",
  description: "Send email through email gateways like api and SMTP"
},{
  id: 6,
  name: "SMS",
  description: "Send SMS through sms api gateways"
},{
  id: 7,
  name: "Statistics",
  description: "Generate statistics from system data"
}]



$(document).ready(function() {
  moleculesList.forEach(function(feature){
      addCheckbox(feature.id, feature.name);
  });

  $('#newfeature').bind("enterKey",function(e){
    //do stuff here
    var val = $(this).val();
    $(this).val('');
    addCheckbox(val,val)
  });
  $('#newfeature').keyup(function(e){
    if(e.keyCode == 13)
    {
        $(this).trigger("enterKey");
    }
  });
});


function addCheckbox(id, name) {
   var container = $('#cblist');
   var inputs = container.find('input');
   var id = inputs.length+1;
   var div = $('<div />', { class: "checkbox"})
   var label = $('<label />', { 'for': 'cb'+id }).appendTo(div);
   $('<input />', { type: 'checkbox', id: 'feature_cb_'+id, value: id, name: name }).appendTo(label);
   $('<span />', { text: name }).appendTo(label);
   div.appendTo(container);
}
