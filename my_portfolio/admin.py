from django.contrib import admin
from .models import certificate_only
from django.db import models

####################### Changes Made Here ##############################
from adminsortable2.admin import SortableAdminMixin
####################### Changes End Here ##############################

# Register your models here.

####################### Changes Made Here ##############################
@admin.register(certificate_only)
class CertificateOnlyAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ('cert_only_name', 'order')
    # The 'order' field is automatically made read-only by SortableAdminMixin
    # to allow drag-and-drop reordering.
####################### Changes End Here ##############################
  
# admin.site.register(certificate_only)