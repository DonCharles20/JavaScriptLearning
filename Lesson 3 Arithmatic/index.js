/* arithmetic operators= operands(values, varibles,etc.)
                    operators:
                    addition(+)
                    subtraction(-)
                    multiplication(*)
                    division(/)
                    exponet(**)
                    modulus(%)
                    increment(varible++)
                    decrment(varible--)

                    ex. 11=x+5

                    operator precedence
                    1. parenthesis()
                    2. exponets
                    3. multiplcation,division & modulo
                    4. addition & subtraction
*/

let students = 15;
//students=students+1; students +=1;
//students=studnts-1;  students-=1;
//students=studnts*1;  students*=1;
//students=students/1; students/=1;
//students=stuents**1; students **=1;
//let extrastudents=students % 3
students%=6;
document.getElementById("num1").textContent=(`students: ${students}`);
