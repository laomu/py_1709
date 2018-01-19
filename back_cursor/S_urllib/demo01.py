import urllib2

response = urllib2.urlopen("https://www.taobao.com")

print response.read()