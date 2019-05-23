---
---Заполнение таблиц
---

INSERT INTO User (first_name, second_name, middle_name, gender, birthday, country, city, photo, verification, private)  VALUES 
('Петров', 'Петр', 'Петрович', 1, '01.01.2000', 3, 5, 'public/style/img/face_petr.jpg', true, true ),
('Гришкин', 'Артем', 'Николаевич', 2, '02.02.2000', 7, 1, 'public/style/img/face_artem.jpg', true, false ),
('Игнатьев', 'Сергей', 'Федорович', 7, '03.03.2000', 10, 3, 'public/style/img/face_sergey.jpg', false, true ),
('Петров', 'Кирилл', 'Анатольевич', 3, '04.04.2000', 12, 2, 'public/style/img/face_kirill.jpg', false, false );


INSERT INTO Friends (user_id, friend_id) VALUES
(1, 2),
(2, 1),
(0, 1);

INSERT INTO Post (id, content_id) VALUES
(0, 1);

INSERT INTO Gender (name) VALUES
('Бесполый'),
('Гермафродит'),
('Мужеженственный'),
('Предженский'),
('Предмужской'),
('Межполовой');


INSERT INTO UPosts (user_id, post_id) VALUES
(1, 2),
(0, 1);

INSERT INTO Post (content_id) VALUES
(1), (2), (4);


INSERT INTO PContent (content) VALUES
('Текст контента, очень интересный и большой'),
('Еще более интереный контент'),
('Контент не очень, но суть неплохая');

INSERT INTO Likes (post_id, amount) VALUES
(1, 0), (1, 1), (0, 2);

INSERT INTO Communities (name, topic, desc, photo) VALUES
('Новости', 1, 'Группа новостей', 'МЫ умнички', 'public/style/img/group.jpg');
('НеНовости', 1, 'НеГруппа новостей', 'Не мЫ умнички', 'public/style/img/group.jpg');

INSERT INTO Administrators (comm_id, user_id, role) VALUES
(1,2,0),
(1,1,1),
(0,1,2);

INSERT INTO Roles (name) VALUES
('Владелец'),
('Модератор'),
('Редактор');

INSERT INTO CPosts (comm_id, post_id) VALUES
(1,2),
(0,1);

INSERT INTO Message (dialog_id, content_id, user_id) VALUES
(1, 1, 0), 
(0, 0, 0),
(1, 0, 1);

INSERT INTO MContent (content) VALUES
('Текст сообщения'),
('Еще одно сообщение'),
('Привет');

INSERT INTO Dialogs (user_id, dialog_id) VALUES
(0, 1),
(1, 1),
(0, 1),
(2, 1);