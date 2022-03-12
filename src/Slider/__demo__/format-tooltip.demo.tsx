
/**
 * title: 自定义提示
 * desc: 使用 `formatterTooltip` 可以格式化 Tooltip 的内容。
 */
import { Slider } from '@sensoro-design/react';

export default () => {

    function formatTooltip (val) {
        return <span>{val}%</span>;
    };

    return (
        <div style={{ width: 200 }}>
            <Slider
                defaultValue={20}
                formatTooltip={formatTooltip}
            />
        </div>
    )
}
