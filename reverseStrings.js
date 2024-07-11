//DESCRIPTION:
//Complete the solution so that it reverses the string //passed into it.

//'world'  =>  'dlrow'
//'word'   =>  'drow'

//mySolution

function solution(str){
  let result = ''
  for (let i = str.length - 1; i > -1; i--)
    {result += str[i]
      
    }
  return result
}