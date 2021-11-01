import { FunctionComponent, useEffect, useState } from "react";
import { Tabs, Form, Button } from "antd";
import _ from "lodash";
import DynamicForm from "components/form";
import {
  left,
  right,
  isthmus,
  remark,
  csts,
  jkjy,
} from "pages/formConfig/thyroid";
import { submitType } from "../../../libs/types/formField";
import CompDoctorSign from "components/CompDoctorSign";
import styles from "./index.module.less";
const { TabPane } = Tabs;

interface ThyroidProps {}

const Thyroid: FunctionComponent<ThyroidProps> = () => {
  const [formLeft] = Form.useForm();
  const [formRight] = Form.useForm();
  const [formIsthmus] = Form.useForm();
  const [formRemark] = Form.useForm();
  const [formCSTS] = Form.useForm();
  const [formJKJY] = Form.useForm();

  const [firstLevelActiveKey, setFirstLevelActiveKey] = useState("cssj");
  const [secondLevelActiveKey, setSecondLevelActiveKey] = useState("left");

  useEffect(() => {
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const handler = (e: any) => {
    // if (e.origin != 'http://192.168.106.133:3000') return;
    console.log("mesFromReact", e?.data);
    const { type, data } = e?.data;
    if (type === "onekeyNormal") {
      formLeft.resetFields();
      formRight.resetFields();
      formIsthmus.resetFields();
      formRemark.resetFields();
      formCSTS.resetFields();
      formJKJY.resetFields();

      formLeft.setFieldsValue(data);
      formRight.setFieldsValue(data);
      formIsthmus.setFieldsValue(data);
      formCSTS.setFieldsValue(data);
      formJKJY.setFieldsValue(data);
      setFirstLevelActiveKey("ysqm");
    }
  };

  async function onFormRemarkConfirm(...args: submitType) {
    const [value, suc, error] = args;
    console.log(value, suc, error);
    validateCSSJFields();
    suc();
  }
  function onFormCSTSConfirm(...args: submitType) {
    const [value, suc, error] = args;
    console.log(value, suc, error);
    validateCSSJFields();
    suc();
  }

  function onFormJKJYConfirm(...args: submitType) {
    const [value, suc, error] = args;
    console.log(value, suc, error);
    validateCSSJFields();
    suc();
  }

  /**
   * 超声所见校验器
   */
  const validateCSSJFields = async () => {
    try {
      await formLeft.validateFields();
      try {
        await formRight.validateFields();
        try {
          await formIsthmus.validateFields();
          try {
            await formCSTS.validateFields();
            try {
              await formJKJY.validateFields();

              const data = {};
              let { cs_tip_des, cs_tips } = formCSTS.getFieldsValue();
              cs_tips = cs_tips.filter((item: any) => !!item);
              _.merge(
                data,
                formLeft.getFieldsValue(),
                formRight.getFieldsValue(),
                formIsthmus.getFieldsValue(),
                formRemark.getFieldsValue(),
                formJKJY.getFieldsValue(),
                { cs_tip_des, cs_tips }
              );

              window.parent &&
                window.parent.postMessage({ type: "previewReport", data }, "*");

              console.log(data);
            } catch (error) {
              setFirstLevelActiveKey("jkjy");
            }
          } catch (error) {
            setFirstLevelActiveKey("csts");
          }
        } catch (error) {
          setSecondLevelActiveKey("isthmus");
        }
      } catch (error) {
        setSecondLevelActiveKey("right");
      }
    } catch (error) {
      setSecondLevelActiveKey("left");
    }
  };

  /**
   * 预览报告
   */
  const previewReport = () => {
    validateCSSJFields();
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
        // <CompCsts form={formCSTS} type="1" />
        <DynamicForm {...csts} onSubmit={onFormCSTSConfirm} form={formCSTS} />
      ),
    },
    {
      key: "jkjy",
      name: "健康建议",
      render: (): React.ReactNode => (
        <DynamicForm {...jkjy} onSubmit={onFormJKJYConfirm} form={formJKJY} />
      ),
    },
    {
      key: "ysqm",
      name: "医生签名",
      render: (): React.ReactNode => (
        <CompDoctorSign onSubmit={previewReport} />
      ),
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
