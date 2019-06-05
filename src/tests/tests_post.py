import unittest
import requests

url = 'http://127.0.0.1:5000'


class TestGetAPI(unittest.TestCase):
    #Юзеры
    def test_new_user(self):
        data = {
            "id": 100,
            "email": 'sweetbaby1990@gmai.com',
            "password": '',
            "phone": '88005553535',
            "first_name": 'Прощепозвонить',
            "second_name": 'Чемукогото',
            "middle_name": 'Занимать',
            "gender_id": 1,
            "birthday": '1990-10-10',
            "country_id": 4,
            "city_id": 1,
            "photo_id": 2,
            "verification": 'false',
            "private": 'false',
            "deleted": 'false'
        }
        resp = requests.post(url + '/post/user/new', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_new_post_user(self):
        data = {
            "content_id": 1,
            "data_time": '2019-06-24 20:00',
            "content": 'самый популярный пост социалочки'
        }
        resp = requests.post(url + '/post/user/1/post/new', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_post_user_friend(self):
        data = {
            "user_id": 2,
            "friend_id": 3,
            "state_id": 1
        }
        resp = requests.post(url + '/user/2/friends', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_put_user_friend(self):
        data = {
            "user_id": 2,
            "friend_id": 3,
            "state_id": 2
        }
        resp = requests.put(url + '/user/2/friends', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    #Группы
    def test_new_group(self):
        data = {
            "name": 'Четкие поцанчики',
            "topic": 2,
            "desc": 'ну ты заходи если чё',
            "photo":  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg='
        }
        resp = requests.post(url + '/post/group/new', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_new_post_group(self):
        data = {
            "content_id": 1,
            "content": 'второй самый популярный пост социалочки'
        }
        resp = requests.post(url + '/post/group/2/post/new', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_new_admin_group(self):
        data = {
            "user_id": 1,
            "roles": 1
        }
        resp = requests.post(url + '/post/group/2/administrators/new', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)