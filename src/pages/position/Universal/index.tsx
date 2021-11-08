import { FunctionComponent, useEffect, useState } from "react";
import { Tabs, Form, Button, message } from "antd";
import _ from "lodash";
import DynamicForm from "components/form";
import { cssj, csts, jkjy } from "pages/formConfig/universal";
import { submitType } from "../../../libs/types/formField";
import CompDoctorSign from "components/CompDoctorSign";
import styles from "./index.module.less";
const { TabPane } = Tabs;

const Universal: FunctionComponent = () => {
  const [formCSSJ] = Form.useForm();
  const [formCSTS] = Form.useForm();
  const [formJKJY] = Form.useForm();

  const [firstLevelActiveKey, setFirstLevelActiveKey] = useState("cssj");

  const [signImg, setSignImg] = useState();

  useEffect(() => {
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const handler = (e: any) => {
    // debugger
    // if (e.origin != "http://192.168.106.133:3000") return;
    console.log("mesFromReact", e?.data);
    const { type, data } = e?.data;
    if (type === "getSignImg") {
      setSignImg(data?.url);
    }
  };

  function onFormCSSJConfirm(...args: submitType) {
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
   * 校验器
   * 所有校验通过通知父窗口预览报告
   */
  const validateCSSJFields = async () => {
    try {
      await formCSSJ.validateFields();
      try {
        await formCSTS.validateFields();
        try {
          await formJKJY.validateFields();

          if (signImg) {
            const data = {};
            _.merge(
              data,
              formCSSJ.getFieldsValue(),
              formCSTS.getFieldsValue(),
              formJKJY.getFieldsValue()
            );
            window.parent &&
              window.parent.postMessage({ type: "previewReport", data }, "*");
          } else {
            message.warning("请先确认签名");
          }
          setFirstLevelActiveKey("ysqm");
        } catch (error) {
          setFirstLevelActiveKey("jkjy");
        }
      } catch (error) {
        setFirstLevelActiveKey("csts");
      }
    } catch (error) {
      setFirstLevelActiveKey("cssj");
    }
  };

  /**
   * 预览报告
   */
  const previewReport = () => {
    validateCSSJFields();
  };

  /**
   * 医师签名-获取签名
   */
  const signHandler = () => {
    window.parent && window.parent.postMessage({ type: "getSignImg" }, "*");
  };

  const extraOperations = (
    <Button type="primary" onClick={previewReport}>
      预览报告
    </Button>
  );
  const tabs = [
    {
      key: "cssj",
      name: "超声所见",
      render: (): React.ReactNode => (
        <DynamicForm {...cssj} onSubmit={onFormCSSJConfirm} form={formCSSJ} />
      ),
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
      render: (): React.ReactNode => (
        <DynamicForm {...jkjy} onSubmit={onFormJKJYConfirm} form={formJKJY} />
      ),
    },
    {
      key: "ysqm",
      name: "医生签名",
      render: (): React.ReactNode => (
        <CompDoctorSign
          signImg={signImg}
          signHandler={signHandler}
          onSubmit={previewReport}
        />
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
    tabs: Array<{ name: string; key: string; render?: () => React.ReactNode }>
  ): React.ReactNode => (
    <>
      <Tabs
        onChange={(activeKey) => setFirstLevelActiveKey(activeKey)}
        activeKey={firstLevelActiveKey}
        tabBarExtraContent={extraOperations}
        size="large"
      >
        {tabs.map((tab) => (
          <TabPane tab={tab.name} key={tab.key} forceRender>
            {tab.render && tab.render()}
          </TabPane>
        ))}
      </Tabs>
    </>
  );

  return <div className={styles.container}>{renderTab(tabs)}</div>;
};

export default Universal;
