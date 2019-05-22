
--Вывод ФИО и гендер пользователя, если у нас есть доступ к этой информации
SELECT u.first_name, u.second_name, u.middle_name, g.name AS gender
  FROM User u
  INNER JOIN Gender g ON u.gender = g.id
  WHERE u.private <> 0
  
--Смена почты, если аккаунт верифицирован
UPDATE Reg 
  SET email = '*новая почта*'
  WHERE id = (SELECT id FROM User WHERE verification = 1 and id = '*id нашего пользователя*')
  
--Выводимое сообщение в диалоге
SELECT m.date_time AS 'Дата отправки', m.user_id AS 'Кем отправлено', mc.content AS 'Сообщение' 
  FROM Message m 
  INNER JOIN MContent mc ON m.content_id = mc.id and m.id = (SELECT dialog_id FROM Dialogs)

--Вывод всех полей таблицы Communities где тематика Music и id < 25
SELECT * FROM Communities
   WHERE topic = 'Music' AND id < 25

--Вывод ФИО пользователей, чей аккаунт верифицирован, а так же страна указана Франция, отсортированых по фамилии
SELECT first_name, second_name, middle_name FROM Users
  WHERE verification = 1 and country = 'Франция' ORDER BY second_name

--Вывод id сообщества, чьим администраторам нет 18 лет
SELECT comm_id FROM Administrators
  WHERE user_id = (SELECT id FROM User WHERE birthday <= '22-May-2001')
