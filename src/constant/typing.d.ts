declare namespace DEFINE {
  type tabSwitchTypes = {
    key: number;
    name: string;
    desc: string;
  };

  type radioListTypes = {
    label: string;
    value: number | string;
    txt?: string;
    key?: string;
  };

  type radioSeletTypes = {
    value: number | string;
    label?: string;
  };

  type healthTypes = {
    value: number;
    label: string;
    desc?: string;
  };

  export interface FormTypes {
    curformname: string;
  }

  type lineParamsTypes = {
    val?: string;
    txtGather: string[];
    chidren?: React.ReactNode;
  };
  export interface GlobalTyps {
    tabs: {
      left: any;
      right: any;
      gallbladder?: any;
      isthmus?: any;
    };
    cs_tip_des?: string;
    cs_tips?: string[];
    health_proposal?: number;
    health_proposal_des?: string;
    remark?: string;
    liver_remark?: string;
    gallbladder_remark?: string;
    commonTxtOne?: string;
    commonTxtTwo?: string;
    signNature?: boolean;
    cssj?: string;
    csts?: string;
  }
}
