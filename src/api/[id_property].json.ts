export interface RootObject {
    "0":    The0;
    "1":    The1;
    "2":    The2;
    "3":    The0;
    "4":    The0;
    "5":    The2;
    "6":    The2;
    "7":    The2;
    "8":    The2;
    "9":    The0;
    status: string;
    total:  number;
   }
   
export interface The0 {
    address:                  string;
    area:                     string;
    availability_label:       string;
    bathrooms:                string;
    bedrooms:                 string;
    building_date:            string;
    built_area:               string;
    city_label:               string;
    comment:                  string;
    country_label:            string;
    created_at:               Date;
    featured:                 number;
    features:                 Features;
    floor:                    string;
    for_rent:                 string;
    for_sale:                 string;
    for_temporary_rent:       string;
    for_transfer:             string;
    galleries:                The0_Gallery[];
    garages:                  string;
    half_bathrooms:           number;
    id_availability:          string;
    id_city:                  number;
    id_company:               number;
    id_country:               number;
    id_currency:              number;
    id_label:                 string;
    id_location:              number;
    id_property:              number;
    id_property_condition:    string;
    id_property_type:         number;
    id_publish_on_map:        string;
    id_region:                number;
    id_rents_type:            string;
    id_status_on_page:        string;
    id_unit_area:             string;
    id_unit_built_area:       string;
    id_unit_private_area:     string;
    id_user:                  number;
    id_zone:                  number;
    iso_currency:             string;
    label:                    string;
    label_color:              string;
    latitude:                 string;
    link:                     string;
    location_label:           string;
    longitude:                string;
    main_image:               MainImage;
    maintenance_fee:          string;
    maintenance_fee_label:    string;
    map:                      string;
    name_currency:            string;
    network_share:            boolean;
    observations:             string;
    owner:                    string;
    private_area:             string;
    property_condition_label: string;
    publish_on_map_label:     string;
    reference:                string;
    region_label:             string;
    registration_number:      string;
    rent_price:               string;
    rent_price_label:         string;
    rents_type_label:         string;
    sale_price:               string;
    sale_price_label:         string;
    status_on_page_label:     string;
    stratum:                  string;
    title:                    string;
    tv_share:                 number;
    unit_area_label:          string;
    unit_built_area_label:    string;
    unit_private_area_label:  string;
    updated_at:               Date;
    url_360:                  string;
    user_data:                UserData;
    video:                    string;
    visits:                   number;
    zip_code:                 string;
    zone_label:               string;
   }
   
export interface Features {
    external: Ternal[];
    internal: Ternal[];
   }
   
export interface Ternal {
    id:     number;
    name:   string;
    nombre: string;
    own:    boolean;
   }
   
export interface The0_Gallery {
    "0":   MainImage;
    "1":   MainImage;
    "10"?: MainImage;
    "11"?: MainImage;
    "12"?: MainImage;
    "2":   MainImage;
    "3":   MainImage;
    "4":   MainImage;
    "5":   MainImage;
    "6":   MainImage;
    "7":   MainImage;
    "8":   MainImage;
    "9":   MainImage;
    id:    number;
   }
   
export interface MainImage {
    description:  string;
    filename:     string;
    id?:          number;
    id_gallery?:  number;
    id_image?:    number;
    position:     number;
    url:          string;
    url_big:      string;
    url_original: string;
   }
   
export interface UserData {
    first_name: FirstName;
    last_name:  LastName;
   }
   
export enum FirstName {
    Benilda = "Benilda",
    GraceGarcia = "Grace Garcia",
    MilagrosOrtiz = "Milagros Ortiz",
   }
   
export enum LastName {
    Asesor = "Asesor",
    Asesor2 = "Asesor2",
    Prada = "Prada",
   }
   
export interface The1 {
    address:                  string;
    area:                     string;
    availability_label:       string;
    bathrooms:                string;
    bedrooms:                 string;
    building_date:            string;
    built_area:               string;
    city_label:               string;
    comment:                  string;
    country_label:            string;
    created_at:               Date;
    featured:                 null;
    features:                 Features;
    floor:                    string;
    for_rent:                 string;
    for_sale:                 string;
    for_temporary_rent:       string;
    for_transfer:             string;
    galleries:                The1_Gallery[];
    garages:                  string;
    half_bathrooms:           number;
    id_availability:          string;
    id_city:                  number;
    id_company:               number;
    id_country:               number;
    id_currency:              number;
    id_label:                 string;
    id_location:              number;
    id_property:              number;
    id_property_condition:    string;
    id_property_type:         number;
    id_publish_on_map:        string;
    id_region:                number;
    id_rents_type:            string;
    id_status_on_page:        string;
    id_unit_area:             string;
    id_unit_built_area:       string;
    id_unit_private_area:     string;
    id_user:                  number;
    id_zone:                  number;
    iso_currency:             string;
    label:                    string;
    label_color:              string;
    latitude:                 string;
    link:                     string;
    location_label:           string;
    longitude:                string;
    main_image:               MainImage;
    maintenance_fee:          string;
    maintenance_fee_label:    string;
    map:                      string;
    name_currency:            string;
    network_share:            boolean;
    observations:             string;
    owner:                    string;
    private_area:             string;
    property_condition_label: string;
    publish_on_map_label:     string;
    reference:                string;
    region_label:             string;
    registration_number:      string;
    rent_price:               string;
    rent_price_label:         string;
    rents_type_label:         string;
    sale_price:               string;
    sale_price_label:         string;
    status_on_page_label:     string;
    stratum:                  string;
    title:                    string;
    tv_share:                 number;
    unit_area_label:          string;
    unit_built_area_label:    string;
    unit_private_area_label:  string;
    updated_at:               string;
    url_360:                  string;
    user_data:                UserData;
    video:                    string;
    visits:                   number;
    zip_code:                 string;
    zone_label:               string;
   }
   
export interface The1_Gallery {
    "0": MainImage;
    "1": MainImage;
    "2": MainImage;
    "3": MainImage;
    "4": MainImage;
    id:  number;
   }
   
export interface The2 {
    address:                  string;
    area:                     string;
    availability_label:       string;
    bathrooms:                string;
    bedrooms:                 string;
    building_date:            string;
    built_area:               string;
    city_label:               string;
    comment:                  string;
    country_label:            string;
    created_at:               Date;
    featured:                 number;
    features:                 Features;
    floor:                    string;
    for_rent:                 string;
    for_sale:                 string;
    for_temporary_rent:       string;
    for_transfer:             string;
    galleries:                The2_Gallery[];
    garages:                  string;
    half_bathrooms:           number;
    id_availability:          string;
    id_city:                  number;
    id_company:               number;
    id_country:               number;
    id_currency:              number;
    id_label:                 string;
    id_location:              number;
    id_property:              number;
    id_property_condition:    string;
    id_property_type:         number;
    id_publish_on_map:        string;
    id_region:                number;
    id_rents_type:            string;
    id_status_on_page:        string;
    id_unit_area:             string;
    id_unit_built_area:       string;
    id_unit_private_area:     string;
    id_user:                  number;
    id_zone:                  number;
    iso_currency:             string;
    label:                    string;
    label_color:              string;
    latitude:                 string;
    link:                     string;
    location_label:           string;
    longitude:                string;
    main_image:               MainImage;
    maintenance_fee:          string;
    maintenance_fee_label:    string;
    map:                      string;
    name_currency:            string;
    network_share:            boolean;
    observations:             string;
    owner:                    string;
    private_area:             string;
    property_condition_label: string;
    publish_on_map_label:     string;
    reference:                string;
    region_label:             string;
    registration_number:      string;
    rent_price:               string;
    rent_price_label:         string;
    rents_type_label:         string;
    sale_price:               string;
    sale_price_label:         string;
    status_on_page_label:     string;
    stratum:                  string;
    title:                    string;
    tv_share:                 number;
    unit_area_label:          string;
    unit_built_area_label:    string;
    unit_private_area_label:  string;
    updated_at:               Date;
    url_360:                  string;
    user_data:                UserData;
    video:                    string;
    visits:                   number;
    zip_code:                 string;
    zone_label:               string;
   }
   
export interface The2_Gallery {
    "0":   MainImage;
    "1":   MainImage;
    "10":  MainImage;
    "11":  MainImage;
    "12":  MainImage;
    "13":  MainImage;
    "14":  MainImage;
    "15":  MainImage;
    "16":  MainImage;
    "17":  MainImage;
    "18"?: MainImage;
    "19"?: MainImage;
    "2":   MainImage;
    "20"?: MainImage;
    "21"?: MainImage;
    "22"?: MainImage;
    "23"?: MainImage;
    "24"?: MainImage;
    "3":   MainImage;
    "4":   MainImage;
    "5":   MainImage;
    "6":   MainImage;
    "7":   MainImage;
    "8":   MainImage;
    "9":   MainImage;
    id:    number;
   }

export const prerender = true;