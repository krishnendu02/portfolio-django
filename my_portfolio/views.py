from django.shortcuts import render
from .models import certificate_index, certificate_only

# Create your views here.
def index(request):
    cert1 = certificate_index()
    cert1.name = 'Develop GenAI Apps Skill Badge'
    cert1.desc = 'Text generation, applying function calls with the Python SDK and the Gemini API, and deploying a Streamlit application with Cloud Run.'
    cert1.link = 'https://www.credly.com/badges/06f9f713-2c9e-4c4f-8138-047a5516a129/public_url'
    
    cert2 = certificate_index()
    cert2.name = 'Crash Course on Python'
    cert2.desc = 'Understand what Python is and why Python is relevant to automation and how to use the basic Python structures: strings, lists, and dictionaries'
    cert2.link = 'https://coursera.org/share/4beff18eef7912d91349c600e349cdc0'
    
    cert3 = certificate_index()
    cert3.name = 'Fundamentals of Cloud Computing'
    cert3.desc = 'Basic Cloud knowledge and how cloud computing works.'
    cert3.link = 'https://certificates.upgrad.com/23c62111-8067-4f42-b7f3-eda2ea621295-Free%20Course%20Completion-1GecyxP1dpacIUKo.jpeg'
    
    
    
    certs =[cert1,cert2,cert3]
    
    return render(request, "index.html",{'certs': certs})

def certificate(request):
    certs_only = certificate_only.objects.all()
    return render(request, "certificate.html",{'certs_only':certs_only})