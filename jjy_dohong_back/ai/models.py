from django.db import models
import os
import torch
from torchvision import transforms
from torchvision.models import resnet18
import torch.nn as nn

# 이미지 전처리
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406],
                         [0.229, 0.224, 0.225]),
])

class_names = ['class1', 'class2', 'class3', 'class4', 'class5', 'class6', 'class7', 'class8']

def load_model():
    num_classes = len(class_names)
    model = resnet18(pretrained=False)
    model.fc = nn.Linear(model.fc.in_features, num_classes)

    BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # ai 폴더 경로
    model_path = os.path.join(BASE_DIR, 'model', 'hairloss_resnet18_flat.pt')

    model.load_state_dict(torch.load(model_path, map_location='cpu'))
    model.eval()
    return model

model = load_model()

