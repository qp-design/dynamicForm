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
  id: number;
}

export interface aiChoiceType {
  source_url: string;
  position: number;
  id?: number;
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
  exist_tuber: number;
  tab_type: number;
  tuber_num: number;
  tuber_size_x: number;
  tuber_size_y: number;
  intimal_thickness: number;
  patch_echoes: number;
  patch_size_long: number;
  patch_size_thick: number;
  lumen_num: number;
}

// tab_type: 1
