from django.test import TestCase
from django.contrib.auth import get_user_model


class ModelTests(TestCase):
    """
    Test Models

    Args:
        TestCase (_type_): _description_
    """

    def test_create_user_with_email_successful(self):
        """Test user should be registered with email and password"""
        email = "test@example.com"
        password = "test@123"
        name = "tester"

        user = get_user_model().objects.create_user(
            email=email, password=password
        )

        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))

    def test_create_user_without_email_raise_error(self):
        """Test user without email should raise error"""
        email = None
        password = "test@123"

        with self.assertRaises(ValueError):
            get_user_model().objects.create_user(
                email=email, password=password
            )

    def test_normalize_user_email(self):
        """Test email is normalized for new users"""
        emails = [
            ["Test1@example.COM", "test1@example.com"],
            ["TEST2@example.com", "test2@example.com"],
            ["TEST3@EXAMPLE.COM", "test3@example.com"],
            ["test4@example.com", "test4@example.com"],
        ]

        for actual_email, desired_email in emails:
            user = get_user_model().objects.create_user(
                email=actual_email, password=None
            )

            self.assertEqual(user.email, desired_email)

    def test_create_superuser(self):
        """Test creating superuser"""
        email = "test@example.com"
        password = "test@123"

        user = get_user_model().objects.create_superuser(
            email=email, password=password
        )

        self.assertTrue(user.is_staff)
        self.assertTrue(user.is_superuser)

    def test_create_user_without_name(self):
        """Test create user without name use email username as name"""
        email = "Testname@example.com"
        password = "test@123"
        expected_name = "testname"

        user = get_user_model().objects.create_user(
            email=email, password=password
        )

        self.assertEqual(user.name, expected_name)

    def test_create_user_with_name(self):
        """Test create user with name should not use email as name"""
        email = "Testname@example.com"
        password = "test@123"
        name = "actual_name"

        user = get_user_model().objects.create_user(
            email=email, password=password, name=name
        )

        self.assertEqual(user.name, name)
