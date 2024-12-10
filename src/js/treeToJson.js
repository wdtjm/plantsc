export function treeToJson(tree) {
    function recurse(children) {
      return children.map((item) => {
        const node = {
          lable: item.name,
          opened:'false',
          tissue: item.tissue
        }
        if (item.children) {
          node.children = recurse(item.children)
        }
        return node
      })
    }
    return JSON.stringify(recurse(tree.children))
  }