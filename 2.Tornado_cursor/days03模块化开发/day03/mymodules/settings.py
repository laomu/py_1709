import os

BASE_DIR = os.path.dirname(__file__)

common = {
    "template_path": os.path.join(BASE_DIR, "templates"),
    "static_path": os.path.join(BASE_DIR, "static"),
    "debug": True,
}