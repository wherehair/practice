import os
import cv2
import albumentations as A
from tqdm import tqdm

# 증강 파이프라인
transform = A.Compose([
    A.HorizontalFlip(p=0.5),
    A.VerticalFlip(p=0.3),
    A.RandomBrightnessContrast(p=0.5),
    A.RandomGamma(p=0.3),
    A.HueSaturationValue(p=0.5),
    A.RGBShift(p=0.3),
    A.Rotate(limit=30, p=0.7),
    A.RandomScale(scale_limit=0.2, p=0.5),
    A.GaussNoise(var_limit=(10, 50), p=0.4),
    A.MotionBlur(blur_limit=3, p=0.3),
    A.Resize(height=224, width=224)
])

# 입력 및 출력 경로
input_dir = "C:/Users/82109/cs_image/loss_hair_one"
output_dir = "C:/Users/82109/cs_image/loss_hair_two"
os.makedirs(output_dir, exist_ok=True)

# 하위 폴더 전체 순회 (재귀적으로)
for root, dirs, files in os.walk(input_dir):
    if not dirs:  # 자식 폴더가 없는 경우 → '최종 클래스 폴더'로 간주
        rel_path = os.path.relpath(root, input_dir)  # 상대 경로 (클래스명용)
        input_class_path = root
        output_class_path = os.path.join(output_dir, rel_path)
        os.makedirs(output_class_path, exist_ok=True)

        image_list = [f for f in os.listdir(input_class_path) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
        current_idx = 1

        for fname in tqdm(image_list, desc=f"Augmenting {rel_path}"):
            img_path = os.path.join(input_class_path, fname)
            img = cv2.imread(img_path)
            if img is None:
                print(f"❗ 이미지 로드 실패: {img_path}")
                continue

            for i in range(20):  # 증강 20장 생성
                aug_img = transform(image=img)["image"]
                filename = f"{rel_path.replace(os.sep, '_')}_{str(current_idx).zfill(4)}.jpg"
                save_path = os.path.join(output_class_path, filename)
                cv2.imwrite(save_path, aug_img)
                current_idx += 1
