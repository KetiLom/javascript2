/* წინა დავალებიდან გადმოიტანეთ ფუნქცია getRandomNumber რომელიც იღებს a და b 
 პარამეტრებს და აბრუნებს შემთხვევით რიცხვებს a-დან b-მდე */
function getRandomNumber(a, b) {
    return Math.floor(Math.random() * (b - a)) + a;
}
console.log(getRandomNumber(2, 5));
/*დაწერეთ ფუნქცია, რომელიც მიიღებს ერთ პარამეტრს(n - ნატურალური რიცხვი) და დააბრუნებს
n სიგრძის მასივს, რომელშიც იქნება 0 - დან 100 - მდე შემთხვევითი რიცხვები.შემთხვევითი
რიცხვის მისაღებად გამოიყენეთ უკვე დაწერილი ფუნქცია getRandomNumber.ფუნქციის მიერ დაბრუნებული
მასივი შეინახეთ ცვლადში randomNumbers*/
function generateArray(n) {
    var randomNumbers = [];
    for (i = 1; i <=n ; i++) {
        var random = getRandomNumber(0, 100);
        randomNumbers.push(random);
    }return  console.log(randomNumbers);
}
console.log(generateArray(5));
/*3.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს #2 ფუნქციის მიერ დაბრუნებულ 
 მასივს randomNumbers, ამ მასივში იპოვის და დააბრუნებს უდიდეს რიცხვს.
 function getMaxNumber(n){
    var array =generateArray(n);
    var max = array[1];
    for (i=1;i<n;i++){
        if(array[i]>max){
             max=array[i]
        }
    }
    return console.log(max);
 }
 console.log(getMaxNumber(5));*/

 /*4.დაწერეთ ფუნქცია, რომელსაც პარამეტრად გადაეცემა მასივი და აბრუნებს შეტრიალებულ მასივს.
  მაგალითად თუ პარამეტრად გადავცემთ [1, 2, 3] მასივს, უნდა დააბრუნოს [3, 2, 1] მასივი.*/
function reverseArray(){
    var array=[1,2,3]
    return console.log(array.reverse());
}
console.log(reverseArray());
/*5.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ნატურალურ რიცხვს და დააბრუნებს true -ს თუ რიცხვი
 არის მარტივი, ან false -ს თუ რიცხვი არ არის მარტივი. მარტივია რიცხვი, რომელიც მხოლოდ 1-ზე და თავისთავზე იყოფა. 
 მარტივი რიცხვებია: 2, 3, 5, 7, 11 და ა.შ.*/
 function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}
console.log(isPrime(6));
/*6.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს (a, b) და დააბრუნებს მასივს, რომელშიც მოქცეული იქნება a -დან b -მდე ყველა მარტივი რიცხვი. მაგალითად თუ პარამეტრად მიიღებს 
0 -ს და 12 -ს უნდა დააბრუნოს [2,3,5,7,11]. მარტივი რიცხვის დასადგენად გამოიყენეთ #5 პუნქტში აღწერილი ფუნქცია.*/
function getPrimeNumber(a,b){
    var array=[];
    for (i=a; i<=b; i++)
        if (isPrime(i))
            array[i]=i;
        return console.log(array);
}

console.log(getPrimeNumber(3,15));

/*7. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტს გააჩნია name და age ველები. (გაკეთებული გვაქვს #11 დავალებაში).
შემდეგ შექმენით ფუნქცია, რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს ყველაზე ახალგაზრდა ობიექტს (რომლის age ველიც არის უმცირესი).*/

/*8. შექმენით ფუნქცია, რომელიც პარამეტრად მიიღებს ნატურალურ რიცხვს და დააბრუნებს მასივის სახით
 ყველა ამ რიცხვის გამყოფს. მაგალითად თუ პარამეტრად მიიღებს რიცხვს 10 უნდა დააბრუნოს [1, 2, 5, 10]*/

 function getProductOf(n){
    var array=[];
    for(i=1; i<=10;i++)
        if(n%i===0)
            array[i]=i;
        return console.log(array);
 }
 console.log(getProductOf(10));
 /*9.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ ნატურალურ რიცხვს და და დააბრუნებს ამ რიცხვების უმცირეს საერთო ჯერადს (უსჯ). 
 უმცირესი საერთო ჯერადი არის რიცხვი,  რომელიც ორივე რიცხვზე იყოფა. მაგალითად 3 -ს და 4-ს უმცირესი
  საერთო ჯერადია - 12, ხოლო 6 -ის და 18 -ის უმცირესი საერთო ჯერადია 18.*/
  function lcm(a,b){
    if(a>b&&a%b==0){
        return console.log(a);
    }else if(b>a&&b%a==0){
        return console.log(b);
    }
    else if(b>a&&b%a!=0){
        for(i=a; i<=a*b; i++){
            if(i%b==0&&i%a==0){
                return console.log(i);
            }
        }
    }
    else if(b<a&&a%b!=0){
        for(i=b; i<=a*b; i++){
            if(i%a==0&&i%b==0){
                return console.log(i);
                }
        }
    }
  }
  console.log(lcm(2,7));