alert("this page say hi");

function myfunction()
{
	var ques=document.getElementById("title").value;
	var des=document.getElementById("description").value;

	if(ques=="")
	{
		alert("please enter the tile");

	}

	if(des=="")
	{
		alert("please enter the discription");
	}

	else

	{
		alert("do really want to submit");
	}

}var count=false;
var likeclicks=14;
var dislikeclicks=1;
var discount=false;
function liked()
{
document.getElementById("like").classList.toggle("text-success");
if (count== false){
		
        likeclicks += 1;
        
        count=true;
        }
        else
        {
        	likeclicks -= 1;
        	count=false;
        }
        document.getElementById("likeclicks").innerHTML = likeclicks;

	}
function disliked()
{
	document.getElementById('dislike').classList.toggle('text-danger');
		if (discount== false){
		
        dislikeclicks += 1;
        
        discount=true;
        }
        else
        {
        	dislikeclicks -= 1;
        	discount=false;
        }
        document.getElementById("dislikeclicks").innerHTML = dislikeclicks;
	}
