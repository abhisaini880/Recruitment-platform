from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)


class UserManager(BaseUserManager):
    """Manager for users"""

    def normalize_email(self, email):
        """
        Normalize user email

        Args:
            email (_type_): _description_
        """

        return email.lower()

    def create_user(self, email, password=None, **extra_fields):
        """
        Create a new user in the system

        Args:
            email (_type_): _description_
            password (_type_, optional): _description_. Defaults to None.
        """

        if not email:
            raise ValueError("User must have a email !")

        email = self.normalize_email(email)

        if not extra_fields.get("name"):
            extra_fields["name"] = email.split("@")[0]

        user = self.model(email=email, **extra_fields)

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        """
        create superuser in system

        Args:
            email (_type_): _description_
            password (_type_): _description_
        """

        user = self.create_user(email=email, password=password)

        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    """User in the system"""

    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = "email"
