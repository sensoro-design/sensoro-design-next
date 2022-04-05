import React from 'react';
import { UploadListProps, STATUS, CustomIconType } from '../interface';
import { UploadItem } from '../upload';
import { isFunction, isObject } from '../../_util/is';
import UploadProgress from './uploadProgress';
import ImageFilled from '@sensoro-design/icons/ImageFilled';
import UploadOutlined from '@sensoro-design/icons/UploadOutlined';
import EyeOutlined from '@sensoro-design/icons/EyeOutlined';
import DeleteOutlined from '@sensoro-design/icons/DeleteOutlined';

const PictureItem = (props: UploadListProps & { file: UploadItem }) => {
  const { disabled, prefixCls, file, showUploadList } = props;
  const cls = `${prefixCls}-list-item-picture`;
  const { status, originFile } = file;
  const url =
    file.url !== undefined
      ? file.url
      : originFile && isFunction(URL.createObjectURL) && URL.createObjectURL(originFile);
  const actionIcons = isObject(showUploadList) ? (showUploadList as CustomIconType) : {};

  return (
    <div className={cls}>
      {status === STATUS.uploading ? (
        <UploadProgress
          onReupload={props.onReupload}
          onUpload={props.onUpload}
          onAbort={props.onAbort}
          listType="picture-card"
          file={file}
          prefixCls={prefixCls}
          progressProps={props.progressProps}
          {...actionIcons}
        />
      ) : (
        <>
          <img src={url} />
          <div className={`${cls}-mask`}>
            {file.status === STATUS.fail && (
              <div className={`${cls}-error-tip`}>
                {actionIcons.errorIcon !== null && (
                  <span className={`${prefixCls}-list-error-icon`}>
                    {actionIcons.errorIcon || <ImageFilled />}
                  </span>
                )}
              </div>
            )}
            <div className={`${cls}-operation`}>
              {file.status !== STATUS.fail && actionIcons.previewIcon !== null && (
                <span
                  className={`${prefixCls}-list-preview-icon`}
                  onClick={() => {
                    props.onPreview && props.onPreview(file);
                  }}
                >
                  {actionIcons.previewIcon || <EyeOutlined />}
                </span>
              )}
              {file.status === STATUS.fail && actionIcons.reuploadIcon !== null && (
                <span
                  className={`${props.prefixCls}-list-reupload-icon`}
                  onClick={() => {
                    props.onReupload && props.onReupload(file);
                  }}
                >
                  {actionIcons.reuploadIcon || <UploadOutlined />}
                </span>
              )}
              {!disabled && actionIcons.removeIcon !== null && (
                <span
                  className={`${prefixCls}-list-remove-icon`}
                  onClick={() => {
                    props.onRemove && props.onRemove(file);
                  }}
                >
                  {actionIcons.removeIcon || <DeleteOutlined />}
                </span>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PictureItem;
