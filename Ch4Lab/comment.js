"use strict"

$( function() {
	var commentInput = $(".comment-input input");
	
	function processCommentInput() {
		var $new_comment;
		
		if ($(".comment-input input").val() !== "") {
			$new_comment = $("<p>").text($(".comment-input input").val());
			$(".comments").append($new_comment);
			$(".comment-input input").val("");
	}
		
	};
	
	$(commentInput).on("keypress", function(event)
	{
		if (event.keyCode === 13)
		{
			processCommentInput();
		}
	});
	
	$(".comment-input button").on("click", function (event) {
		var $new_comment;
		
		if ($(".comment-input input").val() !== "") {
			$new_comment = $("<p>").text($(".comment-input input").val());
			$(".comments").append($new_comment);
			$(".comment-input input").val("");
		}
		
	});
	
});