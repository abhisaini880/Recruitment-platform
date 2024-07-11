""" Tests for create user api """

from django.test import TestCase
from django.contrib.auth import get_user_model
from django.urls import reverse

from rest_framework.test import APIClient
from rest_framework import status

# Constants
CREATE_USER_URL = reverse("user:create")
MANAGE_USER_URL = reverse("user:manage")


class UserPubicAPITests(TestCase):
    """
    Tests for create user api

    Args:
        TestCase (_type_): _description_
    """

    def setUp(self):
        self.client = APIClient()

    def test_non_admin_user_registeration_successful(self):

        user_creds = {"email": "test@example.com", "password": "test@123"}

        payload = {"name": "tester", **user_creds}

        res = self.client.post(
            CREATE_USER_URL,
            payload,
        )

        self.assertEqual(res.status_code, status.HTTP_201_CREATED)

        user = get_user_model().objects.get(email=user_creds["email"])
        self.assertTrue(user.check_password(user_creds["password"]))
        self.assertNotIn("password", res.data)

    def test_unauthenticated_private_api_raise_error(self):
        """test to check unauthenticated private api raise error"""

        res = self.client.get(MANAGE_USER_URL)

        self.assertEqual(res.status_code, status.HTTP_401_UNAUTHORIZED)
