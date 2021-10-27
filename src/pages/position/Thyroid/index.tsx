import { FunctionComponent, useState } from "react";
import { Tabs, Form, Button } from "antd";
import DynamicForm from "components/form";
import { left, right, isthmus, remark, csts } from "pages/formConfig/thyroid";
import { submitType } from "../../../libs/types/formField";
import styles from "./index.module.less";
const { TabPane } = Tabs;

interface ThyroidProps {}

const Thyroid: FunctionComponent<ThyroidProps> = () => {
  const [formLeft] = Form.useForm();
  const [formRight] = Form.useForm();
  const [formIsthmus] = Form.useForm();
  const [formRemark] = Form.useForm();
  const [formCSTS] = Form.useForm();

  const [firstLevelActiveKey, setFirstLevelActiveKey] = useState("cssj");
  const [secondLevelActiveKey, setSecondLevelActiveKey] = useState("left");

  async function onFormRemarkConfirm(...args: submitType) {
    const [value, suc, error] = args;
    console.log(value, suc, error);
    validateCSSJFields();
    suc();
  }
  function onFormCSTSConfirm(...args: submitType) {
    const [value, suc, error] = args;
    console.log(value, suc, error);
    suc();
  }

  /**
   * 超声所见校验器
   */
  const validateCSSJFields = async () => {
    try {
      await formLeft.validateFields();
      setSecondLevelActiveKey("right");
      await formRight.validateFields();
      setSecondLevelActiveKey("isthmus");
      await formIsthmus.validateFields();
      setFirstLevelActiveKey("csts");
    } catch (error) {}
  };

  /**
   * 预览报告
   */
  const previewReport = () => {
    // validateCSSJFields()
  };

  const extraOperations = (
    <Button type="primary" onClick={previewReport}>
      预览报告
    </Button>
  );

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
      render: (): React.ReactNode => <DynamicForm {...left} form={formLeft} />,
    },
    {
      key: "right",
      name: "右侧",
      render: (): React.ReactNode => (
        <DynamicForm {...right} form={formRight} />
      ),
    },
    {
      key: "isthmus",
      name: "峡部",
      render: (): React.ReactNode => (
        <DynamicForm {...isthmus} form={formIsthmus} />
      ),
    },
  ];

  /**
   * 渲染tab
   * @param tabs tab配置文件
   * @param isFirstLevel 是否是第一级tab
   * @returns
   */
  const renderTab = (
    tabs: Array<{ name: string; key: string; render?: () => React.ReactNode }>,
    isFirstLevel?: boolean
  ): React.ReactNode => (
    <>
      <Tabs
        onChange={
          isFirstLevel
            ? (activeKey) => setFirstLevelActiveKey(activeKey)
            : (activeKey) => setSecondLevelActiveKey(activeKey)
        }
        activeKey={isFirstLevel ? firstLevelActiveKey : secondLevelActiveKey}
        tabBarExtraContent={isFirstLevel && extraOperations}
        size="large"
      >
        {tabs.map((tab) => (
          <TabPane tab={tab.name} key={tab.key} forceRender>
            {tab.render && tab.render()}
          </TabPane>
        ))}
      </Tabs>
      {isFirstLevel && firstLevelActiveKey === "cssj" && (
        <DynamicForm
          {...remark}
          onSubmit={onFormRemarkConfirm}
          form={formRemark}
        />
      )}
    </>
  );

  return <div className={styles.container}>{renderTab(firstTabs, true)}</div>;
};

export default Thyroid;
