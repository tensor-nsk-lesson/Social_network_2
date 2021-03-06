
---
---Заполнение таблиц
---

INSERT INTO "Gender"
	VALUES (1, 'Бесполый');
INSERT INTO "Gender" 
	VALUES (2, 'Гермафродит');
INSERT INTO "Gender"
	VALUES (3, 'Мужеженственный');
INSERT INTO "Gender"
	VALUES (4, 'Предженский');
INSERT INTO "Gender"
	VALUES (5, 'Предмужской');
INSERT INTO "Gender"
	VALUES (6, 'Межполовой');

INSERT INTO "Country"
	VALUES (1, 'Россия');
INSERT INTO "Country"
	VALUES (2, 'США');
INSERT INTO "Country"
	VALUES (3, 'Франция');
	
INSERT INTO "City"
	VALUES (1, 'Москва', 1);
INSERT INTO "City"
	VALUES (2, 'Казань', 1);
INSERT INTO "City"
	VALUES (3, 'Новосибирск', 1);
INSERT INTO "City"
	VALUES (4, 'Самара', 1);

INSERT INTO "Photo"
	VALUES (1, 'public/style/img/face_petr.jpg');
INSERT INTO "Photo"
	VALUES (2, 'public/style/img/face_artem.jpg');
INSERT INTO "Photo"
	VALUES (3, 'public/style/img/face_sergey.jpg');
INSERT INTO "Photo"
	VALUES (4, 'public/style/img/face_kirill.jpg');
INSERT INTO "Photo"
	VALUES (5, 'public/style/img/comm_photo.jpg');
INSERT INTO "Photo"
	VALUES (6, 'public/style/img/dialog_photo.jpg');
INSERT INTO "Photo"
	VALUES (7, 'public/style/img/user_photo.jpg');
INSERT INTO "Photo"
	VALUES (8, 'public/style/img/user_2_photo.jpg');

INSERT INTO "User" ("id", "email", "password", "phone", "first_name", "second_name", "middle_name",
	"gender_id", "birthday", "country_id", "city_id", "photo_id", "verification", "private")
	VALUES (1, 'PetrovPP@gmail.com', 'passwrod123', '8-953-486-45-12', 'Петр', 'Петров', 'Петрович', 1,
			'01.01.2000', 1, 3, 1, true, true);
INSERT INTO "User" ("id", "email", "password", "phone", "first_name", "second_name", "middle_name",
	"gender_id", "birthday", "country_id", "city_id", "photo_id", "verification", "private")
	VALUES (2, 'GrishkinAN@gmail.com', 'artemthegod', '8-957-123-45-98', 'Артем', 'Гришкин', 'Николаевич', 2,
			'02.02.2000', 1, 4, 2, true, false);
INSERT INTO "User" ("id", "email", "password", "phone", "first_name", "second_name", "middle_name",
	"gender_id", "birthday", "country_id", "city_id", "photo_id", "verification", "private")
	VALUES (3, 'IgnatievSF@gmail.com', 'igsefe2000', '8-951-456-12-45', 'Сергей', 'Игнатьев', 'Федорович', 6,
			'03.03.2000', 1, 1, 3, false, true);
INSERT INTO "User" ("id", "email", "password", "phone", "first_name", "second_name", "middle_name",
	"gender_id", "birthday", "country_id", "city_id", "photo_id", "verification", "private")
	VALUES (4, 'PetrovKA@gmail.com', 'ruletheworld', '8-953-682-64-35', 'Кирилл', 'Петров', 'Анатольевич', 3,
			'04.04.2000', 1, 2, 4, false, false);

INSERT INTO "UAlbom"
	VALUES (1, 'Отдыхаю в Египте', 1);

INSERT INTO "UPhoto"
	VALUES (1, 7);
INSERT INTO "UPhoto"
	VALUES (1, 8);

INSERT INTO "Friendlist"
	VALUES (1, 2, 1);
INSERT INTO "Friendlist"
	VALUES (1, 3, 0);
INSERT INTO "Friendlist"
	VALUES (2, 4, 1);
INSERT INTO "Friendlist"
	VALUES (3, 4, 2);

INSERT INTO "PContent"
	VALUES (1, 'Текст контента, очень интересный и большой');
INSERT INTO "PContent"
	VALUES (2, 'Еще более интереный контент');
INSERT INTO "PContent"
	VALUES (3, 'Контент не очень, но суть неплохая');

INSERT INTO "Post" 
	VALUES (1, 1, '24.05.2019 19:05');
INSERT INTO "Post" 
	VALUES (2, 2, '24.05.2019 19:01');
INSERT INTO "Post" 
	VALUES (3, 3, '24.05.2019 19:00');

INSERT INTO "UPosts" 
	VALUES (1, 2);
INSERT INTO "UPosts" 
	VALUES (2, 1);

INSERT INTO "Likes"
	VALUES (1, 0);
INSERT INTO "Likes"
	VALUES (2, 3);
INSERT INTO "Likes"
	VALUES (3, 1);

INSERT INTO "Topics"
	VALUES (1, 'Новости');
INSERT INTO "Topics"
	VALUES (2, 'Развлечения');

INSERT INTO "Communities"
	VALUES (1, 'Новости', 1, 'Группа новостей', 'public/style/img/group.jpg');
INSERT INTO "Communities"
	VALUES (2, 'НеНовости', 2, 'НеГруппа новостей', 'public/style/img/group.jpg');

INSERT INTO "CAlbom"
	VALUES (1, 'Новости в картинках', 1);
INSERT INTO "CAlbom"
	VALUES (2, 'НеНовости в картинках', 2);
	
INSERT INTO "CPhoto"
	VALUES (1, 5);
INSERT INTO "CPhoto"
	VALUES (2, 5);

INSERT INTO "Roles" 
	VALUES (1, 'Владелец');
INSERT INTO "Roles"
	VALUES (2, 'Модератор');
INSERT INTO "Roles"
	VALUES (3, 'Редактор');

INSERT INTO "Administrators" 
	VALUES (1, 2, 1);
INSERT INTO "Administrators" 
	VALUES (1, 1, 2);
INSERT INTO "Administrators" 
	VALUES (2, 1, 3);

INSERT INTO "CPosts"
	VALUES (1, 3);
INSERT INTO "CPosts" 
	VALUES (2, 1);

INSERT INTO "Dialog"
	VALUES (1, 'Пётр, Кирилл');
INSERT INTO "Dialog"
	VALUES (2, 'Артём, Сергей');

INSERT INTO "DPhoto"
	VALUES (1, 6);
INSERT INTO "DPhoto"
	VALUES (2, 6);

INSERT INTO "MContent"
	VALUES (1, 'Текст сообщения');
INSERT INTO "MContent"
	VALUES (2, 'Еще одно сообщение');
INSERT INTO "MContent"
	VALUES (3, 'Привет');
	
INSERT INTO "Message"
	VALUES (1, 1, 2, '24.05.2019', 1); 
INSERT INTO "Message"
	VALUES (2, 2, 1, '24.05.2019', 1);
INSERT INTO "Message"
	VALUES (3, 1, 3, '24.05.2019', 2);

INSERT INTO "AllDialogs"
	VALUES (1, 1);
INSERT INTO "AllDialogs"
	VALUES (2, 2);
INSERT INTO "AllDialogs"
	VALUES (3, 2);
INSERT INTO "AllDialogs"
	VALUES (4, 1);
	
INSERT INTO "USubs"
	VALUES (1, 1);
INSERT INTO "USubs"
	VALUES (1, 2);
INSERT INTO "USubs"
	VALUES (2, 1);
INSERT INTO "USubs"
	VALUES (3, 2);
INSERT INTO "USubs"
	VALUES (4, 1);
INSERT INTO "USubs"
	VALUES (4, 2);
	
--Очистка тестовых данных

DELETE FROM "Friendlist";
DELETE FROM "Message";
DELETE FROM "Administrators";
DELETE FROM "AllDialogs";
DELETE FROM "UPosts";
DELETE FROM "USubs";
DELETE FROM "UPhoto";
DELETE FROM "UAlbom";
DELETE FROM "User";
DELETE FROM "DPhoto";
DELETE FROM "Dialog";
DELETE FROM "MContent";
DELETE FROM "Gender";
DELETE FROM "Roles";
DELETE FROM "CPosts";
DELETE FROM "CPhoto";
DELETE FROM "CAlbom";
DELETE FROM "Photo";
DELETE FROM "Communities";
DELETE FROM "Topics";
DELETE FROM "City";
DELETE FROM "Country";
DELETE FROM "Likes";
DELETE FROM "Post";
DELETE FROM "PContent";