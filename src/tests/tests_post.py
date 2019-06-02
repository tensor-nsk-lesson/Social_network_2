import unittest
import requests


class TestGetAPI(unittest.TestCase):

	 def test_new_post_user(self):
        data = {
            "content_id": 1,
            "data_time": 2019-06-24 20:00,
            "content": 'самый популярный пост социалочки'
        }
        resp = requests.post('http://127.0.0.1:5000/post/user/1/post/new', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

     def test_new_group(self):
        data = {
            "id": 25,
            "name": 2019-06-24 20:00,
            "topic": 2,
            "desc": 'ну ты заходи если чё',
            "photo":  'ну типо катинка'
        }
        resp = requests.post('http://127.0.0.1:5000/post/group/new', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

      def test_new_post_group(self):
        data = {
            "content_id": 1,
            "data_time": 2019-06-24 21:00,
            "content": 'второй самый популярный пост социалочки'
        }
        resp = requests.post('http://127.0.0.1:5000/post/group/2/post/new', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

     def test_new_admin_group(self):
        data = {
            "user_id": 1,
            "roles": 1
        }
        resp = requests.post('http://127.0.0.1:5000/post/group/2/administrators/new', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)