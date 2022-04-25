// get users data
function userRegistration(form) {
	// if any form field isn't filled don't go on
	if(!form.userEmail.value || !form.userPassword.value || !form.userFirst.value || !form.userLast.value || !form.userPhone.value || !form.street.value || !form.city.value || !form.userGender.value || !form.date.value || !form.month.value || !form.year.value) {
		
		if(form.userEmail.value !== form.userRepeatEmail.value || form.userPassword.value !== form.userRepeatPassword.value) {
			
			// VALIDATE EMAIL ADDRESS
			var emailInput = form.userEmail.value
			var regEx = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/
			var testing = (regEx.test(emailInput))
			
			if( testing !== true) {
				alert('Please entered a validated email')
				form.userEmail.focus();
				return false;
			}

			// ACCEPT TERMS
			if(!form.agreement.checked) {
				alert("Please indicate that you accept the Terms and Conditions")
				form.agreement.focus();
				return false;
			}
			alert('Sorry your Email or Password is unmatched')
			form.userEmail.focus();
			form.userPassword.focus();
			return false;
		}
		alert('Missing Data')
		return
	}

	// store all form data in an object, selecting by elements
	var registeredUser = {
		email : form.userEmail.value,
		firstname : form.userFirst.value,
		lastname : form.userLast.value,
		phone : form.userPhone.value,
		street : form.street.value,
		city : form.city.value,
		// country : form.country.value,
		gender : form.userGender.value,
		date : form.date.value,
		month : form.month.value,
		year : form.year.value,
	}

	// passing registered user info
	displayUser(registeredUser)
}

// display User Information
function displayUser(registeredUser) {
	console.log(registeredUser)

	// selecting elements
	var userEmail = document.getElementById('userEmail'),
		userName = document.getElementById('userName'),
		userPhone = document.getElementById('userPhone'),
		userAddress = document.getElementById('userAddress'),
		userGender = document.getElementById('userGender'),
		userBirthday = document.getElementById('userBirthday')

	// add text into elements
	userEmail.innerText = "Email: " + registeredUser.email
	userName.innerText = "Name: " + registeredUser.firstname + " " + registeredUser.lastname
	userPhone.innerText = "Phone: " + registeredUser.phone
	userAddress.innerText = "Address: " + registeredUser.street + " " + registeredUser.city 
	userGender.innerText = "Gender: " + registeredUser.gender
	userBirthday.innerText = "Birthday: " + registeredUser.month + "/" + registeredUser.date + "/" + registeredUser.year

	// hide registration form
	document.getElementById('newUser').style.display = "none"
	// display new register form
	document.getElementById('updatedProfile').style.display = "block"
}

// add click function to button
document.getElementById('registerButton').addEventListener('click', function() {
	userRegistration(document.newUser)
}, false)