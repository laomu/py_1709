
def app(env, response):
    """
    通过http://ip:port?key=value&key=value的形式传递的参数
    >> 通常情况下，在url地址后面通过?传递参数的方式[专门的get参数传递方式]
    >> 专业术语中，对这一部分的描述：查询字符串[query string]
    """
    print(env["QUERY_STRING"])
    response("200 ok", [("Content-type", "text/html")])
    return [b"<h1>request ok!</h1>"]


from wsgiref.simple_server import make_server

server = make_server("", 8000, app)
server.serve_forever()
