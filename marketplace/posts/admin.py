from django.contrib import admin
from .models import Product, Category,ProductAlbum, Stock, Favorite, Comment

admin.site.register(Product)
admin.site.register(Category)
admin.site.register(ProductAlbum)
admin.site.register(Stock)
admin.site.register(Favorite)
admin.site.register(Comment)