//================= Operators in Typescript || part 01 || Arithmetic + Assignment + String ===================================

//******** Arithmetic Operators **********

//let x : number = 10;
//let y : number = 5;

//let sum : number = x +y

//console.log(sum);


//let x : number = 10;
//let y : number = 5;

//let sum : number = x - y

//console.log(sum);


//let x : number = 10;
//let y : number = 5;

//let sum : number = x * y

//console.log(sum);



//let x : number = 10;
//let y : number = 5;

//let sum : number = x / y

//console.log(sum);


//let x : number = 10;
//let y : number = 5;

//let sum : number = x % y

//console.log(sum);



//let x : number = 10;
//let y : number = 5;

//let sum : number = x++

//console.log(sum);


//let x : number = 10;
//let y : number = 5;

//let sum : number = ++x

//console.log(sum);


//let x : number = 10;
//let y : number = 5;

//let sum : number = --x

//console.log(sum);


//let x : number = 10;
//let y : number = 5;

//let sum : number = x--

//console.log(sum);


//********* Assignment Operators ********************


//let x : number = 10;
//let y : number = 5;

//x+=y  // x = x+y
//y+=x  // y = x+y



//console.log(x);
//console.log(y);


// *************** String  Operators *******************

//var msg : string = "Muhammad" + " " + "Yousuf"

//console.log(msg);



// ========================== Logical Operators (Real Examples) ======================================

//let isBookAvailable : Boolean = true
//let usrerBorrowedBooks : number = 5
//const maxAllowedBooks : number = 3

//if (isBookAvailable && usrerBorrowedBooks < maxAllowedBooks) {
    //console.log("aap book borrow kar sakte hain!");
//} else {
    //console.log("aap book borrow nahi kar sakte hain";)
//}




//let isBookAvailable : Boolean = true
//let usrerBorrowedBooks : number = 2
//const maxAllowedBooks : number = 3

//if (isBookAvailable && usrerBorrowedBooks < maxAllowedBooks) {
    //console.log("aap book borrow kar sakte hain!");
//} else {
    //console.log("aap book borrow nahi kar sakte hain";)
//}



//let isBookAvailable : Boolean = true
//let usrerBorrowedBooks : number = 2
//const maxAllowedBooks : number = 3

//if (isBookAvailable && usrerBorrowedBooks > maxAllowedBooks) {
    //console.log("aap book borrow kar sakte hain!");
//} else {
    //console.log("aap book borrow nahi kar sakte hain";)
//}



//let isBookAvailable : Boolean = true
//let usrerBorrowedBooks : number = 5
//const maxAllowedBooks : number = 3

//if (isBookAvailable && usrerBorrowedBooks > maxAllowedBooks) {
    //console.log("aap book borrow kar sakte hain!");
//} else {
    //console.log("aap book borrow nahi kar sakte hain";)
//}


//let hasCoupomCode : Boolean = true
//let orderAmount : number = 1900
//let isMember : Boolean = true

//if (hasCoupomCode || (orderAmount > 1000 && isMember)) {
    //console.log("aap ko Discount Mil Gaya Hain")    
//} else {
    //console.log("aap ko Discount nahi mile ga")
//}



//let hasCoupomCode : Boolean = true
//let orderAmount : number = 1900
//let isMember : Boolean = true

//if (hasCoupomCode || (orderAmount > 2000 && isMember)) {
    //console.log("aap ko Discount Mil Gaya Hain")    
//} else {
    //console.log("aap ko Discount nahi mile ga")
//}

// =================== Ternary Operators (Real Examples) ==================================

// Condition or Condition ? Expression 1 : Expression 2

//let userName = " Muhammad Yousuf"

//if (userName = "Muhammad Yousuf") {
    //console.log("You are successfully login");

//} else {
    //console.log("invalid username");
//}


//let userName = "Muhammad Yousuf"
//?console.log("you are logged in")
//: console.log("invalid username")


//let userName = "Yousuf"
//? console.log("you are logged in")
//: console.log("invalid username")


// ======================= Unary Operators (Real Examples) =================

// Increment & Decrement  // ++ --

// Post & Pre Increment - Decremnet 

// ++ Variable  Variable++  //   --Variable  Variable-- 

//let count : number = 0

// Incremnet the count  by 1

// count++ //  count = count+1

// console.log("count after increment :", count)

// // Decremnet the count  by 1

// let remainingItems : number = 10

// remainingItems--;

// console.log("remaining item  after decremnet:", remainingItems)


//let x : number = 5

// Post increment 

//let psotincrement : number = x++

//console.log("post increment value :", psotincrement)
//console.log("value after post increment" , x);


//let pretincrement : number = ++x

//console.log("pre-increment value :", pretincrement)
//console.log("value after pre increment" , x);



//let x : number = 5

// Post decremnet 

//let psotdecremnet : number = x--

//console.log("post decremnet value :", psotdecremnet)
//console.log("value after post decremnet" , x);


//let predecremnet : number = --x

//console.log("pre-decremnet value :", predecremnet)
//console.log("value after pre decremnet" , x);


//******************* Relational / Comparison Operator (== , === , < , <== , > , >==)

// let num1 = 20;
// let num2 = 10;
// let num3 = 5;
// let num4 = 20;

// console.log(num1 == num2)    // ----> Boolean  ( True / Flase) Answer is False


// let num1 = 20;
// let num2 = 10;
// let num3 = 5;
// let num4 = 20;

// console.log(num2 == num1)    // ----> Boolean  ( True / Flase) Answer is False


//let num1 = 20;
// let num2 = 10;
// let num3 = '5';
// let num4 = 20;
// let num5 = 5;
// let num6 = 10;
// let num7 = 30

// Equal ===

//console.log(num1 == num2)    // ----> Boolean  ( True / Flase) Answer is False
//console.log(num1 === num2)   // ----> Boolean  ( True / Flase) Answer is False
//console.log(num3 === num5)    // ----> Boolean  ( True / Flase) Answer is Error q ke num 3 main sting hain num 5 number ais lye error dain ga

//Less Than <

//console.log(num2 < num1)   // ----> Boolean  ( True / Flase) Answer is True
//console.log(num1 < num2)   // ----> Boolean  ( True / Flase) Answer is False


// less Than or Equal to

//console.log(num2 <= num1)      // ----> Boolean  ( True / Flase) Answer is True
//console.log(num2 <= num6)      // ----> Boolean  ( True / Flase) Answer is True 
//console.log(num7 <= num1)      // ----> Boolean  ( True / Flase) Answer is Flase

//Greater Than >

//console.log(num2 > num1)      // ----> Boolean  ( True / Flase) Answer is False
//console.log(num2 > num6)      // ----> Boolean  ( True / Flase) Answer is False
//console.log(num7 > num1)      // ----> Boolean  ( True / Flase) Answer is True


// Greater Than or Equal To >==

// console.log(num2 >= num1)      // ----> Boolean  ( True / Flase) Answer is False
// console.log(num2 >= num6)      // ----> Boolean  ( True / Flase) Answer is True
// console.log(num7 >= num1)      // ----> Boolean  ( True / Flase) Answer is True


//******************** Logical Operators  ( And > && or || not !)

//And (&&)

//let x = 10;

//console.log(x===10);

//console.log(true && true)
//console.log(true && false)
//console.log(false && false)
//console.log(false && false)

// Or (||)

//let a = 10;
//let b = 20

//console.log(true || true)
//console.log(true || false)
//console.log(false || false)
//console.log(false || false)

//console.log(a===10 || b===12)
//console.log(a===10 || b===20)
//console.log(a===1 || b===12)
//console.log(a===12 || b===1)

// Not (!)

//console.log(!true === false)
//console.log(!false === true)

//let a = 10;
//let b = 20

//console.log(a!==10);
//console.log(b!==10);