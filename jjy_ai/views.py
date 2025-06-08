from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from PIL import Image
import torch
import os
from django.conf import settings

@csrf_exempt
def predict(request):
    if request.method == 'POST' and request.FILES.get('image'):
        image_file = request.FILES['image']
        image = Image.open(image_file).convert("RGB")

        from .models import transform, model, class_names
        input_tensor = transform(image).unsqueeze(0)

        with torch.no_grad():
            output = model(input_tensor)
            pred_idx = torch.argmax(output, dim=1).item()
            pred_class = class_names[pred_idx]

        # ✅ 폴더 안에 있는 첫 번째 이미지 찾기
        folder_path = os.path.join(settings.MEDIA_ROOT, pred_class)
        example_image_filename = None
        if os.path.exists(folder_path):
            for fname in os.listdir(folder_path):
                if fname.lower().endswith(('.jpg', '.jpeg', '.png')):
                    example_image_filename = fname
                    break

        # ✅ 이미지가 있을 경우: 절대 URL 생성
        if example_image_filename:
            relative_path = f"{settings.MEDIA_URL}{pred_class}/{example_image_filename}"
            example_image_url = request.build_absolute_uri(relative_path)
        else:
            example_image_url = None

        return JsonResponse({
            'predicted_class': pred_class,
            'class_index': pred_idx,
            'example_image_url': example_image_url,
        })

    return JsonResponse({'error': '이미지 파일이 필요합니다.'}, status=400)
