async function fun(){
  const ans= await answer();
  console.log(ans)
}

function answer():number{
  return 1+2;
}

fun()
