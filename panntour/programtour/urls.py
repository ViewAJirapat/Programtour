from django.urls import path, include
from rest_framework import routers
from .views import AdminInfomationViewSet, UserInformationViewSet, UserBookingViewSet, UserRefundViewset, ToursDetailViewSet 
from .views import userRegister, adminLogin, userLogin, addTourDetail, updateTourDetail, deleteTourDetail, addTourBooking
from wagtail.admin import urls as wagtailadmin_urls
from wagtail.core import urls as wagtail_urls
from wagtail.documents import urls as wagtaildocs_urls
from django.conf import settings
from django.conf.urls.static import static
from wagtail.api.v2.views import PagesAPIViewSet
from wagtail.api.v2.router import WagtailAPIRouter
from wagtail.images.api.v2.views import ImagesAPIViewSet
from wagtail.documents.api.v2.views import DocumentsAPIViewSet


# Create the router. "wagtailapi" is the URL namespace
api_router = WagtailAPIRouter('wagtailapi')

router = routers.DefaultRouter()

# Add the three endpoints using the "register_endpoint" method.
# The first parameter is the name of the endpoint (eg. pages, images). This
# is used in the URL of the endpoint
# The second parameter is the endpoint class that handles the requests
api_router.register_endpoint('pages', PagesAPIViewSet)
api_router.register_endpoint('images', ImagesAPIViewSet)
api_router.register_endpoint('documents', DocumentsAPIViewSet)

router.register(r'admininfo', AdminInfomationViewSet)
router.register(r'userinfo', UserInformationViewSet)
router.register(r'userbooking', UserBookingViewSet)
router.register(r'userrefund', UserRefundViewset)
router.register(r'tourdetail', ToursDetailViewSet)

urlpatterns = [
    path('cms/', include(wagtailadmin_urls)),
    path('documents/', include(wagtaildocs_urls)),
    path('pages/', include(wagtail_urls)),
    path('api/v2/', api_router.urls),
    path('api/v1/',include(router.urls)),
    path('userregister/', userRegister),
    path('adminlogin/', adminLogin),
    path('userlogin/',userLogin),
    path('addtourdetail/', addTourDetail),
    path('updatetourdetail/', updateTourDetail),
    path('deletetourdetail/', deleteTourDetail),
    path('addtourbooking/', addTourBooking),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)