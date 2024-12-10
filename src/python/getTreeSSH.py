import json
import paramiko
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import SQLAlchemyError

# SSH 连接信息
ssh_host = '10.75.119.190'        # SSH 服务器地址
ssh_port = 20022                 # SSH 端口
ssh_user = 'luyq'     # SSH 用户名
ssh_password = '@a$a@fwjPKZL' # SSH 密码

# 数据库连接信息
db_host = '127.0.0.1'          # 数据库主机，一般设置为 localhost 
db_port = 13306                  # 数据库端口
db_username = 'root'     # 数据库用户名
db_password = '123456'     # 数据库密码
db_name = 'plantscrnadb'       # 数据库名称

# 创建 SSH 隧道
def create_ssh_tunnel():
    try:
        ssh_client = paramiko.SSHClient()
        ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        ssh_client.connect(ssh_host, port=ssh_port, username=ssh_user, password=ssh_password)
        transport = ssh_client.get_transport()
        transport.request_port_forward('127.0.0.1', db_port)
        return ssh_client
    except Exception as e:
        print(f"Error creating SSH tunnel: {e}")
        return None

# 创建数据库引擎，设置连接池参数
def create_db_engine():
    DATABASE_URL = f'mysql+mysqlconnector://{db_username}:{db_password}@{db_host}:{db_port}/{db_name}'
    engine = create_engine(DATABASE_URL, pool_size=5, max_overflow=10)
    return engine

# 创建会话工厂
Session = sessionmaker(bind=create_db_engine())

# 计算总数量
def calculate_num(species, celltype, session, tissue):
    try:
        sql = "SELECT COUNT(DISTINCT `Marker genes`) AS count FROM Total_gene WHERE Species = :species AND Celltypes = :celltype AND Tissues = :tissue"
        result = session.execute(sql, {'species': species, 'celltype': celltype, 'tissue': tissue}).fetchone()
        return result[0] if result else 0
    except SQLAlchemyError as e:
        print(e)
        return 0

# 计算基因数量
def calculate_gene_num(species, celltype, session, tissue, genetype):
    try:
        celltype_all = celltype + '%'
        sql = "SELECT COUNT(DISTINCT `Marker genes`) AS count FROM Total_gene WHERE Species = :species AND Celltypes LIKE :celltype_all AND Tissues = :tissue AND `" + genetype + "` = 'Yes'"
        result = session.execute(sql, {'species': species, 'celltype_all': celltype_all, 'tissue': tissue}).fetchone()
        return result[0] if result else 0
    except SQLAlchemyError as e:
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
    ssh_client = create_ssh_tunnel()
    if ssh_client:
        try:
            # 获取一个会话
            session = Session()

            try:
                with open('./data/singleTree.json', 'r',encoding='utf-8') as f:
                    tree_data = json.load(f)
                # with open('./data/processed/plants.json', 'r') as f:
                #     plants_data = json.load(f)
                plants_data = [{"name":'Arabidopsis thaliana'}]
                # 获取一个会话
                session = Session()

                for tree in tree_data:
                    for plant in plants_data:
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
        finally:
            # 关闭 SSH 隧道
            ssh_client.close()

if __name__ == "__main__":
    main()
