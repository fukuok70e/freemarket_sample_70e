<script>
 const pwd = document.getElementById('password');
 const pwdCheck = document.getElementById('password-check');
 pwdCheck.addEventListener('change', function() {
     if(pwdCheck.checked) {
         pwd.setAttribute('type', 'text');
     } else {
         pwd.setAttribute('type', 'password');
     }
 }, false);
 </script> 

// $(function(){
//   var password = '#password'; 
//   var passcheck = '#js-passcheck'; 

//   $(passcheck).change(function(){  
//     if ($(this).prop('checked')){   
//       $(password).attr('type','text');  
//     }
//   });
// });


// $(function(){
//   var password = '#password'; 
//   var passcheck = '#js-passcheck';

//   $(passcheck).change(function(){  
//     if ($(this).prop('checked')){   
//       $(password).attr('type','text');  
//     } else {                            
//       $(password).attr('type','password');  
//     }
//   });
// });

