function BinaryTreeNode(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

function BinaryTree(){
	this.root = null;
}

BinaryTree.prototype.traversePreOrder = function(){
	traversePreOrderHelp(this.root);

	function traversePreOrderHelp(node){
		if(!node)
			return;
		console.log(node.value);
		traversePreOrderHelp(node.left);
		traversePreOrderHelp(node.right);
	}
}

BinaryTree.prototype.traversePreOrderIterative = function(){
	var nodeStack = [];
	nodeStack.push(this.root);
	while(nodeStack.length){
		var node = nodeStack.pop();
		console.log(node.value);
		if(node.right)
			nodeStack.push(node.right);
		if(node.left)
			nodeStack.push(node.left);
	}
}