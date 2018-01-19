from celery import Celery

celery = Celery("tasks", broker="redis://localhost:6379/0")

@celery.task
def sendmail(mail):
    print("邮件正在发送中..")
    import time
    time.sleep(2)
    print("邮件发送完成")