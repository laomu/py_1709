from tornado.web import RedirectHandler

from . import models_manager

class BaseHandler(RedirectHandler):
    pass

class IndexHandler(BaseHandler):

    def get(self):
        #person_list = models_manager.PersonManger.find_condition()
        #self.render('index.html',person_list=person_list)
        self.render('index.html')

class LoginHandler(BaseHandler):
    def get(self):
        self.render('login.html')


class RegisterHandler(BaseHandler):
    def get(self):
        self.render('register.html')
