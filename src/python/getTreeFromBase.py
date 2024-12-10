import json
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy import text

# 数据库连接信息
DATABASE_URL = 'mysql+mysqlconnector://root:829528@localhost:3306/plantscrnadb'  # 替换为你的数据库信息

# 创建数据库引擎，设置连接池参数
engine = create_engine(DATABASE_URL, pool_size=5, max_overflow=10)

# 创建会话工厂
Session = sessionmaker(bind=engine)

# 计算总数量
def calculate_num(species, celltype, session, tissue):
    try:
        sql = "SELECT COUNT(DISTINCT `Marker genes`) AS count FROM total_gene WHERE Species = :species AND Celltypes = :celltype AND Tissues = :tissue"
        result = session.execute(text(sql), {'species': species, 'celltype': celltype, 'tissue': tissue}).fetchone()
        return result[0] if result else 0
    except Exception as e:
        print(e)
        return 0

# 计算基因数量
def calculate_gene_num(species, celltype, session, tissue, genetype):
    try:
        celltype_all = celltype + '%'
        sql = "SELECT COUNT(DISTINCT `Marker genes`) AS count FROM total_gene WHERE Species = :species AND Celltypes LIKE :celltype_all AND Tissues = :tissue AND `" + genetype + "` = 'Yes'"
        result = session.execute(text(sql), {'species': species, 'celltype_all': celltype_all, 'tissue': tissue}).fetchone()
        return result[0] if result else 0
    except Exception as e:
        print(e)
        return 0

# 遍历树结构
def tree_travel(tree, name, session, tissue):
    tree['total'] = calculate_num(name, tree['label'], session, tissue)
    tree['num'] = tree['total']
    tree['height'] = calculate_gene_num(name, tree['label'], session, tissue, "High confidence genes")
    tree['unique'] = calculate_gene_num(name, tree['label'], session, tissue, "Unique genes")
    if 'children' in tree and tree['children'] is not None:
        for child in tree['children']:
            tree_travel(child, name, session, tissue)

# 反向遍历树结构
def tree_travel_reverse(tree):
    if 'children' in tree and tree['children'] is not None:
        for child in tree['children']:
            tree_travel_reverse(child)
    if 'children' in tree and tree['children'] is not None:
        for child in tree['children']:
            tree['total'] += child['total']
            tree['unique'] += child['unique']
            tree['height'] += child['height']

# 计算非空节点
def tree_travel_calculate_not_null_node(tree):
    if tree is None:
        return 0
    if tree['total'] == 0:
        tree['disabled'] = 'true'
        return 0
    else:
        num = 1
        if 'children' in tree and tree['children'] is not None:
            for child in tree['children']:
                num += tree_travel_calculate_not_null_node(child)
        return num

# 主程序
def main():
    with open('./data/singleTree.json', 'r',encoding='utf-8') as f:
        tree_data = json.load(f)
    # with open('./data/processed/plants.json', 'r') as f:
    #     plants_data = json.load(f)
    plants_data = [{"name":'Arabidopsis thaliana'}]
    # 获取一个会话
    session = Session()
    # num = calculate_num('Arabidopsis thaliana', 'Mesophyll cell', session, 'Leaf')

    try:
        for plant in plants_data:
            for tree in tree_data:
                name = plant['name']
                tree_travel(tree, name, session, tree['label'])
                tree_travel_reverse(tree)
                tree['nodeNum'] = tree_travel_calculate_not_null_node(tree)

            # 保存结果到文件
            with open(f'./data/tree/{name}.json', 'w',encoding='utf-8') as f:
                json.dump(tree_data, f)

            print(f'{name} success')
    finally:
        # 关闭会话
        session.close()

if __name__ == "__main__":
    main()
