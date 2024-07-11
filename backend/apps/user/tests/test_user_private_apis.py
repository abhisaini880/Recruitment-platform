from django.test import TestCase
from django.urls import reverse
from django.contrib.auth import get_user_model

from rest_framework.test import APIClient
from rest_framework import status


# Constants
CREATE_USER_URL = reverse("user:create")
TOKEN_URL = reverse("token_obtain_pair")
MANAGE_USER_URL = reverse("user:manage")


def create_user(**params):
    """Create user in system for testing"""
    return get_user_model().objects.create_user(**params)


class UserPrivateAPITests(TestCase):
    """Tests for managing the users in system"""

    def setUp(self):
        """setup env for tests"""

        self.user = create_user(
            email="test@example.com", password="test@123", name="testuser"
        )

        self.client = APIClient()
        self.client.force_authenticate(user=self.user)

    def test_retrieve_authenticated_user(self):
        """test to retrive authenticated user"""

        res = self.client.get(MANAGE_USER_URL)

        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data.get("name"), "testuser")

    def test_update_user_name(self):
        """test to update the name of user"""

        payload = {"name": "new_name", "password": "new_password"}

        res = self.client.patch(MANAGE_USER_URL, payload)

        self.assertEqual(res.status_code, status.HTTP_200_OK)

        self.user.refresh_from_db()

        self.assertEqual(self.user.name, payload.get("name"))

    def test_post_method_raise_error(self):
        """test to check post method raise error"""

        payload = {"name": "new_name", "password": "new_password"}

        res = self.client.post(MANAGE_USER_URL, payload)

        self.assertEqual(res.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)
