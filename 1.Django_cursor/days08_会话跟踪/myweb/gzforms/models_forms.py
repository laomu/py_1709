"""
表单处理对象：VO
"""
from django import forms


class NameForm(forms.Form):
    name = forms.CharField(
        min_length=8,
        max_length=18,
        label="您的姓名"
    )


class NameForm2(forms.ModelForm):

    class Meta:
        module = 'Name'
