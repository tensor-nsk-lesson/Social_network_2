
--Вывод ФИО и гендер пользователя, если у нас есть доступ к этой информации

SELECT u.first_name, u.second_name, u.middle_name, g.name AS gender
	FROM "User" u
	INNER JOIN "Gender" g ON u.gender = g.id
	WHERE u.private <> true;
-----

--Смена почты, если аккаунт верифицирован

UPDATE "User" 
	SET email = 'new mail'
	WHERE id = 1 AND verification = true;
-----
	
--Диалог между двумя пользователями

SELECT m.date_time AS "Дата отправки", concat(u.first_name, ' ', u.second_name) AS "Кем отправлено", mc.content AS "Сообщение"
	FROM "Message" m 
	INNER JOIN "MContent" mc ON m.content_id = mc.id and m.dialog_id = 1
	INNER JOIN "User" u ON u.id = m.user_id;
-----

--Добавление друга

UPDATE "Friendlist" 
	SET state_id = 1
	WHERE ((user_id = 3 AND friend_id = 1) OR (user_id = 1 AND friend_id = 3)) 
		AND state_id = 0;
-----

--Вывод всех полей таблицы Communities где тематика Новости и id < 25

SELECT * FROM "Communities"
	 WHERE topic = (SELECT id FROM "Topics" WHERE name = 'Новости') AND id < 25;
-----

--Вывод ФИО пользователей, чей аккаунт верифицирован, а так же страна указана Россия, отсортированых по фамилии

SELECT first_name, second_name, middle_name FROM "User"
	WHERE verification = true and country = 'Россия' 
	ORDER BY second_name;
-----

--Вывод id сообщества, чьим администраторам нет 18 лет

SELECT comm_id FROM "Administrators"
	WHERE user_id IN (SELECT id FROM "User" WHERE birthday >= '22-May-2001');
-----
