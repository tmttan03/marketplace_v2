from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Product, Category


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ('id','title')
        #fields = '__all__'
        

class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        #fields = ('id','name','description')
        fields = '__all__'


class ProductMiniSerializer(serializers.HyperlinkedModelSerializer):
	#category = CategorySerializer()
	class Meta:
		model = Product
		fields = ('id','name','description', 'price', 'location', 'created_at')


