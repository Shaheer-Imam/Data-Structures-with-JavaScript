function BinaryTreeNode(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

function BinaryTree(){
	this.root = null;
}

BinaryTree.prototype.traversePostOrder = function(){
	traversePostOrderHelp(this.root);

	function traversePostOrderHelp(node){
		if(node.left)
			traversePostOrderHelp(node.left);
		if(node.right)
			traversePostOrderHelp(node.right);
		console.log(node.value);
	}
}

BinaryTree.prototype.traversePostOrderIterative = function(){
	var s1 = [],
		s2 = [];
	s1.push(this.root);
	while(s1.length){
		var node = s1.pop();
		s2.push(node);
		if(node.left)
			s1.push(node.left);
		if(node.right)
			s1.push(node.right);
	}
	while(s2.length){
		var node = s2.pop();
		console.log(node.value);
	}
}