export function listToTree(list) {
    // 将列表转换为树结构的函数
    let tree = {
      name: 'root',
      level: 0,
      children: [],
    }
    let currParent = tree
    let tissue = null
    list.forEach((item) => {
      [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H'
      ].forEach((namekey, index) => {
        const name = item[namekey]
        const level = index + 1
   
        if (name) {
          if(level == 1){
            tissue = name;
          }
          let node = {}
          node.name = name
          node.level = level
          node.tissue = tissue
           
   
          while (currParent.level >= level) {
            currParent = currParent.parent
          }
   
          let children = currParent.children
          if (!children) {
            children = currParent.children = []
          }
   
          node.parent = currParent
          children.push(node)
          currParent = node
        }
      })
    })
   
    return tree
  }