from django.shortcuts import render


def frontend(request):
    return render(request, "vue_index.html")
