from dataclasses import field
# import spacy
from rest_framework import serializers
from django import forms

# from test.test_importlib import source
from api2.models import ContactMessage, Recipe, CustomUser, ReportRecipe, ContactMessage


# nlp = spacy.load("en_core_web_sm")
class RecipeSerializer(serializers.ModelSerializer):
    writer_username = serializers.CharField(source="writer.username", read_only=True)
    class Meta:
        model = Recipe
        fields = ["id", "title", "ingredients", "prepare_process", "serve", "type", "type_meal", "writer_username"]
        read_only_fields = ["writer_username"]

    def validate_title(self, value):
        if len(value) < 4:
            raise serializers.ValidationError("Title must be at least 5 characters long.")
        
        return value

    def validate_ingredients(self, value):
        if len(value) < 20:
            raise serializers.ValidationError("Ingredients must be at least 20 characters long.")
        
    #     keywords = {"Baking powder",
    # "Bread crumbs","Bread", "Pasta (spaghetti, penne, macaroni, lasagna)","Crackers",
    # "Corn flakes","Rice (white, brown, jasmine)","Garlic","Potatoes","Ketchup","Mustard (yellow and Dijon)",
    # "Relish","Mayonnaise or Miracle Whip", "Soy sauce","Honey","Vinegar (apple cider, white, and balsamic)",
    # "Worcestershire sauce", "Hot sauce","Olive oil","Sesame oil","Canola, vegetable, or corn oil","Cooking spray",
    # "Cream of chicken soup","Cream of mushroom soup","Chicken broth","Vegetable broth","Canned tomatoes",
    # "Tomato paste","Pasta Sauce", "Canned beans (kidney, black)","Tuna","Salt","Pepper","Kosher salt","Cinnamon",
    # "Nutmeg","Oregano","Rosemary","Basil","Red pepper flakes","Parsley flakes","Garlic powder","Cayenne pepper",
    # "Paprika", "Bay leaves","Vanilla extract", "Chili powder", "Ginger", "Lawry's seasoned salt", "Adobo",
    # "Lawry's seasoned pepper","Butter","Milk","Eggs","Minced garlic","Lemons","Parmesan cheese","Cheddar cheese",
    # "Mozzarella cheese", "Peas","Spinach","Corn","Green beans","Carrots","Broccoli","Sausage","Boneless chicken breast",
    # "Chicken parts (thighs, wings, legs)","Ground turkey or beef","Italian seasoning",
    # "Curry powder", "Cumin", "Thyme", "Tarragon","Allspice", "Dill", "Basmati Rice","Brown Rice","Wheat Flour", 
    # "Semolina", "Chickpea Flour","Lentils", "Turmeric", "Cumin","Coriander","Garam Masala","Chili Powder", 
    # "Ginger", "Garlic","Cardamom", "Cinnamon", "Cloves", "Black Pepper", "Mustard Seeds", "Fenugreek", "Saffron", 
    # "Onion", "Tomato", "Potato", "Cauliflower","Spinach", "Eggplant", "Okra", "Green Beans", 
    # "Carrot", "Peas", "Ghee (Clarified Butter)","Yogurt", "Milk", "Paneer (Indian Cottage Cheese)",
    # "Cream", "Cashews", "Almonds", "Pistachios", "Raisins", "Poppy Seeds", "Tamarind", "Jaggery", 
    # "Coconut", "Curry Leaves", "Cilantro", "Mint", "Green Chilies", "Lemon", "Rose Water", "Kewra Water" 
    
    # }
    #     #keywords = {"salt", "suger", "", "boil", "chop", "ingredients", "flour", "oven", "sauce"}
    #     doc = nlp(value.lower())
    #     if not any(token.text in keywords for token in doc):
    #         raise serializers.ValidationError("Ingredients do not appear to be related to cooking.")
        return value

    def validate_prepare_process(self, value):
        if len(value) < 30:
            raise serializers.ValidationError("Preparation steps must be at least 30 characters long.")
        
        # NLP check for cooking-related words
        # keywords = {"stir", "mix", "heat", "preheat", "bake", "fry", "boil", "saute", "whisk"}
        # doc = nlp(value.lower())
        # if not any(token.text in keywords for token in doc):
        #     raise serializers.ValidationError("Preparation steps do not appear to be related to cooking.")
        
        return value
        

    def validate_serve(self, value):
        if len(value) < 10:
            raise serializers.ValidationError("Serving instructions must be at least 10 characters long.")
        return value


class ReportRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportRecipe
        fields = ['id', 'user', 'recipe', 'reason', 'description', 'created_at']
        read_only_fields = ['user', 'created_at']


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
    
# Contact form serializer

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['first_name', 'last_name', 'email', 'message']
    
    def validate(self, data):
        # Custom validation can be added here
        if not data.get('first_name') or not data.get('last_name'):
            raise serializers.ValidationError("First name and last name are required.")
        if not data.get('email'):
            raise serializers.ValidationError("Email is required.")
        return data