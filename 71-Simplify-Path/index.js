/**
 * @param {string} path
 * @return {string}
 */
const head = x => x[0];
const tail = x => x[x.length - 1];

var simplifyPath = function(path) {
  const stack = [];
  const cp = path.replace(/\/+/g, "/");
  const paths = cp.split("/").filter(x => x !== "");

  let i = 0;
  while (i < paths.length) {
    if (paths[i] === ".") {
    } else if (paths[i] === "..") {
      stack.pop();
    } else {
      stack.push("/" + paths[i]);
    }
    i++;
  }
  if (stack.length === 0) stack.push("/");
  return stack.join("");
};

const t0 = "/a//b////c/d//././/..";
const t1 = "/a/../../b/../c//.//";
const t2 = "/../";
const t3 = "/a/./b/../../c/";
const t4 = "/home/";

const test = [t0, t1, t2, t3, t4];

for (let t of test) {
  console.log(simplifyPath(t));
}
