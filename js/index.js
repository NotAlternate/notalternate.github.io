function ex_basic() {
    document.getElementById("examplecode").innerHTML = "int32 main() {<br>&nbsp;&nbsp;&nbsp;&nbsp;// This example will add two numbers and prints them<br>&nbsp;&nbsp;&nbsp;&nbsp;int8 a = 5;<br>&nbsp;&nbsp;&nbsp;&nbsp;int8 b = 10;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;println(\"The sum of a and b is: ${a + b}\");<br>}";
    document.getElementById("exampleoutput").innerHTML = "The sum of a and b is: 15";
}
function ex_user_input() {
    document.getElementById("examplecode").innerHTML = "int32 main() {<br>&nbsp;&nbsp;&nbsp;&nbsp;// This example will print the user input<br>&nbsp;&nbsp;&nbsp;&nbsp;string user_input = input(\"Enter anything : \");<br><br>&nbsp;&nbsp;&nbsp;&nbsp;println(\"You entered: ${user_input}\");<br>}";
    document.getElementById("exampleoutput").innerHTML = "Enter anything : Hello, World!<br>You entered: Hello, World!";
}
function ex_functions() {
    document.getElementById("examplecode").innerHTML = "/*<br>&nbsp;&nbsp;&nbsp;&nbsp;Functions are written as:<br>&nbsp;&nbsp;&nbsp;&nbsp;return_type name(arguments)<br>*/<br><br>bool isEven(int32 num) {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (num % 2 == 0)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true;<br>&nbsp;&nbsp;&nbsp;&nbsp;else<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;<br>}<br><br>int32 main() {<br>&nbsp;&nbsp;&nbsp;&nbsp;int32 num = 5;<br><br>&nbsp;&nbsp;&nbsp;&nbsp;if (isEven(num))<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;println(\"${num} is even\");<br>&nbsp;&nbsp;&nbsp;&nbsp;else<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;println(\"${num} is odd\");<br>}";
    document.getElementById("exampleoutput").innerHTML = "5 is odd";
}
function ex_one_line() {
    document.getElementById("examplecode").innerHTML = "int32 main() { string user_input = input(\"Enter anything : \"); println(\"You entered: ${user_input}\"); }";
    document.getElementById("exampleoutput").innerHTML = "Enter anything : Hello, World!<br>You entered: Hello, World!";
}