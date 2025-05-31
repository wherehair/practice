import os
import shutil

input_dir = "C:/Users/82109/cs_image/loss_hair_two"
output_dir = "C:/Users/82109/cs_image/loss_hair_flat"
os.makedirs(output_dir, exist_ok=True)

for root, dirs, files in os.walk(input_dir):
    parts = root.replace("\\", "/").split("/")
    if len(parts) >= 4:
        class_name = "_".join(parts[-3:])  # Hairline_Norwood_Norwood_2
        target_class_dir = os.path.join(output_dir, class_name)
        os.makedirs(target_class_dir, exist_ok=True)

        for file in files:
            if file.lower().endswith((".jpg", ".jpeg", ".png")):
                src = os.path.join(root, file)
                dst = os.path.join(target_class_dir, file)
                shutil.copy2(src, dst)

print("✅ 전체 이미지 flatten 완료!")
