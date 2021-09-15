// check_code: "R15951453239672"
// create_time: 1608089802
// report_url: "png/report/20210222161804186855.png"
// snapshot: "{\"basic\":{\"send_date\":\"2020-12-16 11:36:42\",\"patient_name\":\"小查玲玲123\",\"patient_gender\":\"男\",\"patient_age\":26,\"body_region\":\"甲状腺检查\",\"sources\":[\"http:\\/\\/swimg.soundwise-technology.com\\/image\\/20200719\\/202007191602535f13fe2d5dcbc.jpg\"],\"check_date\":\"2020-07-19\",\"org_name\":\"四川一洲肿瘤医院\",\"autograph\":\"http:\\/\\/swimg.soundwise-technology.com\\/diag\\/202006130122325ee3b9d80ccfe.jpg\"},\"region\":{\"left\":{\"tab_type\":\"左侧\",\"values\":[]},\"right\":{\"tab_type\":\"右侧\",\"values\":[]},\"isthmus\":{\"tab_type\":\"峡部\",\"values\":[]}},\"cssj_des\":\"\",\"cs_tip\":[\"甲状腺超声检查未见明显异常\"],\"health_proposal\":\"健康\",\"advice\":\"建议：定期(半年)进行健康体检，超声随访\",\"health_proposal_des\":\"\"}"
// urls: (4) [{…}, {…}, {…}, {…}]

// mask_source_instance: "202007191604065f13fe7612a9b.png"
// source_ai_url_auth: "http://outin-b7af6285150f11ecac9900163e1c7426.oss-cn-shanghai.aliyuncs.com/7b27f68b2d29459998a1a463bd47bdd4/snapshots/093ec7034a4349f78acba822d4728700-00001.jpg?Expires=1631680865&OSSAccessKeyId=LTAI8bKSZ6dKjf44&Signature=TDh6vRfeiioboP8GEAQLQpUJUgE%3D"
// source_ai_url_e: "7b27f68b2d29459998a1a463bd47bdd4"
// source_instance: "202007191602535f13fe2d5dcbc"
// source_type: 2
// source_url_auth: "http://outin-b7af6285150f11ecac9900163e1c7426.oss-cn-shanghai.aliyuncs.com/ce04108ed3ae491997013fbb4a5d165c/snapshots/f394ed7fb27b47ad8e67a1706454558e-00001.jpg?Expires=1631680865&OSSAccessKeyId=LTAI8bKSZ6dKjf44&Signature=z7VDG7TxSSoa5L6QDJu6ZNaG%2FUM%3D"
// source_url_e: "ce04108ed3ae491997013fbb4a5d165c"

export interface aiProjectType extends Promise<Response> {
  check_code: string;
  create_time: number;
  report_url: string;
  snapshot: string;
  urls: Array<any>;
}
