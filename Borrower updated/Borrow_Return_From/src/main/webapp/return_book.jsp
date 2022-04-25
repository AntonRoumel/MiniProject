<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Return Form</title>
<link rel="stylesheet" href="form.css">
<title>Insert title here</title>
</head>
<body>
<form class="form3">
        <font face="arial narrow">
        <a id="back" href="borrow.html"><img src="./pngfind.com-two-way-arrow-png-3499212.png"width="20px" height="30px"></a>
        <label class="return2">Member ID:</label>
        <input class="return3" type="number" id="loan" min="1" max="1000" onchange="computeLoan()">
        <label class="return">Name:</label>
        <input class="return1" type="text" id="interest_rate" onchange="computeLoan()">
        <label class="return4">ISBN no:</label>
        <input class="return5"type="number" id="months" min="1" max="100000"  onchange="computeLoan()">
        <label class="return6">Title:</label>
        <input class="return7"type="text" id="months"  onchange="computeLoan()">
        <button class="rbg" type="button" id="Return Book"><font size="4">Book Returned</font></button>
        <button class="rbg1" type="button" id="search"><font size="3">search</font></button>

        
        <h1>HISTORY</h1>
        <table class="tab"> 
            <thead> 
                <tr>     
              <th>ISBN no.</th>
              <th>Date Borrowed</th>
              <th>Date Returned</th> 
              <th>Fine</th>
                </tr> 
            </thead> 
            <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
            </tr>
        </tbody>
          </table>
    </form>
  </font>
</body>
</html>