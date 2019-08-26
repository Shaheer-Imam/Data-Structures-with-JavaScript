function BinaryTreeNode(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

function BinarySearchTree(){
	this.root = null;
}

BinarySearchTree.prototype.insert = function(value){
	var thisNode = { left: null, right: null, value: value};
	if(!this.root){
		this.root = thisNode;
	}
	else{
		var currentRoot = this.root;
		while(true){
			if(currentRoot.left != null){
				currentRoot = currentRoot.left;
			else{
				currentRoot.left = thisNode;
				break;
			}
		}
		else if(currentRoot.value < value){
			if(currentRoot.right != null){
				currentRoot = currentRoot.right;
			}
			else{
				currentRoot.right = thisNode;
				break;
			}
		}
		else{
			break;
		}
	  }
	}
}

BinarySearchTree.prototype.remove = function(value){
	return deleteRecursively(this.root,value);
	function deleteRecursively(root,value){
		if(!root){
			return null;
		}
		else if(value<root.value){
			root.left = deleteRecursively(root.left,value);
		}
		else if(value>root.value){
			root.right = deleteRecursively(root.right,value);
		}
		else{
			if(!root.left && !root.right){
				return null;
			}
			else if(!root.left){
				root=root.right
				return root;
			}
			else if(!root.right){
				root=root.left;
				return root;
			}
			else{
				var temp = findMin(root.right);
				root.value = temp.value;
				root.right = deleteRecursively(root.right,temp.value);
				return root;
			}
		}
		return root;
	}
	function findMin(root){
		while(root.left){
			root=root.left;
		}
		return root;
 	}
}

BinarySearchTree.prototype.findNode = function(value){
	var currentRoot = this.root;
	found = false;
	while(currentRoot){
		if(currentRoot.value>value){
			currentRoot=currentRoot.left;
		}
		else if(currentRoot.value<value){
			currentRoot=currentRoot.right;
		}
		else{
			found=true;
			break;
		}
	}
	return found;
}
