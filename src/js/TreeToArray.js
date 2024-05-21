// 递归
// 1. 结束条件 treeData为空，返回[]
// 2. 结束条件 treeData不为空 返回[当前元素].concat(transfer(子元素))
// 需要实现transfer函数, 输入树形结构, 输出结果为一个一维数组:arrayData
export function transfer(treeData) {
    if (!(!treeData.hasOwnProperty('lable') || !treeData)) {
      let arr = []
      /* let obj = {}
      obj.name = treeData.lable;
      obj.value = treeData.num; */
      
      arr.push(treeData)
      
      // 这段代码可由代码 [1] 替代，替代后父元素在子元素后
      if(treeData.children!=null)
        {
            treeData.children.forEach(value => {
                arr = arr.concat(transfer(value))
            })
        }
      
      //
      
      return arr
    } else { // 初始treeData是否为空树
      return []
    }
  }
  
  