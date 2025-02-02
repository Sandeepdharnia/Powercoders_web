from csv import writer
from django.db import models
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models



# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=255)
    ingredients = models.TextField()
    prepare_process = models.TextField()
    serve = models.TextField()
    writer = models.CharField(max_length=255)  # Ensure this field exists
    type = models.CharField(max_length=255)
    added_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    

# creaet a model for user registration
# class Register(models.Model):
#     username = models.CharField(max_length=255)
#     email = models.EmailField(unique=True)
#     password = models.CharField(max_length=255)
#     added_date = models.DateTimeField(auto_now_add=True)

#     def save(self, *args, **kwargs):
#         self.password = make_password(self.password)  # Hash password before saving
#         super().save(*args, **kwargs)

#     def __str__(self):
#         return self.username
    




class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)

        if password:
            user.set_password(password)  # Hashes the password
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, username, password, **extra_fields)



class Register(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=255, unique=True)
    is_active = models.BooleanField(default=True)  # ✅ Fix: Added 'is_active'
    is_staff = models.BooleanField(default=False)  # ✅ Required for Django Admin
    date_joined = models.DateTimeField(auto_now_add=True) 

    groups = models.ManyToManyField(
        'auth.Group',
        related_name="custom_user_groups",  # ✅ Prevents clash with `auth.User.groups`
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name="custom_user_permissions",  # ✅ Prevents clash with `auth.User.user_permissions`
        blank=True
    )

    USERNAME_FIELD = 'email'  
    REQUIRED_FIELDS = ['username']

    objects = CustomUserManager()

    def __str__(self):
        return self.email
