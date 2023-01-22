var isFly = confirm("Do you Fly?");
if (isFly)
{
    var isWild=confirm("Are you wild?");
    if (isWild)
    {
        alert("You Are Eagle !");
    }else
    {
        alert("You Are Parrot !");
    }
}else
{
    var SeaAnimal =confirm("Do You Live Under The Sea?");
    isWild =confirm("Are you wild?");
    if( SeaAnimal && isWild)
    {
        alert ( "You Are Shark!");
    }
    else if( SeaAnimal && !isWild)
    {
        alert ( "You Are Dolphin!");
    }
    else if( !SeaAnimal && isWild)
    {
        alert ( "You Are Lion!");
    }
    else
     alert ( "You Are Cat!");
}