import gradio as gr
from io import BytesIO
import requests
import PIL
from PIL import Image
import numpy as np
import os
import uuid
import torch
from torch import autocast
import cv2
from matplotlib import pyplot as plt
from diffusers import DiffusionPipeline
from torchvision import transforms
from clipseg.models.clipseg import CLIPDensePredT

device = "cuda"
pipe = DiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-inpainting",
    revision="fp16", 
    torch_dtype=torch.float16,
).to(device)

model = CLIPDensePredT(version='ViT-B/16', reduce_dim=64)
model.eval()
model.load_state_dict(torch.load('./clipseg/weights/rd64-uni.pth', map_location=torch.device('cuda')), strict=False)

def predict(images):
    prompt = "facial hair and beard"
    with autocast("cuda"):
        init_image = images["image"].convert("RGB").resize((512, 512))
        mask = images["mask"].convert("RGB").resize((512, 512))
    output = pipe(prompt=prompt, image=init_image, mask_image=mask, strength=0.8)
    return output.images[0]


image = gr.Image(source='upload', tool='sketch', elem_id="image_upload", type="pil", label="Upload").style(height=400)
demo = gr.Interface(
    fn=predict,
    inputs=[image],
    outputs="image"
)

demo.launch()