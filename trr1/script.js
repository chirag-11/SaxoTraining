	var i = 0;
		var progressBar = document.getElementById("bar");
		function countNumbers(){
			if(i < 100){
				i = i + 1;
				progressBar.value = i;
				// For browsers that don't support progress tag
				progressBar.getElementsByTagName("span")[0].textContent = i;
			}
			// Wait for sometime before running this script again
			setTimeout("countNumbers()",50);
		}
		countNumbers();