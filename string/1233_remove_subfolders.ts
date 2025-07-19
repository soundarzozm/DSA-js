function removeSubfolders(folder: string[]): string[] {
  let ans: string[] = [];

  let set = new Set([...folder]);

  for (let i = 0; i < folder.length; ++i) {
    let parent = getParent(folder[i]);
    let isSub = false;
    while (parent !== "") {
      if (set.has(parent)) {
        isSub = true;
        break;
      }
      parent = getParent(parent);
    }
    if (!isSub) ans.push(folder[i]);
  }

  return ans;
}

function getParent(path: string): string {
  let dirs = path.split("/");
  dirs.pop();

  return dirs.join("/");
}

let folder = ["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"];
console.log(removeSubfolders(folder));
// console.log(getParent(folder[2]));
