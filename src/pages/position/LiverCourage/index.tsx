import { FunctionComponent, useEffect, useState } from "react";
import { Tabs, Form, Button, message } from "antd";
import _ from "lodash";
import DynamicForm from "components/form";
import {
  left,
  right,
  gallbladder,
  liverRemark,
  gallbladderRemark,
  csts,
  jkjy,
} from "pages/formConfig/liverCourage";
import { submitType } from "../../../libs/types/formField";
import CompDoctorSign from "components/CompDoctorSign";
import styles from "./index.module.less";
const { TabPane } = Tabs;

const LiverCourage: FunctionComponent = () => {
  const [formLeft] = Form.useForm();
  const [formRight] = Form.useForm();
  const [formGallbladder] = Form.useForm();
  const [formLiverRemark] = Form.useForm();
  const [formGallbladderRemark] = Form.useForm();
  const [formCSTS] = Form.useForm();
  const [formJKJY] = Form.useForm();

  const [firstLevelActiveKey, setFirstLevelActiveKey] = useState("cssj");
  const [secondLevelActiveKey, setSecondLevelActiveKey] = useState("left");

  const [signImg, setSignImg] = useState();

  useEffect(() => {
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const normalData = {
    tabs: {
      left: {
        not_show: 2,
        size: 1,
        echo: 1,
        echo_uniformity: 1,
        intrahepatic_duct: 1,
        liver_capsule: 1,
        intrahepatic_blood_flow: 1,
        perihepatic_effusion: 2,
        exist_focus: 2,
      },
      right: {
        not_show: 2,
        size: 1,
        echo: 1,
        echo_uniformity: 1,
        intrahepatic_duct: 1,
        liver_capsule: 1,
        intrahepatic_blood_flow: 1,
        perihepatic_effusion: 2,
        exist_focus: 2,
      },
      gallbladder: {
        not_show: 2,
        size: 1,
        echo: 1,
        gall_wall: 1,
        exist_focus: 2,
      },
    },
    csts: [0],
    cs_tips: ["14"],
    health_proposal: 0,
  };

  const handler = (e: any) => {
    if (e.origin != "http://localhost:8000") return;
    console.log("mesFromReact", e?.data);
    const { type, data } = e?.data;
    if (type === "onekeyNormal") {
      formLeft.resetFields();
      formRight.resetFields();
      formGallbladder.resetFields();
      formLiverRemark.resetFields();
      formGallbladderRemark.resetFields();
      formCSTS.resetFields();
      formJKJY.resetFields();

      formLeft.setFieldsValue(normalData);
      formRight.setFieldsValue(normalData);
      formGallbladder.setFieldsValue(normalData);
      formCSTS.setFieldsValue(normalData);
      formJKJY.setFieldsValue(normalData);
      setFirstLevelActiveKey("ysqm");
    } else if (type === "getSignImg") {
      setSignImg(data?.url);
    }
  };

  function onFormLiverRemarkConfirm(...args: submitType) {
    const [value, suc, error] = args;
    console.log(value, suc, error);
    validateCSSJFields();
    suc();
  }

  function onFormGallbladderRemarkConfirm(...args: submitType) {
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
   * 所有校验通过通知父窗口预览报告
   */
  const validateCSSJFields = async () => {
    try {
      await formLeft.validateFields();
      try {
        await formRight.validateFields();
        try {
          await formGallbladder.validateFields();
          try {
            await formCSTS.validateFields();
            try {
              await formJKJY.validateFields();

              if (signImg) {
                const data = {};
                let { cs_tip_des, cs_tips } = formCSTS.getFieldsValue();
                cs_tips = cs_tips.filter((item: any) => !!item);

                _.merge(
                  data,
                  formLeft.getFieldsValue(),
                  formRight.getFieldsValue(),
                  formGallbladder.getFieldsValue(),
                  formLiverRemark.getFieldsValue(),
                  formGallbladderRemark.getFieldsValue(),
                  formJKJY.getFieldsValue(),
                  { cs_tip_des, cs_tips }
                );

                window.parent &&
                  window.parent.postMessage(
                    { type: "previewReport", data },
                    "*"
                  );
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
          setSecondLevelActiveKey("gallbladder");
        }
      } catch (error) {
        setFirstLevelActiveKey("cssj");
        setSecondLevelActiveKey("right");
      }
    } catch (error) {
      setFirstLevelActiveKey("cssj");
      setSecondLevelActiveKey("left");
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
        <CompDoctorSign
          signImg={signImg}
          signHandler={signHandler}
          onSubmit={previewReport}
        />
      ),
    },
  ];

  // 二级tab配置
  const secondTabs = [
    {
      key: "left",
      name: "肝脏左叶",
      render: (): React.ReactNode => <DynamicForm {...left} form={formLeft} />,
    },
    {
      key: "right",
      name: "肝脏右叶",
      render: (): React.ReactNode => (
        <DynamicForm {...right} form={formRight} />
      ),
    },
    {
      key: "gallbladder",
      name: "胆囊",
      render: (): React.ReactNode => (
        <DynamicForm {...gallbladder} form={formGallbladder} />
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
      {/* 超声所见下面的其他备注textarea 前2个tab共用，所以得单独抽出来 */}
      <div
        style={{
          display:
            isFirstLevel &&
            firstLevelActiveKey === "cssj" &&
            secondLevelActiveKey !== "gallbladder"
              ? "block"
              : "none",
        }}
      >
        <DynamicForm
          {...liverRemark}
          onSubmit={onFormLiverRemarkConfirm}
          form={formLiverRemark}
        />
      </div>
      {/* 胆囊其他备注表单 */}
      <div
        style={{
          display:
            isFirstLevel &&
            firstLevelActiveKey === "cssj" &&
            secondLevelActiveKey === "gallbladder"
              ? "block"
              : "none",
        }}
      >
        <DynamicForm
          {...gallbladderRemark}
          onSubmit={onFormGallbladderRemarkConfirm}
          form={formGallbladderRemark}
        />
      </div>
    </>
  );

  return <div className={styles.container}>{renderTab(firstTabs, true)}</div>;
};

export default LiverCourage;
