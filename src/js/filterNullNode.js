export default function filterNullNode(node) {
    if(node.total == 0){
        return null;
    }else{
        if(node.children && node.children.length > 0){
            for(let i=0;i<node.children.length;i++){
                if(node.children[i].total == 0){
                    node.children.splice(i,1);
                    i--;
                }else{
                    node.children[i] = filterNullNode(node.children[i]);
                }
            }
        }
        return node;
    }
}