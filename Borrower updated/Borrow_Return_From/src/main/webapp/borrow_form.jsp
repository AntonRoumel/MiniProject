<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
    <link rel="stylesheet" href="form.css">
    <title>Borrow Form</title>
</head>
<body>
    <form class="">
        <font face="arial narrow">
        <a id="back" href="borrow.html"><img src="./pngfind.com-two-way-arrow-png-3499212.png"width="20px" height="30px"></a>
        <center>
        <label class="borrow1">Member ID:</label><br>
        <input class="borrow" type="number" id="loan" min="1" max="1000" onchange="computeLoan()"></p>

        <p> <br><label class="borrow1">Name:</label><br>
        <input class="borrow" type="text" id="interest_rate" onchange="computeLoan()"></p>

        <p> <br><label class="borrow1">ISBN no:</label><br>
           <input class="borrow"type="number" id="months" min="1" max="100000"  onchange="computeLoan()"></p>

           <p><br><label class="borrow1">Title:</label><br>
           <input class="borrow"type="text" id="months"  onchange="computeLoan()"> </p>
           <button class="rb" type="submit"><font size="4">Borrow Book</font></button>
        </center></font>

    </form>

</body>
</html>