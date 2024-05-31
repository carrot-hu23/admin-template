import {ProDescriptions} from "@ant-design/pro-components";
import {Button} from "antd";

export default ()=>{

    return(<>
        <ProDescriptions
            column={2}
            title="房间信息"
        >
            <ProDescriptions.Item valueType="option">
                <Button key="primary" size={'small'} type="link">
                    复制
                </Button>
            </ProDescriptions.Item>
            <ProDescriptions.Item
                span={2}
                valueType="text"
                contentStyle={{
                    maxWidth: '80%',
                }}
                renderText={(_) => {
                    return _ + _;
                }}
                ellipsis
                label="房间"
            >
                这是一段很长很长超级超级长的无意义说明文本并且重复了很多没有意义的词语，就是为了让它变得很长很长超级超级长
            </ProDescriptions.Item>
            <ProDescriptions.Item
                label="人数"
            >
                100
            </ProDescriptions.Item>
            <ProDescriptions.Item
                label="模组"
            >
                12
            </ProDescriptions.Item>
            <ProDescriptions.Item
                label="模式"
            >
                无尽
            </ProDescriptions.Item>
            <ProDescriptions.Item
                label="季节"
            >
                100 天 晚秋(1/20)
            </ProDescriptions.Item>
        </ProDescriptions>
    </>)
}