import urllib2

request = urllib2.Request("https://www.12306.cn")

response = urllib2.urlopen(request)

print response.read()