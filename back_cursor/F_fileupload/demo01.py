from flask import Flask, request, render_template, flash, redirect, url_for
from werkzeug.utils import secure_filename

import os


app = Flask(__name__)

UPLOAD_FILE = "./file"
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jfjf', 'jpg', 'jpeg', 'gif'])


@app.route("/")
def index():
    return render_template("index.html")


def allowed_file(filename):
    return "." in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/fileupload", methods=["GET", "POST"])
def upload():
    if request.method == "POST":
        if "file" not in request.files:
            flash("没有文件")
            return redirect(request.url)

        file = request.files['file']

        if file.filename == "":
            flash("没有选择文件")
            return redirect(request.url)

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config["UPLOAD_FILE"], filename))
            return render_template("index.html")
        else:
            flash("没有合适的文件")
            return render_template("index.html")


if __name__ == "__main__":
    app.run()