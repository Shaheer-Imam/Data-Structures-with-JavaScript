function AVLTree(value){
    this.left = null;
    this.right = null;
    this.value = value;
    this.depth = 1;
}

AVLTree.prototype.setDepthBasedOnChildren = function(){
    if(this.node == null){
        this.depth = 0;
    }
    else{
        this.depth = 1;
    }
    if(this.left != null){
        this.depth = this.left+1;
    }
    if(this.right != null && this.depth <= this.right.depth){
        this.depth = this.right.depth+1;
    }
}

//Single Rotation
// Rotate Left

AVLTree.prototype.rotateLL = function(){
    var valueBefore = this.value;
    var rightBefore = this.right;
    this.value = this.left.value;
    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right
    this.right.right = rightBefore;
    this.right.value = valueBefore;
    this.right.getDepthFromChildren();
    this.getDepthFromChildren();
};

//Rotate Right

AVLTree.prototype.rotateRR = function(){
    var valueBefore = this.value;
    var leftBefore = this.left;
    this.value = this.right.value;
    this.left = this.right;
    this.right = this.right.right;
    this.left.right = this.left.left
    this.left.left = leftBefore;
    this.left.value = valueBefore;
    this.left.updateInNewLocation();
    this.update.InNewLocation();
}

