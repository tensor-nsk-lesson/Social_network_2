import unittest
import requests


class TestUserAPI(unittest.TestCase):

    def test_get_groups(self):
        resp = requests.get('http://127.0.0.1:5000/get/groups')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_one_group(self):
        resp = requests.get('http://127.0.0.1:5000/get/group/1')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_group_admin(self):
        resp = requests.get('http://127.0.0.1:5000/get/group/1/administators')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)
