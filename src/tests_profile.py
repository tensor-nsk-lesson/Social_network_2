import unittest
import requests


class TestUserAPI(unittest.TestCase):

    def test_get_allusers(self):
        resp = requests.get('http://127.0.0.1:5000/get/users')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_one_user(self):
        resp = requests.get('http://127.0.0.1:5000/get/user/1')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_friends_user(self):
        resp = requests.get('http://127.0.0.1:5000/get/user/1/friends')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_friend_request(self):
        data = {
            "friend_id": 2,
            "state_id": 1
        }
        resp = requests.post('http://127.0.0.1:5000/profile/1/friends', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_friend_request(self):
        data = {
            "friend_id": 2,
            "state_id": 2
        }
        resp = requests.put('http://127.0.0.1:5000/profile/1/friends', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_blacklist(self):
        resp = requests.get('http://127.0.0.1:5000/get/user/1/blacklist')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_add_in_blacklist(self):
        data = {
            "friend_id": 2,
            "state_id": 3
        }
        resp = requests.put('http://127.0.0.1:5000/get/user/1/friends', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_all_message(self):
        resp = requests.get('http://127.0.0.1:5000/profile/1/allmessage')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_dialogs(self):
        resp = requests.get('http://127.0.0.1:5000/get/user/1/dialogs')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_post(self):
        resp = requests.get('http://127.0.0.1:5000/get/user/1/post')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)



