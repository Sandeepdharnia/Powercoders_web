from rest_framework import serializers
from test.test_importlib import source
from api2.models import Recipe, CustomUser

class RecipeSerializer(serializers.ModelSerializer):
    writer_username = serializers.CharField(source="writer.username", read_only=True)
    class Meta:
        model = Recipe
        fields = ["id", "title", "ingredients", "prepare_process", "serve", "type", "type_meal", "writer_username"]
        read_only_fields = ["writer_username"]


class RegisterSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)  # Used for confirmation

    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'password', 'confirm_password']
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Passwords do not match.")
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')  # Remove confirm password before saving
        user = CustomUser.objects.create_user(**validated_data)  # Use custom manager
        return user

    

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()  # ✅ Use email instead of username
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        print('this is email and password', email, password)
        
        if not email or not password:
            raise serializers.ValidationError("Both username and password are required.")

        return data