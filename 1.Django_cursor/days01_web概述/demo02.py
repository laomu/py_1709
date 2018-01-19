
def app(env, response):
    """
    接口函数，负责接收客户端发送的请求
    :param env: 环境参数[包含了请求的所有数据和客户端的某些配置信息]
    :param response: 响应参数[设置响应数据的一些配置信息]
    :return: [返回给响应中的数据，最后在浏览器中进行展示]
    """
    #print(env)
    # 1. 字符串切片：对url路径切片
    response("200 ok", [("Content-type", "text/html")])

    path = env["PATH_INFO"][1:]
    print(path)
    # 2. 根据不同的路径访问不同的数据
    if path == "findall":
        return findall(env, response)
    elif path == "findgood":
        return findgood(env, response)
    elif path == "findbad":
        return findbad(env, response)
    else:
        return [b"<h1>the other case!</h1>"]


def findall(env, response):
    """
    查询所有的人员名单
    """
    return [b"<h1>find all person!</h1>"]

def findgood(env, response):
    return [b"<h1>find good person!</h1>"]

def findbad(env, response):
    return [b"<h1>find bad person!</h1>"]



from wsgiref.simple_server import make_server

print("server is starting...")
server = make_server("", 8000, app)
server.serve_forever()


