from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProductSerializer, ProductMiniSerializer, CategorySerializer, ProductAlbumSerializer, StockSerializer
from .models import Product, Category, ProductAlbum, Stock
from rest_framework.response import Response

class ProductViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def list(self, request, *args, **kwargs):
        products = Product.objects.all()
        serializer = ProductMiniSerializer(products,many=True)
        return Response(serializer.data)


class CategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductAlbumViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = ProductAlbum.objects.all()
    serializer_class = ProductAlbumSerializer


class StockViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Stock.objects.all()
    serializer_class = StockSerializer
