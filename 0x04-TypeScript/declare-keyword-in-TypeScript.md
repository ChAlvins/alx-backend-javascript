
# Explain when to use “declare” keyword in TypeScript


Declare keyword in  [Typescript](https://www.geeksforgeeks.org/introduction-to-typescript/).

The declare keyword in TypeScript is used for the Ambient declaration of variables or for methods. Ambient Declarations is like an import keyword. Which tells the compiler that the source exists in another file. We use Ambient declarations in TypeScript for using the third party libraries of  [JavaScript](https://www.geeksforgeeks.org/javascript-tutorial/),  [jQuery](https://www.geeksforgeeks.org/jquery-tutorials/), [Node](https://www.geeksforgeeks.org/nodejs-tutorials/), etc. declare keyword directly integrate these libraries in our code and decrease the chance of error in our TypeScript code.

We use declare keyword only in Ambient file to use the libraries  [method](https://www.geeksforgeeks.org/what-is-the-function-type-in-typescript/) and [variables.](https://www.geeksforgeeks.org/variables-in-typescript/)

**Syntax:**
**declare var Variable_Name;**
**declare module Name_of_Module{// Body of module };**

Let’s understand with the help of the following example.

**Example:** Now let take one example we have one file which contains some useful variables but the file is written in JavaScript. So not we can say that we have to write some JavaScript code in TypeScript, It is so time-consuming that we have to write the same code in TypeScript But we have declared keywords that give the functionality to use that same variable at end of the code.

Let suppose we have third-party JavaScript code which has a variable that contains the value of some variable but we don’t not the value but with the help of declaring keyword we can use the value of the variable in our code.

**Third-party Code:**

-   Javascript

`var` `pi_1 = 3.1415926535 ;`

`var` `pi_2 = 3.14159265358979323846 ;`

`var` `pi_3 = 3.141592653589793238462643383279;`

We want to use this variable in our code so we can use them to declare the keyword with the same name and TypeScript will not throw an error.

**TypeScript Code:**

-   Javascript

`declare` `var` `pi_1 : any ;`

`console.log(``"Value of pi is :"``,pi_1)`

Now we can import both file in our HTML code and use them.

**Filename: index.html**

-   html

`<!DOCTYPE html>`

`<``html` `lang``=``"en"``>`

`<``head``>`

`<``meta` `charset``=``"UTF-8"``>`

`<``meta` `name``=``"viewport"`

`content``=``"width=device-width, initial-scale=1.0"``>`

`<``meta` `http-equiv``=``"X-UA-Compatible"` `content``=``"ie=edge"``>`

`<``title``>Document</``title``>`

`</``head``>`

`<``body``>`

`<!-- Javascript Library -->`

`<``script` `src``=`

`"C:\Users\computers\Desktop\typescript\first1.js"``>`

`</``script``>`

`<``script` `src``=`

`"C:\Users\computers\Desktop\typescript\secons.js"``>`

`</``script``>`

`</``body``>`

`</``html``>`

**Output:**

![](https://media.geeksforgeeks.org/wp-content/uploads/20220115221152/NEW.PNG)




**Read Source From :** https://www.geeksforgeeks.org/explain-when-to-use-declare-keyword-in-typescript/
