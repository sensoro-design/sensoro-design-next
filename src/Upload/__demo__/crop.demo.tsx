/**
 * title: 上传前裁剪
 * desc: `beforeUpload` 会在每一个文件上传之前执行。如果返回 false 或者 Promise.reject， 那么将会取消当前文件的上传。
 */
import React, { useState } from 'react';
import { Upload, Button, Message, Modal, Grid, Slider } from '@sensoro-design/react';
import EasyCropper from 'react-easy-crop';
import RotateLeftOutlined from '@sensoro-design/icons/RotateLeftOutlined';
import PlusOutlined from '@sensoro-design/icons/PlusOutlined';
import MinusOutlined from '@sensoro-design/icons/MinusOutlined';

import './styles.less'

async function _getCroppedImg(url, pixelCrop, rotation = 0) {
  const image = await new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.src = url;
  });

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx || !image) {
    return null;
  }
  const imageSize = 2 * ((Math.max(image.width, image.height) / 2) * Math.sqrt(2));
  canvas.width = imageSize;
  canvas.height = imageSize;

  if (rotation) {
    ctx.translate(imageSize / 2, imageSize / 2);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.translate(-imageSize / 2, -imageSize / 2);
  }

  ctx.drawImage(image, imageSize / 2 - image.width / 2, imageSize / 2 - image.height / 2);
  const data = ctx.getImageData(0, 0, imageSize, imageSize);

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.putImageData(
    data,
    Math.round(0 - imageSize / 2 + image.width * 0.5 - pixelCrop.x),
    Math.round(0 - imageSize / 2 + image.height * 0.5 - pixelCrop.y)
  );

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      resolve(blob);
    });
  });
}

// 裁剪组件
const Cropper = (props) => {
  const { file, onOk } = props;

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [newFile, setNewFile] = useState(file);

  const url = React.useMemo(() => {
    return URL.createObjectURL(file);
  }, [file]);

  return (
    <div>
      <div style={{ width: '100%', height: 280, position: 'relative' }}>
        <EasyCropper
          style={{ containerStyle: { width: '100%', height: 280 } }}
          cropSize={{ width: 280, height: 280 }}
          aspect={4 / 4}
          image={url}
          crop={crop}
          zoom={zoom}
          rotation={rotation}
          onRotationChange={setRotation}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={async (_, pixels) => {
            console.log(pixels);
            const blob = await _getCroppedImg(url || '', pixels, rotation);
            if (blob) {
              const newFile = new File([blob], file.name || 'image', {
                type: file.type || 'image/*',
              });

              setNewFile(newFile);
            }
          }}
        />
      </div>
      <Grid.Row justify="space-between" style={{ marginTop: 20, marginBottom: 20 }}>
        <Grid.Row style={{ flex: 1, marginLeft: 12, marginRight: 12 }}>
          <MinusOutlined
            style={{ marginRight: 10 }}
            onClick={() => {
              setZoom(Math.max(1, zoom - 0.1));
            }}
          />
          <Slider
            style={{ flex: 1 }}
            step={0.1}
            value={zoom}
            onChange={(v) => {
              setZoom(v);
            }}
            min={0.8}
            max={3}
          />
          <PlusOutlined
            style={{ marginLeft: 10 }}
            onClick={() => {
              setZoom(Math.min(3, zoom + 0.1));
            }}
          />
        </Grid.Row>
        <RotateLeftOutlined
          onClick={() => {
            setRotation(rotation - 90);
          }}
        />
      </Grid.Row>

      <Grid.Row justify="end">
        <Button onClick={props.onCancel} style={{ marginRight: 20 }}>
          取消
        </Button>
        <Button
          type="primary"
          onClick={() => {
            props.onOk(newFile);
          }}
        >
          确定
        </Button>
      </Grid.Row>
    </div>
  );
};

export default () => {
  return (
    <div>
      <Upload
        listType="picture-card"
        action="/"
        beforeUpload={(file) => {
          return new Promise((resolve) => {
            const modal = Modal.confirm({
              title: '裁剪图片',
              onCancel: () => {
                Message.info('取消上传');
                resolve(false);
                modal.close();
              },
              simple: false,
              width: 500,
              content: (
                <Cropper
                  file={file}
                  onOk={(file) => {
                    resolve(file);
                    modal.close();
                  }}
                  onCancel={() => {
                    resolve(false);
                    Message.info('取消上传');
                    modal.close();
                  }}
                />
              ),
              footer: null,
            });
          });
        }}
      />
    </div>
  );
}
