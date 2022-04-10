/**
 * title: 基础用法
 * desc: 设置国际化语言的基础用法。
 */
import { useState } from 'react';
import {
  ConfigProvider,
  Radio,
  Pagination,
  DatePicker,
  TimePicker,
  Popconfirm,
  Button,
  Modal,
} from '@sensoro-design/react';
import zhCN from '@sensoro-design/react/es/locale/zh-CN';
import enUS from '@sensoro-design/react/es/locale/en-US';

export default () => {
  const [locale, setLocale] = useState('zh-CN');

  function getLocale() {
    switch (locale) {
      case 'zh-CN':
        return zhCN;
      case 'en-US':
        return enUS;
      default:
        return zhCN;
    }
  }

  return (
    <ConfigProvider locale={getLocale()}>
      <Radio.Group
        value={locale}
        options={['zh-CN', 'en-US']}
        name="locale"
        type="button"
        mode="fill"
        onChange={setLocale}
        style={{ marginBottom: 40 }}
      />
      <br />
      <Pagination total={200} showTotal sizeCanChange style={{ marginBottom: 20, marginRight: 40, minWidth: 550 }} />
      <DatePicker.RangePicker style={{ marginBottom: 20, marginRight: 40, width: 300 }} />
      <TimePicker.RangePicker style={{ marginBottom: 20, marginRight: 40, width: 300 }} />
      <Popconfirm title="Click to confirm!">
        <Button style={{ marginBottom: 20, marginRight: 20 }} type="primary">
          Popconfirm
        </Button>
      </Popconfirm>
      <Button onClick={() => Modal.confirm({ title: 'Title', content: 'Content' })}>Modal confirm</Button>
    </ConfigProvider>
  );
};
