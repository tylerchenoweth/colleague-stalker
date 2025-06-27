from rest_framework import serializers
from .models import Colleague, Hobby

class ColleagueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Colleague
        fields = [
            'id',
            'first_name',
            'last_name',
            'current_company',
            'shared_company',
            'phone',
            'email',
            'hobbies',
            'photo',
            '',
            '',
            ]


class HobbySerializer(serializers.ModelSerializer):
    class Meta:
        model = Hobby
        fields = ['id', 'name']