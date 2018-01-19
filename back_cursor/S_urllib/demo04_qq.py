# -*- coding:utf-8 -*-

import requests


headers = {
    "Host":"user.qzone.qq.com",
    "Connection":"keep-alive",
    "Cache-Control":"max-age=0",
    "Upgrade-Insecure-Requests":"1",
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.7 Safari/537.36",
    "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    "Referer":"https://qzs.qzone.qq.com/qzone/v5/loginsucc.html?para=izone&from=iqq",
    # "Accept-Encoding":"gzip, deflate, br",
    "Accept-Language":"zh-CN,zh;q=0.8",
    "Cookie":"pgv_pvi=6481595392; tvfe_boss_uuid=7f88b3b890e9c01f; RK=1Z4B+PkwWk; luin=o0742598531; lskey=00010000adb21b540f725f919763269b6011c8bb6ef29b4da010f58628f443c2b1b5bdd4a47da8d4c8c74aad; o_cookie=742598531; pgv_pvid=3251547216; _qpsvr_localtk=0.8907156819951196; pgv_si=s4157105152; pgv_info=ssid=s6023242054; ptui_loginuin=1007821300; ptisp=ctc; ptcz=5c17354f55a2a53da8b690c354f093bdafaf6f145afc8cd70f2001b157965131; uin=o1007821300; skey=@efWTLwU77; pt2gguin=o1007821300; p_uin=o1007821300; pt4_token=B2P*-n2FqJ-AiDu8evgGsmpuR4lmkHC-kBbx7lIhytI_; p_skey=V7MsvYjnlQuEBtE*0KkqddnQnlQ8oR5eC64QqnX99eE_; Loading=Yes; qz_screen=1536x864; QZ_FE_WEBP_SUPPORT=1; 1007821300_todaycount=0; 1007821300_totalcount=5369; cpu_performance_v8=4; __Q_w_s__QZN_TodoMsgCnt=1",
    "If-Modified-Since":"Wed, 10 Jan 2018 04:42:32 GMT",

}

response = requests.get("https://user.qzone.qq.com/1007821300")

content = response.text
print(content)

with open("kj.html", "w") as f:
    f.write(content.encode("utf-8"))
