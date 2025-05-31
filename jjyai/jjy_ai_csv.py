import os
import torch
from torchvision import transforms
from torchvision.models import resnet18
from PIL import Image
import pandas as pd
from torchvision.datasets import ImageFolder
from torch import nn

# ✅ 설정
model_path = "hairloss_resnet18_flat.pt"
image_root = "C:/Users/82109/cs_image/loss_hair_flat"
output_csv = "prediction_results.csv"

# ✅ 전처리
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406],
                         [0.229, 0.224, 0.225])
])

# ✅ 클래스 목록
dataset = ImageFolder(root=image_root)
class_names = dataset.classes
num_classes = len(class_names)

# ✅ 모델 불러오기
model = resnet18()
model.fc = nn.Linear(model.fc.in_features, num_classes)
model.load_state_dict(torch.load(model_path, map_location='cpu'))
model.eval()

# ✅ 예측 실행
results = []

for root, dirs, files in os.walk(image_root):
    for file in files:
        if file.lower().endswith(('.jpg', '.jpeg', '.png')):
            img_path = os.path.join(root, file)
            try:
                image = Image.open(img_path).convert("RGB")
                input_tensor = transform(image).unsqueeze(0)

                with torch.no_grad():
                    output = model(input_tensor)
                    pred_idx = torch.argmax(output, dim=1).item()
                    pred_class = class_names[pred_idx]

                    results.append({
                        "이미지 경로": img_path,
                        "예측 클래스": pred_class
                    })
            except Exception as e:
                results.append({
                    "이미지 경로": img_path,
                    "예측 클래스": "로드 실패"
                })

# ✅ 저장
df = pd.DataFrame(results)
df.to_csv(output_csv, index=False)
print(f"✅ 예측 결과 저장 완료: {output_csv}")
