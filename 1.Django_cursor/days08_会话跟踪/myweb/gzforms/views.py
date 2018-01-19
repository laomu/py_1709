from django.shortcuts import render
from . import models_forms

# Create your views here.
def f1(request):
    if request.method == "GET":
        name_form = models_forms.NameForm()
        return render(request, "gzforms/login.html", {"name_form": name_form})

    elif request.method == "POST":
        # 获取数据：通过表单对象接受表单中提交的所有数据
        name_form = models_forms.NameForm(request.POST)

        # 进行表单数据的验证
        if name_form.is_valid():# true:验证通过，false验证不通过
            print("验证通过，可以添加数据")
            return render(request, "gzforms/login.html")
        else:
            print("验证不通过")
            return render(request, "gzforms/login.html", {"name_form": name_form})