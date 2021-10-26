import { FunctionComponent } from "react";
import { Tabs, Form, Button } from "antd";
import DynamicForm from "components/form";
import { left, right, isthmus, csts } from "pages/formConfig/thyroid";
import { submitType } from "../../../libs/types/formField";
import styles from "./index.module.less";
const { TabPane } = Tabs;

interface ThyroidProps {}

const Thyroid: FunctionComponent<ThyroidProps> = () => {
  const [formLeft] = Form.useForm();
  const [formRight] = Form.useForm();
  const [formIsthmus] = Form.useForm();
  const [formCSTS] = Form.useForm();

  function onFormLeftConfirm(...args: submitType) {
    const [value, suc, error] = args;
    console.log(value, suc, error);
    suc();
  }
  function onFormRightConfirm(...args: submitType) {
    const [value, suc, error] = args;
    console.log(value, suc, error);
    suc();
  }
  function onFormIsthmusConfirm(...args: submitType) {
    const [value, suc, error] = args;
    console.log(value, suc, error);
    suc();
  }

  function onFormCSTSConfirm(...args: submitType) {
    const [value, suc, error] = args;
    console.log(value, suc, error);
    suc();
  }

  const extraOperations = <Button type="primary">预览报告</Button>;

  // 一级tab配置
  const firstTabs = [
    {
      key: "cssj",
      name: "超声所见",
      render: (): React.ReactNode => renderTab(secondTabs),
    },
    {
      key: "csts",
      name: "超声提示",
      render: (): React.ReactNode => (
        <DynamicForm {...csts} onSubmit={onFormCSTSConfirm} form={formCSTS} />
      ),
    },
    {
      key: "jkjy",
      name: "健康建议",
    },
    {
      key: "ysqm",
      name: "医生签名",
    },
  ];

  // 二级tab配置
  const secondTabs = [
    {
      key: "left",
      name: "左侧",
      render: (): React.ReactNode => (
        <DynamicForm {...left} onSubmit={onFormLeftConfirm} form={formLeft} />
      ),
    },
    {
      key: "right",
      name: "右侧",
      render: (): React.ReactNode => (
        <DynamicForm
          {...right}
          onSubmit={onFormRightConfirm}
          form={formRight}
        />
      ),
    },
    {
      key: "isthmus",
      name: "峡部",
      render: (): React.ReactNode => (
        <DynamicForm
          {...isthmus}
          onSubmit={onFormIsthmusConfirm}
          form={formIsthmus}
        />
      ),
    },
  ];

  /**
   * 渲染tab
   * @param tabs tab配置文件
   * @param extraOperations 右上角按钮
   * @returns
   */
  const renderTab = (
    tabs: Array<{ name: string; key: string; render?: () => React.ReactNode }>,
    extraOperations?: React.ReactNode
  ): React.ReactNode => (
    <Tabs tabBarExtraContent={extraOperations} size="large">
      {tabs.map((tab) => (
        <TabPane tab={tab.name} key={tab.key} forceRender>
          {tab.render && tab.render()}
        </TabPane>
      ))}
    </Tabs>
  );

  return (
    <div className={styles.container}>
      {renderTab(firstTabs, extraOperations)}
    </div>
  );
};

export default Thyroid;
