import "./styles.css";
let PreOrder = [];
let postorder = [];
(function Traversal(n) {
  PreOrder = [...PreOrder, n];
  if (n > 2) {
    Traversal(n - 1);
    Traversal(n - 2);
    Traversal(n - 3);
  }
  postorder = [...postorder, n];
  return Traversal;
})(5);

var listPreOrder = PreOrder.map((D) => "<b>" + D + "</b>");
var listpostorder = postorder.map((D) => "<b>" + D + "</b>");
document.getElementById("app").innerHTML = `
<img src="./src/tree.png" width="300px"/>
<h1>Multiple Recursive Calls</h1>
<div>
Preorder traversal   =>   ${listPreOrder}
<br/>
Postorder traversal =>  ${listpostorder}
</div>
`;
