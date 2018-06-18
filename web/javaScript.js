
//МОДАЛЬНЫЕ ОКНА
$(document).ready(function() {
 $(".add__leng").click(function () {
     $(".modal").fadeIn(300);
     $("#m_title").css("display","block"); 
	      $("#name").val("");
		  $("#Release_year").val("");
	   	  $("#desinger").val("");
	   	  $("#website").val("");
	 
   });
     $("#but_add-1").click(function () {
     $('#m_title').css('display','none');	
   	 $(".modal").fadeIn(300);
   	 $("#name").val("Python");
   	 $("#Release_year").val("1991");
   	 $("#desinger").val("Guido van Rossum");
   	 $("#website").val("https://python.org/','__v':0");
   	 
	}); 



 });
     $("#but_add-2").click(function () {
   	 $(".modal").fadeIn(300);
   	 $("#name").val("Javacript");
   	 $("#Release_year").val("1995");
   	 $("#desinger").val("Brendan Eich");
   	 $("#website").val("http://developer.mozilla.org/en-US/docs/Web/JavaScript','__v");
 });

  
     $("#but_add-3").click(function () {
   	 $(".modal").fadeIn(300);
   	 $("#name").val("Php");
   	 $("#Release_year").val("1995");
     $("#desinger").val("Rasmus Lerdorf");
	 $("#website").val("https://php.net/','__v");
      });


      $("#but_add-4").click(function () {
 	  $(".modal").fadeIn(300);
	  $("#name").val("C#");
	  $("#Release_year").val("2000");
   	  $("#desinger").val("Андерс Хейлсберг");
   	  $("#website").val("https://www.visualstudio.com/','__v");
 });
   $("#close").click(function () {
   	  $(".modal").css("display","none")
   });
   $(document).click(function(event) {
	    if ($(event.target).closest(".modal").length || $(event.target).closest("#but_add-1").length || $(event.target).closest("#but_add-2").length || $(event.target).closest("#but_add-3").length || $(event.target).closest(".add__leng").length
	    	|| $(event.target).closest("#but_add-4").length
	     || $(event.target).closest(".cont__cap__str-but").length) return;
	    $('.modal').fadeOut(300);
	    $('#m_title').fadeOut(300);
	    event.stopPropagation();

});
  // УДАЛЕНИЕ ЭЛЕМЕНТОВ
  $('#dell_one').click(function () {
  	 $('#nameCOl_1_1').text("");
  	 	 $('#nameCOl_1_2').text("");
  	 	 	 $('#nameCOl_1_3').text("");
  	 	 	 	 $('#nameCOl_1_5').text("");
  });
   $('#dell_two').click(function () {
  	 $('#nameCOl_2_1').text("");
  	 	 $('#nameCOl_2_2').text("");
  	 	 	 $('#nameCOl_2_3').text("");
  	 	 	 	 $('#nameCOl_2_5').text("");
  }) ;
   $('#dell_three').click(function () {
  	 $('#nameCOl_3_1').text("");
  	 	 $('#nameCOl_3_2').text("");
  	 	 	 $('#nameCOl_3_3').text("");
  	 	 	 	 $('#nameCOl_3_5').text("");
  });
    $('#dell_fo').click(function () {
  	 $('#nameCOl_4_1').text("");
  	 	 $('#nameCOl_4_2').text("");
  	 	 	 $('#nameCOl_4_3').text("");
  	 	 	   $('#nameCOl_4_4').text("");
  	 	 	 	 $('#nameCOl_4_5').text("");
  });
