// 汉明距离，x和y二进制相同位上零一不同的位数。
// 常规解法
function hammingDistance1(x: number, y: number): number {
  // 1. 转换为二进制字符串
  let strX = x.toString(2);
  let strY = y.toString(2);
  // 2. 对齐位数
  if (strX.length > strY.length) strY = strY.padStart(strX.length, "0");
  else strX = strX.padStart(strY.length, "0");
  let res = 0;
  // 3. 按位比较返回结果
  for (let i = 0; i < strX.length; i++) {
    if (strX[i] !== strY[i]) res++;
  }
  return res;
}
