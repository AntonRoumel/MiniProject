function computeLoan(){
    var loan = document.getElementById('loan').value;
    var interest_rate = document.getElementById('interest_rate').value;
    var months = document.getElementById('months').value;
    var interest = (loan * (interest_rate * .01)) / months;
    var payment =  ((loan / months) + interest).toFixed(2);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('payment').innerHTML = "Monthly Payment= N"+payment;
}