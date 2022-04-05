import React from 'react';
import FileOutlined from '@sensoro-design/icons/FileOutlined';
import FilePdfOutlined from '@sensoro-design/icons/FilePdfOutlined';
import FileImageOutlined from '@sensoro-design/icons/FileImageOutlined';
import FileVideoOutlined from '@sensoro-design/icons/FileVideoOutlined';
import FileAudioOutlined from '@sensoro-design/icons/FileAudioOutlined';
import DeleteOutlined from '@sensoro-design/icons/DeleteOutlined';
import ExclamationCircleFilled from '@sensoro-design/icons/ExclamationCircleFilled';
import { UploadItem } from '../upload';
import Tooltip from '../../Tooltip';
import { STATUS, CustomIconType, UploadListProps } from '../interface';
import { isObject, isFunction } from '../../_util/is';
import UploadProgress from './uploadProgress';
import IconHover from '../../_class/icon-hover';
import { ConfigProviderProps } from '../../ConfigProvider';

const getIconType = (file: UploadItem) => {
  let type = '';
  if (file.originFile && file.originFile.type) {
    // 上传文件
    type = file.originFile.type;
  } else {
    const name = file.name || '';
    const fileExtension = name.split('.').pop() || '';
    type = fileExtension;
    if (['png', 'jpg', 'jpeg', 'bmp', 'gif'].indexOf(fileExtension) > -1) {
      type = 'image';
    } else if (['mp4', 'm2v', 'mkv'].indexOf(fileExtension) > -1) {
      type = 'video';
    } else if (['mp3', 'wav', 'wmv'].indexOf(fileExtension) > -1) {
      type = 'audio';
    }
  }

  if (type.indexOf('image') > -1) {
    return FileImageOutlined;
  }
  if (type.indexOf('pdf') > -1) {
    return FilePdfOutlined;
  }
  if (type.indexOf('audio') > -1) {
    return FileVideoOutlined;
  }
  if (type.indexOf('video') > -1) {
    return FileAudioOutlined;
  }
  return FileOutlined;
};

const TextItem = (
  props: UploadListProps & { file: UploadItem; locale: ConfigProviderProps['locale'] }
) => {
  const { prefixCls, disabled, file, locale } = props;
  const cls = `${prefixCls}-list-item-text`;

  const Icon = getIconType(file);

  const showUploadList = isObject(props.showUploadList)
    ? (props.showUploadList as CustomIconType)
    : {};

  // custom icons
  const actionIcons = isObject(showUploadList) ? (showUploadList as CustomIconType) : {};

  const fileName = file.name || (file.originFile && file.originFile.name);
  const url =
    file.url !== undefined
      ? file.url
      : file.originFile && isFunction(URL.createObjectURL) && URL.createObjectURL(file.originFile);

  let triggerProps = {};
  // 重新上传后，如果成功，但是鼠标仍然hover在内容区，错误提示不会消失。所以需要设置 popupVisible 为false，来隐藏tooltip
  if (file.status !== STATUS.fail) {
    triggerProps = {
      popupVisible: false,
    };
  }

  return (
    <div className={`${prefixCls}-list-item ${prefixCls}-list-item-${file.status}`}>
      <div className={cls}>
        {props.listType === 'picture-list' && (
          <div className={`${cls}-thumbnail`}>
            <img src={url} />
          </div>
        )}
        <div className={`${cls}-content`}>
          <div className={`${cls}-name`}>
            {props.listType === 'text' && actionIcons.fileIcon !== null && (
              <span className={`${prefixCls}-list-file-icon`}>
                {actionIcons.fileIcon || <Icon />}
              </span>
            )}
            {isFunction(showUploadList.fileName) ? (
              <span className={`${cls}-name-text`}>{showUploadList.fileName(file)}</span>
            ) : file.url ? (
              <a href={file.url} target="_blank" rel="noreferrer" className={`${cls}-name-link`}>
                {fileName}
              </a>
            ) : (
              <span className={`${cls}-name-text`}>{fileName}</span>
            )}
            {file.status === STATUS.fail && actionIcons.errorIcon !== null && (
              <Tooltip
                content={file.response || locale.Upload.error}
                {...triggerProps}
                disabled={file.status !== STATUS.fail}
              >
                <span className={`${props.prefixCls}-list-error-icon`}>
                  {actionIcons.errorIcon ||
                    (props.listType === 'picture-card' ? (
                      <FileImageOutlined />
                    ) : (
                      <ExclamationCircleFilled />
                    ))}
                </span>
              </Tooltip>
            )}
          </div>
          <UploadProgress
            file={file}
            prefixCls={prefixCls}
            progressProps={props.progressProps}
            onReupload={props.onReupload}
            onUpload={props.onUpload}
            onAbort={props.onAbort}
            {...actionIcons}
          />
        </div>
      </div>
      <div className={`${prefixCls}-list-item-operation`}>
        {!disabled && actionIcons.removeIcon !== null && (
          <IconHover
            onClick={() => {
              props.onRemove && props.onRemove(file);
            }}
          >
            <span className={`${prefixCls}-list-remove-icon`}>
              {actionIcons.removeIcon || <DeleteOutlined />}
            </span>
          </IconHover>
        )}
      </div>
    </div>
  );
};

export default TextItem;
