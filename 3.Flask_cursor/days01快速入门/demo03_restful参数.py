from flask import Flask

app = Flask(__name__)


@app.route("/index/<username>")
def index(username):
    return "<h1>hello %s!</h1>" % username


@app.route("/index2/<int:userid>")
def index2(userid):
    return "<h1>receive params: %d</h1>" % userid


if __name__ == "__main__":
    app.run(host="0.0.0.0")