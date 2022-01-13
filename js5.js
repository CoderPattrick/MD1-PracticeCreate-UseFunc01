let arr1=["Polaris","Aldebaran","Deneb","Vega","Altair","Dubhe","Regulus"];
let arr2=['Ursa Minor','Tarurus','Cygnus','Lyra','Aquila','Ursa Major','Leo'];
// function action1(){
//     let star = document.getElementById("input1").value;
//     find(star);
// }
function find(n){
    let check = true;
    let result =""
    for (let i = 0; i < arr1.length; i++) {
        if(n==arr1[i]){
            // alert("Ngôi sao " + n + " thuộc chòm "+ arr2[i]);
            result += "Ngôi sao " + n + " thuộc chòm "+ arr2[i];
            check = false;
            break;
        }
        }
    if(check){
        // alert("Ngôi sao " + n + " không thuộc chòm sao nào, hoặc không tồn tại trong dữ liệu.")
        result += "Ngôi sao " + n + " không thuộc chòm sao nào, hoặc không tồn tại trong dữ liệu.";
    }
    document.getElementById("result").innerHTML = result;
}
// let a = prompt("Mời bạn nhập tên ngôi sao muốn định vị");
// find(a);
