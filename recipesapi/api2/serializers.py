from rest_framework import serializers
from api2.models import Recipe, Register

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'


class RegisterSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)  # Used for confirmation

    class Meta:
        model = Register
        fields = ['id', 'username', 'email', 'password', 'confirm_password']

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Passwords do not match.")
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')  # Remove password2 before saving
        user = Register(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
        #return super().create(validated_data)
    

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