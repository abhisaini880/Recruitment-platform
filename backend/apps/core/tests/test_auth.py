from django.test import TestCase
from django.contrib.auth import get_user_model
from django.urls import reverse

from rest_framework.test import APIClient
from rest_framework import status

# constants
TOKEN_URL = reverse("token_obtain_pair")
REFRESH_TOKEN_URL = reverse("token_refresh")


class AuthTests(TestCase):
    """Tests for checking user authentication"""

    def setUp(self):
        """create dummy setup for test"""
        self.client = APIClient()
        self.user_creds = {
            "email": "test@example.com",
            "password": "test@123",
        }

        get_user_model().objects.create_user(
            email=self.user_creds["email"],
            password=self.user_creds["password"],
        )

    def generate_user_refresh_token(self):
        payload = {
            "email": self.user_creds.get("email"),
            "password": self.user_creds.get("password"),
        }

        res = self.client.post(TOKEN_URL, payload)
        return res.data.get("refresh")

    def test_generate_tokens_on_user_login(self):
        """Test to check if tokens are generated on user login"""

        payload = {
            "email": self.user_creds.get("email"),
            "password": self.user_creds.get("password"),
        }

        res = self.client.post(TOKEN_URL, payload)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertContains(res, "access")
        self.assertContains(res, "refresh")

    def test_generate_token_from_refresh_token(self):
        """Test to check if access token can be generated from refresh token"""

        refresh_token = self.generate_user_refresh_token()

        payload = {"refresh": refresh_token}

        res = self.client.post(REFRESH_TOKEN_URL, payload)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertContains(res, "access")
