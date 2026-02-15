1. What is the difference between null and undefined?
   Ans: null: ভারিয়াবলে প্রোগ্রামার নিজে খালি মান সেট করে।
   undefined: ভারিয়াবল আছে কিন্তু কোন মান সেট করা নেই।

2. What is the use of the map() function in JavaScript? How is it different from forEach()?

3. What is the difference between == and ===?
   And: Double equal (==) -->টাইপ রুপান্তর করে ফেলে।(২=="২") এখানে স্ট্রিং ২ কে ইন্টেজার ২ এ রুপান্তর করে আউটপুট দেখায় সত্য।
   Triple equal(===)--> টাইপ রুপান্তর করেনা। (২=="২") স্ট্রিং ২ কে স্ট্রিং এই রাখে এবং আউটপুট দেখায় মিথ্যা। এটি (==) এর চেয়ে বেশি দক্ষ এবং শক্তিশালী।

4. What is the significance of async/await in fetching API data?
   Ans: async and await are used to handle asynchronous operations like API calls in a simple, readable way.

5. Explain the concept of Scope in JavaScript (Global, Function, Block).
   Ans: Global Scope:ফাংশন এর বাইরে ভারিয়াবল ডিক্লেয়ার করে।
   example:
   const x=10;
   function add(){
   console.log(x);
   }
   Function Scope:ফাংশন এর ভিতরে ভেরিয়াবল ডিক্লেয়ার করে এবং ফাংশন এর ভিতরেই অ্যাক্সেস করতে পারে।
   example:
   function add() {
   const y = 5;  
    console.log(y);
   }

Block Scope: {} এর ভিতরে ভেরিয়াবল ডিক্লেয়ার করে।
example: if (true) {
const z = 20;
console.log(z);
}
