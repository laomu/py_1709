import web

web.database()

urls = (
    '/', "Index",
    # '/login', 'Login',
    # '/register', 'Register',
)


class Index:

    def GET(self):
        return "<h1>Hello WebPY!</h1>"


if __name__ == "__main__":

    app = web.application(urls, globals())

    app.run()