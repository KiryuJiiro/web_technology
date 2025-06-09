var count = 2;
var global_matrix = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
//add circle sectoion
let add_circle = () =>
{
    if(count%2==0){
        document.getElementsByClassName("inner")[0].classList.add("circle")
        count=count+1;
    }
    else
    {
        document.getElementsByClassName("inner")[0].classList.add("square")
        count=count+1;
    }
}

let add_circle1 = () =>
{
    if(count%2==0){
        document.getElementsByClassName("inner")[1].classList.add("circle")
        count++;
    }
    else
    {
        document.getElementsByClassName("inner")[1].classList.add("square")
        count++;
    }
}

let add_circle2 = () =>
{
    if(count%2==0){

        document.getElementsByClassName("inner")[2].classList.add("circle")
        count++;
    }
    else
    {
        document.getElementsByClassName("inner")[2].classList.add("square")
        count++;
    }
}

let add_circle3 = () =>
{
    if(count%2==0){

        document.getElementsByClassName("inner")[3].classList.add("circle")
        count++;
    }
    else
    {
        document.getElementsByClassName("inner")[3].classList.add("square")
        count++;
    }
}

let add_circle4 = () =>
{
    if(count%2==0){

        document.getElementsByClassName("inner")[4].classList.add("circle")
        count++;
    }
    else
    {
        document.getElementsByClassName("inner")[4].classList.add("square")
        count++;
    }
}

let add_circle5 = () =>
{
    if(count%2==0){

        document.getElementsByClassName("inner")[5].classList.add("circle")
        count++;
    }
    else
    {
        document.getElementsByClassName("inner")[5].classList.add("square")
        count++;
    }
}

let add_circle6 = () =>
{
    if(count%2==0){

        document.getElementsByClassName("inner")[6].classList.add("circle")
        count++;
    }
    else
    {
        document.getElementsByClassName("inner")[6].classList.add("square")
        count++;
    }
}

let add_circle7 = () =>
{
    if(count%2==0){

        document.getElementsByClassName("inner")[7].classList.add("circle")
        count++;
    }
    else
    {
        document.getElementsByClassName("inner")[7].classList.add("square")
        count++;
    }
}

let add_circle8 = () =>
{
    if(count%2==0){

        document.getElementsByClassName("inner")[8].classList.add("circle")
        count++;
    }
    else
    {
        document.getElementsByClassName("inner")[8].classList.add("square")
        count++;
    }
}

//logic part
// let win_cond0 = () =>
// {
//     let mat01 = [
//         [1,1,1],
//         [0,0,0],
//         [0,0,0]
//     ]
//     let mat02 = [
//         [1,0,0],
//         [1,0,0],
//         [1,0,0]
//     ]
//     let mat03 = [
//         [1,0,0],
//         [0,1,0],
//         [0,0,1]
//     ]
//     let mat04 = [
//         [0,1,0],
//         [0,1,0],
//         [0,1,0]
//     ]
//     let mat05 = [
//         [0,0,1],
//         [0,0,1],
//         [0,0,1]
//     ]
//     let mat06 = [
//         [0,0,0],
//         [0,0,0],
//         [1,1,1]
//     ]
//     let mat07 = [
//         [1,1,1],
//         [0,0,0],
//         [0,0,0]
//     ]
//     let mat08 = [
//         [1,1,1],
//         [0,0,0],
//         [0,0,0]
//     ]
// }

// let check_win = (arr) =>
// {
//     if()
// }