/*
 <12회. 알고리즘>
 Bit Manipulation - set/get/update/clear bits, 2의 곱 / 나누기, 음수로 만들기 etc.
 팩토리얼
 피보나치 수
 소수 판별 (trial division 방식)
 유클리드 호제법 - 최대공약수 (GCD)
*/

// 팩토리얼
function factorial(n) {
  if (n < 2) return 1;

  return n * factorial(n - 1);
}
/*
  console.log(factorial(0)); // 1
  console.log(factorial(1)); // 1
  console.log(factorial(2)); // 2
  console.log(factorial(3)); // 6
  console.log(factorial(4)); // 24
  console.log(factorial(5)); // 120
  console.log(factorial(6)); // 720
  console.log(factorial(7)); // 5,040
  console.log(factorial(8)); // 40,320
  console.log(factorial(9)); // 362,880
  console.log(factorial(10)); // 3,628,800
  console.log(factorial(15)); // 1,307,674,368,000
  */
