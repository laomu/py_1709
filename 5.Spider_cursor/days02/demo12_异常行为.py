# -*- coding:utf-8 -*-

import urllib2
try:
    #response = urllib2.urlopen("http://www.damu.com", timeout=3)
    #response = urllib2.urlopen("http://www.kuaidaili.com/damu", timeout=3)
    response = urllib2.urlopen("http://www.baidu.com/damu", timeout=3)
    print response.read()
except urllib2.HTTPError, e:
    print(e)
    print(e.code)
except urllib2.URLError, e:
    print(e)

