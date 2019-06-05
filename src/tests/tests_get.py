import unittest
import requests

url = 'http://127.0.0.1:5000'


class TestGetAPI(unittest.TestCase):
    #Юзеры
    def test_get_allusers(self):
        resp = requests.get(url + '/get/users')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_one_user(self):
        resp = requests.get(url + '/get/user/1')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_friends_user(self):
        resp = requests.get(url + '/get/user/1/friends')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_blacklist_user(self):
        resp = requests.get(url + '/get/user/1/blacklist')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_dialogs_user(self):
        resp = requests.get(url + '/get/user/1/dialogs')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_posts_user(self):
        resp = requests.get(url + '/get/user/1/posts')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    #Группы
    def test_get_allgroups(self):
        resp = requests.get(url + '/get/groups')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_one_group(self):
        resp = requests.get(url + '/get/group/1')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_group_admin(self):
        resp = requests.get(url + '/get/group/1/administators')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)