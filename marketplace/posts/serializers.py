from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Product, Category, ProductAlbum, Stock


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


class ProductAlbumSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ProductAlbum
        #fields = ('id','product','image')
        fields = '__all__'


class StockSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Stock
        #fields = ('id','product','image')
        fields = '__all__'