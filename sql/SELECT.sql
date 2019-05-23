
--Вывод ФИО и гендер пользователя, если у нас есть доступ к этой информации

INSERT INTO "Gender"
	VALUES ('1', 'Мужчина');
INSERT INTO "Gender"
	VALUES ('2', 'Боевой самолёт');
INSERT INTO "Gender"
	VALUES ('3', 'Чувак');
INSERT INTO "Gender"
	VALUES ('4', 'Бетмен');

INSERT INTO "Reg"
	VALUES ('1', 'mail', '123', '123');
INSERT INTO "Reg"
	VALUES ('2', 'mail', '123', '123');
INSERT INTO "Reg"
	VALUES ('3', 'mail', '123', '123');
INSERT INTO "Reg"
	VALUES ('4', 'mail', '123', '123');
	
INSERT INTO "User"
	VALUES ('1', 'Никита', 'Гайкин', 'Сергеевич', '1', '18.10.1997', 'Россия', 
			'Новосибирск', '', '1', '0');
INSERT INTO "User"
	VALUES ('2', 'Большой', 'Лебовски', 'Чувак', '3', '18.05.1975', 'США', 
			'Нью-Йорк', '', '1', '0');
INSERT INTO "User"
	VALUES ('3', 'Брюс', 'Уэйн', '', '4', '18.05.1975', 'США', 
			'Готэм', '', '1', '0');
INSERT INTO "User"
	VALUES ('4', 'Бонапарт', 'Наполеон', 'Торт', '1', '15.08.1769', 'Франция',
		   'Аяччо', '', '1', '0');

SELECT u.first_name, u.second_name, u.middle_name, g.name AS gender
	FROM "User" u
	INNER JOIN "Gender" g ON u.gender = g.id
	WHERE u.private <> true;
-----

--Смена почты, если аккаунт верифицирован

UPDATE "Reg" 
	SET email = 'new mail'
	WHERE id = (SELECT id FROM "User" WHERE verification = true and id = 1);
-----
	
--Диалог между двумя пользователями

INSERT INTO "Dialog"
	VALUES('1');
INSERT INTO "Dialog"
	VALUES('2');
INSERT INTO "Dialog"
	VALUES('3');
	
INSERT INTO "MContent" 
	VALUES ('1', 'Текстовое сообщение');
INSERT INTO "MContent" 
	VALUES ('2', 'Привет');
INSERT INTO "MContent" 
	VALUES ('3', 'Как дела?');
INSERT INTO "MContent" 
	VALUES ('4', 'У меня диплом :с');

INSERT INTO "Message"
	VALUES ('1', '1', '1', '23.05.2019 12:33:05', '1');
INSERT INTO "Message"
	VALUES ('2', '2', '2', '23.05.2019 12:39:05', '2');
INSERT INTO "Message"
	VALUES ('3', '2', '3', '23.05.2019 12:39:07', '2');
INSERT INTO "Message"
	VALUES ('4', '2', '4', '23.05.2019 12:39:35', '1');

SELECT m.date_time AS "Дата отправки", concat(u.first_name, ' ', u.second_name) AS "Кем отправлено", mc.content AS "Сообщение"
	FROM "Message" m 
	INNER JOIN "MContent" mc ON m.content_id = mc.id and m.dialog_id = '2'
	INNER JOIN "User" u ON u.id = m.user_id;
-----

--Добавление друга

INSERT INTO "Friendlist"
	VALUES ('1', '{2}');

UPDATE "Friendlist" 
	SET friend_id[array_length(friend_id, 1) + 1] = 3  
	WHERE id = 1 AND '3' = ANY(friend_id)<> TRUE;
	
--Или
	
UPDATE "Friendlist" 
	SET friend_id = array_append(friend_id, 3) 
	WHERE id = 1 AND '3' = ANY(friend_id)<> TRUE;
-----

--Вывод всех полей таблицы Communities где тематика Music и id < 25

INSERT INTO "Topics"
	VALUES ('1', 'Music');
INSERT INTO "Topics"
	VALUES ('2', 'Entertainment');

INSERT INTO "Communities"
	VALUES ('1', 'РООООООООК \m/', '1', 'Всё о роке!!!!!', '');
INSERT INTO "Communities"
	VALUES ('2', 'РЭП', '1', 'РЭП РУЛИТ', '');
INSERT INTO "Communities"
	VALUES ('3', 'Котята', '2', 'Просто котята', '');

SELECT * FROM "Communities"
	 WHERE topic = (SELECT id FROM "Topics" WHERE name = 'Music') AND id < 25;
-----

--Вывод ФИО пользователей, чей аккаунт верифицирован, а так же страна указана Франция, отсортированых по фамилии

SELECT first_name, second_name, middle_name FROM "User"
	WHERE verification = true and country = 'Франция' 
	ORDER BY second_name;
-----

--Вывод id сообщества, чьим администраторам нет 18 лет

INSERT INTO "Roles"
	VALUES ('1', 'Господин');
INSERT INTO "Roles"
	VALUES ('2', 'Администратор');

INSERT INTO "Administrators"
	VALUES ('1', '1', '1');
INSERT INTO "Administrators"
	VALUES ('2', '2', '2');
INSERT INTO "Administrators"
	VALUES ('3', '3', '2');

UPDATE "User"
	SET birthday = '23.05.2019'
	WHERE gender <> 1;

SELECT comm_id FROM "Administrators"
	WHERE user_id IN (SELECT id FROM "User" WHERE birthday >= '22-May-2001');
-----

--Очистка тестовых данных

DELETE FROM "Friendlist";
DELETE FROM "Message";
DELETE FROM "Administrators";
DELETE FROM "User";
DELETE FROM "Dialog";
DELETE FROM "MContent";
DELETE FROM "Gender";
DELETE FROM "Reg";
DELETE FROM "Roles";
DELETE FROM "Communities";
DELETE FROM "Topics";

