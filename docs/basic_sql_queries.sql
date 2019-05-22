--����� ��� � ������ ������������, ���� � ��� ���� ������ � ���� ����������

SELECT u.first_name, u.second_name, u.middle_name, g.name AS gender
  FROM User u
  INNER JOIN Gender g ON u.gender = g.id
  WHERE u.private <> 0
  
--����� �����, ���� ������� �������������

UPDATE Reg 
  SET email = '*����� �����*'
  WHERE id = (SELECT id FROM User WHERE verification = 1 and id = '*id ������ ������������*')
  
--��������� ��������� � �������

SELECT m.date_time AS '���� ��������', m.user_id AS '��� ����������', mc.content AS '���������' 
  FROM Message m 
  INNER JOIN MContent mc ON m.content_id = mc.id and m.id = (SELECT dialog_id FROM Dialogs)

--����� ���� ����� ������� Communities ��� �������� Music � id < 25

SELECT * FROM Communities
	 WHERE topic = 'Music' AND id < 25

--����� ��� �������������, ��� ������� �������������, � ��� �� ������ ������� �������, �������������� �� �������

SELECT first_name, second_name, middle_name FROM Users
	WHERE verification = 1 and country = '�������' ORDER BY second_name

--����� id ����������, ���� ��������������� ��� 18 ���

SELECT comm_id FROM Administrators
	WHERE user_id = (SELECT id FROM User WHERE birthday <= '22-May-2001')