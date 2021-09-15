export interface aiProjectType {
  source_type: number;
  source_url_e: string;
  source_ai_url_e: string;
  source_instance: string;
  mask_source_instance: string;
  source_url: string;
  source_ai_url: string;
  position: number;
  data: string;
}

export interface aiChoiceType {
  source_url: string;
  position: number;
}

export type videoType = "source_url_e" | "source_ai_url_e";

export interface videoAuthType {
  PlayAuth: string;
  VideoMeta: {
    Status: string;
    VideoId: string;
    Title: string;
    CoverURL: string;
    Duration: number;
  };
}

export interface snapshotsType {
  exist_tuber: number | string;
  tab_type: number | string;
  tuber_num: number | string;
  tuber_size_x: number | string;
  tuber_size_y: number | string;
}
