function addNumbers() {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    //result sau khi gọi hàm
    alert("result");
    return result;
}
result = 0;
//result trước khi gọi hàm
alert("result");
result = addNumbers();
