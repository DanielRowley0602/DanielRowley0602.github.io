/*This function accepts the given email address and message and forwards them to emailJS*/
function sendEmail(params){
	var tempParams ={
		from_name:document.getElementById("fromName").value,
		message:document.getElementById("msg").value,
	};
	
	if(document.getElementById("fromName").value !== "" && document.getElementById("msg").value !== "")
	{
		if(ValidateEmail(document.getElementById("fromName").value) == true)
		{
			emailjs.send('service_pszv03g', 'template_h65qb3j',tempParams)
			.then(function myFunction() {
			alert("Your email has been sent.");
			})
		}
	} else
	{
		alert("Please input a valid email address and message.");
	}
}

/*This function judges whether or not the given email address is valid*/
function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

/*This code declares how far the smoothscroll should more*/
const scroll = new SmoothScroll('.navbar a[href*="#"]',{
	speed: 800
});