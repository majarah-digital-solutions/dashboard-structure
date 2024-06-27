
const generateNum = (firstNum:number, endNum:number) => {
  let nums = [];
  for (let num = firstNum; num <= endNum; num++) {
    nums.push({_id:num.toString(),title:num.toString()});
  }
  return nums;
};
export default generateNum;