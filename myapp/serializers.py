from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate
import random
import string
User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('mail_id', 'password', 'password2')

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError({'password': 'Passwords must match.'})
        return data

    def create(self, validated_data):
        random_empcode = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))

        user = User(
            mail_id=validated_data['mail_id'],
            empcode=random_empcode,
        
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class LoginSerializer(serializers.Serializer):
    mail_id = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user is None:
            raise serializers.ValidationError('Invalid credentials')
        return {'user': user}
