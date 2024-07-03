
	
	// Date Showing Code
	
		const d = new Date();
		const t = d.getDate();
		const m = d.getMonth() + 1;
		const y = d.getFullYear();
		
		document.getElementById('show').innerHTML = t+'-'+m+'-'+y;
		
		
	// Time Showing Code
	
		const showtime = document.getElementById('time');
		
		function displaytime(){
		
			const dd = new Date();
			const tt = dd.toLocaleTimeString();
		
			showtime.innerHTML = tt;			
		}		
		setInterval(displaytime, 1000);
		
		
	// Alart Box Showing Code

		const btn = document.getElementById('showbtn');
		
		btn.addEventListener("click",function(){
			alert('Form Submited');
		});