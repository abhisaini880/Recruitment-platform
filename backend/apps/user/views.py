from rest_framework import generics
from django.contrib.auth import get_user_model
from apps.user.serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated


class CreateUserView(generics.CreateAPIView):
    """create a new user in the system"""

    serializer_class = UserSerializer

    authentication_classes = []
    permission_classes = []


class ManageUserView(generics.RetrieveUpdateAPIView):
    """Retrive and update user in the system"""

    serializer_class = UserSerializer

    permission_classes = [IsAuthenticated]

    def get_object(self):
        """retrieve and retrun the authenticated user"""
        return self.request.user
