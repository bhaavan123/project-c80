name_students=[];
display_students=[];

function submit(){
    for(var j=1;j<=4;j++){
        var name=document.getElementById("name_of_the_student_"+j).value;
    name_students.push(name);
    }

console.log(name_students);

var name_students_length=name_students.length;

for(var k=0;k<name_students_length;k++){
    display_students.push("<h4>"+name_students[k]+"</h4>");

}
document.getElementById("display_name_with_commas").innerHTML=display_students;


var remove_comma=display_students.join(" ");
document.getElementById("display_name_without_commas").innerHTML=remove_comma;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}

function sorting(){
    name_students.sort();
    display_students_array=[];
    var name_students_length=name_students.length;

    for(var k=0;k<name_students_length;k++){
        display_students_array.push("<h4>"+name_students[k]+"</h4>");
    
    }
    document.getElementById("display_name_with_commas").innerHTML=display_students_array;
    
    
    var remove_comma=display_students_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_comma;
    
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block"; 
}
