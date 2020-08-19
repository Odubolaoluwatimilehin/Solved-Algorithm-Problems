## Alphebatically largest letter

### Find the alphebatically largest letter that occurs in both lowercase and uppercase.

We are given a string S consisting of N letters. We want to find the alphebatically largest letter that occurs in both lowercase and uppercase in S, or decide that there are no such letter.

Note: One letter is alphebatically larger than the another if it occurs later in English alphebatical order. For example, "E" is alphebatically larger than "B".

Write a function
  function solution(A)
that given a  string S, returns a string consisting of one letter -the alphebatically largest of all letters that occur in both lowercase and uppercase in S. The returned letter should be in uppercase.

If there is no such character then return "NO"

Examples:
1.Given S="aaBabcDaA", your function should return "B". Letters occurring in both lowercase and uppercase are: "A","B"("B" is alphebatically largest).

2.Given S="Codillity", your function should return "NO". There is no letter that occurs in both lowercase and uppercase.

3.Given S="WeTestCodErs", your function should return "T". Letters occurring in both lowercase and uppercase are: "E","T"("T" is alphebatically largest).

Write an efficient algorithm for the following assumptions:
• N is an integer within the range [1..200,000] 
• string S consists only of letters (a-z and/or A-Z).








