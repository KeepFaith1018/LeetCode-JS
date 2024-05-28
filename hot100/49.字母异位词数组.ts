// 不同的字符串排序后的结果相同,所以将排序后的结果作为key,字符串数组充当value
function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map();
  for (let i = 0; i < strs.length; i++) {
    let key = strs[i].split("").sort().join("");
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)?.push(strs[i]);
  }
  return [...map.values()];
}
