function longestPalindrome(s){
  let startIndex = 0;
  let maxLength = 1;
}

  function Center(left, right){
    while(left >= 0 && right < s.length && s[left] === s[right]){
      const PalindromeLength = right - left + 1;
      if(PalindromeLength > maxLength){
        maxLength = PalindromeLength;
        startIndex = left;
      }
      left =+ 1;
      right += 1;
  for(let i=0; i < s.length; i++){
    Center(i - 1, i + 1);
    Center(i, i+1);
  }
  return s.slice(startIndex, startIndex + maxLength);
}