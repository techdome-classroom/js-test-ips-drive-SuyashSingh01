function smallestMissingPositiveInteger(nums) {
  nums.sort((a, b)=>a-b);
  let ans = 1;
  for(let i = 0; i < nums.length; i++)
  {
      if(nums[i] == ans)
          ans++;
  }
  return ans;
  

}

  module.exports = smallestMissingPositiveInteger;

