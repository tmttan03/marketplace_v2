from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProductSerializer, ProductMiniSerializer
from .models import Product
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