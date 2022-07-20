names=[];
function Submit()
    {
        var n1= document.getElementById("name_of_s1").value;
        var n2= document.getElementById("name_of_s2").value;
        var n3= document.getElementById("name_of_s3").value;
        var n4= document.getElementById("name_of_s4").value;
        names.push(n1);
        names.push(n2);
        names.push(n3);
        names.push(n4);
        document.getElementById("display_name").innerHTML=names;
        document.getElementById("submit_btn").style.display="none";
        document.getElementById("sort_btn").style.display="inline-block";
    }
function Sorting()
{
    names.sort();
    document.getElementById("display_name").innerHTML=names;
}