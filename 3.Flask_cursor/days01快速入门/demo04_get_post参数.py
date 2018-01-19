from flask import Flask, request

app = Flask(__name__)


@app.route("/get")
def get_method():
    # request请求对象，请求对象中的args属性用于专门接受get参数
    get_name = request.args.get("get_name")
    return "<h1>receive get: %s</h1>" % get_name


@app.route("/post", methods=["POST"])
def post_method():
    # request请求对象中的属性form 表单对象，专门用于接受post参数
    post_name = request.form.get("post_name")
    return "<h1>receive post: %s</h1>" % post_name


if __name__ == "__main__":
    app.run()

"""
不同请求参数的接收>>>
Django中：
    request.GET/POST
Tornado中：
    self.get_query_argument()/get_query_arguments()
    self.get_body_argument()/get_body_arguments()
    self.get_arguement()/get_arguments()
Flask中：
    request.args.get("key")
    request.form.get("key")
    
不同请求方式的区分>>>
Django中：
    通过request.method == "GET" / "POST"进行视图函数中不同请求方式的处理区分
    同样可以通过装饰器注解方式：@require_POST @require_GET方式指定视图函数只能接收那种请求方式
Tornado中：
    可以通过直接重写父类RequestHandler中的get/post/..的请求处理方法来实现不同的请求方式的区分
Flask中：
    通过路由装饰器注解的methods属性来指定视图处理函数可以接收那种请求方式
        @app.route("/", methods=["get", "post"..])
"""