function BinaryTreeNode(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

function BinaryTree(){
	this.root = null;
}

BinaryTree.prototype.traverseInOrder = function(){
	traverseInOrderHelp(this.root);

	function traverseInOrderHelp(node){
		if(!node)
			return;
		traverseInOrderHelp(node.left);
		console.log(node.value);
		traverseInOrderHelp(node.right);
	}
}

BinaryTree.prototype.traverseInOrderIterative = function(){
	var current = this.root;
	s=[];
	done = false;
	while(!done){
		if(current!=null){
			s.push(current);
			current = current.left;
		}
		else{
			if(s.length){
				current = s.pop();
				console.log(current.value);
				current=current.right;
			}
			else{
				done=true;
			}
		}
	}
}
