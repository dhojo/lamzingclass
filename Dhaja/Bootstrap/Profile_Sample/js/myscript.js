
//Home Body hide
$(document).ready(function(){
			
			$("#nav_home").click(function()
			{
				$("#introduction_description").hide();
				$("#xp_description").hide();
				$("#qualific_description").hide();
				$("#photo_show").hide();
			}  );
	
		});


//Introduction Hide and Show
	$(document).ready(function(){
				$("#introduction_description").hide();
			
			$("#intro").hover(function()
			{
				$("#introduction_description").toggle();
			}  );
	
		});
	
		$(document).ready(function(){
				$("#introduction_description").hide();
			
			$("#nav_intro").hover(function()
			{
				$("#introduction_description").toggle();
				$("#xp_description").hide();
				$("#qualific_description").hide();
				$("#photo_show").hide();
			}  );
	
		});
	
//--------------------------------------------------------------
//Interests Hide and Show
	$(document).ready(function(){
				$("#xp_description").hide();
			
			$("#xp").hover(function()
			{
				$("#xp_description").toggle();
			}  );
	
		});
		
			$(document).ready(function(){
				$("#xp_description").hide();
			
			$("#nav_xp").hover(function()
			{
				$("#xp_description").toggle();
				$("#introduction_description").hide();
				$("#qualific_description").hide();
				$("#photo_show").hide();
			}  );
	
		});
//--------------------------------------------------------------
//Qualification Hide and Show
		
	$(document).ready(function(){
				$("#qualific_description").hide();
			
			$("#qualific").hover(function()
			{
				$("#qualific_description").toggle();
			}  );
	
		});
		
	$(document).ready(function(){
				$("#qualific_description").hide();
			
			$("#nav_qualific").hover(function()
			{
				$("#qualific_description").toggle();
				$("#introduction_description").hide();
				$("#xp_description").hide();
				$("#photo_show").hide();
			}  );
	
		});	
//--------------------------------------------------------------		
		
//Works Hide and Show	
	$(document).ready(function(){
				$("#photo_show").hide();
			
			$("#works").hover(function()
			{
				$("#photo_show").toggle();
			}  );
	
		});
	
	$(document).ready(function(){
				$("#photo_show").hide();
			
			$("#nav_works").hover(function()
			{
				$("#photo_show").toggle();
				$("#introduction_description").hide();
				$("#xp_description").hide();
				$("#qualific_description").hide();
			}  );
	
		});
//--------------------------------------------------------------
	
	