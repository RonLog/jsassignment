// 10.Write a program to accept a mark obtained by a student in computer
// science and print the grades accordingly:

function marks(){
    let cs=prompt("Enter marks in computer science")

    if(cs>=90 && cs<=100){
        document.write("Grade A")
    }
    else if(cs>=70 &&cs<90){
        document.write("Grade B")
        
    }
    else if(cs>=50 && cs<70){
        document.write("Grade C")
        
    }
    else if(cs<50 && cs>=0){
        document.write("Grade D")
        
    }
    else{
        
        document.write("Enter valid input")
    }
}
marks();