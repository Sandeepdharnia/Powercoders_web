from csv import writer
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from rest_framework.authentication import get_user_model  # ✅ Import settings for AUTH_USER_MODEL



class Recipe(models.Model):
    STATUS_CHOICES = [
          ('pending', 'Pending Review'),
          ('approved', 'Approved'),
          ('rejected', 'Rejected'),
      ]
    title = models.CharField(max_length=255)
    ingredients = models.TextField()
    prepare_process = models.TextField()
    serve = models.TextField()
    type = models.CharField(max_length=50)
    type_meal = models.CharField(max_length=50)
    writer = models.ForeignKey(
        settings.AUTH_USER_MODEL, 
        on_delete=models.CASCADE)  # ✅ Writer is the user
    added_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


## Recipe report 
class ReportRecipe(models.Model):
    REASION_CHOICES = [
        ("spam", "Spam or Advertisment"),
        ("inappropriate", "Inappropraite Content"),
        ("fake", "Fake Recipe"),
        ("other", "Other")
    ]
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    repice = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    reason = models.CharField(max_length=50, choices=REASION_CHOICES)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} reported {self.repice} - {self.reason}"


class CustomUserManager(BaseUserManager):
    def create_user(self, email, username=None, password=None, **extra_fields):
        if not email:
            raise ValueError("Users must have an email address")
        if not username:
            raise ValueError("Users must have a username")

        extra_fields.setdefault("is_active", True)
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username=None, password=None, **extra_fields):
        
        """Create and return a superuser."""
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if username is None:
            username =  "admin"

        return self.create_user(email,username, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    username = models.TextField(max_length=255, unique=True)
    is_active = models.BooleanField(default=True)  # ✅ Fix: Added 'is_active'
    is_staff = models.BooleanField(default=False)  # ✅ Required for Django Admin
    date_joined = models.DateTimeField(auto_now_add=True) 

    # groups = models.ManyToManyField(
    #     'auth.Group',
    #     related_name="custom_user_groups",  # ✅ Prevents clash with `auth.User.groups`
    #     blank=True
    # )
    # user_permissions = models.ManyToManyField(
    #     'auth.Permission',
    #     related_name="custom_user_permissions",  # ✅ Prevents clash with `auth.User.user_permissions`
    #     blank=True
    # )

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'  
    REQUIRED_FIELDS = ['username']

    

    def __str__(self):
        return self.email 


# Contact form 

class ContactMessage(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.first_name} {self.last_name} ({self.email})"

