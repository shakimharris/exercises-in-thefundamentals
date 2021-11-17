/*
Pseudo code
Create an empty hash map(key, index) -> (char, value)
Create a start and max variable, set both with initial values to zero

Loop through input string
If currentChar in HashMap and has index >= start
Set start to index for character found in Hashmap +1

Set key/value pair on Hashmap to be current Character/current index
If length of current window is greater than max
Set max to length of current window
 Return max */


 function lengthOfLongestSubstring(s){
   let windowsCharMap = {};
   let maxLength = 0;
   let windowStart = 0;

   for(i=0; i < s.length; i++){
     const endChar = s[i];
     if(windowsCharMap >= windowStart){
       windowStart = windowsCharMap[endChar] + 1;
     }
     windowsCharMap[endChar] = i;
     maxLength = Math.max(maxLength, i - windowStart +1 );
   }
   return maxLength;
 }