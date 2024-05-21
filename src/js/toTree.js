export function listToTree(list) {
    let tree = {
      name: 'root',
      level: 0,
      children: [],
    }
    let currParent = tree
    let tissue = null
    list.forEach((item) => {
      ;[
        '一级',
        '二级',
        '三级',
        '四级',
        '五级',
        '六级',
        '七级',
        '八级'
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

