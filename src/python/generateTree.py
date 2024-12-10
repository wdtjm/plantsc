#正则 (..PO:........)
import json


def list_to_tree(input_list):
    # 将列表转换为树结构的函数
    tree = {
        "name":"rootNode",
        'level': 0,
        'gene':'0',
        'children': []
    }
    curr_parent = tree
    tissue = None
    
    for item in input_list:
        for index, namekey in enumerate(["一级", "二级", "三级", "四级", "五级", "六级", "七级", "八级", "九级", "十级"]):
            name = item.get(namekey)
            level = index + 1
            
            if name:
                if level == 1:
                    tissue = name
                
                node = {
                    'name': name,
                    'level': level,
                    'tissue': tissue,
                    'gene': item.get('基因'),
                }
                
                while curr_parent['level'] >= level:
                    curr_parent = curr_parent['parent']
                
                children = curr_parent.get('children', [])
                node['parent'] = curr_parent
                children.append(node)
                curr_parent['children'] = children
                curr_parent = node
    
    return tree

def tree_to_json(tree):
    def recurse(children):
        return [
            {
                'label': item['name'],
                'opened': 'false',
                'tissue': item['tissue'],
                'children': recurse(item['children']) if 'children' in item else None
            }
            for item in children
        ]
    
    return recurse(tree['children'])

# 打开并读取 JSON 文件
with open('./data/OriginSingleTree.json', 'r', encoding='utf-8') as file:
    data = json.load(file)


# 将字典对象转换为 JSON 格式并写入文件
with open('./data/singleTree.json', 'w', encoding='utf-8') as file:
    #print(transform_structure(list_to_tree(data)))
    json.dump(tree_to_json(list_to_tree(data)), file, ensure_ascii=False, indent=4)
    
with open('./data/OriginDoubleTree.json', 'r', encoding='utf-8') as file:
    data = json.load(file)

with open('./data/doubleTree.json', 'w', encoding='utf-8') as file:
    json.dump(tree_to_json(list_to_tree(data)), file, ensure_ascii=False, indent=4)