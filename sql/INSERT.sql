
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

INSERT INTO "User" 
	VALUES (1, 'PetrovPP@gmail.com', 'passwrod123', '8-953-486-45-12', 'Петров', 'Петр', 'Петрович', 1,
			'01.01.2000', 'Россия', 'Новосибирск', 'public/style/img/face_petr.jpg', true, true);
INSERT INTO "User"
	VALUES (2, 'GrishkinAN@gmail.com', 'artemthegod', '8-957-123-45-98', 'Гришкин', 'Артем', 'Николаевич', 2,
			'02.02.2000', 'Росиия', 'Самара', 'public/style/img/face_artem.jpg', true, false);
INSERT INTO "User" 
	VALUES (3, 'IgnatievSF@gmail.com', 'igsefe2000', '8-951-456-12-45', 'Игнатьев', 'Сергей', 'Федорович', 6,
			'03.03.2000', 'Россия', 'Москва', 'public/style/img/face_sergey.jpg', false, true);
INSERT INTO "User"
	VALUES (4, 'PetrovKA@gmail.com', 'ruletheworld', '8-953-682-64-35', 'Петров', 'Кирилл', 'Анатольевич', 3,
			'04.04.2000', 'Россия', 'Казань', 'public/style/img/face_kirill.jpg', false, false);

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
	VALUES (1);
INSERT INTO "Dialog"
	VALUES (2);

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