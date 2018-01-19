CREATE DATABASE py1709_gzsession2 DEFAULT CHARSET 'utf8';
USE py1709_gzsession2;
SHOW TABLES;

SELECT * FROM django_session;# sessoin_key, session_data, expires_date

SELECT *FROM gzsession2_custype;
SELECT *FROM gzsession2_customer;
SELECT *FROM gzsession2_menus;

INSERT INTO gzsession2_custype VALUES(1, "管理员");
INSERT INTO gzsession2_custype VALUES(2, "会员");

INSERT INTO gzsession2_menus VALUES(1, '查看所有会员', '/gzsession2/all_customer/', 1);
INSERT INTO gzsession2_menus VALUES(2, '查看个人信息', '/gzsession2/selfinfo/', 2);

INSERT INTO gzsession2_customer VALUES(100, 'admin', 'admin', '老王', 1);


