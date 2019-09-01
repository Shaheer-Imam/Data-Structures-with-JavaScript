function isMirrorTrees(tree1,tree2){
    if(!tree1 && !tree2){
        return true;
    }
    if(!tree1 || !tree2){
        return false;
    }
    var checkleft = isMirrorTrees(tree1.left,tree2.right),
        checkright = isMirrorTrees(tree2.right,tree1.left);
    return tree1.value == tree2.value && checkleft  && checkright
}

var node1 = {
    value: 3,
    left: {
        value: 1
    },
    right: {
        value: 2
    }
}

var node2 = {
    value: 3,
    left: {
        value: 2
    },
    right: {
        value: 1
    }
}

var node3 = {
    value: 3,
    left: {
        value: 1
    },
    right: {
        value: 2,
        left: {
            value: 2.5
        }
    }
}